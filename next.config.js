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
  // https://nextjs.org/docs/api-reference/next.config.js/custom-page-extensions#including-non-page-files-in-the-pages-directory
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],

  reactStrictMode: false,
  env,
  images: {
    domains: ['tb-static.uber.com', 'cn-geo1.uber.com'],
  },

  // Uncomment to add domain whitelist
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
