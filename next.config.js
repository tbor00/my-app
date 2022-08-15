/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['www.kephi.io', 'picsum.photos']
    }
}

module.exports = nextConfig
