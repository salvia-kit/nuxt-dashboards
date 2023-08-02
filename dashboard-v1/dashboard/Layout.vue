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
  <div class="background h-screen w-full overflow-hidden lg:p-4">
    <div class="content relative h-screen overflow-hidden lg:rounded-2xl">
      <div class="flex items-start">
        <Overlay />
        <Sidebar mobile-orientation="end" />
        <div
          class="flex h-screen w-full flex-col pl-0 lg:w-[calc(100%-16rem)] lg:space-y-4"
        >
          <TopBar />
          <main class="main h-screen px-2 pb-36 pt-4 md:px-4 md:pb-8 lg:px-6">
            <slot />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-image: url("./mac.webp");
  background-position: center;
  background-size: cover;
}

.content {
  background-color: rgba(16 18 27 / 40%);
  backdrop-filter: blur(24px);
}

.main {
  color: #f9fafb;
  background-color: rgba(16 18 27 / 40%);
  overflow: auto;
}

.main::-webkit-scrollbar {
  width: 6px;
  border-radius: 10px;
}

.main::-webkit-scrollbar-thumb {
  background: rgb(1 2 3 / 40%);
  border-radius: 10px;
}
</style>
