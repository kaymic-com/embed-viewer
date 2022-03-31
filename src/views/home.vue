<script setup lang="ts">
import { reactive } from "@vue/reactivity"
import { galleries, createGallery } from "../lib/galleries"
import SelectColOPtions from "../components/SelectColOptions.vue"
import { useRouter } from "vue-router"
import { colOptions } from "../lib"

const router = useRouter()

const newGallery = async () => {
  const { id } = await createGallery()
  router.push(`/${id}`)
}
</script>

<template>
  <teleport to="#navPortal">
    <!-- new -->
    <button @click="newGallery" class="btn btn-primary" title="Add Gallery">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        class="bi bi-plus-lg"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
        />
      </svg>
    </button>
  </teleport>

  <div class="container py-5">
    <div class="list-group list-group-flush">
      <router-link
        v-for="gallery in galleries.data"
        :key="gallery.id"
        :to="`/${gallery.id}`"
        class="
          list-group-item list-group-item-action
          text-center text-secondary
        "
      >
        {{ new Date(gallery.createdAt).toLocaleString() }}
        -
        {{ gallery.embeds.length }} embed(s)

        <svg
          v-if="gallery.nsfw"
          title="NSFW"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-exclamation-triangle text-danger"
          viewBox="0 0 16 16"
        >
          <path
            d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
          />
        </svg>
      </router-link>
    </div>
  </div>
</template>
