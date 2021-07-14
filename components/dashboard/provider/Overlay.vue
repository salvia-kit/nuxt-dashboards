<template>
  <!-- The overlay will only be visible on small screens to emphasize the focus on the side navigation when it is open.-->
  <!--  it also allows to close side navigation when you click outside-->
  <div
    :class="
      state.open &&
      'bg-black fixed h-screen left-0 opacity-40 top-0 w-screen z-30 lg:hidden'
    "
    @click="toggle"
  />
</template>

<script>
export default {
  name: 'Overlay',
  inject: ['state', 'toggle'],
}
</script>
