<script setup lang="ts">
import { sidebarOpen, closeSidebar } from "./store";
</script>

<template>
  <!-- The overlay will only be visible on small screens to emphasize the focus on sidebar when it is open.-->
  <!--  it also allows to close sidebar on click outside-->
  <div
    :class="
      sidebarOpen &&
      'bg-black fixed h-screen left-0 opacity-40 top-0 w-screen z-30 lg:hidden'
    "
    @click="closeSidebar"
  />
</template>
