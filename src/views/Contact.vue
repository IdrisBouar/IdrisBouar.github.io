<template>
  <div class="contact-container">
    <div class="cyber-grid"></div>
    
    <div class="contact-card" v-animate-on-scroll>
      <!-- Profile Section -->
      <div class="profile-section fade-in">
        <div class="profile-image-container">
          <img 
            :src="personalData.avatar" 
            :alt="personalData.name" 
            class="profile-image"
          />
          <div class="glow-effect"></div>
        </div>
        <h1 class="name glow-hover">{{ personalData.name }}</h1>
        <p class="title">{{ personalData.title }}</p>
      </div>

      <!-- Contact Links -->
      <div class="contact-links fade-in" style="--delay: 0.3s">
        <a :href="`mailto:${personalData.contact.email}`" class="contact-item glow-hover">
          <i class="fas fa-envelope"></i>
          <span>{{ personalData.contact.email }}</span>
        </a>
        
        <a :href="`tel:${personalData.contact.phone}`" class="contact-item glow-hover">
          <i class="fas fa-phone"></i>
          <span>{{ personalData.contact.phone }}</span>
        </a>

        <div class="contact-item glow-hover">
          <i class="fas fa-map-marker-alt"></i>
          <span>{{ personalData.location }}</span>
        </div>

        <!-- Social Links -->
        <div class="social-links fade-in" style="--delay: 0.6s">
          <a v-for="(url, platform) in personalData.contact" 
             :key="platform"
             v-if="isValidSocialPlatform(platform)"
             :href="url"
             target="_blank"
             class="social-btn glow-hover">
            <i :class="`fab fa-${platform}`"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { personalData } from '@/config/personalData'

export default {
  name: 'Contact',
  data() {
    return {
      personalData
    }
  },
  methods: {
    isValidSocialPlatform(platform) {
      return ['github', 'linkedin', 'twitter', 'stackoverflow'].includes(platform)
    }
  }
}
</script>

<style scoped>
.contact-container {
  min-height: 100vh;
  background: #0a192f;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  position: relative;
  overflow: hidden;
}

.cyber-grid {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    linear-gradient(rgba(100, 255, 218, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(100, 255, 218, 0.1) 1px, transparent 1px);
  background-size: 30px 30px;
  animation: gridMove 20s linear infinite;
  z-index: 1;
}

.contact-card {
  background: rgba(16, 32, 61, 0.95);
  border: 1px solid rgba(100, 255, 218, 0.2);
  border-radius: 15px;
  padding: 3rem;
  max-width: 500px;
  width: 100%;
  position: relative;
  z-index: 2;
  backdrop-filter: blur(10px);
  box-shadow: 0 0 30px rgba(100, 255, 218, 0.1);
  transform: translateY(50px);
  opacity: 0;
  animation: slideUp 0.8s ease forwards;
}

/* Animations */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.8s ease forwards;
  animation-delay: var(--delay, 0s);
}

.glow-hover {
  transition: all 0.3s ease;
}

.glow-hover:hover {
  color: #64ffda;
  text-shadow: 0 0 10px rgba(100, 255, 218, 0.5);
  transform: translateY(-2px);
}

/* Contact Items Styles */
.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #8892b0;
  text-decoration: none;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: rgba(100, 255, 218, 0.05);
  margin-bottom: 1rem;
}

.contact-item:hover {
  background: rgba(100, 255, 218, 0.1);
  transform: translateX(10px);
}

.social-btn {
  color: #8892b0;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  margin: 0 1rem;
}

.social-btn:hover {
  color: #64ffda;
  transform: translateY(-5px);
  filter: drop-shadow(0 0 10px rgba(100, 255, 218, 0.5));
}

/* Animation Keyframes */
@keyframes slideUp {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes gridMove {
  0% { transform: translateY(0); }
  100% { transform: translateY(30px); }
}

/* Responsive Design */
@media (max-width: 768px) {
  .contact-card {
    padding: 2rem;
  }
}

@media (max-width: 480px) {
  .contact-card {
    padding: 1.5rem;
  }
  
  .contact-item {
    padding: 0.8rem;
    font-size: 0.9rem;
  }
}

.profile-image-container {
  position: relative;
  width: 180px;  /* Adjusted size */
  height: 180px; /* Adjusted size */
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #64ffda;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}
</style>
