// 10-day practical Chinese curriculum for a Vietnamese+English speaker going to China.
// HV = Hán Việt (Sino-Vietnamese) cognate. Use it when the Vietnamese word
// shares the same Chinese root and helps memory.

const TRIP_DATE = '2026-06-04';

const LESSONS = [
  // ───────────────────── DAY 1 ─────────────────────
  {
    id: 1,
    title: 'Survival Greetings + Tones',
    subtitle: 'Chào hỏi cơ bản & hệ thống thanh điệu',
    intro: {
      heading: 'Tones: your Vietnamese advantage 🎯',
      body: [
        'Mandarin has 4 tones + 1 neutral. Good news: <strong>tiếng Việt cũng có thanh điệu</strong>, so your ear is already trained.',
        'Same syllable, different tone = totally different word. <strong>mā</strong> (mẹ) vs <strong>mǎ</strong> (ngựa) vs <strong>mà</strong> (mắng).',
      ],
      tones: [
        { hanzi: 'mā', sym: '¯', vn: 'Cao, phẳng — như "ma" trong tiếng Việt (không dấu, kéo dài và cao đều)' },
        { hanzi: 'má', sym: '/', vn: 'Đi lên — gần giống dấu <strong>sắc</strong> nhưng kéo dài hơn (như hỏi "má?")' },
        { hanzi: 'mǎ', sym: 'v', vn: 'Xuống rồi lên — gần giống dấu <strong>hỏi</strong> (mả)' },
        { hanzi: 'mà', sym: '\\', vn: 'Rơi mạnh xuống — như dấu <strong>nặng</strong>, dứt khoát (mạ!)' },
        { hanzi: 'ma', sym: '·', vn: 'Trung tính — nhẹ, không nhấn, như chữ cuối câu ("…rồi đấy")' },
      ],
      outro: 'Mỗi khi học từ mới, đọc cả <em>thanh điệu</em>. Bỏ thanh = nói sai từ.',
    },
    vocab: [
      { hanzi: '你好', pinyin: 'nǐ hǎo', en: 'Hello', vn: 'Xin chào', hv: 'HV: <strong>nễ hảo</strong> (ngươi + tốt). Câu chào "vạn năng".' },
      { hanzi: '谢谢', pinyin: 'xièxie', en: 'Thank you', vn: 'Cảm ơn', hv: 'HV: <strong>tạ tạ</strong> — đúng chữ "tạ" trong "cảm tạ".' },
      { hanzi: '不客气', pinyin: 'bú kèqi', en: "You're welcome", vn: 'Không có gì', hv: 'HV: <strong>bất khách khí</strong> — "đừng khách sáo".' },
      { hanzi: '对不起', pinyin: 'duìbuqǐ', en: 'Sorry', vn: 'Xin lỗi', hv: 'HV: <strong>đối bất khởi</strong> — "không dám đối diện".' },
      { hanzi: '没关系', pinyin: 'méi guānxi', en: "It's okay / No problem", vn: 'Không sao', hv: 'HV: <strong>một quan hệ</strong> — "chẳng liên quan / không sao".' },
      { hanzi: '再见', pinyin: 'zàijiàn', en: 'Goodbye', vn: 'Tạm biệt', hv: 'HV: <strong>tái kiến</strong> — "gặp lại".' },
      { hanzi: '是', pinyin: 'shì', en: 'Yes / to be', vn: 'Phải / là', hv: 'HV: <strong>thị</strong> (như trong "thị trấn"… nghĩa khác nhưng đồng âm).' },
      { hanzi: '不是', pinyin: 'bú shì', en: 'No / is not', vn: 'Không phải', hv: 'HV: <strong>bất thị</strong>. 不 (bù) = không.' },
      { hanzi: '请', pinyin: 'qǐng', en: 'Please / invite', vn: 'Xin / mời', hv: 'HV: <strong>thỉnh</strong> (như "thỉnh cầu").' },
      { hanzi: '我', pinyin: 'wǒ', en: 'I / me', vn: 'Tôi', hv: 'HV: <strong>ngã</strong> (như "tự ngã", "ngã ba"… well, đồng âm).' },
      { hanzi: '你', pinyin: 'nǐ', en: 'You', vn: 'Bạn / anh / chị', hv: 'HV: <strong>nễ</strong>.' },
      { hanzi: '好', pinyin: 'hǎo', en: 'Good / OK', vn: 'Tốt / được', hv: 'HV: <strong>hảo</strong> (như "hảo hán", "tuyệt hảo").' },
    ],
  },

  // ───────────────────── DAY 2 ─────────────────────
  {
    id: 2,
    title: 'Numbers, Money & Mobile Payment',
    subtitle: 'Số, tiền & WeChat/Alipay — quan trọng nhất ở TQ',
    intro: {
      heading: '💳 Cash is dead in China',
      body: [
        '90%+ giao dịch ở TQ dùng <strong>微信支付 (WeChat Pay)</strong> hoặc <strong>支付宝 (Alipay)</strong>. Nhiều quán không nhận tiền mặt, không nhận thẻ Visa/Master.',
        '<strong>Tải trước khi đi:</strong> WeChat (Weixin) + Alipay. Cả hai giờ cho phép gắn thẻ Visa/Master quốc tế (Tour Pass / International version). Test ở khách sạn ngay khi đến.',
        'Khi trả tiền: người bán quét mã QR của bạn, hoặc bạn quét mã QR của họ rồi gõ số tiền.',
      ],
    },
    vocab: [
      { hanzi: '一', pinyin: 'yī', en: 'one (1)', vn: 'một', hv: 'HV: <strong>nhất</strong>.' },
      { hanzi: '二 / 两', pinyin: 'èr / liǎng', en: 'two (2)', vn: 'hai', hv: 'HV: <strong>nhị / lưỡng</strong>. <strong>两</strong> dùng khi đếm vật ("hai cái"), <strong>二</strong> dùng cho số trừu tượng.' },
      { hanzi: '三', pinyin: 'sān', en: 'three (3)', vn: 'ba', hv: 'HV: <strong>tam</strong>.' },
      { hanzi: '四', pinyin: 'sì', en: 'four (4)', vn: 'bốn', hv: 'HV: <strong>tứ</strong>. Coi chừng nhầm với <strong>十 shí</strong> (mười)!' },
      { hanzi: '五', pinyin: 'wǔ', en: 'five (5)', vn: 'năm', hv: 'HV: <strong>ngũ</strong>.' },
      { hanzi: '六', pinyin: 'liù', en: 'six (6)', vn: 'sáu', hv: 'HV: <strong>lục</strong>.' },
      { hanzi: '七', pinyin: 'qī', en: 'seven (7)', vn: 'bảy', hv: 'HV: <strong>thất</strong>.' },
      { hanzi: '八', pinyin: 'bā', en: 'eight (8)', vn: 'tám', hv: 'HV: <strong>bát</strong>. Số may mắn ở TQ.' },
      { hanzi: '九', pinyin: 'jiǔ', en: 'nine (9)', vn: 'chín', hv: 'HV: <strong>cửu</strong>.' },
      { hanzi: '十', pinyin: 'shí', en: 'ten (10)', vn: 'mười', hv: 'HV: <strong>thập</strong>. 十一 = 11, 二十 = 20, 二十一 = 21.' },
      { hanzi: '一百', pinyin: 'yì bǎi', en: 'one hundred (100)', vn: 'một trăm', hv: 'HV: <strong>nhất bách</strong>.' },
      { hanzi: '一千', pinyin: 'yì qiān', en: 'one thousand (1,000)', vn: 'một nghìn', hv: 'HV: <strong>nhất thiên</strong> ("thiên" như "thiên niên kỷ").' },
      { hanzi: '块 / 元', pinyin: 'kuài / yuán', en: 'yuan (¥, RMB)', vn: 'đồng (nhân dân tệ)', hv: 'HV của 元 = <strong>nguyên</strong>. <strong>块</strong> = cách nói thông tục (như "đồng"), <strong>元</strong> = trang trọng.' },
      { hanzi: '多少钱?', pinyin: 'duōshǎo qián?', en: 'How much?', vn: 'Bao nhiêu tiền?', hv: 'HV: <strong>đa thiểu tiền</strong> — đúng chữ "tiền" luôn!' },
      { hanzi: '微信', pinyin: 'wēixìn', en: 'WeChat', vn: 'WeChat', hv: 'HV: <strong>vi tín</strong> ("tin nhắn nhỏ").' },
      { hanzi: '支付宝', pinyin: 'zhīfùbǎo', en: 'Alipay', vn: 'Alipay', hv: 'HV: <strong>chi phó bảo</strong> ("kho thanh toán").' },
      { hanzi: '扫码', pinyin: 'sǎo mǎ', en: 'Scan the QR code', vn: 'Quét mã QR', hv: 'HV: <strong>tảo mã</strong>. Người ta sẽ nói "扫一下" (sǎo yīxià) = "quét cái".' },
      { hanzi: '现金', pinyin: 'xiànjīn', en: 'Cash', vn: 'Tiền mặt', hv: 'HV: <strong>hiện kim</strong> — KHỚP HOÀN TOÀN! (như "hiện kim" trong tiếng Việt).' },
    ],
  },

  // ───────────────────── DAY 3 ─────────────────────
  {
    id: 3,
    title: 'Airport & Getting Around',
    subtitle: 'Sân bay, taxi, tàu điện ngầm, Didi',
    intro: {
      heading: '🚕 Getting around 101',
      body: [
        '<strong>滴滴 (Didi)</strong> = Uber của TQ. Tích hợp ngay trong WeChat & Alipay (Mini Program). Dùng được luôn không cần app riêng.',
        '<strong>地铁 (subway)</strong>: rẻ, nhanh, có tiếng Anh. Mua vé qua máy hoặc quét QR Alipay/WeChat tại cổng.',
        'Taxi truyền thống: chỉ có tài xế nói tiếng Hoa. Luôn có sẵn địa chỉ điểm đến viết bằng <strong>chữ Hán</strong> để show cho tài xế.',
      ],
    },
    vocab: [
      { hanzi: '机场', pinyin: 'jīchǎng', en: 'Airport', vn: 'Sân bay', hv: 'HV: <strong>cơ trường</strong> ("cơ" = máy, "trường" = sân).' },
      { hanzi: '飞机', pinyin: 'fēijī', en: 'Airplane', vn: 'Máy bay', hv: 'HV: <strong>phi cơ</strong> — đúng chữ luôn!' },
      { hanzi: '出租车', pinyin: 'chūzūchē', en: 'Taxi', vn: 'Taxi', hv: 'HV: <strong>xuất tô xa</strong> ("xe cho thuê"). Cũng có thể gọi tắt là <strong>的士 (dīshì)</strong>.' },
      { hanzi: '地铁', pinyin: 'dìtiě', en: 'Subway / metro', vn: 'Tàu điện ngầm', hv: 'HV: <strong>địa thiết</strong> ("đường sắt dưới đất").' },
      { hanzi: '火车', pinyin: 'huǒchē', en: 'Train', vn: 'Tàu hỏa', hv: 'HV: <strong>hỏa xa</strong> — KHỚP! ("xe lửa" cũng đúng nghĩa).' },
      { hanzi: '高铁', pinyin: 'gāotiě', en: 'High-speed rail', vn: 'Tàu cao tốc', hv: 'HV: <strong>cao thiết</strong>. Đi giữa các thành phố — nhanh và sạch hơn máy bay.' },
      { hanzi: '票', pinyin: 'piào', en: 'Ticket', vn: 'Vé', hv: 'HV: <strong>phiếu</strong> (như "phiếu xem phim").' },
      { hanzi: '站', pinyin: 'zhàn', en: 'Station / stop', vn: 'Trạm / bến', hv: 'HV: <strong>trạm</strong> — KHỚP!' },
      { hanzi: '滴滴', pinyin: 'dīdī', en: 'Didi (ride-hail)', vn: 'Didi (như Uber/Grab)', hv: 'Mở trong WeChat → 服务 → 出行服务 → 滴滴出行.' },
      { hanzi: '请送我到这里', pinyin: 'qǐng sòng wǒ dào zhèlǐ', en: 'Please take me here', vn: 'Làm ơn chở tôi đến đây', hv: 'Show địa chỉ chữ Hán + nói câu này = đủ. HV: <strong>thỉnh tống ngã đáo giá lý</strong>.' },
      { hanzi: '一张票', pinyin: 'yì zhāng piào', en: 'One ticket', vn: 'Một vé', hv: '<strong>张 (trương)</strong> = lượng từ cho vật phẳng (vé, giấy, bàn).' },
      { hanzi: '到了', pinyin: 'dào le', en: 'Arrived / we\'re here', vn: 'Đến rồi', hv: 'Tài xế sẽ nói câu này. HV: <strong>đáo liễu</strong>.' },
    ],
  },

  // ───────────────────── DAY 4 ─────────────────────
  {
    id: 4,
    title: 'Hotel Check-in',
    subtitle: 'Khách sạn, phòng, hộ chiếu, WiFi',
    intro: {
      heading: '🏨 Hotel must-knows',
      body: [
        'Chỉ ở khách sạn có <strong>giấy phép tiếp khách nước ngoài</strong> — không phải KS nào cũng nhận. Check trên Trip.com / Booking.com để chắc.',
        'Khách sạn sẽ scan <strong>护照 (hộ chiếu)</strong> để báo cảnh sát địa phương (luật bắt buộc — bình thường).',
        'WiFi của khách sạn thường <strong>bị Great Firewall chặn</strong> — Google, Facebook, Instagram, WhatsApp, YouTube không vào được. Cài VPN <em>trước khi sang TQ</em>.',
      ],
    },
    vocab: [
      { hanzi: '酒店', pinyin: 'jiǔdiàn', en: 'Hotel', vn: 'Khách sạn', hv: 'HV: <strong>tửu điếm</strong> ("quán rượu" — từ cổ, giờ nghĩa là khách sạn).' },
      { hanzi: '宾馆', pinyin: 'bīnguǎn', en: 'Hotel / guesthouse', vn: 'Nhà khách', hv: 'HV: <strong>tân quán</strong> ("nhà của khách").' },
      { hanzi: '房间', pinyin: 'fángjiān', en: 'Room', vn: 'Phòng', hv: 'HV: <strong>phòng gian</strong> — đúng chữ "phòng"!' },
      { hanzi: '护照', pinyin: 'hùzhào', en: 'Passport', vn: 'Hộ chiếu', hv: 'HV: <strong>hộ chiếu</strong> — KHỚP HOÀN TOÀN! ✨' },
      { hanzi: '入住', pinyin: 'rùzhù', en: 'Check in', vn: 'Nhận phòng', hv: 'HV: <strong>nhập trú</strong> ("vào ở").' },
      { hanzi: '退房', pinyin: 'tuìfáng', en: 'Check out', vn: 'Trả phòng', hv: 'HV: <strong>thoái phòng</strong> ("rời phòng").' },
      { hanzi: '我有预订', pinyin: 'wǒ yǒu yùdìng', en: 'I have a reservation', vn: 'Tôi có đặt phòng', hv: 'HV: <strong>ngã hữu dự định</strong> ("tôi có dự định/đặt trước").' },
      { hanzi: '钥匙 / 房卡', pinyin: 'yàoshi / fángkǎ', en: 'Key / room card', vn: 'Chìa khóa / thẻ phòng', hv: '<strong>房卡</strong> = thẻ từ (HV: <strong>phòng tạp</strong>). Phần lớn KS giờ dùng thẻ.' },
      { hanzi: '密码', pinyin: 'mìmǎ', en: 'Password', vn: 'Mật mã', hv: 'HV: <strong>mật mã</strong> — KHỚP HOÀN TOÀN! ✨' },
      { hanzi: 'WiFi 密码是什么?', pinyin: 'WiFi mìmǎ shì shénme?', en: 'What\'s the WiFi password?', vn: 'Mật khẩu WiFi là gì?', hv: 'Câu cực kỳ hay dùng.' },
      { hanzi: '空调', pinyin: 'kōngtiáo', en: 'Air conditioning', vn: 'Máy điều hòa', hv: 'HV: <strong>không điều</strong> ("điều chỉnh không khí").' },
      { hanzi: '早餐', pinyin: 'zǎocān', en: 'Breakfast', vn: 'Bữa sáng', hv: 'HV: <strong>tảo xan</strong> ("bữa ăn sớm").' },
    ],
  },

  // ───────────────────── DAY 5 ─────────────────────
  {
    id: 5,
    title: 'Ordering Food',
    subtitle: 'Gọi món, nước uống, không cay, tính tiền',
    intro: {
      heading: '🍜 Restaurants in China',
      body: [
        'Nhiều quán có <strong>menu QR</strong> — quét bằng WeChat → chọn món → trả tiền trong app. Không cần gặp nhân viên.',
        'Trong quán truyền thống: gọi nhân viên bằng <strong>"服务员!" (fúwùyuán!)</strong> — không thô lỗ, đó là cách chuẩn.',
        '<strong>Không có tip!</strong> Đừng để thêm tiền.',
      ],
    },
    vocab: [
      { hanzi: '菜单', pinyin: 'càidān', en: 'Menu', vn: 'Thực đơn', hv: 'HV: <strong>thái đơn</strong> ("danh sách món ăn").' },
      { hanzi: '服务员', pinyin: 'fúwùyuán', en: 'Waiter / waitress', vn: 'Phục vụ', hv: 'HV: <strong>phục vụ viên</strong> — KHỚP! ✨' },
      { hanzi: '水', pinyin: 'shuǐ', en: 'Water', vn: 'Nước', hv: 'HV: <strong>thủy</strong> (như "thủy sản").' },
      { hanzi: '茶', pinyin: 'chá', en: 'Tea', vn: 'Trà', hv: 'HV: <strong>trà</strong> — KHỚP! Từ "trà" tiếng Việt vay thẳng từ chữ này.' },
      { hanzi: '啤酒', pinyin: 'píjiǔ', en: 'Beer', vn: 'Bia', hv: 'HV: <strong>bia tửu</strong> (啤 = bia phiên âm, 酒 = rượu).' },
      { hanzi: '米饭', pinyin: 'mǐfàn', en: 'Rice (cooked)', vn: 'Cơm', hv: 'HV: <strong>mễ phạn</strong> ("cơm gạo").' },
      { hanzi: '面条', pinyin: 'miàntiáo', en: 'Noodles', vn: 'Mì / phở', hv: 'HV: <strong>miến điều</strong> — "miến" trong "bánh miến" có cùng gốc.' },
      { hanzi: '不要辣', pinyin: 'bú yào là', en: 'No spicy / not spicy', vn: 'Không cay', hv: 'HV: <strong>bất yêu lạt</strong> ("không muốn cay"). Cực hữu ích ở Tứ Xuyên/Hồ Nam!' },
      { hanzi: '好吃', pinyin: 'hǎochī', en: 'Delicious', vn: 'Ngon', hv: 'HV: <strong>hảo cật</strong> ("ăn ngon"). Khen đầu bếp = bonus point.' },
      { hanzi: '这个', pinyin: 'zhège', en: 'This one', vn: 'Cái này', hv: 'HV: <strong>giá cá</strong>. Chỉ vào menu và nói "我要这个" (tôi muốn cái này) — thoát hiểm 90% tình huống gọi món.' },
      { hanzi: '我吃素', pinyin: 'wǒ chī sù', en: "I'm vegetarian", vn: 'Tôi ăn chay', hv: 'HV: <strong>ngã cật tố</strong>. Lưu ý: nhiều món "chay" vẫn có nước dùng từ thịt — nói thêm <strong>"没有肉" (méiyǒu ròu)</strong> = "không có thịt".' },
      { hanzi: '买单 / 结账', pinyin: 'mǎidān / jiézhàng', en: 'The bill, please', vn: 'Tính tiền', hv: 'HV: <strong>mãi đơn / kết trướng</strong>. Cả hai đều dùng được, vẫy tay ra dấu viết cũng OK.' },
    ],
  },

  // ───────────────────── DAY 6 ─────────────────────
  {
    id: 6,
    title: 'Shopping & Bargaining',
    subtitle: 'Mua sắm, mặc cả, thanh toán',
    intro: {
      heading: '🛍 Where to bargain (and not)',
      body: [
        '<strong>Mặc cả OK:</strong> chợ truyền thống, hàng rong, chợ đồ giả (Silk Market — Bắc Kinh, AP Plaza — Thượng Hải). Chiến thuật: giảm 50–70% giá đầu tiên, rồi tăng dần.',
        '<strong>KHÔNG mặc cả:</strong> siêu thị, mall, chuỗi cửa hàng, nhà hàng. Giá niêm yết là cố định.',
        'Nếu họ ra giá quá cao và bạn không muốn mua, cứ cười nói <strong>"太贵了"</strong> rồi đi — họ thường sẽ chạy theo giảm giá.',
      ],
    },
    vocab: [
      { hanzi: '多少钱?', pinyin: 'duōshǎo qián?', en: 'How much?', vn: 'Bao nhiêu tiền?', hv: 'Ôn lại từ Ngày 2 — câu vạn năng.' },
      { hanzi: '太贵了', pinyin: 'tài guì le', en: 'Too expensive!', vn: 'Đắt quá!', hv: 'HV: <strong>thái quý liễu</strong>. "贵" = quý (đắt, quý giá).' },
      { hanzi: '便宜一点', pinyin: 'piányi yīdiǎn', en: 'A bit cheaper, please', vn: 'Bớt chút đi', hv: 'HV: <strong>tiện nghi nhất điểm</strong>. ⚠ "便宜" trong Hoa = <em>rẻ</em>, không phải "tiện nghi" như tiếng Việt!' },
      { hanzi: '可以刷卡吗?', pinyin: 'kěyǐ shuākǎ ma?', en: 'Can I pay by card?', vn: 'Có quẹt thẻ được không?', hv: 'HV: <strong>khả dĩ loát tạp ma</strong>. Câu trả lời thường là KHÔNG — chuẩn bị WeChat/Alipay.' },
      { hanzi: '我要这个', pinyin: 'wǒ yào zhège', en: 'I\'ll take this one', vn: 'Tôi lấy cái này', hv: 'HV: <strong>ngã yêu giá cá</strong>.' },
      { hanzi: '有 / 没有', pinyin: 'yǒu / méiyǒu', en: 'have / don\'t have', vn: 'có / không có', hv: 'HV: <strong>hữu / một hữu</strong>. "有 size XL 吗?" = "Có size XL không?"' },
      { hanzi: '大 / 小', pinyin: 'dà / xiǎo', en: 'big / small', vn: 'to / nhỏ', hv: 'HV: <strong>đại / tiểu</strong>. "大一点" = to hơn chút, "小一点" = nhỏ hơn chút.' },
      { hanzi: '试一下', pinyin: 'shì yīxià', en: 'Let me try it on', vn: 'Cho thử xem', hv: 'HV: <strong>thí nhất hạ</strong>.' },
      { hanzi: '颜色', pinyin: 'yánsè', en: 'Color', vn: 'Màu sắc', hv: 'HV: <strong>nhan sắc</strong> ("màu sắc / vẻ ngoài").' },
      { hanzi: '红 / 黑 / 白', pinyin: 'hóng / hēi / bái', en: 'red / black / white', vn: 'đỏ / đen / trắng', hv: 'HV: <strong>hồng / hắc / bạch</strong>.' },
      { hanzi: '不要', pinyin: 'bú yào', en: "Don't want / no thanks", vn: 'Không cần / không lấy', hv: 'HV: <strong>bất yêu</strong>. Đối với người bán hàng rong dai dẳng: nói "不要, 谢谢".' },
      { hanzi: '发票', pinyin: 'fāpiào', en: 'Receipt / invoice', vn: 'Hóa đơn', hv: 'HV: <strong>phát phiếu</strong>.' },
    ],
  },

  // ───────────────────── DAY 7 ─────────────────────
  {
    id: 7,
    title: 'Asking Directions',
    subtitle: 'Hỏi đường, trái phải, bản đồ, toilet',
    intro: {
      heading: '🗺 Navigation in China',
      body: [
        'Google Maps <strong>không hoạt động</strong> ở TQ (và ngay cả có VPN cũng sai vị trí). Dùng <strong>Apple Maps</strong> (iPhone) hoặc <strong>百度地图 / 高德地图 (Baidu/Amap)</strong>.',
        'Tên đường thường có hậu tố <strong>路 (lù) = đường</strong>, <strong>街 (jiē) = phố</strong>, <strong>大道 (dàdào) = đại lộ</strong>.',
        'Khi lạc: hỏi nhân viên bảo vệ tòa nhà hoặc tài xế taxi — thân thiện hơn người qua đường.',
      ],
    },
    vocab: [
      { hanzi: '...在哪里?', pinyin: '...zài nǎlǐ?', en: 'Where is ...?', vn: '... ở đâu?', hv: 'HV: <strong>tại na lý</strong>. "厕所在哪里?" = "WC ở đâu?"' },
      { hanzi: '怎么走?', pinyin: 'zěnme zǒu?', en: 'How do I get there?', vn: 'Đi thế nào?', hv: '"走" = đi bộ. HV: <strong>tẩu</strong>.' },
      { hanzi: '左 / 右', pinyin: 'zuǒ / yòu', en: 'left / right', vn: 'trái / phải', hv: 'HV: <strong>tả / hữu</strong>.' },
      { hanzi: '直走', pinyin: 'zhí zǒu', en: 'Go straight', vn: 'Đi thẳng', hv: 'HV: <strong>trực tẩu</strong>.' },
      { hanzi: '转弯', pinyin: 'zhuǎn wān', en: 'Turn', vn: 'Rẽ', hv: 'HV: <strong>chuyển loan</strong>. "左转" = rẽ trái, "右转" = rẽ phải.' },
      { hanzi: '远 / 近', pinyin: 'yuǎn / jìn', en: 'far / near', vn: 'xa / gần', hv: 'HV: <strong>viễn / cận</strong>. "远不远?" = "có xa không?"' },
      { hanzi: '厕所 / 卫生间', pinyin: 'cèsuǒ / wèishēngjiān', en: 'Toilet / restroom', vn: 'Nhà vệ sinh', hv: 'HV: <strong>xí sở / vệ sinh gian</strong>. <em>卫生间</em> lịch sự hơn (dùng ở nhà hàng, KS).' },
      { hanzi: '地图', pinyin: 'dìtú', en: 'Map', vn: 'Bản đồ', hv: 'HV: <strong>địa đồ</strong> — KHỚP!' },
      { hanzi: '北 / 南 / 东 / 西', pinyin: 'běi / nán / dōng / xī', en: 'N / S / E / W', vn: 'bắc / nam / đông / tây', hv: 'HV: <strong>bắc / nam / đông / tây</strong> — KHỚP HOÀN TOÀN! ✨ (北京 = Bắc Kinh, 南京 = Nam Kinh)' },
      { hanzi: '路口', pinyin: 'lùkǒu', en: 'Intersection', vn: 'Ngã tư', hv: 'HV: <strong>lộ khẩu</strong> ("miệng đường").' },
      { hanzi: '地铁站', pinyin: 'dìtiězhàn', en: 'Subway station', vn: 'Ga tàu điện ngầm', hv: 'HV: <strong>địa thiết trạm</strong>.' },
      { hanzi: '出口', pinyin: 'chūkǒu', en: 'Exit', vn: 'Lối ra', hv: 'HV: <strong>xuất khẩu</strong>. Ga tàu điện có nhiều "Exit A, B, C…" — luôn nhớ số xuất khẩu của khách sạn.' },
    ],
  },

  // ───────────────────── DAY 8 ─────────────────────
  {
    id: 8,
    title: 'Emergencies & Help',
    subtitle: 'Cấp cứu, bác sĩ, mất hộ chiếu, đại sứ quán',
    intro: {
      heading: '🚨 Emergency numbers',
      body: [
        '<strong>110</strong> = cảnh sát · <strong>120</strong> = cấp cứu y tế · <strong>119</strong> = cứu hỏa.',
        'Đại sứ quán Việt Nam tại Bắc Kinh: <strong>+86-10-6532-1155</strong>. Lãnh sự quán VN tại Thượng Hải, Nam Ninh, Quảng Châu, Côn Minh, Hong Kong.',
        '<strong>Lưu trước</strong>: scan hộ chiếu, ảnh visa, số liên lạc khẩn cấp — vào email/cloud.',
      ],
    },
    vocab: [
      { hanzi: '救命!', pinyin: 'jiùmìng!', en: 'Help! (life-threatening)', vn: 'Cứu với!', hv: 'HV: <strong>cứu mệnh</strong> — đúng "cứu mạng"!' },
      { hanzi: '帮我', pinyin: 'bāng wǒ', en: 'Help me', vn: 'Giúp tôi', hv: 'HV: <strong>bang ngã</strong>. Nhẹ nhàng hơn 救命.' },
      { hanzi: '医院', pinyin: 'yīyuàn', en: 'Hospital', vn: 'Bệnh viện', hv: 'HV: <strong>y viện</strong>.' },
      { hanzi: '医生', pinyin: 'yīshēng', en: 'Doctor', vn: 'Bác sĩ', hv: 'HV: <strong>y sinh</strong>.' },
      { hanzi: '警察', pinyin: 'jǐngchá', en: 'Police', vn: 'Cảnh sát', hv: 'HV: <strong>cảnh sát</strong> — KHỚP HOÀN TOÀN! ✨' },
      { hanzi: '我不舒服', pinyin: 'wǒ bù shūfu', en: "I don't feel well", vn: 'Tôi khó chịu / không khỏe', hv: 'HV: <strong>ngã bất thư phục</strong>.' },
      { hanzi: '疼 / 痛', pinyin: 'téng / tòng', en: 'Pain / hurts', vn: 'Đau', hv: 'HV: <strong>đông / thống</strong>. Chỉ vào chỗ đau và nói "这里疼".' },
      { hanzi: '药', pinyin: 'yào', en: 'Medicine', vn: 'Thuốc', hv: 'HV: <strong>dược</strong>. 药店 (yàodiàn) = nhà thuốc.' },
      { hanzi: '过敏', pinyin: 'guòmǐn', en: 'Allergy / allergic', vn: 'Dị ứng', hv: 'HV: <strong>quá mẫn</strong>.' },
      { hanzi: '我的护照丢了', pinyin: 'wǒ de hùzhào diū le', en: 'I lost my passport', vn: 'Tôi mất hộ chiếu rồi', hv: 'HV: <strong>ngã đích hộ chiếu đâu liễu</strong>. 丢 = mất, làm rơi.' },
      { hanzi: '大使馆', pinyin: 'dàshǐguǎn', en: 'Embassy', vn: 'Đại sứ quán', hv: 'HV: <strong>đại sứ quán</strong> — KHỚP HOÀN TOÀN! ✨' },
      { hanzi: '越南', pinyin: 'Yuènán', en: 'Vietnam', vn: 'Việt Nam', hv: 'HV: <strong>Việt Nam</strong> — KHỚP! Tên nước bạn bằng tiếng Hoa.' },
      { hanzi: '我是越南人', pinyin: 'wǒ shì Yuènán rén', en: "I'm Vietnamese", vn: 'Tôi là người Việt Nam', hv: 'HV: <strong>ngã thị Việt Nam nhân</strong>.' },
    ],
  },

  // ───────────────────── DAY 9 ─────────────────────
  {
    id: 9,
    title: 'Meeting People & Small Talk',
    subtitle: 'Làm quen, giới thiệu bản thân, khen ngợi',
    intro: {
      heading: '🤝 Making friends in China',
      body: [
        'Người TQ rất thân thiện với khách Tây/ĐNA — nhất là khi bạn cố nói tiếng Hoa. Ngay cả 5 từ cũng đủ phá băng.',
        'Hỏi tên + quê + công việc = công thức làm quen chuẩn. Trao đổi <strong>WeChat (微信)</strong> thay vì số điện thoại.',
        'Khen <strong>"你的英语很好!"</strong> (tiếng Anh của bạn giỏi quá!) hoặc <strong>"中国菜真好吃!"</strong> (đồ ăn TQ ngon thật!) = ai cũng vui.',
      ],
    },
    vocab: [
      { hanzi: '你叫什么名字?', pinyin: 'nǐ jiào shénme míngzi?', en: "What's your name?", vn: 'Bạn tên gì?', hv: 'HV: <strong>nễ kiệu thậm ma danh tự</strong>. 名字 = danh tự = tên.' },
      { hanzi: '我叫...', pinyin: 'wǒ jiào...', en: 'My name is...', vn: 'Tôi tên là...', hv: 'Ví dụ: "我叫 Dave" — không cần dịch tên.' },
      { hanzi: '认识你很高兴', pinyin: 'rènshi nǐ hěn gāoxìng', en: 'Nice to meet you', vn: 'Rất vui được gặp bạn', hv: 'HV: <strong>nhận thức nễ ngận cao hứng</strong>.' },
      { hanzi: '我来自越南', pinyin: 'wǒ láizì Yuènán', en: "I'm from Vietnam", vn: 'Tôi đến từ Việt Nam', hv: 'HV: <strong>ngã lai tự Việt Nam</strong>.' },
      { hanzi: '我会一点中文', pinyin: 'wǒ huì yìdiǎn Zhōngwén', en: 'I speak a little Chinese', vn: 'Tôi biết một chút tiếng Hoa', hv: 'HV: <strong>ngã hội nhất điểm Trung văn</strong>. Câu phá băng cực hữu hiệu.' },
      { hanzi: '我听不懂', pinyin: 'wǒ tīng bù dǒng', en: "I don't understand (what you said)", vn: 'Tôi nghe không hiểu', hv: 'HV: <strong>ngã thính bất đổng</strong>.' },
      { hanzi: '请再说一遍', pinyin: 'qǐng zài shuō yí biàn', en: 'Please say it again', vn: 'Xin nói lại lần nữa', hv: 'HV: <strong>thỉnh tái thuyết nhất biến</strong>.' },
      { hanzi: '请说慢一点', pinyin: 'qǐng shuō màn yìdiǎn', en: 'Please speak slower', vn: 'Xin nói chậm hơn', hv: 'HV: <strong>thỉnh thuyết mạn nhất điểm</strong>.' },
      { hanzi: '你说英语吗?', pinyin: 'nǐ shuō Yīngyǔ ma?', en: 'Do you speak English?', vn: 'Bạn có nói tiếng Anh không?', hv: 'HV: <strong>nễ thuyết Anh ngữ ma</strong> — KHỚP "Anh ngữ"!' },
      { hanzi: '中国', pinyin: 'Zhōngguó', en: 'China', vn: 'Trung Quốc', hv: 'HV: <strong>Trung Quốc</strong> — KHỚP HOÀN TOÀN! ✨' },
      { hanzi: '加微信吗?', pinyin: 'jiā wēixìn ma?', en: 'Wanna add me on WeChat?', vn: 'Kết bạn WeChat nhé?', hv: 'HV: <strong>gia vi tín ma</strong>. 加 = thêm vào.' },
      { hanzi: '没问题', pinyin: 'méi wèntí', en: 'No problem', vn: 'Không thành vấn đề', hv: 'HV: <strong>một vấn đề</strong> — KHỚP! Đáp lại lời cảm ơn/xin lỗi.' },
    ],
  },

  // ───────────────────── DAY 10 ─────────────────────
  {
    id: 10,
    title: 'Final Polish + Trip-Day Tips',
    subtitle: 'Ôn tập, mẹo ngày đi & cheat sheet',
    intro: {
      heading: '🎒 Ngày mai lên đường!',
      body: [
        '<strong>Tải sẵn:</strong> WeChat, Alipay (gắn thẻ Visa/Master), Apple/Google Translate (offline pack tiếng Hoa), VPN, Trip.com.',
        '<strong>Mang theo:</strong> hộ chiếu + bản photo, ảnh visa, sim TQ/eSIM (Airalo / China Mobile), chuyển đổi sang plug type A/C/I.',
        '<strong>Mở app này</strong> → Cheat Sheet 📋 → bookmark trên màn hình chính điện thoại để tra nhanh khi cần.',
      ],
    },
    vocab: [
      { hanzi: '请问', pinyin: 'qǐng wèn', en: 'Excuse me, may I ask...?', vn: 'Cho hỏi...', hv: 'HV: <strong>thỉnh vấn</strong>. Mở đầu câu hỏi với người lạ = lịch sự.' },
      { hanzi: '可以', pinyin: 'kěyǐ', en: 'OK / can / allowed', vn: 'Được / có thể', hv: 'HV: <strong>khả dĩ</strong>. Trả lời "可以!" = "OK được!"' },
      { hanzi: '不可以', pinyin: 'bù kěyǐ', en: 'Not allowed / no', vn: 'Không được', hv: 'HV: <strong>bất khả dĩ</strong>.' },
      { hanzi: '一会儿', pinyin: 'yíhuìr', en: 'In a moment / wait a bit', vn: 'Chốc lát nữa', hv: 'HV: <strong>nhất hội nhi</strong>. "等一会儿" = đợi chút.' },
      { hanzi: '现在', pinyin: 'xiànzài', en: 'Now', vn: 'Bây giờ', hv: 'HV: <strong>hiện tại</strong> — KHỚP!' },
      { hanzi: '今天 / 明天 / 昨天', pinyin: 'jīntiān / míngtiān / zuótiān', en: 'today / tomorrow / yesterday', vn: 'hôm nay / ngày mai / hôm qua', hv: 'HV: <strong>kim thiên / minh thiên / tạc thiên</strong> ("thiên" = ngày).' },
      { hanzi: '几点?', pinyin: 'jǐ diǎn?', en: 'What time?', vn: 'Mấy giờ?', hv: 'HV: <strong>kỷ điểm</strong> ("điểm" = giờ). 三点 = 3 giờ.' },
      { hanzi: '我饿了 / 我渴了', pinyin: 'wǒ è le / wǒ kě le', en: "I'm hungry / I'm thirsty", vn: 'Tôi đói rồi / Tôi khát rồi', hv: 'HV: <strong>ngã ngạ liễu / ngã khát liễu</strong>.' },
      { hanzi: '我累了', pinyin: 'wǒ lèi le', en: "I'm tired", vn: 'Tôi mệt rồi', hv: 'HV: <strong>ngã lụy liễu</strong>.' },
      { hanzi: '可以拍照吗?', pinyin: 'kěyǐ pāizhào ma?', en: 'Can I take a photo?', vn: 'Tôi chụp ảnh được không?', hv: 'HV: <strong>khả dĩ phách chiếu ma</strong>. Hữu ích ở chùa, bảo tàng, hoặc xin chụp với người dân.' },
      { hanzi: '一路平安', pinyin: 'yílù píng\'ān', en: 'Safe travels!', vn: 'Thượng lộ bình an', hv: 'HV: <strong>nhất lộ bình an</strong> — KHỚP HOÀN TOÀN! ✨ Câu chúc chuẩn khi tiễn nhau.' },
      { hanzi: '加油!', pinyin: 'jiā yóu!', en: 'You got this! / Go for it!', vn: 'Cố lên!', hv: 'HV: <strong>gia du</strong> ("thêm dầu"). Tự nhủ trước khi xuống sân bay 😄' },
    ],
  },
];

