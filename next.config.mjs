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
        hostname: 'thesvg.org',
        pathname: '/icons/whatsapp/default.svg',
      },
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        pathname: '/IMG_0980-DsHOWWDWr2aipqNDO7LyzHkotgSMma.jpeg',
      },
    ],
    unoptimized: true,
  },
}

export default nextConfig
