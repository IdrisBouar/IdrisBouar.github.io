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
            <div class="project-overlay">
              <h3>{{ project.title }}</h3>
              <p>Click to view details</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Details Modal -->
    <transition name="modal">
      <div v-if="selectedProject" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <button class="close-btn" @click="closeModal">
            <i class="fas fa-times"></i>
          </button>
          
          <h2>{{ selectedProject.title }}</h2>
          <p class="project-description">{{ selectedProject.description }}</p>
          
          <div class="tech-stack">
            <span v-for="tech in selectedProject.technologies" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>

          <div class="project-links">
            <a v-if="selectedProject.github" 
               :href="selectedProject.github" 
               target="_blank"
               class="project-link">
              <i class="fab fa-github"></i>
              View on GitHub
            </a>
            <a v-if="selectedProject.demo" 
               :href="selectedProject.demo" 
               target="_blank"
               class="project-link">
              <i class="fas fa-external-link-alt"></i>
              Live Demo
            </a>
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
      // You can add project images to your assets and return them based on project title
      return `https://picsum.photos/400/300?random=${project.title.length}` // Placeholder images
    },
    showProjectDetails(project) {
      this.selectedProject = project
    },
    closeModal() {
      this.selectedProject = null
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
  background: #112240;
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
