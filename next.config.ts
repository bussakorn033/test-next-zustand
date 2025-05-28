import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'] // Use @svgr/webpack to handle SVGs as React components
    });
    return config;
  }
};

export default nextConfig;
