/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // images: {
  //   domains: ['res.cloudinary.com'],
  // },
  env: {
    CUSTOM_API_URL: 'https://api.example.com',
  },
};

export default nextConfig;
