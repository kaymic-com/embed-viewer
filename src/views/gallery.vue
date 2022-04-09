<script setup lang="ts">
import GalleryArticle from "../components/GalleryArticle.vue"
import { computed, onMounted, ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import { galleries, saveGalleries } from "../lib/galleries"
import Modal from "bootstrap/js/dist/modal"

const router = useRouter()
const route = useRoute()
const { id } = route.params

const gallery = computed(() => galleries.data.find((g) => g.id === id))
const base64 = computed(() => btoa(JSON.stringify(gallery.value)))

const embeds = computed(() => gallery.value?.embeds || [])

watch(
  () => embeds.value,
  () => {
    if (!embeds.value.length) return
    for (let index = 0; index < embeds.value.length; index++) {
      if (!embeds.value[index]) embeds.value.splice(index, 1)
    }
  },
  { deep: true }
)
watch(() => gallery.value, saveGalleries, { deep: true })

const updateOrder = (from: number, to: number) => {
  if (!embeds.value.length) return
  const el = embeds.value[from]
  embeds.value.splice(from, 1)
  embeds.value.splice(to, 0, el)
}

const modal = ref()
const bsModal = ref<Modal | undefined>()

onMounted(() => {
  bsModal.value = new Modal(modal.value)
  if (embeds.value.length === 0) {
    bsModal.value.show()
  }
})

const deleteGallery = () => {
  if (gallery.value && confirm("Are you sure?")) {
    bsModal.value?.hide()
    const index = galleries.data.indexOf(gallery.value)
    galleries.data.splice(index, 1)
    saveGalleries()
    router.push("/")
  }
}

const removeEmbed = (index: number) => {
  if (confirm("Are you sure?")) {
    embeds.value.splice(index, 1)
  }
}
</script>

<template>
  <teleport to="#navPortal">
    <!-- edit -->
    <button class="btn btn-primary" @click="bsModal?.show()" title="Edit">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        class="bi bi-pencil"
        viewBox="0 0 16 16"
      >
        <path
          d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"
        />
      </svg>
    </button>
    <!-- share -->
    <router-link
      :to="`/a/${base64}`"
      class="btn btn-outline-primary"
      title="Share"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        class="bi bi-share"
        viewBox="0 0 16 16"
      >
        <path
          d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
        />
      </svg>
    </router-link>
    <!-- delete -->
    <button
      @click="deleteGallery"
      class="btn btn-outline-danger"
      title="Delete"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        class="bi bi-trash"
        viewBox="0 0 16 16"
      >
        <path
          d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
        />
        <path
          fill-rule="evenodd"
          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
        />
      </svg>
    </button>
  </teleport>

  <!-- Modal -->
  <div
    class="modal fade"
    id="modal"
    ref="modal"
    tabindex="-1"
    aria-labelledby="modalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalLabel">Edit Gallery</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div v-if="gallery" class="modal-body">
          <div class="form-check">
            <!-- nsfw -->
            <input
              class="form-check-input"
              type="checkbox"
              v-model="gallery.nsfw"
              id="nsfw"
            />
            <label class="form-check-label" for="nsfw"> NSFW </label>
          </div>
          <hr />

          <!-- embeds -->
          <div
            v-for="(n, i) in embeds.length + 1"
            :key="i"
            class="d-flex gap-1 align-items-center justify-content-end mb-2"
          >
            <input type="text" v-model="embeds[i]" class="form-control" />

            <!-- remove -->
            <button
              @click="removeEmbed(i)"
              class="btn btn-outline-danger btn-sm"
              title="Delete"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                />
                <path
                  fill-rule="evenodd"
                  d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                />
              </svg>
            </button>

            <!-- top -->
            <button
              @click="updateOrder(i, 0)"
              class="btn btn-outline-secondary btn-sm"
              title="Delete"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-chevron-double-up"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
                />
                <path
                  fill-rule="evenodd"
                  d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                />
              </svg>
            </button>
            <!-- up -->
            <button
              @click="updateOrder(i, i - 1)"
              class="btn btn-outline-secondary btn-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-chevron-up"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                />
              </svg>
            </button>
            <!-- down -->
            <button
              @click="updateOrder(i, i + 1)"
              class="btn btn-outline-secondary btn-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
            <!-- bottom -->
            <button
              @click="updateOrder(i, embeds.length - 1)"
              class="btn btn-outline-secondary btn-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-chevron-double-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
                <path
                  fill-rule="evenodd"
                  d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="modal-footer d-flex justify-content-between">
          <!-- delete -->
          <button
            @click="deleteGallery"
            class="btn btn-outline-danger"
            title="Delete"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
              />
              <path
                fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </button>

          <!--  -->
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>

  <GalleryArticle v-if="gallery" :gallery="gallery" />
</template>
