/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: 'Tech-Art', // 英雄区文字
  STARTER_HERO_TITLE_2: 'Open a new world with code.', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: 'About us', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL:
    '/about', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: '', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: '', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '', // 英雄区按钮2的图标，不需要则留空

  STARTER_HERO_PREVIEW_IMAGE: 'https://cdn.xyehr.cn/images/banner.jpg', // 产品预览图 ，默认读取public目录下图片

  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: 'About',
  STARTER_NAV_BUTTON_1_URL: '/about',

  STARTER_NAV_BUTTON_2_TEXT: 'Products',
  STARTER_NAV_BUTTON_2_URL: 'https://github.com/TechArt-Studio',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: 'Features', // 特性
  STARTER_FEATURE_TEXT_1: 'Features of Tech-Art Studio Apps', // 特性
  STARTER_FEATURE_TEXT_2:
    ' ', // 特性

  STARTER_FEATURE_1_TITLE_1: 'Free and open source', // 特性1
  STARTER_FEATURE_1_TEXT_1: 'Free and open source on Github.', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: '', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: '', // 特性1

  STARTER_FEATURE_2_TITLE_1: 'Safe', // 特性2
  STARTER_FEATURE_2_TEXT_1: 'It is very secure, uses end-to-end encryption, and the developers cannot view your data.', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: '', // 特性2
  STARTER_FEATURE_2_BUTTON_URL:
    '', // 特性2

  STARTER_FEATURE_3_TITLE_1: 'Private', // 特性3
  STARTER_FEATURE_3_TEXT_1: 'Protect privacy, your private data is stored locally on your device.', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: '', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: '', // 特性3

  STARTER_FEATURE_4_TITLE_1: 'No ads', // 特性4
  STARTER_FEATURE_4_TEXT_1: 'There are no ads on all apps and web pages.', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: '', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: '', // 特性4

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: 'What is Tech-Art?',
  STARTER_ABOUT_TEXT:
    'Tech-Art is a studio founded in China whose main mission is to help protect your privacy.',
  STARTER_ABOUT_BUTTON_TEXT: 'Learn more',
  STARTER_ABOUT_BUTTON_URL: '/about',
  STARTER_ABOUT_IMAGE_1: 'https://cdn.xyehr.cn/images/about-image1.jpg',
  STARTER_ABOUT_IMAGE_2: 'https://cdn.xyehr.cn/images/about-image2.jpg',
  STARTER_ABOUT_TIPS_1: 'Safe',
  STARTER_ABOUT_TIPS_2: 'Private',
  STARTER_ABOUT_TIPS_3: 'and free.',

  // 首页价格区块
  STARTER_PRICING_ENABLE: false, // 价格区块开关
  STARTER_PRICING_TITLE: 'Learn about our pricing',
  STARTER_PRICING_TEXT_1: 'Upgrade',
  STARTER_PRICING_TEXT_2:
    'We have developed a flexible payment model, you can choose according to your needs.',

  STARTER_PRICING_1_TITLE: 'Team Essentials',
  STARTER_PRICING_1_PRICE: '6.99',
  STARTER_PRICING_1_PRICE_CURRENCY: '$',
  STARTER_PRICING_1_PRICE_PERIOD: 'month',
  STARTER_PRICING_1_HEADER: 'Function',
  STARTER_PRICING_1_FEATURES: 'Secure storage,One Captcha Early Access,One Calendar Early Access,One Pass,Easy Note,priority customer service', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: 'Activate Team Essentials',
  STARTER_PRICING_1_BUTTON_URL:
    '',

  STARTER_PRICING_2_TAG: 'Recommend',
  STARTER_PRICING_2_TITLE: 'Team Professional',
  STARTER_PRICING_2_PRICE: '9.99',
  STARTER_PRICING_2_PRICE_CURRENCY: '$',
  STARTER_PRICING_2_PRICE_PERIOD: 'month',
  STARTER_PRICING_2_HEADER: 'Function',
  STARTER_PRICING_2_FEATURES: 'Secure Storage,Plus Plan,One Captcha Early Access,One Calendar Early Access,One Pass,Easy Note,Priority Support,Secure Core Server', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: 'Activate Team Professional',
  STARTER_PRICING_2_BUTTON_URL:
    '',

  STARTER_PRICING_3_TITLE: 'Team Advanced',
  STARTER_PRICING_3_PRICE: '12.99',
  STARTER_PRICING_3_PRICE_CURRENCY: '$',
  STARTER_PRICING_3_PRICE_PERIOD: 'month',
  STARTER_PRICING_3_HEADER: 'Function',
  STARTER_PRICING_3_FEATURES: 'Secure Storage,Plus Plan, One Captcha Early Access,One Calendar Early Access,One Pass,Easy Note,Priority Support,Ad Blocking and Security,Secure Core Server', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: 'Activate Team Advanced',
  STARTER_PRICING_3_BUTTON_URL:
    '',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: false, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: '用户反馈',
  STARTER_TESTIMONIALS_TEXT_1: '我们的用户怎么说',
  STARTER_TESTIMONIALS_TEXT_2:
    '数千位站长选择用NotionNext搭建他们的网站,通过帮助手册、交流社群以及技术咨询，大家成功上线了自己的网站',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '感谢大佬的方法。之前尝试过Super、Potion等国外的第三方平台，实现效果一般，个性化程度远不如这个方法，已经用起来了！ ',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Ryan_G',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Ryan`Log 站长',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://blog.gaoran.xyz/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '很喜欢这个主题，本代码小白用三天台风假期搭建出来了，还根据大佬的教程弄了自定义域名，十分感谢，已请喝咖啡~',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Asenkits',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '阿森的百宝袋 站长',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://asenkits.top/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '呜呜呜，经过一个下午的努力，终于把博客部署好啦，非常感谢Tangly1024大佬的框架和教程，这是我有生之年用过的最好用的博客框架┭┮﹏┭┮。从今之后，我就可以在自己的博客里bb啦，( •̀ ω •́ )y ',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F6c096b44-beb9-48ee-8f92-1efdde47f3a3%2F338962f1-d352-49c7-9a1b-746e35a7005c%2Fhf.png?table=block&id=ce5a48a9-d77a-4843-a3d9-a78cd4f794ce&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'DWIND',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '且听风吟 站长',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://www.dwind.top/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '感谢提供这么好的项目哈哈 之前一直不知道怎么部署(别的项目好难好复杂)这个相对非常简单 新手非常友好哦',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd52f6766-3e32-4c3d-8529-46e1f214360f%2Ffavicon.svg?table=collection&id=7d76aad5-a2c4-4d9a-887c-c7913fae4eed&width=400',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '迪升disheng ',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'AI资源分享 Blog',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://blog.disheng.org/'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '灰常感谢大佬的博客项目，能将博客和notion结合起来，这一直是我挺期待的博客模式。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fafb21381-f51b-4fd0-9998-800dbeb64dbe%2Favatar.png?table=block&id=195935d2-0d8d-49fc-bd81-1db42ee50840&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'AnJhon',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Anjhon`s Blog 站长',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://www.anjhon.top'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: '用好久了，太感谢了',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4f391d7-7d65-4c05-a82c-c6e2c40f06e4%2Fa2a7641a26b367608c6ef28ce9b7e983_(2).png?table=block&id=a386eb0e-4c07-4b18-9ece-bba4e79ce21c&spaceId=6c096b44-beb9-48ee-8f92-1efdde47f3a3&width=100&userId=27074aef-7216-41ed-baef-d9b53addd870&cache=v2',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'LUCEN',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'LUCEN考验辅导 站长',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://www.lucenczz.top/'
    }
  ],

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: 'FAQ',
  STARTER_FAQ_TEXT_1: 'Have any questions? See here.',
  STARTER_FAQ_TEXT_2: 'We have collected common user questions.',

  STARTER_FAQ_1_QUESTION: 'It is free?',
  STARTER_FAQ_1_ANSWER:
    'Yes, it is free, ad-free, and open source.',

  STARTER_FAQ_2_QUESTION: 'Why is it so safe?',
  STARTER_FAQ_2_ANSWER:
    'It uses end-to-end encryption, and your data is stored locally on your device and cannot be viewed by us.',

  STARTER_FAQ_3_QUESTION: 'Is it ad-free?',
  STARTER_FAQ_3_ANSWER:
    'Yes, we believe that only without ads can we give users the best experience.',

  STARTER_FAQ_4_QUESTION: 'Is the data encrypted in plain text?',
  STARTER_FAQ_4_ANSWER:
    'No, we use end-to-end and obfuscated encryption when you request our website/app.',

  // 团队成员区块
  STARTER_TEAM_ENABLE: true, // 团队成员区块开关
  STARTER_TEAM_TITLE: 'Our Team',
  STARTER_TEAM_TEXT_1: 'Our Developer Team',
  STARTER_TEAM_TEXT_2:
    'Tech-Art is composed of many programming enthusiasts, thanks to every contributor.',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR:
        'https://cdn.xyehr.cn/images/121920485.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Happyleibniz',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Founder & Developer'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: 'https://cdn.xyehr.cn/images/Evan.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Evan Huang',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Founder & Marketing & Developer'
    },
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: 'Our Blog',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: 'Press and Media',
  STARTER_BLOG_TEXT_2:
    'Here we will release the latest news about Tech-Art Studio, including new trends, new future plans, and new features.',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: 'Contact us',
  STARTER_CONTACT_TEXT: 'Tell us about your problem',
  STARTER_CONTACT_LOCATION_TITLE: 'Our Location',
  STARTER_CONTACT_LOCATION_TEXT: 'China',
  STARTER_CONTACT_EMAIL_TITLE: 'How can we help you?',
  STARTER_CONTACT_EMAIL_TEXT: 'www@xyehr.cn',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://airtable.com/embed/app4kvVeOe2p7NIIf/pagTgearHfOHwZDOk/form', // 基于NoteForm创建，将留言数据存在Notion中
  //   自定义留言表单，以下几个配置暂时废弃
  //   STARTER_CONTACT_MSG_TITLE: '向我们留言',
  //   STARTER_CONTACT_MSG_NAME: '姓名',
  //   STARTER_CONTACT_MSG_EMAIL: '邮箱地址',
  //   STARTER_CONTACT_MSG_PHONE: '联系电话',
  //   STARTER_CONTACT_MSG_TEXT: '消息内容',
  //   STARTER_CONTACT_MSG_SEND: '发送消息',
  //   STARTER_CONTACT_MSG_THANKS: '感谢您的留言',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: false, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],

  STARTER_FOOTER_SLOGAN: 'Open a new world with code.',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: 'Products',
      LINK_GROUP: [
        {
          TITLE: 'One Captcha',
          URL: '/blog/one-captcha' 
        },
        {
          TITLE: 'EAuth',
          URL: '/blog/eauth'
        },
        {
          TITLE: 'Open Wallet',
          URL: '/blog/open-wallet'
        },
        {
          TITLE: 'Mail',
          URL: '/blog/send-mail'
        },
        {
          TITLE: 'Easy Note',
          URL: 'https://easynote.us.kg'
        }
      ]
    },
    {
      TITLE: 'Team',
      LINK_GROUP: [
        {
          TITLE: 'About us',
          URL: '/about'
        },
        {
          TITLE: 'Join us',
          URL: '/join-us'
        },
        {
          TITLE: 'Developer Center',
          URL: 'https://x.com/TechArt_Dev'
        },
        { 
          TITLE: 'Open Source', 
          URL: '/open-source'
        },
        {
          TITLE: 'Sustainability',
          URL: '/sustainability'
        }
      ]
    },
    {
      TITLE: 'Resource',
      LINK_GROUP: [
        {
          TITLE: 'Press and Media',
          URL: '/archive'
        },
        {
          TITLE: 'Contact us',
          URL: '/contact-us'
        },
        {
          TITLE: 'Help & Docs',
          URL: 'https://docs.xyehr.cn/'
        },
        {
          TITLE: 'Live Help',
          URL: 'mailto:www@xyehr.cn'
        }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: 'Latest Post',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: 'Privacy Policy',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/legal/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: 'Cookie Policy',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legal/cookie-policy',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: 'Terms of Use',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/legal/terms-of-use',

  // 404页面的提示语
  STARTER_404_TITLE: '我们似乎找不到您要找的页面。',
  STARTER_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  STARTER_404_BACK: '回到主页',

  STARTER_POST_REDIRECT_ENABLE: false, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: '', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
