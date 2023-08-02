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
  <RouterLink :to="to">
    <span
      class="my-2 flex w-full items-center justify-start p-4 font-thin"
      :class="[route.path === to ? 'font-medium text-black' : 'text-gray-600']"
    >
      <span>
        <slot />
      </span>
      <span class="mx-4 text-sm font-normal">
        {{ title }}
      </span>
    </span>
  </RouterLink>
</template>
