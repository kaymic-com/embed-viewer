import { v4 as uuid } from "uuid"
import { reactive } from "vue"
import { RouteLocationNormalized } from "vue-router"

export const galleries = reactive<IReactiveGalleries>({
  loading: false,
  data: [],
})

export function fetchGalleries(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized
) {
  galleries.loading = true
  try {
    galleries.data = localStorage.galleries
      ? JSON.parse(localStorage.galleries)
      : []
  } catch (error) {
    console.warn(error)
  } finally {
    galleries.loading = false
  }
}

export function saveGalleries() {
  localStorage.galleries = JSON.stringify(galleries.data)
}

export function createGallery(
  gallery: IGallery = {
    nsfw: false,
    col: 6,
    embeds: [],
    createdAt: new Date().toISOString(),
  }
) {
  const _gallery: IGallery = {
    ...gallery,
    createdAt: new Date().toISOString(),
    id: uuid(),
  }
  galleries.data.unshift(_gallery)
  saveGalleries()
  return _gallery
}
