/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ["media.licdn.com", "www.gravatar.com", "i.imgur.com", "d34oo2ynf8ecvf.cloudfront.net"],
  },
};

module.exports = nextConfig;
