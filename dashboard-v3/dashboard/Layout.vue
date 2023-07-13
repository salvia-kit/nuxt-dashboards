<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted, watch } from "vue";

import TopBar from "./TopBar.vue";
import Overlay from "./Overlay.vue";
import Sidebar from "./sidebar/Sidebar.vue";
import { closeSidebar, sidebarOpen } from "./store";

const route = useRoute();

onMounted(() => {
  // set the html tag attribute overflow to hidden when component is mounted
  document.documentElement.style.overflow = "hidden";
});

watch(route, () => {
  // close sidebar on route changes when viewport is less than 1024px
  if (sidebarOpen && window.innerWidth < 1024) {
    closeSidebar();
  }
});
</script>

<!-- lg:w-[calc(100%-16rem)] class get the remained width of the main tag from lg:viewport by subtracting
(the total width by the width of the sidebar component which is w-64 = 16rem)-->
<template>
  <div class="relative h-screen overflow-hidden bg-gray-100 lg:p-4">
    <div class="flex items-start">
      <Overlay />
      <Sidebar mobile-orientation="end" />
      <div
        class="flex h-screen w-full flex-col pl-0 lg:space-y-4"
        :class="sidebarOpen ? 'lg:w-full' : 'lg:pl-4 lg:w-[calc(100%-16rem)]'"
      >
        <TopBar />
        <main
          class="h-screen overflow-auto px-2 pb-36 pt-8 md:pb-8 md:pt-4 lg:pt-0"
        >
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>
