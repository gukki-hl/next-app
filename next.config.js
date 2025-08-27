/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.imgix.net",
        pathname: "/**",// 允许该域名下的所有路径
      },
    ],
  },
};

module.exports = nextConfig;
