<template>
  <component :is="currentLayout">
    <router-view />
  </component>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import BlankLayout from '@/layouts/BlankLayout.vue'

export default {
  name: 'App',
  components: {
    DefaultLayout,
    BlankLayout
  },
  computed: {
    currentLayout() {
      const layout = this.$route.meta.layout || 'default'
      return layout === 'blank' ? 'BlankLayout' : 'DefaultLayout'
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  width: 100%;
  position: relative;
}

.nav-hidden {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
