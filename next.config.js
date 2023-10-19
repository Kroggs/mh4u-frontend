const withAntdLess = require('next-plugin-antd-less')

module.exports = withAntdLess( {
    publicRuntimeConfig: {
        DIRECTUS_API: process.env.DIRECTUS_API
    }
})
