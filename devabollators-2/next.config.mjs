// next.config.js
const nextConfig = {
    output: 'export',
    webpack: (config, { isServer }) => {
      // Only attempt to resolve fs module on the server side
      if (!isServer) {
        config.resolve.fallback = {
          fs: false,
          net: false,
          async_hooks: false,
        };
      }
      return config;
    },
  };
  
  export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;
