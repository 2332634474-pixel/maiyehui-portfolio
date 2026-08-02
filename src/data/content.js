// =============================================================
//  内容数据层 —— 所有文字与图片路径集中在此，方便替换
//  替换说明：改这里的文字即可，无需动组件；图片放在 /public/images
//  图片路径以 "/" 开头，指向 public 目录（例如 /images/id-photo.jpg）
// =============================================================

// 站点级信息（导航、首屏）
export const site = {
  name: '麦业辉',
  nameEn: 'MAI YEHUI',
  // 首屏一句话主张（不要写个人爱好/审美偏好，气质靠设计表达）
  tagline: '把复杂的东西，讲清楚，也做出来。',
  // 副标题/小字说明
  subtitle: '产品运营 · 用户运营 · AI 产品运营',
  // 顶部导航锚点（id 需与各 section 的 id 对应）
  nav: [
    { id: 'hero', label: '首页' },
    { id: 'about', label: '关于' },
    { id: 'capabilities', label: '能力' },
    { id: 'experience', label: '经历' },
    { id: 'projects', label: '项目' },
    { id: 'thinking', label: '思考' },
    { id: 'contact', label: '联系' },
  ],
}

// 关于区
export const about = {
  photo: '/images/id-photo.jpg',
  // 第一人称进化故事，分两段，平实克制
  paragraphs: [
    '我本科读的是医学检验技术。在检验科最训练我的，是两件朴素的事：任何结论都要有证据，任何操作都要有标准流程。这种「先看清楚、再下判断」的习惯，后来一直跟着我。',
    '后来去做礼品零售，我第一次意识到，「把对的东西递给对的人」需要的不只是专业，还有对人的观察、沟通和信任。再之后我一个人做起了闲鱼店铺，从选品、拍摄、写详情页到客服售后全包，还用小红书做内容把流量引过来——一个人跑通了一个小小的增长闭环。现在，我想把这几段经历里共通的东西，用在产品运营、用户运营，尤其是 AI 产品运营上。',
  ],
  facts: [
    { label: '求职方向', value: '产品运营 / 用户运营 / AI 产品运营' },
    { label: '现居', value: '湖南 · 长沙' },
    { label: '邮箱', value: 'yehuimai2@gmail.com' },
  ],
}

// 能力地图（四个互相连接的能力簇，而非罗列列表）
export const capabilities = [
  {
    id: 'verify',
    index: '01',
    title: '分析与验证',
    desc: '检验科训练出的底层操作系统：结论要可验证，流程要标准化。',
    items: ['证据思维', '质量控制', '数据记录与复盘', '标准化流程'],
  },
  {
    id: 'sell',
    index: '02',
    title: '销售与沟通',
    desc: '把价值讲清楚，把信任建立起来，把结果拿到。',
    items: ['用户洞察', '个性化推荐', '建立信任', '成交与跟进'],
  },
  {
    id: 'grow',
    index: '03',
    title: '内容与增长',
    desc: '用内容获取自然流量，并把它转化为真实的成交。',
    items: ['小红书内容创作', '自然流量获取', '详情页与转化', '私域引流'],
  },
  {
    id: 'ai',
    index: '04',
    title: 'AI 工具杠杆',
    desc: '把 AI 当成日常杠杆，放大学习与执行效率。',
    items: ['ChatGPT / Claude', '信息整理与摘要', '内容辅助产出', '工作流提效'],
  },
]

// 经历时间线（每段配一句「带走了什么能力」）
export const experience = [
  {
    period: '2021 – 2025',
    title: '长沙医学院',
    role: '医学检验技术 · 本科',
    points: ['系统学习医学检验理论与实验操作', '建立证据导向与标准化流程意识'],
    takeaway: '学会了「先看清楚，再下判断」。',
  },
  {
    period: '2024.06 – 2025.04',
    title: '长沙市第四医院',
    role: '检验科 · 实习',
    points: ['样本检测、质量控制、数据记录', '仪器维护与标准化流程执行'],
    takeaway: '把严谨变成一种本能。',
  },
  {
    period: '2025.08 – 2026.03',
    title: '长沙微缤贸易有限公司',
    role: '销售专员 / 预选副店长',
    points: ['负责礼品与精品零售的客户接待与销售转化', '入职第二个月销售业绩进入门店前三', '半年内晋升预选副店长，参与带教与陈列优化'],
    takeaway: '理解了「人」才是转化的核心。',
  },
]

// 精选项目（视觉重心：闲鱼电商增长闭环）
export const projects = [
  {
    id: 'xianyu',
    name: '个人闲鱼电商 · 增长闭环',
    summary:
      '独立运营至今，用小红书原创内容把自然流量引到闲鱼，从选品到售后全包，跑通一个完整的「内容 → 引流 → 成交 → 复购」闭环。',
    // 数据卡：value 支持字符串；suffix 可选
    metrics: [
      { value: '309', label: '成交单量' },
      { value: '¥3.3万', label: '累计交易额' },
      { value: '98%', label: '店铺好评率' },
      { value: '500+', label: '内容引流咨询' },
      { value: '15', label: '小红书内容篇数' },
      { value: '180+', label: '小红书粉丝' },
    ],
    // 方法步骤（卡片式）
    method: [
      { step: '选品', text: '围绕鞋类 / 饰品筛选有需求、有价差的商品。' },
      { step: '内容', text: '在小红书发布原创内容，靠自然流量获取关注。' },
      { step: '引流', text: '把咨询从私信引导至闲鱼，降低信任成本。' },
      { step: '成交', text: '用详情页与客服承接，客单价落在 150–210 区间。' },
      { step: '复购', text: '以 98% 好评率沉淀稳定复购。' },
    ],
    reflection:
      '小成本也能跑通增长闭环：内容即流量，信任即转化。最难的不是开店，而是持续把「对的商品」用「对的方式」讲给「对的人」。',
    // 项目截图（public/images 下）
    images: [
      { src: '/images/xhs-comments.jpg', caption: '小红书评论区：持续收到「怎么买 / 求链接」咨询' },
      { src: '/images/xhs-dm.jpg', caption: '私信列表：内容带来的真实咨询量' },
      { src: '/images/xianyu-reviews.jpg', caption: '闲鱼评价区：98% 好评、稳定复购' },
      { src: '/images/xianyu-shop.jpg', caption: '闲鱼店铺首页：鞋类 / 饰品选品' },
      { src: '/images/xianyu-earnings.jpg', caption: '闲鱼收益：累计成交 309 单' },
    ],
  },
]

// 思考区（按你的要求先空着，仅保留占位文案，不写假文章）
export const thinking = {
  placeholder: '思考区即将上线 —— 关于设计、AI 与商业的一些真实笔记。',
  posts: [], // 之后在此填入 { title, excerpt, date, href }
}

// 联系区
export const contact = {
  email: 'yehuimai2@gmail.com',
  emailAlt: '2332634474@qq.com',
  // 简历 PDF 链接（放在 public/ 下后填 '/resume.pdf'，暂无则留 '#'）
  resumeUrl: '/resume.pdf',
  note: '我正在寻找产品运营 / 用户运营 / AI 产品运营方向的机会，也欢迎内容、电商与品牌方向的合作。',
}