// Cheat sheet groupings for quick lookup during the trip
const CHEAT_GROUPS = [
  { title: '🟢 Survival (the 5 you must know)', lessonIds: [1], pick: ['你好','谢谢','对不起','请','再见'] },
  { title: '💳 Paying for things', lessonIds: [2], pick: ['多少钱?','微信','支付宝','扫码','现金'] },
  { title: '🚕 Getting around', lessonIds: [3, 7], pick: ['出租车','地铁','请送我到这里','...在哪里?','直走','左 / 右','出口'] },
  { title: '🏨 Hotel', lessonIds: [4], pick: ['我有预订','护照','房间','WiFi 密码是什么?','退房'] },
  { title: '🍜 Eating', lessonIds: [5], pick: ['菜单','服务员','不要辣','我吃素','这个','买单 / 结账'] },
  { title: '🛍 Shopping', lessonIds: [6], pick: ['多少钱?','太贵了','便宜一点','我要这个','不要'] },
  { title: '🤝 Talking to people', lessonIds: [9, 1], pick: ['你叫什么名字?','我叫...','我来自越南','我会一点中文','我听不懂','请说慢一点','你说英语吗?','加微信吗?'] },
  { title: '🚨 Emergency', lessonIds: [8], pick: ['救命!','帮我','医院','警察','我不舒服','我的护照丢了','大使馆','我是越南人'] },
];
