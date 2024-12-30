<template>
  <div class="default-layout">
    <nav-bar :show-nav="showNav" />
    <router-view />
    <app-footer ref="footer" />
  </div>
</template>

<script>
import NavBar from "@/components/layouts/Navbar.vue";
import AppFooter from "@/components/layouts/Footer.vue";

export default {
  name: "DefaultLayout",
  components: {
    NavBar,
    AppFooter,
  },
  data() {
    return {
      showNav: true
    }
  },
  mounted() {
    // Create intersection observer for footer
    const observer = new IntersectionObserver(
      ([entry]) => {
        this.showNav = !entry.isIntersecting;
      },
      {
        threshold: 0.1
      }
    );

    // Start observing the footer
    const footer = document.querySelector('.cyber-footer');
    if (footer) {
      observer.observe(footer);
    }
  }
};
</script>
