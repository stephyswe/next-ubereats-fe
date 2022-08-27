/** @type {import('next').NextConfig} */

const env = {
  GOOGLE_API: process.env.GOOGLE_API,
  LOCAL_GRAPHQL: process.env.LOCAL_GRAPHQL,
  HEROKU_GRAPHQL: process.env.HEROKU_GRAPHQL,
  LOCALSTORAGE_TOKEN: process.env.LOCALSTORAGE_TOKEN,
};

module.exports = {
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: false,
  env,
  images: {
    domains: ['tb-static.uber.com', 'cn-geo1.uber.com'],
  },

  // Uncoment to add domain whitelist
  // images: {
  //   domains: [
  //     'res.cloudinary.com',
  //   ],
  // },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};
