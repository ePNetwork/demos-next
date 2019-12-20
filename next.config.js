const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')

let config = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/demos-next' : '',
}
config = withCSS(config)
config = withSass(config)

module.exports = config
