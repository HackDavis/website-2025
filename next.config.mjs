/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'widgets.guidestar.org',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
