<template>
  <div class="projects-container">
    <div class="gradient-bg"></div>
    
    <div class="content-wrapper">
      <h1 class="section-title glow-on-hover">My Projects</h1>
      
      <div class="projects-grid">
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          class="project-card"
          @click="showProjectDetails(project)"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="project-image">
            <img :src="getProjectImage(project)" :alt="project.title">
            <div class="status-badge" :class="project.status">
              {{ formatStatus(project.status) }}
              <span class="pulse-dot" v-if="project.status === 'development'"></span>
            </div>
            <div class="project-overlay">
              <h3>{{ project.title }}</h3>
              <p>Click to view details</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Details Modal -->
    <transition name="modal" appear>
      <div v-if="selectedProject" class="modal-overlay" @click="closeModal">
        <div class="modal-content glow-border floating" @click.stop>
          <div class="modal-header">
            <div class="modal-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <button class="close-btn neon-hover" @click="closeModal" aria-label="Close">
              <i class="fas fa-times"></i>
            </button>
          </div>
          
          <div class="modal-body">
            <h2 class="modal-title glitch" :data-text="selectedProject.title">
              {{ selectedProject.title }}
            </h2>
            
            <p class="project-description fade-in-up">{{ selectedProject.description }}</p>
            
            <div class="tech-stack animated-tags">
              <span 
                v-for="(tech, index) in selectedProject.technologies" 
                :key="tech" 
                class="tech-tag bounce-in"
                :style="{ animationDelay: `${index * 0.1}s` }"
              >
                {{ tech }}
              </span>
            </div>

            <div class="project-links fade-in-up">
              <a v-if="selectedProject.github" 
                 :href="selectedProject.github" 
                 target="_blank"
                 class="project-link shine-hover">
                <i class="fab fa-github"></i>
                <span class="link-text">View on GitHub</span>
              </a>
              <span v-else class="project-link disabled shine-hover">
                <i class="fas fa-lock pulse"></i>
                <span class="link-text">Source code private</span>
              </span>
              <a v-if="selectedProject.demo" 
                 :href="selectedProject.demo" 
                 target="_blank"
                 class="project-link shine-hover">
                <i class="fas fa-external-link-alt"></i>
                <span class="link-text">Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { personalData } from '@/config/personalData'

export default {
  name: 'Projects',
  data() {
    return {
      projects: personalData.projects,
      selectedProject: null
    }
  },
  methods: {
    getProjectImage(project) {
      try {
        return require(`@/assets/projects/${project.image}`);
      } catch (e) {
        // Fallback to placeholder if image not found
        return `https://picsum.photos/400/300?random=${project.title.length}`;
      }
    },
    showProjectDetails(project) {
      this.selectedProject = project
    },
    closeModal() {
      this.selectedProject = null
    },
    formatStatus(status) {
      return status.charAt(0).toUpperCase() + status.slice(1);
    }
  }
}
</script>

<style scoped>
.projects-container {
  min-height: 100vh;
  width: 100%;
  padding: 80px 0;
  background: linear-gradient(135deg, #0a192f 0%, #112240 100%);
  color: #64ffda;
  position: relative;
}

.gradient-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(100, 255, 218, 0.1) 0%, transparent 70%);
  z-index: 1;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.section-title {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 3rem;
  animation: fadeInDown 0.8s ease;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
}

.project-card {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  animation: fadeInUp 0.5s ease forwards;
  opacity: 0;
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
}

