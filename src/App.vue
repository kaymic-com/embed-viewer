<script setup lang="ts">
import NavBar from "./components/NavBar.vue"
import { isDarkMode } from "./lib"
</script>

<template>
  <main :class="{ dark: isDarkMode }">
    <NavBar />

    <router-view />
  </main>
</template>

<style lang="scss" src="./assets/main.scss"></style>
