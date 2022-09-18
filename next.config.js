/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    baseUrl: "https://excuser.herokuapp.com/v1",
  },
};

module.exports = nextConfig;
