<script setup lang="ts">
defineProps({
  name: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="mb-12">
    <div class="mb-6 pl-5 font-thin uppercase text-white lg:pl-6">
      {{ name }}
    </div>
    <slot />
  </div>
</template>
