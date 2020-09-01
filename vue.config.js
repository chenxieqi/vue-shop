module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/api':{
                target:'http://mall-pre.springboot.cn',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            }
        }
    },
    productionSourceMap:false,
    chainWebpack:config => {
        config.plugin.delete('prefetch')
    }
}