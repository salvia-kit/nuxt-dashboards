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
  <div class="pl-5">
    <RouterLink :to="to">
      <span class="my-1 inline-flex items-center justify-start p-3 text-black">
        <span
          :class="
            route.path === to
              ? 'font-normal mx-4 text-sm text-blue-600'
              : 'font-light mx-4 text-sm text-gray-900'
          "
        >
          {{ title }}
        </span>
      </span>
    </RouterLink>
  </div>
</template>
