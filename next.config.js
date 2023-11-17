const withAntdLess = require('next-plugin-antd-less')

module.exports = withAntdLess( {
    publicRuntimeConfig: {
        APP_NAME: process.env.APP_NAME,
        DIRECTUS_API: process.env.DIRECTUS_API
    }
})
