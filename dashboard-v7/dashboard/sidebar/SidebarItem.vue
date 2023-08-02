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
      class="my-2 flex w-full items-center justify-start p-3 text-gray-200 hover:text-white"
      :class="
        route.path === to &&
        'border-l-4 border-white lg:border-l-0 lg:border-r-4'
      "
    >
      <span>
        <slot />
      </span>
      <span class="mx-4 text-sm">
        {{ title }}
      </span>
    </span>
  </RouterLink>
</template>
