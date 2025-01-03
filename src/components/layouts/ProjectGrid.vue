<template>
  <section class="projects-section">
    <h2 class="section-title glow-title">{{ sectionTitle }}</h2>
    <div class="projects-grid">
      <div
        v-for="(project, index) in limitedProjects"
        :key="index"
        class="project-card glow-on-hover"
        :style="{ animationDelay: `${index * 0.2}s` }"
      >
        <div class="project-content">
          <div class="project-header">
            <h3>{{ project.title }}</h3>
            <div class="status-badge" :class="project.status">
              {{ formatStatus(project.status) }}
              <span class="pulse-dot" v-if="project.status === 'development'"></span>
            </div>
          </div>
          <p>{{ project.description }}</p>
          <div class="tech-stack">
            <span
              v-for="tech in project.technologies"
              :key="tech"
              class="tech-tag"
              >{{ tech }}</span
            >
          </div>
          <div class="project-links">
            <a v-if="project.github" :href="project.github" target="_blank">
              <i class="fab fa-github"></i>
            </a>
            <span v-else class="coming-soon">
              <i class="fas fa-lock"></i>
              Source private
            </span>
            <a v-if="project.demo" :href="project.demo" target="_blank">
              <i class="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
        <div class="glow-border"></div>
      </div>
    </div>
    <div v-if="hasMoreProjects" class="see-more-container">
      <router-link to="/projects" class="see-more-btn">
        See More Projects
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeProjectGrid",
  props: {
    projects: {
      type: Array,
      required: true,
    },
    sectionTitle: {
      type: String,
      default: "💼 Featured Projects",
    },
  },
  computed: {
    limitedProjects() {
      return this.projects.slice(0, 2);
    },
    hasMoreProjects() {
      return this.projects.length > 2;
    },
  },
  methods: {
    formatStatus(status) {
      return status.charAt(0).toUpperCase() + status.slice(1);
    }
  }
};
</script>

<style scoped>
.projects-section {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  text-align: center;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
  justify-items: center;
}

.project-card {
  position: relative;
  background: rgba(16, 32, 61, 0.4);
  border: none;
  border-radius: 10px;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  transition: all 0.3s ease;
  overflow: hidden;
  z-index: 1;
}

.project-card:hover {
  transform: translateY(-10px);
}

.project-card::before,
.project-card::after {
  content: "";
  position: absolute;
  inset: -2px;
  border-radius: 12px;
  background: conic-gradient(
    from 0deg,
    transparent 0%,
    #64ffda 120deg,
    transparent 180deg
  );
  animation: rotate 4s linear infinite;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card::after {
  animation: rotate 4s linear infinite reverse;
  animation-delay: -2s;
}

.project-card:hover::before,
.project-card:hover::after {
  opacity: 1;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.project-content {
  position: relative;
  z-index: 2;
  background: rgba(16, 32, 61, 0.95);
  border-radius: 8px;
  height: 100%;
  padding: 1rem;
}

.project-content h3 {
  color: #64ffda;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.project-content p {
  color: #8892b0;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 1.5rem 0;
}

.tech-tag {
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(100, 255, 218, 0.2);
}

.tech-tag:hover {
  background: rgba(100, 255, 218, 0.2);
  transform: translateY(-2px);
  box-shadow: 0 0 15px rgba(100, 255, 218, 0.3);
}

.project-links {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
}

.project-links a {
  color: #64ffda;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.project-links a:hover {
  transform: translateY(-3px);
  filter: drop-shadow(0 0 8px rgba(100, 255, 218, 0.6));
}

.see-more-container {
  margin-top: 2rem;
  text-align: center;
}

.see-more-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: transparent;
  border: 2px solid #64ffda;
  color: #64ffda;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.see-more-btn:hover {
  background: rgba(100, 255, 218, 0.1);
  transform: translateY(-3px);
}

.see-more-btn i {
  transition: transform 0.3s ease;
}

.see-more-btn:hover i {
  transform: translateX(5px);
}

.section-title {
  font-size: 2.5rem;
  color: #64ffda;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background: #64ffda;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-card {
    max-width: 100%;
  }

  .tech-stack {
    gap: 0.5rem;
  }

  .tech-tag {
    padding: 0.3rem 0.6rem;
    font-size: 0.8rem;
  }

  .section-title {
    font-size: 2rem;
  }
}

/* Animation for cards appearing */
.project-card {
  animation: fadeInUp 0.5s ease forwards;
  opacity: 0;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Glow effects */
.glow-title {
  text-shadow: 0 0 10px rgba(100, 255, 218, 0.5);
  transition: all 0.3s ease;
}

.glow-title:hover {
  text-shadow: 0 0 20px rgba(100, 255, 218, 0.8),
    0 0 30px rgba(100, 255, 218, 0.6);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.status-badge {
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
}

.status-badge.development {
  background-color: #ff9800;
  color: #fff;
}

.status-badge.completed {
  background-color: #4caf50;
  color: #fff;
}

.pulse-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: #ff9800;
  border-radius: 50%;
  margin-left: 0.5rem;
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

.coming-soon {
  color: #8892b0;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.7;
}

.coming-soon i {
  font-size: 1rem;
}
</style>
