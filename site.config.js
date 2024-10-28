const CONFIG = {
  // profile setting (required)
  profile: {
    name: "북치기박치기",
    image: "/New Empire7 Logo.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "부자가 되는 시스템을 알아봅시다.",
    bio: "We are book community",
    email: "newempire.biz@gmail.com",
    linkedin: "",
    github: "",
    instagram: "",
  },
  projects: [
    {
      name: "북치기박치기 소모임방",
      href: "https://somoim.friendscube.com/g/7468fc88-86e9-11ef-9964-0a7b4bb892f51",
    },
  ],
  // blog setting (required)
  blog: {
    title: "😊북치기박치기😊",
    description: "북치기박치기에 오신 것을 환영합니다",
  },

  // CONFIG configration (required)
  link: "https://bookchigibakchigi.vercel.app",
  since: 2021, // If leave this empty, current year will be used.
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
  cusdis: {
    enable: true,
    config: {
     host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
