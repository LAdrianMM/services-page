const path = require('path')

const withSass = require('@zeit/next-sass')

module.exports = withSass({
  /* bydefault config  option Read For More Optios
here https://github.com/vercel/next-plugins/tree/master/packages/next-sass
*/
  cssModules: true,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  sassOptions: {
    mode: 'development',
    entry: {
      theme: './src/assets/scss/theme.scss',
      user: './src/assets/scss/user.scss',
    },
    output: {
      path: path.join(__dirname, 'public/css'),
    },
  },
}

module.exports = nextConfig
