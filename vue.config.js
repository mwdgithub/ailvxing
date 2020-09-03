module.exports={
    configureWebpack:{
        resolve:{
            extentsions:[],
            alias:{
                // '@':'src'
                // 别名配置
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views',
            }
        }
    }
}