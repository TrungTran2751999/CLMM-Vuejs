const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})
module.exports = {
  devServer:{
    proxy: "http://localhost:1412",
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': null,
      'X-Requested-With': null,
      'Content-Type': 'text/html'
      }
  },

  pluginOptions: {
    vuetify: {}
  }
}
