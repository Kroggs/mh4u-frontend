const withAntdLess = require('next-plugin-antd-less')

module.exports = withAntdLess( {
    publicRuntimeConfig: {
        APP_NAME: process.env.APP_NAME,
        APP_URL: process.env.APP_URL,
        DIRECTUS_API: process.env.DIRECTUS_API
    }
})
