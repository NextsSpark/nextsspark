/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['localhost', 'nextsspark.com'],
  },
  swcMinify: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
