const CONFIG = {
  // profile setting (required)
  profile: {
    name: "STARTUP_SEOUL",
    image: "/Removebg Group.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "도전 또 도전",
    bio: "We are startup community",
    email: "newempire.biz@gmail.com",
    linkedin: "",
    github: "",
    instagram: "new_empire7",
  },
  projects: [
    {
      name: `커뮤니티 단톡방`,
      href: "https://open.kakao.com/o/gOLfMFTc",
    },
  ],
  // blog setting (required)
  blog: {
    title: "😊STARTUP_SEOUL😊",
    description: "welcome to startup_seoul!",
  },

  // CONFIG configration (required)
  link: "https://startupseoul.vercel.app",
  since: 2019, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo:"newempire7/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  // cusdis: {
    //enable: false,
    //config: {
     // host: "https://cusdis.com",
      //appid: "", // Embed Code -> data-app-id value
   // },
 // },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
