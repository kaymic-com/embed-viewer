<script setup lang="ts">
import GalleryArticle from "../components/GalleryArticle.vue"
import { computed, ref, reactive } from "vue"
import { useRouter, useRoute } from "vue-router"
import { createGallery } from "../lib/galleries"

const router = useRouter()
const route = useRoute()
const { id } = route.params

const gallery = reactive({
  ...JSON.parse(atob(id as string)),
  id: undefined,
})

const saveGallery = () => {
  const { id } = createGallery(gallery)
  router.push(`/${id}`)
}
</script>

<template>
  <!-- <pre>{{ gallery }}</pre> -->

  <teleport to="#navPortal">
    <!-- save -->
    <button @click="saveGallery" class="btn btn-primary" title="Save Gallery">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        class="bi bi-save"
        viewBox="0 0 16 16"
      >
        <path
          d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"
        />
      </svg>
    </button>
  </teleport>

  <GalleryArticle :gallery="gallery" />
</template>
