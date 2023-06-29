/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["media.licdn.com", "www.gravatar.com", "i.imgur.com", "d34oo2ynf8ecvf.cloudfront.net"],
  },
};

module.exports = nextConfig;
