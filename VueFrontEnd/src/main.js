import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import route from './index'
import store from './store'

loadFonts()

createApp(App)
  .use(vuetify)
  .use(route)
  .use(store)
  .mount('#app')
