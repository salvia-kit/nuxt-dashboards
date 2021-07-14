<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'DashboardProvider',
  provide() {
    const state = {}
    Object.defineProperty(state, 'open', {
      enumerable: true,
      get: () => this.open,
    })

    return { state, toggle: this.toggle }
  },
  data() {
    return {
      open: false,
    }
  },
  watch: {
    $route() {
      // close sidenav when you click on a sidenav item or on route change. it's triggered when viewport is less than 1024px
      // set the html tag overflow to hidden
      if (window.innerWidth < 1024) {
        this.toggle()
        document.documentElement.style.overflow = 'hidden'
      }
    },
  },
  methods: {
    toggle() {
      this.open = !this.open
    },
  },
}
</script>
