/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    apiUrl:
      process.env.NODE_ENV === "development"
        ? process.env.DEV_API_URL
        : process.env.API_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