.project-image {
  position: relative;
  width: 100%;
  height: 250px;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 25, 47, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 25, 47, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: linear-gradient(145deg, #112240 0%, #0a192f 100%);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(100, 255, 218, 0.1);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
  padding: 2rem;
  border-radius: 10px;
  max-width: 600px;
  width: 90%;
  position: relative;
  animation: scaleIn 0.3s ease;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #64ffda;
  font-size: 1.5rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.close-btn:hover {
  transform: rotate(90deg);
}

.tech-stack {
  margin: 1.5rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  padding: 0.5rem 1rem;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 20px;
  font-size: 0.9rem;
}

.project-links {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border: 2px solid #64ffda;
  border-radius: 5px;
  color: #64ffda;
  text-decoration: none;
  transition: all 0.3s ease;
}

.project-link:hover {
  background: rgba(100, 255, 218, 0.1);
  transform: translateY(-3px);
}

.project-link.disabled {
  opacity: 0.7;
  cursor: not-allowed;
  background: rgba(137, 146, 176, 0.1);
  border-color: #8892b0;
  color: #8892b0;
}

.project-link.disabled:hover {
  transform: none;
  background: rgba(137, 146, 176, 0.1);
}

.status-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  z-index: 2;
}

.status-badge.finished {
  background: rgba(46, 204, 113, 0.2);
  color: #2ecc71;
  border: 1px solid #2ecc71;
}

.status-badge.development {
  background: rgba(231, 76, 60, 0.2);
  color: #e74c3c;
  border: 1px solid #e74c3c;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background-color: #e74c3c;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Animations */
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

/* Modal Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Enhanced Modal Styles */
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.modal-dots {
  display: flex;
  gap: 8px;
}

.modal-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(100, 255, 218, 0.5);
}

.modal-dots span:nth-child(1) { background: #ff5f57; }
.modal-dots span:nth-child(2) { background: #ffbd2e; }
.modal-dots span:nth-child(3) { background: #28c93f; }

.modal-body {
  padding: 0 1rem;
}

/* Glitch effect for title */
.glitch {
  position: relative;
  color: #64ffda;
  text-shadow: 0 0 10px rgba(100, 255, 218, 0.3);
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  clip: rect(0, 900px, 0, 0);
}

.glitch::before {
  left: 2px;
  text-shadow: -1px 0 #ff00ff;
  animation: glitch-effect 3s infinite linear alternate-reverse;
}

.glitch::after {
  left: -2px;
  text-shadow: 2px 0 #00ffff;
  animation: glitch-effect 2s infinite linear alternate-reverse;
}

/* Floating animation for modal */
.floating {
  animation: floating 3s ease-in-out infinite;
}

/* Bounce animation for tech tags */
.bounce-in {
  animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
  opacity: 0;
  transform: scale(0.3);
}

/* Enhanced link styles */
.project-link {
  position: relative;
  overflow: hidden;
  background: rgba(100, 255, 218, 0.05);
}

.link-text {
  position: relative;
  z-index: 1;
}

.project-link.shine-hover::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(100, 255, 218, 0.2),
    transparent
  );
  transform: rotate(45deg);
  transition: 0.5s;
  opacity: 0;
}

.project-link.shine-hover:hover::before {
  animation: shine 0.8s;
}

/* Pulse animation for lock icon */
.pulse {
  animation: iconPulse 2s infinite;
}

/* New Animations */
@keyframes glitch-effect {
  0% { clip: rect(44px, 900px, 56px, 0); }
  5% { clip: rect(12px, 900px, 76px, 0); }
  10% { clip: rect(59px, 900px, 98px, 0); }
  15% { clip: rect(29px, 900px, 24px, 0); }
  20% { clip: rect(16px, 900px, 37px, 0); }
  100% { clip: rect(67px, 900px, 89px, 0); }
}

@keyframes floating {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

@keyframes bounceIn {
  0% { opacity: 0; transform: scale(0.3); }
  50% { opacity: 0.9; transform: scale(1.1); }
  80% { opacity: 1; transform: scale(0.89); }
  100% { opacity: 1; transform: scale(1); }
}

@keyframes shine {
  0% { transform: translateX(-100%) rotate(45deg); }
  100% { transform: translateX(100%) rotate(45deg); }
}

@keyframes iconPulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

/* Enhanced transitions */
.modal-enter-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-leave-active {
  transition: all 0.3s cubic-bezier(0. 4, 0, 0.2, 1);
}

/* Responsive Design */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  
  .project-links {
    flex-direction: column;
  }
  
  .project-link {
    width: 100%;
    justify-content: center;
  }
}
</style>
