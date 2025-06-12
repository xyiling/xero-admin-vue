type EnvType = 'dev' | 'test' | 'prod';
const env = (import.meta.env.MODE as EnvType) || 'prod'; // 防止出现未注入开发环境的情况，默认是 prod
const EnvConfig: Record<EnvType, { baseApi: string; mockApi: string }> = {
    dev: {
        baseApi: 'https://dev.xero.com/',
        mockApi: ''
    },
    test: {
        baseApi: 'https://test.xero.com/',
        mockApi: ''
    },
    prod: {
        baseApi: 'https://xero.com/',
        mockApi: ''
    }
}

export default {
    env,
    mock: true, 
    ...EnvConfig[env]
}