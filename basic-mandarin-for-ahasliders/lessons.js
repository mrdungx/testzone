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

// ═════════════════════════════════════════════════════════════════════
// JAPANESE MODULE
// ═════════════════════════════════════════════════════════════════════

const TRIP_DATE_JA = '2026-06-07';

const LESSONS_JA = [
  // ───────────────────── DAY 1 ─────────────────────
  {
    id: 1,
    title: 'Survival Greetings + 3 Scripts',
    subtitle: 'Chào hỏi cơ bản & hệ chữ tiếng Nhật',
    intro: {
      heading: '🇯🇵 Why Japanese is easier than Mandarin (for you)',
      body: [
        'Tiếng Nhật KHÔNG có thanh điệu như Trung. Chỉ có <strong>pitch accent</strong> (cao thấp nhẹ), gần như không quan trọng với khách du lịch — sai cũng được hiểu.',
        '<strong>3 hệ chữ</strong>: <em>Hiragana</em> (あいう…) cho từ thuần Nhật & ngữ pháp, <em>Katakana</em> (アイウ…) cho từ vay nước ngoài (ホテル = "hotel"), <em>Kanji</em> (漢字) cho từ Hán-Nhật. Bạn không cần đọc được — dùng romaji là đủ.',
        'Đa số <strong>Kanji</strong> đều có gốc Hán — bạn nhìn vào kanji là đoán được nghĩa ngay nhờ Hán Việt! 病院 = bệnh viện, 銀行 = ngân hàng, 警察 = cảnh sát.',
      ],
      outro: 'Cứ tự tin: "tôi không nói tiếng Nhật" cũng nói bằng tiếng Nhật cho hay đó: <em>nihongo ga wakarimasen</em>.',
    },
    vocab: [
      { hanzi: 'こんにちは', pinyin: 'konnichiwa', en: 'Hello (daytime)', vn: 'Xin chào (ban ngày)', hv: 'Theo nghĩa đen: <strong>今日は</strong> (kim nhật là) — "hôm nay là...". Câu chào vạn năng cho ban ngày.' },
      { hanzi: 'おはようございます', pinyin: 'ohayou gozaimasu', en: 'Good morning', vn: 'Chào buổi sáng', hv: 'Trước 10–11h sáng. Câu lịch sự đầy đủ; thân mật gọn lại là <em>ohayou</em>.' },
      { hanzi: 'こんばんは', pinyin: 'konbanwa', en: 'Good evening', vn: 'Chào buổi tối', hv: '<strong>今晩は</strong> = HV <strong>kim vãn</strong> (tối nay). Sau khoảng 5h chiều.' },
      { hanzi: 'ありがとう', pinyin: 'arigatou', en: 'Thanks', vn: 'Cảm ơn', hv: 'Lịch sự hơn: <strong>ありがとうございます</strong> (arigatou gozaimasu). Khách hàng: <strong>doumo arigatou gozaimasu</strong>.' },
      { hanzi: 'すみません', pinyin: 'sumimasen', en: 'Excuse me / Sorry', vn: 'Xin lỗi / cho hỏi', hv: 'CỰC kỳ hữu ích. Vừa là "xin lỗi", vừa là "cho hỏi", vừa là "cảm ơn" khi ai đó giúp bạn.' },
      { hanzi: 'はい / いいえ', pinyin: 'hai / iie', en: 'Yes / No', vn: 'Vâng / Không', hv: 'Người Nhật ít nói "iie" (không) trực diện. Thường thay bằng "chotto..." (khó / không tiện).' },
      { hanzi: 'お願いします', pinyin: 'onegai shimasu', en: 'Please', vn: 'Làm ơn / xin', hv: 'HV: <strong>願</strong> = <em>nguyện</em>. Dùng khi yêu cầu gì đó. "コーヒー、お願いします" = "Cho tôi cà phê".' },
      { hanzi: 'わかりません', pinyin: 'wakarimasen', en: "I don't understand", vn: 'Tôi không hiểu', hv: 'HV: <strong>分</strong> = <em>phân</em> (phân biệt). Trợ động từ -masen = phủ định lịch sự.' },
      { hanzi: 'さようなら', pinyin: 'sayounara', en: 'Goodbye', vn: 'Tạm biệt', hv: 'Hơi trang trọng / cuối cùng. Bạn bè: <em>jaa ne</em> (じゃあね) hoặc <em>bai bai</em> (バイバイ).' },
      { hanzi: '私', pinyin: 'watashi', en: 'I / me', vn: 'Tôi', hv: 'HV: <strong>tư</strong> (như "tư cách", "tư nhân"). Là cách xưng trung tính, dùng được với mọi tình huống.' },
      { hanzi: 'はじめまして', pinyin: 'hajimemashite', en: 'Nice to meet you', vn: 'Rất vui được gặp', hv: 'Chỉ dùng lần đầu gặp. Lần sau là "konnichiwa".' },
      { hanzi: 'よろしくお願いします', pinyin: 'yoroshiku onegai shimasu', en: 'Pleased to know you / look after me', vn: 'Mong được giúp đỡ / hân hạnh', hv: 'Câu "thần thánh" — kết thúc giới thiệu bản thân, kết email, nhờ vả ai. Không có dịch hoàn hảo sang tiếng Việt.' },
    ],
  },

  // ───────────────────── DAY 2 ─────────────────────
  {
    id: 2,
    title: 'Numbers, Yen & IC Cards',
    subtitle: 'Số, tiền, và thẻ Suica/Pasmo — sống còn',
    intro: {
      heading: '💳 IC card = "thẻ trượt mọi nơi"',
      body: [
        '<strong>Suica</strong> (JR East) và <strong>Pasmo</strong> (private) là 2 thẻ IC trả trước phổ biến nhất. Cả hai dùng được KHẮP NƠI: tàu, bus, máy bán hàng tự động, convenience store, taxi.',
        'Mua tại máy bán vé ở ga lớn. Nạp tiền bằng yen mặt. Lúc về có thể trả lại để hoàn tiền dư (mất phí ~220 yen).',
        '<strong>Mobile Suica</strong>: nếu bạn có iPhone (Apple Wallet → +) bạn có thể tạo Suica ảo và nạp bằng Visa/Master — không cần thẻ nhựa.',
        'Tiền mặt vẫn quan trọng ở Nhật — nhiều quán nhỏ KHÔNG nhận thẻ.',
      ],
    },
    vocab: [
      { hanzi: '一', pinyin: 'ichi', en: '1', vn: 'một', hv: 'HV: <strong>nhất</strong>.' },
      { hanzi: '二', pinyin: 'ni', en: '2', vn: 'hai', hv: 'HV: <strong>nhị</strong>.' },
      { hanzi: '三', pinyin: 'san', en: '3', vn: 'ba', hv: 'HV: <strong>tam</strong>.' },
      { hanzi: '四', pinyin: 'yon / shi', en: '4', vn: 'bốn', hv: 'HV: <strong>tứ</strong>. "shi" trùng âm với 死 (tử/chết) nên người Nhật thường nói "yon" thay vì "shi".' },
      { hanzi: '五', pinyin: 'go', en: '5', vn: 'năm', hv: 'HV: <strong>ngũ</strong>.' },
      { hanzi: '六', pinyin: 'roku', en: '6', vn: 'sáu', hv: 'HV: <strong>lục</strong>.' },
      { hanzi: '七', pinyin: 'nana / shichi', en: '7', vn: 'bảy', hv: 'HV: <strong>thất</strong>. Thường nói "nana" để tránh nhầm với "shichi" → "ichi".' },
      { hanzi: '八', pinyin: 'hachi', en: '8', vn: 'tám', hv: 'HV: <strong>bát</strong>.' },
      { hanzi: '九', pinyin: 'kyuu / ku', en: '9', vn: 'chín', hv: 'HV: <strong>cửu</strong>.' },
      { hanzi: '十', pinyin: 'juu', en: '10', vn: 'mười', hv: 'HV: <strong>thập</strong>. 11 = juu-ichi, 20 = ni-juu, 21 = ni-juu-ichi.' },
      { hanzi: '百', pinyin: 'hyaku', en: '100', vn: 'một trăm', hv: 'HV: <strong>bách</strong>. 500 = go-hyaku, 800 = hap-pyaku (đổi âm).' },
      { hanzi: '千', pinyin: 'sen', en: '1,000', vn: 'một nghìn', hv: 'HV: <strong>thiên</strong>. 5000 = go-sen.' },
      { hanzi: '万', pinyin: 'man', en: '10,000', vn: 'mười nghìn', hv: 'HV: <strong>vạn</strong>. Đơn vị "vạn" rất quen với người Việt — và đặc biệt quan trọng ở Nhật vì yen có nhiều số 0.' },
      { hanzi: '円', pinyin: 'en', en: 'Yen (¥)', vn: 'Yên Nhật', hv: 'HV: <strong>viên</strong>. Đọc là "en" trong tiếng Nhật, "yen" trong tiếng Anh.' },
      { hanzi: 'いくらですか', pinyin: 'ikura desu ka', en: 'How much?', vn: 'Bao nhiêu?', hv: 'Câu "vạn năng" khi mua sắm hoặc xem giá.' },
      { hanzi: '現金', pinyin: 'genkin', en: 'Cash', vn: 'Tiền mặt', hv: 'HV: <strong>hiện kim</strong> — KHỚP HOÀN TOÀN! ✨' },
      { hanzi: 'スイカ / パスモ', pinyin: 'Suica / Pasmo', en: 'IC card (transit + payment)', vn: 'Thẻ IC (tàu + thanh toán)', hv: 'Mua ở máy bán vé ga JR/subway. Tap để vào cổng tàu, bus, hoặc trả tiền tại cửa hàng.' },
      { hanzi: 'チャージしてください', pinyin: 'chaaji shite kudasai', en: 'Please charge (top up)', vn: 'Xin nạp thẻ', hv: 'Tại máy bán vé hoặc convenience store. "1000 yen, chaaji shite kudasai".' },
    ],
  },

  // ───────────────────── DAY 3 ─────────────────────
  {
    id: 3,
    title: 'Trains & Getting Around',
    subtitle: 'Tàu, ga, Shinkansen — Nhật = thiên đường tàu',
    intro: {
      heading: '🚆 Nhật vận hành bằng tàu',
      body: [
        'Mạng lưới tàu Nhật là hệ thống đỉnh cao thế giới. Tokyo có hơn 100 line, đúng giờ tới giây. Quy tắc: thẻ Suica/Pasmo + Google Maps = đi được mọi nơi.',
        '<strong>JR Pass</strong>: nếu đi nhiều thành phố (Tokyo → Kyoto → Osaka), mua trước khi sang Nhật — đi không giới hạn JR và Shinkansen.',
        '<strong>Quy tắc bất di bất dịch</strong>: đứng bên TRÁI thang cuốn (chừa bên phải cho người vội). KHÔNG nói chuyện điện thoại trên tàu. KHÔNG ăn uống (trừ Shinkansen).',
        'Tên ga thường có Kanji + Hiragana + Romaji — không cần lo về Kanji, chỉ cần nhìn romaji.',
      ],
    },
    vocab: [
      { hanzi: '駅', pinyin: 'eki', en: 'Station', vn: 'Ga / nhà ga', hv: 'HV: <strong>dịch</strong>. Tên ga thường có dạng "X-eki": <strong>Tōkyō-eki</strong> = Ga Tokyo.' },
      { hanzi: '電車', pinyin: 'densha', en: 'Train', vn: 'Tàu (đường sắt)', hv: 'HV: <strong>điện xa</strong> ("xe điện"). Bao gồm cả tàu thường lẫn metro.' },
      { hanzi: '新幹線', pinyin: 'shinkansen', en: 'Bullet train', vn: 'Tàu cao tốc', hv: 'HV: <strong>tân cán tuyến</strong> ("tuyến chính mới"). Tokyo → Kyoto chỉ ~2.5 tiếng.' },
      { hanzi: '地下鉄', pinyin: 'chikatetsu', en: 'Subway', vn: 'Tàu điện ngầm', hv: 'HV: <strong>địa hạ thiết</strong> — KHỚP! ✨ (như tiếng Việt). Tokyo Metro và Toei.' },
      { hanzi: '切符', pinyin: 'kippu', en: 'Ticket', vn: 'Vé', hv: 'HV: <strong>thiết phù</strong>. Vé đơn lẻ. Dùng Suica thì không cần "kippu".' },
      { hanzi: '改札', pinyin: 'kaisatsu', en: 'Ticket gate', vn: 'Cửa soát vé', hv: 'HV: <strong>cải trát</strong>. Tap thẻ Suica / quẹt vé.' },
      { hanzi: 'ホーム', pinyin: 'hoomu', en: 'Platform', vn: 'Sân ga', hv: 'Từ tiếng Anh "platform" → ホーム.' },
      { hanzi: 'バス', pinyin: 'basu', en: 'Bus', vn: 'Xe buýt', hv: 'Từ tiếng Anh. Suica dùng được trên hầu hết các tuyến bus.' },
      { hanzi: 'タクシー', pinyin: 'takushii', en: 'Taxi', vn: 'Taxi', hv: 'Đắt hơn tàu nhiều. Cửa sau MỞ TỰ ĐỘNG — đừng tự kéo!' },
      { hanzi: '出口', pinyin: 'deguchi', en: 'Exit', vn: 'Lối ra', hv: 'HV: <strong>xuất khẩu</strong> — KHỚP! ✨. Ga lớn có nhiều "exit"; nhớ số/chữ exit khách sạn của bạn.' },
      { hanzi: '入口', pinyin: 'iriguchi', en: 'Entrance', vn: 'Lối vào', hv: 'HV: <strong>nhập khẩu</strong> — KHỚP! ✨' },
      { hanzi: 'まで行きたいです', pinyin: '... made ikitai desu', en: 'I want to go to ...', vn: 'Tôi muốn đi tới ...', hv: 'Ví dụ: "Shibuya made ikitai desu" = "Tôi muốn đi Shibuya".' },
    ],
  },

  // ───────────────────── DAY 4 ─────────────────────
  {
    id: 4,
    title: 'Hotel & Ryokan',
    subtitle: 'Khách sạn, ryokan, onsen',
    intro: {
      heading: '🏨 Hotel vs Ryokan vs Capsule',
      body: [
        '<strong>Business hotel</strong> (APA, Toyoko Inn, Route Inn): rẻ, nhỏ, sạch, đầy tiện nghi cơ bản — lựa chọn an toàn cho khách du lịch.',
        '<strong>Ryokan (旅館)</strong>: kiểu truyền thống — ngủ trên futon, sàn tatami, có thể có onsen riêng. Nên thử ít nhất 1 đêm.',
        '<strong>Capsule hotel</strong>: rẻ, thú vị, cho dân backpacker. Một khoang nhỏ vừa người nằm.',
        'Vào phòng phải <strong>cởi giày</strong> ở khu vực genkan (玄関). Khách sạn cung cấp dép.',
      ],
    },
    vocab: [
      { hanzi: 'ホテル', pinyin: 'hoteru', en: 'Hotel', vn: 'Khách sạn', hv: 'Từ tiếng Anh.' },
      { hanzi: '旅館', pinyin: 'ryokan', en: 'Traditional inn', vn: 'Nhà trọ truyền thống', hv: 'HV: <strong>lữ quán</strong> — KHỚP! ✨' },
      { hanzi: '部屋', pinyin: 'heya', en: 'Room', vn: 'Phòng', hv: 'Đọc thuần Nhật (kun-yomi).' },
      { hanzi: '予約', pinyin: 'yoyaku', en: 'Reservation', vn: 'Đặt phòng', hv: 'HV: <strong>dự ước</strong>. "Yoyaku ga arimasu" = "Tôi có đặt phòng".' },
      { hanzi: 'パスポート', pinyin: 'pasupooto', en: 'Passport', vn: 'Hộ chiếu', hv: 'Từ tiếng Anh. Phải xuất trình khi check-in.' },
      { hanzi: '鍵 / カードキー', pinyin: 'kagi / kaado kii', en: 'Key / key card', vn: 'Chìa khóa', hv: 'Phần lớn khách sạn dùng thẻ từ.' },
      { hanzi: 'チェックイン', pinyin: 'chekku in', en: 'Check in', vn: 'Nhận phòng', hv: 'Từ tiếng Anh. Thường từ 15h.' },
      { hanzi: 'チェックアウト', pinyin: 'chekku auto', en: 'Check out', vn: 'Trả phòng', hv: 'Thường trước 10–11h sáng.' },
      { hanzi: '朝食', pinyin: 'choushoku', en: 'Breakfast', vn: 'Bữa sáng', hv: 'HV: <strong>triêu thực</strong>.' },
      { hanzi: 'Wi-Fiのパスワードは何ですか?', pinyin: 'Wi-Fi no pasuwaado wa nan desu ka?', en: "What's the Wi-Fi password?", vn: 'Mật khẩu Wi-Fi là gì?', hv: 'Câu cực thường dùng. Hoặc đơn giản: "Wi-Fi pasuwaado?".' },
      { hanzi: '温泉', pinyin: 'onsen', en: 'Hot spring bath', vn: 'Suối nước nóng', hv: 'HV: <strong>ôn tuyền</strong>. Quy tắc: <strong>tắm gội trước</strong> rồi mới vào bồn. Khăn không chạm nước.' },
      { hanzi: '禁煙', pinyin: 'kin-en', en: 'Non-smoking', vn: 'Cấm hút thuốc', hv: 'HV: <strong>cấm yên</strong> (yên = khói thuốc). Cần biết khi đặt phòng.' },
    ],
  },

  // ───────────────────── DAY 5 ─────────────────────
  {
    id: 5,
    title: 'Ordering Food',
    subtitle: 'Gọi món, hỏi không thịt, tính tiền',
    intro: {
      heading: '🍣 Quy tắc ăn uống ở Nhật',
      body: [
        '<strong>KHÔNG cần tip!</strong> Tip có thể bị coi là xúc phạm. Giá ghi là giá trả.',
        'Trước khi ăn: <strong>itadakimasu</strong> (いただきます) — "xin nhận". Sau khi ăn: <strong>gochisousama deshita</strong> (ごちそうさまでした) — "cảm ơn bữa ăn".',
        'Quán nhỏ thường có máy bán vé ở cửa: chọn món → bỏ tiền → nhận vé → đưa cho đầu bếp.',
        '<strong>Ăn chay khá khó</strong> ở Nhật — "vegetarian" có thể vẫn có dashi (nước dùng cá). Phải nói rõ "肉と魚なし" (niku to sakana nashi) = "không thịt cũng không cá".',
      ],
    },
    vocab: [
      { hanzi: 'メニュー', pinyin: 'menyuu', en: 'Menu', vn: 'Thực đơn', hv: 'Từ tiếng Anh. Nhiều quán có menu hình.' },
      { hanzi: '水 / お水', pinyin: 'mizu / o-mizu', en: 'Water', vn: 'Nước', hv: 'HV: <strong>thủy</strong>. Nước được phục vụ miễn phí ở mọi quán.' },
      { hanzi: 'お茶', pinyin: 'ocha', en: 'Tea', vn: 'Trà', hv: 'HV: <strong>trà</strong> — KHỚP! ✨ Thường được phục vụ miễn phí (trà xanh).' },
      { hanzi: 'ビール', pinyin: 'biiru', en: 'Beer', vn: 'Bia', hv: 'Từ tiếng Anh "beer". Asahi, Sapporo, Kirin nổi tiếng.' },
      { hanzi: 'ご飯', pinyin: 'gohan', en: 'Rice / meal', vn: 'Cơm / bữa ăn', hv: 'HV: <strong>phạn</strong>. "Asa-gohan" = bữa sáng, "ban-gohan" = bữa tối.' },
      { hanzi: 'ラーメン', pinyin: 'raamen', en: 'Ramen', vn: 'Mì ramen', hv: 'Mì sợi với nước dùng. Loại nổi tiếng: tonkotsu, shoyu, miso, shio.' },
      { hanzi: '寿司', pinyin: 'sushi', en: 'Sushi', vn: 'Sushi', hv: 'HV: <strong>thọ ti</strong> (mượn âm). Conveyor belt sushi (kaiten-zushi) cho khách du lịch dễ.' },
      { hanzi: '美味しい', pinyin: 'oishii', en: 'Delicious!', vn: 'Ngon!', hv: 'Khen đầu bếp là cử chỉ rất được đánh giá cao.' },
      { hanzi: 'お会計お願いします', pinyin: 'okaikei onegai shimasu', en: 'The bill, please', vn: 'Xin tính tiền', hv: 'HV: <strong>hội kế</strong>. Hoặc làm dấu ✕ bằng 2 ngón tay.' },
      { hanzi: '肉と魚なしでお願いします', pinyin: 'niku to sakana nashi de onegai shimasu', en: 'No meat and no fish, please', vn: 'Không thịt và không cá', hv: 'HV: <strong>nhục</strong> = thịt. Câu cứu cánh cho khách ăn chay.' },
      { hanzi: 'アレルギーがあります', pinyin: 'arerugii ga arimasu', en: 'I have an allergy', vn: 'Tôi bị dị ứng', hv: 'Quan trọng nếu bạn dị ứng đậu phộng, hải sản, gluten...' },
      { hanzi: 'これください', pinyin: 'kore kudasai', en: 'This one please', vn: 'Cho cái này', hv: 'Chỉ vào menu hoặc món trưng bày, nói câu này = thoát hiểm 90% tình huống gọi món.' },
      { hanzi: '辛い / 甘い', pinyin: 'karai / amai', en: 'Spicy / sweet', vn: 'Cay / ngọt', hv: 'HV: <strong>tân / cam</strong>.' },
    ],
  },

  // ───────────────────── DAY 6 ─────────────────────
  {
    id: 6,
    title: 'Shopping & Tax-free',
    subtitle: 'Mua sắm, miễn thuế cho khách du lịch',
    intro: {
      heading: '🛍 Miễn thuế là một cứu cánh',
      body: [
        '<strong>Tax-free (免税)</strong>: khách du lịch nước ngoài được miễn thuế tiêu dùng 10% khi mua từ ~5,500 yen tại các cửa hàng có biển "Tax-Free Shop".',
        'Cần xuất trình <strong>hộ chiếu</strong> tại quầy. Hàng miễn thuế phải mang ra khỏi Nhật trong 30 ngày.',
        'Nhật <strong>KHÔNG có mặc cả</strong> — giá là giá. Trừ chợ trời nhỏ. Tại cửa hàng, đừng cố mặc cả.',
        'Hộp lễ phẩm gói cực kỳ đẹp — depachika (tầng hầm các trung tâm thương mại) là thiên đường.',
      ],
    },
    vocab: [
      { hanzi: 'いくらですか', pinyin: 'ikura desu ka', en: 'How much?', vn: 'Bao nhiêu?', hv: 'Ôn lại từ Day 2.' },
      { hanzi: '高い', pinyin: 'takai', en: 'Expensive / tall', vn: 'Đắt / cao', hv: 'HV: <strong>cao</strong>.' },
      { hanzi: '安い', pinyin: 'yasui', en: 'Cheap', vn: 'Rẻ', hv: 'HV: <strong>an</strong> (như "an toàn"). Thuần Nhật reading.' },
      { hanzi: '大きい', pinyin: 'ookii', en: 'Big', vn: 'Lớn', hv: 'HV: <strong>đại</strong>.' },
      { hanzi: '小さい', pinyin: 'chiisai', en: 'Small', vn: 'Nhỏ', hv: 'HV: <strong>tiểu</strong>.' },
      { hanzi: '試着できますか', pinyin: 'shichaku dekimasu ka', en: 'Can I try it on?', vn: 'Thử được không?', hv: 'HV: <strong>thí trước</strong> (thử mặc).' },
      { hanzi: 'カード使えますか', pinyin: 'kaado tsukaemasu ka', en: 'Can I pay by card?', vn: 'Trả thẻ được không?', hv: 'Cẩn thận: quán nhỏ thường chỉ nhận tiền mặt.' },
      { hanzi: '免税', pinyin: 'menzei', en: 'Tax-free', vn: 'Miễn thuế', hv: 'HV: <strong>miễn thuế</strong> — KHỚP! ✨' },
      { hanzi: 'レシート', pinyin: 'reshiito', en: 'Receipt', vn: 'Hóa đơn', hv: 'Từ tiếng Anh "receipt".' },
      { hanzi: '袋お願いします', pinyin: 'fukuro onegai shimasu', en: 'A bag, please', vn: 'Cho cái túi', hv: 'Túi thường mất phí (3–10 yen). "Fukuro irimasen" = "Không cần túi".' },
      { hanzi: 'これください', pinyin: 'kore kudasai', en: "I'll take this", vn: 'Cho tôi cái này', hv: 'Câu thoát hiểm khi giao tiếp khó.' },
      { hanzi: '見ているだけです', pinyin: 'mite iru dake desu', en: "Just looking, thanks", vn: 'Tôi chỉ xem thôi', hv: 'Để gỡ thế khi nhân viên hỏi liên tục.' },
    ],
  },

  // ───────────────────── DAY 7 ─────────────────────
  {
    id: 7,
    title: 'Asking Directions',
    subtitle: 'Hỏi đường, bản đồ, toilet',
    intro: {
      heading: '🗺 Google Maps là vua ở Nhật',
      body: [
        '<strong>Google Maps hoạt động hoàn hảo</strong> ở Nhật — kể cả chỉ dẫn tàu (line, peron, exit). Tin tưởng nó.',
        'Tên ga / đường thường ghi cả romaji. Đại đa số biển hiệu có English.',
        'Đi lạc thì hỏi nhân viên ga (eki-in 駅員), chủ konbini, hoặc cảnh sát (koban 交番) — họ rất thân thiện và sẽ chỉ tận nơi.',
        '<strong>Toilet công cộng</strong> rất sạch và miễn phí — trong ga, konbini, công viên, trung tâm thương mại.',
      ],
    },
    vocab: [
      { hanzi: 'どこですか', pinyin: 'doko desu ka', en: 'Where is it?', vn: '... ở đâu?', hv: '"Toire wa doko desu ka?" = "WC ở đâu?"' },
      { hanzi: 'どうやって行きますか', pinyin: 'douyatte ikimasu ka', en: 'How do I get there?', vn: 'Đi tới đó thế nào?', hv: 'Câu hỏi đường tiêu chuẩn.' },
      { hanzi: '右', pinyin: 'migi', en: 'Right', vn: 'Phải', hv: 'HV: <strong>hữu</strong>.' },
      { hanzi: '左', pinyin: 'hidari', en: 'Left', vn: 'Trái', hv: 'HV: <strong>tả</strong>.' },
      { hanzi: 'まっすぐ', pinyin: 'massugu', en: 'Straight', vn: 'Đi thẳng', hv: 'Thuần Nhật.' },
      { hanzi: '近い / 遠い', pinyin: 'chikai / tooi', en: 'Near / Far', vn: 'Gần / xa', hv: 'HV: <strong>cận / viễn</strong>.' },
      { hanzi: '地図', pinyin: 'chizu', en: 'Map', vn: 'Bản đồ', hv: 'HV: <strong>địa đồ</strong> — KHỚP! ✨' },
      { hanzi: 'トイレ / お手洗い', pinyin: 'toire / otearai', en: 'Toilet / restroom', vn: 'Nhà vệ sinh', hv: 'Toire = tiếng Anh, otearai = lịch sự ("rửa tay"). HV: <strong>御手洗</strong> = ngự thủ tẩy.' },
      { hanzi: 'コンビニ', pinyin: 'konbini', en: 'Convenience store', vn: 'Cửa hàng tiện lợi', hv: '7-Eleven, Family Mart, Lawson — mở 24/7, có ATM, máy in, toilet, đồ ăn tử tế.' },
      { hanzi: '案内所', pinyin: 'annai-jo', en: 'Information center', vn: 'Quầy thông tin', hv: 'HV: <strong>án nội sở</strong>. Tại ga lớn / sân bay.' },
      { hanzi: '交番', pinyin: 'kouban', en: 'Police box', vn: 'Bốt cảnh sát', hv: 'HV: <strong>giao phiên</strong>. Mỗi khu vực có một bốt nhỏ — rất hữu ích khi lạc.' },
      { hanzi: '北 / 南 / 東 / 西', pinyin: 'kita / minami / higashi / nishi', en: 'N / S / E / W', vn: 'bắc / nam / đông / tây', hv: 'HV: <strong>bắc / nam / đông / tây</strong> — KHỚP! ✨ (đông Kyoto = Higashi-Kyoto, tây = Nishi).' },
    ],
  },

  // ───────────────────── DAY 8 ─────────────────────
  {
    id: 8,
    title: 'Emergencies & Help',
    subtitle: 'Cấp cứu, bệnh viện, đại sứ quán',
    intro: {
      heading: '🚨 Số khẩn cấp ở Nhật',
      body: [
        '<strong>110</strong> = cảnh sát · <strong>119</strong> = cứu hỏa / cứu thương.',
        'Đại sứ quán Việt Nam tại Tokyo: <strong>+81-3-3466-3311</strong>. Cũng có lãnh sự quán tại Osaka và Fukuoka.',
        '<strong>Mang theo</strong>: bản sao hộ chiếu (cách nhau với hộ chiếu thật), thẻ bảo hiểm du lịch, số liên lạc khẩn cấp.',
        'Bệnh viện ở Nhật rất tốt nhưng <strong>tốn kém</strong> nếu không có bảo hiểm — mua bảo hiểm du lịch trước khi đi.',
      ],
    },
    vocab: [
      { hanzi: '助けて', pinyin: 'tasukete', en: 'Help!', vn: 'Cứu với!', hv: 'Câu khẩn cấp.' },
      { hanzi: '警察', pinyin: 'keisatsu', en: 'Police', vn: 'Cảnh sát', hv: 'HV: <strong>cảnh sát</strong> — KHỚP HOÀN TOÀN! ✨' },
      { hanzi: '病院', pinyin: 'byouin', en: 'Hospital', vn: 'Bệnh viện', hv: 'HV: <strong>bệnh viện</strong> — KHỚP HOÀN TOÀN! ✨' },
      { hanzi: '救急車', pinyin: 'kyuukyuusha', en: 'Ambulance', vn: 'Xe cứu thương', hv: 'HV: <strong>cứu cấp xa</strong> ("xe cứu cấp"). Gọi 119.' },
      { hanzi: '医者', pinyin: 'isha', en: 'Doctor', vn: 'Bác sĩ', hv: 'HV: <strong>y giả</strong>.' },
      { hanzi: '薬', pinyin: 'kusuri', en: 'Medicine', vn: 'Thuốc', hv: 'HV: <strong>dược</strong>. 薬局 (yakkyoku) = nhà thuốc.' },
      { hanzi: '痛い', pinyin: 'itai', en: 'It hurts / painful', vn: 'Đau', hv: 'Chỉ vào chỗ đau và nói "koko itai" (ở đây đau).' },
      { hanzi: 'パスポートをなくしました', pinyin: 'pasupooto wo nakushimashita', en: 'I lost my passport', vn: 'Tôi đã mất hộ chiếu', hv: '"Nakushimashita" = "đã làm mất".' },
      { hanzi: '大使館', pinyin: 'taishikan', en: 'Embassy', vn: 'Đại sứ quán', hv: 'HV: <strong>đại sứ quán</strong> — KHỚP HOÀN TOÀN! ✨' },
      { hanzi: 'ベトナム', pinyin: 'Betonamu', en: 'Vietnam', vn: 'Việt Nam', hv: 'Tên nước viết bằng katakana (từ vay).' },
      { hanzi: '私はベトナム人です', pinyin: 'watashi wa Betonamu-jin desu', en: "I'm Vietnamese", vn: 'Tôi là người Việt Nam', hv: 'HV: <strong>nhân</strong> = người. "-jin" gắn sau tên nước.' },
      { hanzi: '英語を話せますか', pinyin: 'eigo wo hanasemasu ka', en: 'Do you speak English?', vn: 'Bạn có nói được tiếng Anh không?', hv: 'HV: <strong>Anh ngữ</strong> = tiếng Anh.' },
    ],
  },

  // ───────────────────── DAY 9 ─────────────────────
  {
    id: 9,
    title: 'Meeting People & Politeness',
    subtitle: 'Làm quen, kính ngữ, danh thiếp',
    intro: {
      heading: '🤝 Quy tắc giao tiếp Nhật',
      body: [
        '<strong>Cúi đầu (お辞儀 ojigi)</strong> > bắt tay. Càng nghiêng càng kính trọng. Khách du lịch nhẹ nhàng cúi đầu là đủ.',
        'Người Nhật <strong>ít nói "không"</strong> trực tiếp. Thay vào đó: <em>chotto...</em> (hơi khó), <em>kangaete mimasu</em> (để tôi suy nghĩ).',
        'Khi nhận / đưa <strong>danh thiếp (meishi)</strong>: dùng <strong>cả hai tay</strong>, nhìn kỹ, không nhét ngay vào túi quần.',
        'Tặng quà nhỏ (<strong>omiyage</strong>) là cách thể hiện sự quan tâm — chocolate, đặc sản Việt Nam đều OK.',
      ],
    },
    vocab: [
      { hanzi: 'お名前は何ですか', pinyin: 'onamae wa nan desu ka', en: "What's your name?", vn: 'Tên bạn là gì?', hv: 'HV: <strong>名前</strong> = <em>danh tiền</em> ("tên"). お (o-) là tiền tố lịch sự.' },
      { hanzi: '私は...です', pinyin: 'watashi wa ... desu', en: 'I am ...', vn: 'Tôi là ...', hv: 'Ví dụ: "Watashi wa Dave desu". Không cần dịch tên.' },
      { hanzi: 'はじめまして', pinyin: 'hajimemashite', en: 'Nice to meet you (first time)', vn: 'Rất vui được làm quen', hv: 'Ôn lại từ Day 1. Bắt đầu cuộc gặp.' },
      { hanzi: 'よろしくお願いします', pinyin: 'yoroshiku onegai shimasu', en: 'Pleased to know you', vn: 'Mong được giúp đỡ', hv: 'Kết thúc giới thiệu bản thân. Câu "thần thánh".' },
      { hanzi: 'ベトナムから来ました', pinyin: 'Betonamu kara kimashita', en: 'I came from Vietnam', vn: 'Tôi đến từ Việt Nam', hv: '"... kara kimashita" = "đến từ ...".' },
      { hanzi: '少し日本語が話せます', pinyin: 'sukoshi nihongo ga hanasemasu', en: 'I speak a little Japanese', vn: 'Tôi nói được một chút tiếng Nhật', hv: 'Câu phá băng cực hiệu quả.' },
      { hanzi: 'もう一度お願いします', pinyin: 'mou ichido onegai shimasu', en: 'Once more, please', vn: 'Làm ơn nói lại', hv: 'HV: <strong>mạc nhất độ</strong> ("một lần nữa").' },
      { hanzi: 'ゆっくり話してください', pinyin: 'yukkuri hanashite kudasai', en: 'Please speak slowly', vn: 'Xin nói chậm hơn', hv: 'Câu cứu cánh khi bị nói nhanh.' },
      { hanzi: '日本', pinyin: 'nihon', en: 'Japan', vn: 'Nhật Bản', hv: 'HV: <strong>Nhật Bản</strong> — KHỚP! ✨ (日本 = "gốc mặt trời").' },
      { hanzi: 'すごい!', pinyin: 'sugoi!', en: 'Amazing! / Wow!', vn: 'Tuyệt vời!', hv: 'Khen ngợi mọi tình huống.' },
      { hanzi: 'かわいい', pinyin: 'kawaii', en: 'Cute', vn: 'Dễ thương', hv: 'Đã đi vào tiếng Anh / tiếng Việt. Khen mèo, đồ, hoặc trẻ con — đừng dùng với phụ nữ trưởng thành.' },
      { hanzi: '名刺', pinyin: 'meishi', en: 'Business card', vn: 'Danh thiếp', hv: 'HV: <strong>danh thiếp</strong> — KHỚP! ✨ Đưa / nhận bằng 2 tay.' },
    ],
  },

  // ───────────────────── DAY 10 ─────────────────────
  {
    id: 10,
    title: 'Final Polish + Culture Quirks',
    subtitle: 'Ôn tập, mẹo văn hóa, lời chúc',
    intro: {
      heading: '🎒 Chuẩn bị bay tới Nhật!',
      body: [
        '<strong>Tải sẵn</strong>: Google Maps, Google Translate (offline gói tiếng Nhật), Pocket Wi-Fi hoặc eSIM (Airalo, Ubigi).',
        '<strong>Mang theo</strong>: hộ chiếu, thẻ bảo hiểm, vài tờ yen mặt (~10,000 yen) cho ngày đầu, chuyển đổi cắm type A (giống Mỹ).',
        '<strong>Quy tắc bất di bất dịch</strong>: cởi giày khi vào nhà / chùa / vài quán; KHÔNG nói chuyện điện thoại trên tàu; xếp hàng nghiêm túc; vứt rác về khách sạn (ít thùng rác công cộng).',
        '<strong>Bonus cuối</strong>: học một câu chúc "yoi tabi wo!" để chúc người Nhật bạn gặp được "lữ trình vui vẻ" — sẽ làm họ bất ngờ và ấm lòng.',
      ],
    },
    vocab: [
      { hanzi: 'すみません', pinyin: 'sumimasen', en: 'Excuse me / Sorry / Thank you', vn: 'Xin lỗi / cho hỏi / cảm ơn', hv: 'Ôn lại — câu vạn năng nhất tiếng Nhật.' },
      { hanzi: '失礼します', pinyin: 'shitsurei shimasu', en: 'Excuse me (entering / leaving)', vn: 'Xin phép', hv: 'HV: <strong>thất lễ</strong>. Khi vào / ra phòng người khác.' },
      { hanzi: '大丈夫です', pinyin: 'daijoubu desu', en: "It's OK / I'm fine", vn: 'Không sao / ổn rồi', hv: 'HV: <strong>大丈夫</strong> = <em>đại trượng phu</em> (nguyên là "người đàn ông trượng nghĩa" — chuyển nghĩa "ổn"). Câu cực thường dùng.' },
      { hanzi: 'いただきます', pinyin: 'itadakimasu', en: '"I receive" (before eating)', vn: 'Xin nhận (trước khi ăn)', hv: 'Câu nói trước mỗi bữa ăn — biểu hiện sự biết ơn.' },
      { hanzi: 'ごちそうさまでした', pinyin: 'gochisousama deshita', en: '"Thanks for the meal" (after)', vn: 'Cảm ơn bữa ăn', hv: 'Câu nói sau bữa ăn. Nói với đầu bếp / chủ quán.' },
      { hanzi: 'お疲れさまでした', pinyin: 'otsukaresama deshita', en: 'Thanks for the hard work', vn: 'Vất vả rồi', hv: 'HV: <strong>疲</strong> = <em>bì</em> (mệt). Nói khi kết thúc làm việc / cộng tác.' },
      { hanzi: 'どうぞ', pinyin: 'douzo', en: 'Please go ahead / here you are', vn: 'Mời / xin', hv: 'Khi mời ai đó (ngồi, đi trước, dùng đồ).' },
      { hanzi: '写真を撮ってもいいですか', pinyin: 'shashin wo totte mo ii desu ka', en: 'May I take a photo?', vn: 'Tôi chụp ảnh được không?', hv: 'HV: <strong>写真</strong> = <em>tả chân</em> ("vẽ thật"). Tôn trọng — luôn hỏi trước khi chụp người.' },
      { hanzi: '一期一会', pinyin: 'ichigo ichie', en: '"Once-in-a-lifetime moment"', vn: 'Khoảnh khắc một đời một lần', hv: 'HV: <strong>nhất kỳ nhất hội</strong>. Triết lý trà đạo — mỗi cuộc gặp đều quý.' },
      { hanzi: '良い旅を', pinyin: 'yoi tabi wo', en: 'Have a good trip!', vn: 'Chúc lữ trình vui vẻ', hv: 'Câu chúc đẹp khi tiễn nhau.' },
      { hanzi: 'お元気で', pinyin: 'ogenki de', en: 'Take care!', vn: 'Bảo trọng nhé', hv: 'HV: <strong>元気</strong> = <em>nguyên khí</em>. Lời chia tay ấm áp.' },
      { hanzi: '頑張って!', pinyin: 'ganbatte!', en: 'You got this! / Hang in there!', vn: 'Cố lên!', hv: 'HV: <strong>頑張</strong> = <em>ngoan trương</em>. Tự nhủ trước khi xuống sân bay 😄' },
    ],
  },
];

