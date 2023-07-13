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
        class="my-2 flex w-full items-center justify-start p-4 text-sm hover:text-white"
        :class="route.path === to ? 'font-medium text-white' : 'text-gray-400'"
      >
        <span>
          <slot />
        </span>
        <span class="mx-4">
          {{ title }}
        </span>
      </span>
    </router-link>
  </li>
</template>
