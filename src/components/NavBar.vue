<script setup lang="ts">
import ColorModeSwitch from "./ColorModeSwitch.vue"
</script>

<template>
  <nav class="bg-light">
    <div class="container-fluid py-1">
      <div class="d-flex align-items-center">
        <router-link to="/" class="">
          <img
            src="../assets/logo.png"
            alt=""
            height="32"
            class="d-inline-block align-text-top"
          />
        </router-link>

        <!-- <ColorModeSwitch /> -->

        <div id="navPortal" class="ms-auto d-flex align-items-center gap-2">
          <!--  -->
        </div>
      </div>
    </div>
  </nav>
</template>