const CHEAT_GROUPS_JA = [
  { title: '🟢 Survival (the 5 you must know)', lessonIds: [1], pick: ['こんにちは','ありがとう','すみません','お願いします','さようなら'] },
  { title: '💳 Paying for things', lessonIds: [2], pick: ['いくらですか','現金','スイカ / パスモ','チャージしてください','カード使えますか'] },
  { title: '🚕 Getting around', lessonIds: [3, 7], pick: ['駅','電車','タクシー','まで行きたいです','右','左','まっすぐ','出口'] },
  { title: '🏨 Hotel', lessonIds: [4], pick: ['予約','パスポート','部屋','Wi-Fiのパスワードは何ですか?','チェックアウト'] },
  { title: '🍜 Eating', lessonIds: [5], pick: ['メニュー','お茶','美味しい','お会計お願いします','肉と魚なしでお願いします','これください'] },
  { title: '🛍 Shopping', lessonIds: [6], pick: ['いくらですか','高い','安い','免税','これください','見ているだけです'] },
  { title: '🤝 Talking to people', lessonIds: [9, 1], pick: ['お名前は何ですか','はじめまして','よろしくお願いします','ベトナムから来ました','少し日本語が話せます','英語を話せますか'] },
  { title: '🚨 Emergency', lessonIds: [8], pick: ['助けて','警察','病院','大使館','私はベトナム人です','パスポートをなくしました'] },
];

// ═════════════════════════════════════════════════════════════════════
// Module registry — what the app actually consumes.
// ═════════════════════════════════════════════════════════════════════

const MODULES = {
  zh: {
    code: 'zh',
    name: 'Mandarin',
    flag: '🇨🇳',
    locale: 'zh-CN',
    tripDate: TRIP_DATE,
    lessons: LESSONS,
    cheatGroups: CHEAT_GROUPS,
  },
  ja: {
    code: 'ja',
    name: 'Japanese',
    flag: '🇯🇵',
    locale: 'ja-JP',
    tripDate: TRIP_DATE_JA,
    lessons: LESSONS_JA,
    cheatGroups: CHEAT_GROUPS_JA,
  },
};

const MODULE_ORDER = ['zh', 'ja'];
const DEFAULT_MODULE = 'zh';
