<script setup lang="ts">
import { isDarkMode } from "../lib"
</script>

<template>
  <div class="form-check form-switch">
    <input
      class="form-check-input"
      type="checkbox"
      role="switch"
      id="flexSwitchCheckDefault"
      v-model="isDarkMode"
    />
  </div>
</template>
