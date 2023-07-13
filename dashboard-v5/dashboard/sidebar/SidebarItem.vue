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
      <span
        class="my-2 flex w-full items-center justify-start p-4 hover:text-white"
        :class="
          route.path === to
            ? 'font-medium text-green-400 hover:text-green-400'
            : 'text-white'
        "
      >
        <span><slot /></span>
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
      </span>
    </router-link>
  </li>
</template>
