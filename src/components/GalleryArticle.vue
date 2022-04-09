<script setup lang="ts">
import SelectColOptions from "./SelectColOptions.vue"
import { ref } from "vue"

defineProps<{ gallery: IGallery }>()

const fullscreen = ref<HTMLElement>()
const goFullscreen = () => {
  fullscreen.value?.requestFullscreen()
}
</script>

<template>
  <article v-if="gallery" class="container-fluid py-5">
    <!-- <pre>{{ gallery }}</pre> -->

    <div
      ref="fullscreen"
      class="row g-0 align-items-center justify-content-center"
    >
      <div
        v-for="(embed, i) in gallery.embeds"
        :key="i"
        class="col"
        :class="{ [`col-${gallery.col}`]: gallery.col !== 0 }"
      >
        <div class="ratio ratio-16x9">
          <iframe :src="embed" frameborder="0"></iframe>
        </div>
      </div>
    </div>
  </article>

  <teleport v-if="gallery" to="#navPortal">
    <SelectColOptions v-model="gallery.col" title="Columns Per Row" />

    <!-- fullscreen -->
    <button
      @click.prevent="goFullscreen"
      class="btn btn-dark"
      title="Fullscreen"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        class="bi bi-arrows-fullscreen"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"
        ></path>
      </svg>
    </button>
  </teleport>
</template>
