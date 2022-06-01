/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: (process.env.NODE_ENV === 'production' ? 'http://www.singun11.wtf/notion-blog' : '')
}

module.exports = nextConfig
