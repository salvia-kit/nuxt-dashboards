<script setup lang="ts">
import { useRoute } from "vue-router";

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
        class="my-2 flex w-full items-center justify-start p-4 font-thin uppercase text-gray-500 transition-colors duration-200 lg:hover:text-blue-500"
        :class="
          route.path === to &&
          'bg-gradient-to-r border-r-4 border-blue-500 border-r-4 border-blue-500 from-white to-blue-100 text-blue-500'
        "
      >
        <span>
          <slot />
        </span>
        <span class="mx-4 text-sm font-normal">
          {{ title }}
        </span>
      </span>
    </router-link>
  </li>
</template>
