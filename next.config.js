/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/notion-blog',
  assetPrefix: (process.env.NODE_ENV === 'production' ? 'http://blog.singun11.wtf' : ''),
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
