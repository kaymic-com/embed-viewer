import { createRouter, createWebHashHistory } from "vue-router"
import { fetchGalleries } from "./lib/galleries"

import HomeView from "./views/home.vue"
import GalleryView from "./views/gallery.vue"
import PermaGalleryView from "./views/permaGallery.vue"

export const routes = [
  {
    name: "Home",
    path: "/",
    component: HomeView,
    beforeEnter: fetchGalleries,
  },
  {
    name: "Gallery",
    path: "/:id",
    component: GalleryView,
    beforeEnter: fetchGalleries,
  },
  {
    name: "PermaGallery",
    path: "/a/:id",
    component: PermaGalleryView,
    // beforeEnter: fetchGalleries,
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
