/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'http://localhost:5000/api/:path*', // your backend server URL
          },
          {
            source: '/',
            destination: '/dashboard',
            permanent: false,
            has: [
              {
                type: 'cookie',
                key: 'auth0.is.authenticated',
                value: 'true',
              },
            ],
          },
        ];
      },
};

export default nextConfig;
