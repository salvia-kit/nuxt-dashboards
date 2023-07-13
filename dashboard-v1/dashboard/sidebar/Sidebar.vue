<script setup lang="ts">
import { sidebarOpen } from "../store";
import SidebarItems from "./SidebarItems.vue";
import SidebarHeader from "./SidebarHeader.vue";

defineProps({
  mobileOrientation: {
    type: String,
    default: "end",
  },
});

const style = {
  mobileOrientation: {
    start: "left-0",
    end: "right-0",
  },
};
</script>

<template>
  <aside
    class="scrollbar bg-gray-900 overflow-y-auto h-screen top-0 lg:bg-transparent lg:block lg:relative lg:w-64 lg:z-auto"
    :class="[
      style.mobileOrientation[mobileOrientation],
      sidebarOpen ? 'absolute w-8/12 z-40 sm:w-5/12' : 'hidden',
    ]"
  >
    <div class="pb-32 lg:pb-6">
      <SidebarHeader />
      <SidebarItems />
    </div>
  </aside>
</template>

<style scoped>
.scrollbar::-webkit-scrollbar {
  width: 0;
  background: transparent; /* hide sidebar scrollbar on Chrome, Opera and other webkit Browsers*/
}
.scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none; /* hide sidebar scrollbar on Firefox, IE and Edge*/
}
</style>
