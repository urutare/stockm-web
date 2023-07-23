/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer');
const withPlugins = require('next-compose-plugins');
const { env } = require('./env');

/** @type {import('next').NextConfig} */

const config = withPlugins(
  [
    [
      withBundleAnalyzer({
        enabled: env.ANALYZE,
      }),
    ],
  ],
  {
    images: {
      domains: ['picsum.photos'],
    },
    reactStrictMode: true,
    experimental: { instrumentationHook: true },
    rewrites() {
      return [
        { source: '/healthz', destination: '/api/health' },
        { source: '/api/healthz', destination: '/api/health' },
        { source: '/health', destination: '/api/health' },
        { source: '/ping', destination: '/api/health' },
      ];
    },
  },
);

module.exports = config;
