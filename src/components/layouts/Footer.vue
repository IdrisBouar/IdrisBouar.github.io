<template>
  <footer class="cyber-footer">
    <div class="footer-content">
      <!-- Profile Section -->
      <div class="profile-section">
        <div class="profile-image-container">
          <img 
            :src="`https://github.com/${personalData.contact.github.split('/').pop()}.png`"
            :alt="personalData.name" 
            class="profile-image"
          />
          <div class="glow-effect"></div>
        </div>
      </div>

      <!-- Contact Info Section -->
      <div class="contact-section">
        <h3 class="section-title">Connect With Me</h3>
        <div class="contact-grid">
          <a :href="`mailto:${contact.email}`" class="contact-item">
            <i class="fas fa-envelope"></i>
            <span class="contact-text">{{ contact.email }}</span>
          </a>
          <a :href="`tel:${contact.phone}`" class="contact-item">
            <i class="fas fa-phone"></i>
            <span class="contact-text">{{ contact.phone }}</span>
          </a>
          <!-- Location -->
          <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <span class="contact-text">Medenine, Tunisia</span>
          </div>

          <!-- Social Links -->
          <div class="social-links">
            <a href="https://github.com/IdrisBouar" target="_blank" class="social-item">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" class="social-item">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://stackoverflow.com/users/yourid" target="_blank" class="social-item">
              <i class="fab fa-stack-overflow"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Technology Section -->
      <div class="tech-section">
        <h3 class="section-title">Built With</h3>
        <a href="https://vuejs.org" target="_blank" class="vue-logo-container">
          <img 
            src="https://vuejs.org/images/logo.png" 
            alt="Vue.js" 
            class="vue-logo"
          />
          <div class="tech-glow"></div>
        </a>
      </div>
    </div>

    <!-- Copyright -->
    <div class="copyright">
      <p>&copy; {{ new Date().getFullYear() }} Idris Bouargoub. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Footer',
  computed: {
    ...mapGetters(['getPersonalData', 'getContact']),
    personalData() {
      return this.getPersonalData
    },
    contact() {
      return this.getContact
    }
  }
}
</script>

<style scoped>
.cyber-footer {
  background: rgba(10, 25, 47, 0.95);
  border-top: 1px solid rgba(100, 255, 218, 0.1);
  padding: 3rem 0 1rem 0;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(250px, 1fr) minmax(250px, 1fr) minmax(250px, 1fr);
  gap: 4rem;
  position: relative;
  z-index: 2;
  padding: 0 2rem;
  align-items: start;
}

/* Profile Section */
.profile-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
}

.profile-image-container {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
  transition: all 0.3s ease;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.glow-effect {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(100, 255, 218, 0.2), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.profile-image-container:hover {
  transform: scale(1.05);
}

.profile-image-container:hover .glow-effect {
  opacity: 1;
  animation: pulse 2s infinite;
}

/* Contact Section */
.contact-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
  color: #8892b0;
}

.section-title {
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
  color: #64ffda;
  font-size: 1.5rem;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 2px;
  background: #64ffda;
}

.contact-grid {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #8892b0;
  text-decoration: none;
  transition: all 0.3s ease;
}

.contact-item:hover {
  color: #64ffda;
  transform: translateX(10px);
}

.contact-item i {
  font-size: 1.2rem;
  color: #64ffda;
}

.social-links {
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
}

.social-item {
  color: #8892b0;
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.social-item:hover {
  color: #64ffda;
  transform: translateY(-5px);
  filter: drop-shadow(0 0 10px rgba(100, 255, 218, 0.5));
}

/* Technology Section Styles */
.tech-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
}

.vue-logo-container {
  position: relative;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border-radius: 50%;
  cursor: pointer;
}

.vue-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

.tech-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(65, 184, 131, 0.2), transparent);
  opacity: 0;
  transition: all 0.3s ease;
  z-index: 1;
}

.vue-logo-container:hover {
  transform: scale(1.15);
}

.vue-logo-container:hover .tech-glow {
  opacity: 1;
  box-shadow: 0 0 30px rgba(65, 184, 131, 0.6);
}

.vue-logo-container:hover .vue-logo {
  filter: drop-shadow(0 0 8px rgba(65, 184, 131, 0.8));
}

/* Copyright */
.copyright {
  text-align: center;
  color: #8892b0;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(100, 255, 218, 0.1);
}

.copyright p {
  transition: all 0.3s ease;
}

.copyright p:hover {
  color: #64ffda;
  text-shadow: 0 0 10px rgba(100, 255, 218, 0.5);
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(100, 255, 218, 0.4);
  }
  70% {
    box-shadow: 0 0 0 20px rgba(100, 255, 218, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(100, 255, 218, 0);
  }
}

/* Responsive Design */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: minmax(200px, 1fr) minmax(200px, 1fr);
    gap: 3rem;
  }
  
  .tech-section {
    grid-column: 1 / -1;
    margin-top: 2rem;
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .profile-section,
  .contact-section,
  .tech-section {
    padding: 1rem 0;
  }

  .contact-grid {
    max-width: 400px;
    margin: 0 auto;
  }
}

@media (max-width: 480px) {
  .profile-image-container {
    width: 150px;
    height: 150px;
  }
}
</style>
