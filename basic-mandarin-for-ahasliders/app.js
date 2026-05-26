(function () {
  'use strict';

  // ---------------- Config ----------------

  const CONFIG = (window.APP_CONFIG && typeof window.APP_CONFIG === 'object')
    ? window.APP_CONFIG
    : { mode: 'local' };

  const POLL_INTERVAL_MS = 25000;

  const LEARNER_KEY = 'china-trip-learner-v1';
  const OLD_PROGRESS_KEY = 'china-trip-progress-v1';

  const AVATAR_STYLES = [
    { id: 'lorelei',         label: '🙂 Faces' },
    { id: 'fun-emoji',       label: '😀 Emoji' },
    { id: 'bottts-neutral',  label: '🤖 Bots'  },
    { id: 'adventurer',      label: '🧑‍🚀 People' },
    { id: 'big-smile',       label: '😄 Smile' },
  ];

  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  // ---------------- Local learner state ----------------

  function loadLearner() {
    try {
      const raw = localStorage.getItem(LEARNER_KEY);
      if (raw) return JSON.parse(raw);
    } catch {}
    // Migrate from old progress-only key if present
    try {
      const old = JSON.parse(localStorage.getItem(OLD_PROGRESS_KEY) || 'null');
      if (old && typeof old === 'object') {
        return {
          _migrationPending: true,
          completedLessons: old.completedLessons || [],
          wordsStudied: old.wordsStudied || 0,
          streak: old.streak || 0,
          lastStudyDate: old.lastStudyDate || null,
        };
      }
    } catch {}
    return null;
  }

  function saveLearner(l) {
    localStorage.setItem(LEARNER_KEY, JSON.stringify(l));
  }

  function genId() {
    if (crypto && crypto.randomUUID) return crypto.randomUUID();
    return 'x' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
  }

  function newLearner({ nickname, avatarStyle, avatarSeed, existing }) {
    return {
      id: (existing && existing.id) || genId(),
      nickname: nickname.trim(),
      avatarStyle,
      avatarSeed,
      completedLessons: (existing && existing.completedLessons) || [],
      wordsStudied: (existing && existing.wordsStudied) || 0,
      streak: (existing && existing.streak) || 0,
      lastStudyDate: (existing && existing.lastStudyDate) || null,
      updatedAt: Date.now(),
    };
  }

  function markLessonDone(lessonId, wordsCount) {
    const l = loadLearner();
    if (!l || !l.id) return;
    if (!l.completedLessons.includes(lessonId)) {
      l.completedLessons.push(lessonId);
      l.wordsStudied += wordsCount;
    }
    const today = new Date().toISOString().slice(0, 10);
    if (l.lastStudyDate !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      l.streak = l.lastStudyDate === yesterday ? l.streak + 1 : 1;
      l.lastStudyDate = today;
    }
    l.updatedAt = Date.now();
    saveLearner(l);
    pushRemote(l);
  }

  // ---------------- Remote sync (Firebase Realtime Database via REST) ----------------

  function remoteUrl(path) {
    if (CONFIG.mode !== 'firebase' || !CONFIG.databaseURL) return null;
    const base = CONFIG.databaseURL.replace(/\/$/, '');
    return `${base}/${path}.json`;
  }

  let remoteCache = null;

  async function fetchRemote() {
    const url = remoteUrl('learners');
    if (!url) return {};
    try {
      const res = await fetch(url, { method: 'GET' });
      if (res.status === 404) return {};
      if (!res.ok) throw new Error('GET ' + res.status);
      const data = await res.json();
      remoteCache = (data && typeof data === 'object') ? data : {};
      return remoteCache;
    } catch (e) {
      console.warn('Leaderboard fetch failed:', e.message);
      return remoteCache || {};
    }
  }

  async function pushRemote(learner) {
    const url = remoteUrl(`learners/${learner.id}`);
    if (!url) return;
    try {
      await fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(stripLearnerForRemote(learner)),
      });
      if (remoteCache) remoteCache[learner.id] = stripLearnerForRemote(learner);
    } catch (e) {
      console.warn('Leaderboard push failed:', e.message);
    }
  }

  function stripLearnerForRemote(l) {
    return {
      id: l.id,
      nickname: l.nickname,
      avatarStyle: l.avatarStyle,
      avatarSeed: l.avatarSeed,
      completedLessons: l.completedLessons,
      wordsStudied: l.wordsStudied,
      streak: l.streak,
      lastStudyDate: l.lastStudyDate,
      updatedAt: l.updatedAt,
    };
  }

  // ---------------- Avatars ----------------

  function avatarUrl(style, seed, size = 80) {
    const s = encodeURIComponent(seed || 'default');
    return `https://api.dicebear.com/9.x/${style}/svg?seed=${s}&size=${size}`;
  }

  function randSeed() {
    const words = ['fox','tiger','panda','dragon','pho','bun','jade','silk','star','moon','river','peak','phoenix','sparrow','lotus','ginger','wind','cloud','bao','linh'];
    return words[Math.floor(Math.random() * words.length)] + '-' + Math.floor(Math.random() * 9999);
  }

  // ---------------- Speech ----------------

  let zhVoice = null;
  function loadVoices() {
    const voices = speechSynthesis.getVoices();
    zhVoice =
      voices.find(v => v.lang === 'zh-CN') ||
      voices.find(v => v.lang.startsWith('zh-CN')) ||
      voices.find(v => v.lang.startsWith('zh')) ||
      null;
  }
  if ('speechSynthesis' in window) {
    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;
  }
  function speak(text) {
    if (!('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    const clean = text.replace(/[^一-鿿]/g, '');
    if (!clean) return;
    const u = new SpeechSynthesisUtterance(clean);
    u.lang = 'zh-CN';
    if (zhVoice) u.voice = zhVoice;
    u.rate = 0.85;
    speechSynthesis.speak(u);
  }

  // ---------------- Routing ----------------

  const app      = $('#app');
  const titleEl  = $('#title');
  const backBtn  = $('#back-btn');
  const cheatBtn = $('#cheatsheet-btn');

  let homePollHandle = null;

  function clearHomePoll() {
    if (homePollHandle) { clearInterval(homePollHandle); homePollHandle = null; }
  }

  function go(view) {
    window.scrollTo(0, 0);
    clearHomePoll();
    if (view === 'home') {
      renderHome();
      backBtn.hidden = true;
      titleEl.textContent = 'Quick Mandarin for AhaSlides';
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
    if (v === 'home')                  { renderHome(); backBtn.hidden = true; }
    else if (v === 'cheatsheet')       { renderCheatsheet(); backBtn.hidden = false; }
    else if (v.startsWith('lesson-'))  { renderLesson(parseInt(v.split('-')[1], 10)); backBtn.hidden = false; }
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

    const learner = loadLearner();
    if (!learner || !learner.id) {
      showOnboarding({ edit: false, migrationData: learner || null });
      return;
    }

    $('#hero-name').textContent = learner.nickname;
    $('#hero-avatar').style.backgroundImage = `url("${avatarUrl(learner.avatarStyle, learner.avatarSeed, 120)}")`;
    $('#profile-chip').addEventListener('click', () => showOnboarding({ edit: true }));

    $('#days-left').textContent = Math.max(0, daysUntilTrip());
    $('#words-learned').textContent = learner.wordsStudied;
    $('#streak').textContent = learner.streak;

    const list = $('#lesson-list');
    LESSONS.forEach(lesson => {
      const done = learner.completedLessons.includes(lesson.id);
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
      if (confirm('Reset your progress? Your nickname & avatar stay; words & streak reset.')) {
        const l = loadLearner();
        l.completedLessons = [];
        l.wordsStudied = 0;
        l.streak = 0;
        l.lastStudyDate = null;
        l.updatedAt = Date.now();
        saveLearner(l);
        pushRemote(l);
        renderHome();
      }
    });

    refreshLeaderboard(learner);
    if (CONFIG.mode === 'shared') {
      homePollHandle = setInterval(() => refreshLeaderboard(learner), POLL_INTERVAL_MS);
    }
  }

  async function refreshLeaderboard(currentLearner) {
    const el = $('#leaderboard');
    const status = $('#learners-status');
    if (!el) return;

    if (CONFIG.mode !== 'shared') {
      status.textContent = 'local mode';
      el.innerHTML = renderLeaderboardRows([currentLearner], currentLearner.id);
      return;
    }

    status.textContent = 'syncing…';
    const data = await fetchRemote();
    if (!data[currentLearner.id]) data[currentLearner.id] = stripLearnerForRemote(currentLearner);
    const learners = Object.values(data);
    status.textContent = `${learners.length} learner${learners.length === 1 ? '' : 's'}`;
    el.innerHTML = renderLeaderboardRows(learners, currentLearner.id);
  }

  function renderLeaderboardRows(learners, currentId) {
    if (!learners.length) {
      return `<div class="leaderboard-empty">Bạn là người đầu tiên! Mời bạn bè vào học cùng nhé 🎉</div>`;
    }
    const sorted = learners.slice().sort((a, b) => {
      if (b.wordsStudied !== a.wordsStudied) return b.wordsStudied - a.wordsStudied;
      return (b.streak || 0) - (a.streak || 0);
    });
    return sorted.map((l, i) => {
      const rank = i + 1;
      const medalClass = rank <= 3 ? `medal-${rank}` : '';
      const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : rank;
      const isYou = l.id === currentId;
      const lessonsDone = (l.completedLessons || []).length;
      return `
        <div class="leaderboard-row${isYou ? ' you' : ''}">
          <div class="lb-rank ${medalClass}">${medal}</div>
          <div class="lb-avatar" style="background-image:url('${avatarUrl(l.avatarStyle, l.avatarSeed, 80)}')"></div>
          <div class="lb-info">
            <div class="lb-name">
              ${escapeHtml(l.nickname || 'Anonymous')}
              ${isYou ? '<span class="you-tag">YOU</span>' : ''}
            </div>
            <div class="lb-stats">
              Day ${lessonsDone}/10
              <span class="sep">·</span>
              ${l.streak || 0}🔥
            </div>
          </div>
          <div class="lb-right">${l.wordsStudied || 0}<small>words</small></div>
        </div>
      `;
    }).join('');
  }

  // ---------------- Onboarding ----------------

  function showOnboarding({ edit, migrationData }) {
    const existing = edit ? loadLearner() : (migrationData || null);
    const tpl = $('#tpl-onboarding').content.cloneNode(true);
    document.body.appendChild(tpl);
    const root = $('.onboarding-backdrop');

    if (edit) {
      $('#onb-title').textContent = 'Edit your profile';
      $('#onb-sub').textContent  = 'Đổi tên hoặc avatar — tiến độ của bạn không đổi.';
      $('#onb-submit').textContent = 'Save changes';
      $('#onb-cancel').hidden = false;
      $('#onb-nickname').value = (existing && existing.nickname) || '';
    }

    let activeStyle = (existing && existing.avatarStyle) || AVATAR_STYLES[0].id;
    let seeds = generateSeeds();
    let selectedSeed = (existing && existing.avatarSeed) || null;
    if (selectedSeed && !seeds.includes(selectedSeed)) seeds[0] = selectedSeed;

    const stylesEl = $('#onb-styles');
    AVATAR_STYLES.forEach(s => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'onb-style-tab' + (s.id === activeStyle ? ' active' : '');
      b.textContent = s.label;
      b.addEventListener('click', () => {
        activeStyle = s.id;
        $$('.onb-style-tab', stylesEl).forEach(x => x.classList.toggle('active', x === b));
        seeds = generateSeeds();
        selectedSeed = null;
        paintAvatars();
        updateSubmit();
      });
      stylesEl.appendChild(b);
    });

    function generateSeeds() {
      const out = [];
      for (let i = 0; i < 8; i++) out.push(randSeed());
      return out;
    }

    function paintAvatars() {
      const grid = $('#onb-avatars');
      grid.innerHTML = '';
      seeds.forEach(seed => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'onb-avatar-btn' + (seed === selectedSeed ? ' selected' : '');
        btn.dataset.seed = seed;
        const img = document.createElement('img');
        img.src = avatarUrl(activeStyle, seed, 120);
        img.alt = '';
        img.loading = 'lazy';
        btn.appendChild(img);
        btn.addEventListener('click', () => {
          selectedSeed = seed;
          $$('.onb-avatar-btn', grid).forEach(x =>
            x.classList.toggle('selected', x.dataset.seed === seed)
          );
          updateSubmit();
        });
        grid.appendChild(btn);
      });
    }

    function updateSubmit() {
      const nick = $('#onb-nickname').value.trim();
      $('#onb-submit').disabled = !(nick.length > 0 && selectedSeed);
    }

    paintAvatars();
    updateSubmit();

    $('#onb-nickname').addEventListener('input', updateSubmit);
    $('#onb-shuffle').addEventListener('click', () => {
      seeds = generateSeeds();
      selectedSeed = null;
      paintAvatars();
      updateSubmit();
    });

    $('#onb-cancel').addEventListener('click', () => root.remove());

    $('#onb-submit').addEventListener('click', () => {
      const nickname = $('#onb-nickname').value.trim();
      if (!nickname || !selectedSeed) return;
      const learner = newLearner({
        nickname,
        avatarStyle: activeStyle,
        avatarSeed: selectedSeed,
        existing,
      });
      saveLearner(learner);
      // Clean up the old key now that we've migrated.
      try { localStorage.removeItem(OLD_PROGRESS_KEY); } catch {}
      pushRemote(learner);
      root.remove();
      renderHome();
    });

    setTimeout(() => $('#onb-nickname').focus(), 50);
  }

  // ---------------- Lesson stepper ----------------

  function buildSteps(lesson) {
    const steps = [];
    if (lesson.intro) steps.push({ type: 'intro', data: lesson.intro });
    lesson.vocab.forEach((v, i) =>
      steps.push({ type: 'vocab', data: v, index: i, total: lesson.vocab.length })
    );
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
    const quizState = { asked: 0, correct: 0 };

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

    $('#prev-step').addEventListener('click', () => { if (idx > 0) { idx--; renderStep(); } });
    $('#next-step').addEventListener('click', () => { if (idx < steps.length - 1) { idx++; renderStep(); } });
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
        ${v.hv   ? `<div class="hv-block"><span class="hv-pill">HV</span>${v.hv}</div>` : ''}
        ${v.note ? `<div class="note"><strong>Note:</strong> ${v.note}</div>` : ''}
      </div>
    `;
  }

  function renderQuiz(item, pool, seed) {
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

    const optHtml = options.map(o => {
      const label = showHanziPrompt
        ? `<strong>${escapeHtml(o.en)}</strong> — <span style="color:var(--ink-soft)">${escapeHtml(o.vn)}</span>`
        : `<span style="font-family:'Noto Sans SC',sans-serif;font-size:18px">${escapeHtml(o.hanzi)}</span> <span style="color:var(--accent);font-size:13px;margin-left:6px">${escapeHtml(o.pinyin)}</span>`;
      return `<button class="quiz-opt" data-hanzi="${escapeAttr(o.hanzi)}">${label}</button>`;
    }).join('');

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
  const escapeAttr = escapeHtml;

  // ---------------- Boot ----------------

  const initial = (location.hash || '').replace('#', '');
  if (initial.startsWith('lesson-'))      go(initial);
  else if (initial === 'cheatsheet')      go('cheatsheet');
  else                                    go('home');
})();
