<script setup lang="ts">
import { ref, onMounted } from "vue";

const collapseRef = ref<HTMLDivElement | null>(null);
const computedHeight = ref("0");
const isActive = ref(false);

const toggle = () => {
  isActive.value = !isActive.value;
};

const initHeight = () => {
  if (collapseRef.value) {
    collapseRef.value.style.height = "auto";
    computedHeight.value = getComputedStyle(collapseRef.value).height;
    collapseRef.value.style.height = "0";
  }
};

onMounted(initHeight);
</script>

<template>
  <div>
    <div
      role="button"
      class="my-2 flex justify-start px-4 py-6 text-sm text-black"
      @click="toggle"
    >
      <slot name="item" />
      <span class="ml-auto">
        <svg
          v-show="isActive"
          xmlns="http://www.w3.org/2000/svg"
          class="mt-1 h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
        <svg
          v-show="!isActive"
          xmlns="http://www.w3.org/2000/svg"
          class="mt-1 h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
    </div>
    <div
      id="collapse"
      ref="collapseRef"
      class="ease -mt-5 overflow-hidden text-gray-600 transition duration-300"
      :style="[isActive ? { height: computedHeight } : {}]"
    >
      <slot name="panel" />
    </div>
  </div>
</template>

<style scoped>
#collapse {
  height: 0;
  overflow: hidden;
  transition: 300ms;
}
</style>
