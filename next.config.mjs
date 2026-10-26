/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    agentUpgrade: 'security',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        pathname: '/IMG_0980-YpA6BVQaYkgR46UW0ZIgJs8T9XpGfv.jpeg',
      },
    ],
    unoptimized: true,
  },
}

export default nextConfig
