const siteConfig = {
  title: 'Suspense Demo',
  description: 'Next.js + Suspense demo application',
  url: process.env.NEXT_PUBLIC_BASE_URL,
  twitterUsername: process.env.NEXT_PUBLIC_TWITTER_USERNAME,
  email: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
  socials: {
    GitHub: `https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
    Twitter: `https://twitter.com/${process.env.NEXT_PUBLIC_TWITTER_USERNAME}`,
  },
  themeColor: '#000000',
  backgroundColor: '#FFFFFF',
}

export default siteConfig
