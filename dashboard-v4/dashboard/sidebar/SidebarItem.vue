<script setup lang="ts">
import { useRoute } from "vue-router";
import { sidebarOpen } from "../store";

defineProps({
  to: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
});
const route = useRoute();
</script>

<template>
  <li>
    <router-link :to="to">
      <div
        class="my-1 flex w-full items-center justify-start p-3 hover:text-white"
      >
        <div
          :class="route.path === to && 'bg-gray-700 rounded-full'"
          class="p-2"
        >
          <span><slot /></span>
        </div>
        <span
          class="mx-4 text-sm whitespace-pre"
          :class="
            sidebarOpen
              ? 'lg:duration-500 lg:ease-in lg:h-auto lg:opacity-100 lg:transition-all lg:w-auto'
              : 'lg:duration-700 lg:ease-out lg:invisible lg:opacity-0 lg:transition-all'
          "
        >
          {{ title }}
        </span>
      </div>
    </router-link>
  </li>
</template>
