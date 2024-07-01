/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
       
        MONGODB_URI : process.env.MONGODB_URI,
        // FRONTEND_URL: process.env.FRONTEND_URL
    },
    images: {
        domains: ['res.cloudinary.com','cryptologos.cc'],
      },
}

module.exports = nextConfig
