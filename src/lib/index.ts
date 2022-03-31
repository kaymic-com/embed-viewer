import { ref, watch } from "vue"

export const isDarkMode = ref<boolean>(false)

watch(isDarkMode, () => {
  isDarkMode.value
    ? document.body.classList.add("dark")
    : document.body.classList.remove("dark")
})

export const colOptions = {
  "-1": 0,
  "1": 12,
  "2": 6,
  "3": 4,
  "4": 3,
  "6": 2,
  "12": 1,
}
