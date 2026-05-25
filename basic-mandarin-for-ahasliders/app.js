(function () {
  'use strict';

  const STORAGE_KEY = 'china-trip-progress-v1';
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  // ---------------- Storage ----------------

  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
        completedLessons: [],
        wordsStudied: 0,
        lastStudyDate: null,
        streak: 0,
      };
    } catch {
      return { completedLessons: [], wordsStudied: 0, lastStudyDate: null, streak: 0 };
    }
  }

  function saveProgress(p) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  }

  function markLessonDone(lessonId, wordsCount) {
    const p = loadProgress();
    if (!p.completedLessons.includes(lessonId)) {
      p.completedLessons.push(lessonId);
      p.wordsStudied += wordsCount;
    }
    const today = new Date().toISOString().slice(0, 10);
    if (p.lastStudyDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      p.streak = p.lastStudyDate === yesterday ? p.streak + 1 : 1;
      p.lastStudyDate = today;
    }
    saveProgress(p);
  }

  function resetProgress() {
    localStorage.removeItem(STORAGE_KEY);
  }

  // ---------------- Speech ----------------

  let voicesLoaded = false;
  let zhVoice = null;

  function loadVoices() {
    const voices = speechSynthesis.getVoices();
    zhVoice =
      voices.find(v => v.lang === 'zh-CN') ||
      voices.find(v => v.lang.startsWith('zh-CN')) ||
      voices.find(v => v.lang.startsWith('zh')) ||
      null;
    voicesLoaded = true;
  }

  if ('speechSynthesis' in window) {
    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;
  }

  function speak(text) {
    if (!('speechSynthesis' in window)) return;
    if (!voicesLoaded) loadVoices();
    speechSynthesis.cancel();
    // Strip pinyin & non-Hanzi for the spoken text
    const clean = text.replace(/[^一-鿿]/g, '');
    if (!clean) return;
    const u = new SpeechSynthesisUtterance(clean);
    u.lang = 'zh-CN';
    if (zhVoice) u.voice = zhVoice;
    u.rate = 0.85;
    u.pitch = 1;
    speechSynthesis.speak(u);
  }

  // ---------------- Routing ----------------

  const app = $('#app');
  const titleEl = $('#title');
  const backBtn = $('#back-btn');
  const cheatBtn = $('#cheatsheet-btn');

  function go(view) {
    window.scrollTo(0, 0);
    if (view === 'home') {
      renderHome();
      backBtn.hidden = true;
      titleEl.textContent = '10-Day China Trip';
      history.replaceState({ view: 'home' }, '', '#');
    } else if (view.startsWith('lesson-')) {
      const id = parseInt(view.split('-')[1], 10);
      renderLesson(id);
      backBtn.hidden = false;
      history.pushState({ view }, '', `#${view}`);
    } else if (view === 'cheatsheet') {
      renderCheatsheet();
      backBtn.hidden = false;
      titleEl.textContent = 'Cheat Sheet';
      history.pushState({ view }, '', '#cheatsheet');
    }
  }

  backBtn.addEventListener('click', () => go('home'));
  cheatBtn.addEventListener('click', () => go('cheatsheet'));
  window.addEventListener('popstate', e => {
    const v = (e.state && e.state.view) || 'home';
    if (v === 'home') {
      renderHome();
      backBtn.hidden = true;
    } else if (v === 'cheatsheet') {
      renderCheatsheet();
      backBtn.hidden = false;
    } else if (v.startsWith('lesson-')) {
      renderLesson(parseInt(v.split('-')[1], 10));
      backBtn.hidden = false;
    }
  });

  // ---------------- Home ----------------

  function daysUntilTrip() {
    const now = new Date();
    const trip = new Date(TRIP_DATE + 'T00:00:00');
    const ms = trip - new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.ceil(ms / 86400000);
  }

  function renderHome() {
    const tpl = $('#tpl-home').content.cloneNode(true);
    app.replaceChildren(tpl);

    const p = loadProgress();
    $('#days-left').textContent = Math.max(0, daysUntilTrip());
    $('#words-learned').textContent = p.wordsStudied;
    $('#streak').textContent = p.streak;

    const list = $('#lesson-list');
    LESSONS.forEach(lesson => {
      const done = p.completedLessons.includes(lesson.id);
      const li = document.createElement('li');
      li.className = 'lesson-card' + (done ? ' done' : '');
      li.innerHTML = `
        <div class="day-num"><small>Day</small>${lesson.id}</div>
        <div class="meta">
          <h4>${escapeHtml(lesson.title)}</h4>
          <p>${escapeHtml(lesson.subtitle)}</p>
        </div>
        ${done ? '<div class="check">✓</div>' : ''}
      `;
      li.addEventListener('click', () => go('lesson-' + lesson.id));
      list.appendChild(li);
    });

    $('#reset-btn').addEventListener('click', () => {
      if (confirm('Reset all progress?')) {
        resetProgress();
        renderHome();
      }
    });
  }

  // ---------------- Lesson ----------------

  // Build the steps array for a lesson: [intro?, ...vocab, ...quiz, done]
  function buildSteps(lesson) {
    const steps = [];
    if (lesson.intro) steps.push({ type: 'intro', data: lesson.intro });
    lesson.vocab.forEach((v, i) =>
      steps.push({ type: 'vocab', data: v, index: i, total: lesson.vocab.length })
    );
    // Generate ~4 quiz questions from vocab
    const quizCount = Math.min(4, lesson.vocab.length);
    const pool = shuffle([...lesson.vocab]).slice(0, quizCount);
    pool.forEach(item => steps.push({ type: 'quiz', data: item, vocab: lesson.vocab }));
    steps.push({ type: 'done' });
    return steps;
  }

  function renderLesson(lessonId) {
    const lesson = LESSONS.find(l => l.id === lessonId);
    if (!lesson) return go('home');

    const tpl = $('#tpl-lesson').content.cloneNode(true);
    app.replaceChildren(tpl);
    titleEl.textContent = `Day ${lesson.id}`;

    $('#day-pill').textContent = `Day ${lesson.id} of 10`;
    $('#lesson-title').textContent = lesson.title;
    $('#lesson-sub').textContent = lesson.subtitle;

    const steps = buildSteps(lesson);
    let idx = 0;
    let quizState = { asked: 0, correct: 0 };

    const dots = $('#progress-dots');
    steps.forEach(() => dots.appendChild(document.createElement('span')));

    function renderStep() {
      const body = $('#lesson-body');
      const step = steps[idx];
      $$('span', dots).forEach((d, i) => {
        d.classList.toggle('active', i === idx);
        d.classList.toggle('done', i < idx);
      });

      $('#prev-step').disabled = idx === 0;
      const nextBtn = $('#next-step');
      nextBtn.disabled = false;
      nextBtn.textContent = idx === steps.length - 1 ? 'Done' : 'Next →';

      if (step.type === 'intro') {
        body.innerHTML = renderIntro(step.data);
      } else if (step.type === 'vocab') {
        body.innerHTML = renderVocab(step.data, step.index, step.total);
        wireSpeakers(body);
        // Auto-pronounce
        speak(step.data.hanzi);
      } else if (step.type === 'quiz') {
        body.innerHTML = renderQuiz(step.data, step.vocab, idx);
        nextBtn.disabled = true;
        wireQuiz(body, step.data, nextBtn, quizState);
      } else if (step.type === 'done') {
        markLessonDone(lesson.id, lesson.vocab.length);
        const pct = quizState.asked === 0 ? 100 : Math.round((quizState.correct / quizState.asked) * 100);
        body.innerHTML = `
          <div class="done-card">
            <div class="icon">🎉</div>
            <h3>Day ${lesson.id} complete!</h3>
            <p>Bạn vừa học ${lesson.vocab.length} từ mới.</p>
            <div class="score">Quiz: <strong>${quizState.correct}/${quizState.asked}</strong> (${pct}%)</div>
            <button class="primary-btn" id="back-home">← Back to plan</button>
          </div>
        `;
        $('#back-home').addEventListener('click', () => go('home'));
        nextBtn.disabled = true;
        nextBtn.textContent = '✓';
      }
    }

    $('#prev-step').addEventListener('click', () => {
      if (idx > 0) { idx--; renderStep(); }
    });
    $('#next-step').addEventListener('click', () => {
      if (idx < steps.length - 1) { idx++; renderStep(); }
    });

    renderStep();
  }

  function renderIntro(intro) {
    let html = `<div class="intro-block"><h3>${intro.heading}</h3>`;
    intro.body.forEach(p => { html += `<p>${p}</p>`; });
    if (intro.tones) {
      html += `<div class="tones-table">`;
      intro.tones.forEach(t => {
        html += `<div class="hanzi">${t.hanzi}</div><div class="vn">${t.vn}</div><div>${t.sym}</div>`;
      });
      html += `</div>`;
    }
    if (intro.outro) html += `<p>${intro.outro}</p>`;
    html += `</div>`;
    return html;
  }

  function renderVocab(v, i, total) {
    return `
      <div class="vocab-card">
        <div class="vocab-counter">${i + 1} / ${total}</div>
        <div class="hanzi" data-speak="${escapeAttr(v.hanzi)}">${escapeHtml(v.hanzi)}</div>
        <span class="speaker-hint">🔊 tap to hear</span>
        <div class="pinyin">${escapeHtml(v.pinyin)}</div>
        <div class="english">${escapeHtml(v.en)}</div>
        <div class="vietnamese">${escapeHtml(v.vn)}</div>
        ${v.hv ? `<div class="hv-block"><span class="hv-pill">HV</span>${v.hv}</div>` : ''}
        ${v.note ? `<div class="note"><strong>Note:</strong> ${v.note}</div>` : ''}
      </div>
    `;
  }

  function renderQuiz(item, pool, seed) {
    // Alternate question style: hanzi→meaning vs meaning→hanzi
    const showHanziPrompt = seed % 2 === 0;
    const distractors = shuffle(pool.filter(v => v.hanzi !== item.hanzi)).slice(0, 3);
    const options = shuffle([item, ...distractors]);

    let promptHtml;
    if (showHanziPrompt) {
      promptHtml = `
        <p class="quiz-q">What does this mean?</p>
        <div class="quiz-prompt" data-speak="${escapeAttr(item.hanzi)}">${escapeHtml(item.hanzi)}</div>
        <div class="quiz-prompt-pinyin">${escapeHtml(item.pinyin)}</div>
      `;
    } else {
      promptHtml = `
        <p class="quiz-q">Which is "${escapeHtml(item.en)}"?</p>
        <div class="quiz-prompt text-prompt">${escapeHtml(item.vn)}</div>
      `;
    }

    const optHtml = options
      .map(o => {
        const label = showHanziPrompt
          ? `<strong>${escapeHtml(o.en)}</strong> — <span style="color:var(--ink-soft)">${escapeHtml(o.vn)}</span>`
          : `<span style="font-family:'Noto Sans SC',sans-serif;font-size:18px">${escapeHtml(o.hanzi)}</span> <span style="color:var(--accent);font-size:13px;margin-left:6px">${escapeHtml(o.pinyin)}</span>`;
        return `<button class="quiz-opt" data-hanzi="${escapeAttr(o.hanzi)}">${label}</button>`;
      })
      .join('');

    return `
      <div class="quiz-card">
        ${promptHtml}
        <div class="quiz-options">${optHtml}</div>
        <div class="quiz-feedback" aria-live="polite"></div>
      </div>
    `;
  }

  function wireQuiz(root, item, nextBtn, quizState) {
    quizState.asked++;
    $$('.quiz-opt', root).forEach(btn => {
      btn.addEventListener('click', () => {
        const isRight = btn.dataset.hanzi === item.hanzi;
        if (isRight) {
          btn.classList.add('correct');
          $('.quiz-feedback', root).textContent = '✓ Correct!';
          quizState.correct++;
          speak(item.hanzi);
        } else {
          btn.classList.add('wrong');
          $$('.quiz-opt', root).forEach(b => {
            if (b.dataset.hanzi === item.hanzi) b.classList.add('correct');
          });
          $('.quiz-feedback', root).innerHTML = `The answer was <strong>${escapeHtml(item.hanzi)}</strong> (${escapeHtml(item.pinyin)}) — ${escapeHtml(item.en)}.`;
        }
        $$('.quiz-opt', root).forEach(b => { b.disabled = true; });
        nextBtn.disabled = false;
      });
    });
    wireSpeakers(root);
  }

  function wireSpeakers(root) {
    $$('[data-speak]', root).forEach(el => {
      el.addEventListener('click', () => speak(el.dataset.speak));
    });
  }

  // ---------------- Cheat sheet ----------------

  function renderCheatsheet() {
    const tpl = $('#tpl-cheatsheet').content.cloneNode(true);
    app.replaceChildren(tpl);

    // Build lookup: hanzi → vocab item
    const vocabByHanzi = {};
    LESSONS.forEach(l => l.vocab.forEach(v => { vocabByHanzi[v.hanzi] = v; }));

    const body = $('#cheat-body');
    CHEAT_GROUPS.forEach(group => {
      const section = document.createElement('div');
      section.className = 'cheat-section';
      section.innerHTML = `<h3>${escapeHtml(group.title)}</h3>`;
      group.pick.forEach(hanzi => {
        const v = vocabByHanzi[hanzi];
        if (!v) return;
        const row = document.createElement('div');
        row.className = 'cheat-row';
        row.innerHTML = `
          <div class="cn">
            <span class="hanzi" data-speak="${escapeAttr(v.hanzi)}">${escapeHtml(v.hanzi)}</span>
            <span class="pinyin">${escapeHtml(v.pinyin)}</span>
          </div>
          <div class="meaning">
            <span class="en">${escapeHtml(v.en)}</span>
            <span class="vn">${escapeHtml(v.vn)}</span>
          </div>
        `;
        section.appendChild(row);
      });
      body.appendChild(section);
    });

    wireSpeakers(body);
  }

  // ---------------- Utils ----------------

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function escapeAttr(s) { return escapeHtml(s); }

  // ---------------- Boot ----------------

  const initial = (location.hash || '').replace('#', '');
  if (initial.startsWith('lesson-')) {
    go(initial);
  } else if (initial === 'cheatsheet') {
    go('cheatsheet');
  } else {
    go('home');
  }
})();
