import { createApp } from "vue"
import App from "./App.vue"
import VueGtag, { pageview } from "vue-gtag"

import { router } from "./router"

router.afterEach((to) => {
  pageview({ page_path: to.fullPath, page_title: to.name?.toString() })
})

createApp(App)
  .use(router)
  .use(VueGtag, {
    config: {
      id: "G-FK8QWQRYS2",
    },
  })
  .mount("#app")
