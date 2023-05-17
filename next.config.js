/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.licdn.com", "www.gravatar.com", "i.imgur.com"],
  },
};

module.exports = nextConfig;
