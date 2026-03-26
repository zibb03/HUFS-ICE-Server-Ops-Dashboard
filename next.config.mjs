/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      // better-sqlite3 네이티브 모듈을 webpack 번들에서 제외
      config.externals = [...(config.externals ?? []), 'better-sqlite3']
    }
    return config
  },
}
export default nextConfig
