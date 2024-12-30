<template>
  <nav class="cyber-nav" :class="{ 'nav-hidden': !showNav }">
    <div class="nav-content">
      <!-- Logo/Avatar Section -->
      <router-link to="/home" class="nav-logo">
        <img 
          src="https://github.com/IdrisBouar.png" 
          alt="Idris Bouargoub" 
          class="avatar"
        />
      </router-link>

      <!-- Navigation Links -->
      <div class="nav-links">
        <router-link 
          v-for="(route, index) in routes" 
          :key="index"
          :to="route.path"
          class="nav-link"
          :class="{ 'active': $route.path === route.path }"
        >
          <span class="link-text">{{ route.name }}</span>
          <div class="link-hover-effect"></div>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    showNav: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      routes: [
        { name: 'Home', path: '/home' },  // Keep this as /home
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Contact', path: '/contact' }
      ]
    }
  }
}
</script>

<style scoped>
.cyber-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: rgba(10, 25, 47, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(100, 255, 218, 0.1);
  z-index: 1000;
  padding: 0.5rem 2rem;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.nav-hidden {
  transform: translateY(-100%);
  opacity: 0;
  pointer-events: none;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.nav-logo {
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
}

.nav-logo:hover {
  transform: scale(1.1);
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #64ffda;
  box-shadow: 0 0 10px rgba(100, 255, 218, 0.3);
  transition: all 0.3s ease;
}

.avatar:hover {
  box-shadow: 0 0 20px rgba(100, 255, 218, 0.5);
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  position: relative;
  color: #8892b0;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  overflow: hidden;
}

.link-text {
  position: relative;
  z-index: 1;
}

.link-hover-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(100, 255, 218, 0.1);
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.nav-link:hover {
  color: #64ffda;
  transform: scale(1.1);
}

.nav-link:hover .link-hover-effect {
  transform: translateY(0);
}

.nav-link.active {
  color: #64ffda;
  animation: glow 2s ease-in-out infinite;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #64ffda;
  animation: slideIn 0.3s ease forwards;
}

@keyframes glow {
  0%, 100% {
    text-shadow: 0 0 10px rgba(100, 255, 218, 0.5);
  }
  50% {
    text-shadow: 0 0 20px rgba(100, 255, 218, 0.8);
  }
}

@keyframes slideIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .cyber-nav {
    padding: 0.5rem 1rem;
  }

  .nav-links {
    gap: 1rem;
  }

  .nav-link {
    font-size: 0.9rem;
    padding: 0.5rem;
  }
}

@media (max-width: 480px) {
  .nav-content {
    flex-direction: column;
    height: auto;
    padding: 1rem 0;
  }

  .nav-links {
    margin-top: 1rem;
    gap: 0.5rem;
  }

  .nav-link {
    font-size: 0.8rem;
  }
}
</style>
