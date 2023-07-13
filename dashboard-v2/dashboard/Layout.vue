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
  <div class="base h-screen w-full overflow-hidden lg:p-4">
    <div class="content relative h-screen overflow-hidden lg:rounded-2xl">
      <div class="flex items-start">
        <Overlay />
        <Sidebar mobile-orientation="end" />
        <div
          class="flex h-screen w-full flex-col pl-0 lg:w-[calc(100%-16rem)] lg:space-y-4"
        >
          <TopBar />
          <main
            class="main h-screen overflow-auto px-2 pb-36 pt-4 text-black md:px-4 md:pb-8 lg:mt-4 lg:px-6"
          >
            <slot />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.base:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.72) 0%,
    rgba(255, 255, 255, 0.45) 100%
  );
  -webkit-backdrop-filter: saturate(3);
  backdrop-filter: saturate(3);
}

.base {
  background-image: url("./mac.webp");
  background-size: cover;
  background-position: center;
}

.content {
  background-color: rgb(255 255 255 / 31%);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.main {
  background-color: rgb(255 255 255 / 31%);
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
