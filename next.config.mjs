/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: 'examples',
  assetPrefix: process.env.NEXT_PUBLIC_PREFIX_URL,
  env: {
    prefix_url: process.env.NEXT_PUBLIC_PREFIX_URL || ''
  }
}

export default nextConfig
