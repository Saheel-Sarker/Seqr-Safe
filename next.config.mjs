/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://keepr-qkrl.onrender.com/api/:path*', // your backend server URL
          },
        ];
      },
};

export default nextConfig;
