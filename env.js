/* eslint-disable @typescript-eslint/no-var-requires */
const { createEnv } = require('@t3-oss/env-nextjs');
const { z } = require('zod');

const env = createEnv({
  server: {
    ANALYZE: z
      .enum(['true', 'false'])
      .optional()
      .transform(function (value) {
        return value === 'true';
      }),
  },
  client: {},
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
  },
});

module.exports = {
  env,
};
