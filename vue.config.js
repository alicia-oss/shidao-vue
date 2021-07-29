  module.exports = {
      devServer: {
          port: 9000,
      },
      configureWebpack: {
          resolve: {
              alias: {
                  '@': '/src',
                  'assets': '@/assets',
                  'common': '@/common',
                  'components': '@/components',
                  'network': '@/network',
                  'views': '@/views',
              }
          }
      }
  }