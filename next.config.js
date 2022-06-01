/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: (process.env.NODE_ENV === 'production' ? 'http://www.singun11.wtf/notion-blog' : ''),
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
    }
  },
  images: {
    loader: 'akamai',
    path: '/',
    domains: [
      'www.singn11.wtf',
      'singun11.notion.site'
    ]
  }
}

module.exports = nextConfig
