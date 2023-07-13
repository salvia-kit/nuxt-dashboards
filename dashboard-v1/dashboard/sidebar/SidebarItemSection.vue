<script setup lang="ts">
defineProps({
  name: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="mt-6 md:pl-6">
    <div>
      <div class="mb-10">
        <div class="mb-4 pl-5 text-lg font-medium text-gray-500 lg:pl-6">
          {{ name }}
        </div>
        <slot />
      </div>
    </div>
  </div>
</template>
