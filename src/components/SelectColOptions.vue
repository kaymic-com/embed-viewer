<script setup lang="ts">
import { colOptions } from "../lib"

defineProps<{ modelValue: number }>()

const emit =
  defineEmits<{
    (e: "update:modelValue", value: number): void
  }>()

const changeEvent = (e: Event) => {
  emit("update:modelValue", parseInt((e.target as HTMLSelectElement).value))
}
</script>

<template>
  <select :value="modelValue" @change="changeEvent" class="form-control">
    <option v-for="(v, k) in colOptions" :key="`col-coption-${v}`" :value="v">
      {{ k }}
    </option>
  </select>
</template>
