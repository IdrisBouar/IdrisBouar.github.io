<template>
  <div class="portfolio-container">
    <!-- Animated Background -->
    <div class="gradient-bg"></div>

    <!-- Content Container -->
    <div class="content-wrapper">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="intro-text" v-animate-typing>
          <h1>Hello, I'm <span class="highlight">Idris Bouargoub</span></h1>
          <h2>Backend Developer & Computer Science Student</h2>
          <p class="typewriter">{{ typedText }}</p>
          <div class="social-links">
            <a
              href="https://github.com/IdrisBouar"
              target="_blank"
              class="social-btn"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              class="social-btn"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section class="skills-section">
        <h2 class="section-title glow-on-hover">Technical Arsenal</h2>
        <div class="skills-grid">
          <div
            v-for="(category, index) in skills"
            :key="index"
            class="skill-category"
            :class="{ visible: true }"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <h3 class="category-title glow-on-hover">{{ category.name }}</h3>
            <div class="skill-items">
              <div
                v-for="(skill, idx) in category.items"
                :key="idx"
                class="skill-item"
              >
                <div class="skill-header">
                  <i :class="skill.icon"></i>
                  <span>{{ skill.name }}</span>
                </div>
                <div class="skill-bar">
                  <div
                    class="skill-progress"
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Education Section -->
      <section class="education-section">
        <h2 class="section-title glow-on-hover">Education Journey</h2>
        <div class="education-card">
          <div class="edu-icon">
            <i class="fas fa-university"></i>
          </div>
          <div class="edu-details">
            <h3>Higher Institute of Computer Science Medenine</h3>
            <p>Computer Science</p>
            <p>Tunisia</p>
          </div>
        </div>
      </section>

      <!-- Projects Section with Enhanced Animations -->
      <section class="projects-section">
        <h2 class="section-title glow-on-hover">Featured Projects</h2>
        <div class="projects-grid">
          <div
            v-for="(project, index) in limitedProjects"
            :key="index"
            class="project-card"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="project-content">
              <h3>{{ project.title }}</h3>
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
                <a :href="project.github" target="_blank">
                  <i class="fab fa-github"></i>
                </a>
                <a v-if="project.demo" :href="project.demo" target="_blank">
                  <i class="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div v-if="hasMoreProjects" class="see-more-container">
          <router-link to="/projects" class="see-more-btn">
            See More Projects
            <i class="fas fa-arrow-right"></i>
          </router-link>
        </div>
      </section>
    </div>

    <!-- Tech Logo Modal -->
    <transition name="fade">
      <div v-if="activeTech" class="tech-modal" @click="hideTechLogo">
        <div class="tech-logo-container">
          <img :src="activeTech.logo" :alt="activeTech.name" />
          <p>Click to visit {{ activeTech.name }} website</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { personalData } from '@/config/personalData';

export default {
  name: "Home",
  data() {
    return {
      typedText: "",
      typewriterText:
        "Crafting robust backend solutions and elegant user experiences",
      skills: {
        backend: {
          name: "Backend Development",
          items: [
            { name: "Spring Boot", level: 90, icon: "fab fa-java" },
            { name: "ASP.NET Core", level: 85, icon: "fab fa-microsoft" },
            { name: "Node.js", level: 80, icon: "fab fa-node-js" },
            { name: "Python", level: 75, icon: "fab fa-python" },
          ],
        },
        frontend: {
          name: "Frontend Development",
          items: [
            { name: "Vue.js", level: 85, icon: "fab fa-vuejs" },
            { name: "Android", level: 75, icon: "fab fa-android" },
            { name: "React", level: 70, icon: "fab fa-react" },
          ],
        },
        database: {
          name: "Database & DevOps",
          items: [
            { name: "MySQL", level: 90, icon: "fas fa-database" },
            { name: "MongoDB", level: 80, icon: "fas fa-database" },
            { name: "Docker", level: 85, icon: "fab fa-docker" },
            { name: "Git", level: 90, icon: "fab fa-git-alt" },
          ],
        },
      },
      projects: personalData.projects,  // Use projects from personalData
      activeTech: null,
      techLogos: {
        "Spring Boot": {
          logo: "https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg",
          url: "https://spring.io/",
        },
        "Vue.js": {
          logo: "https://vuejs.org/images/logo.png",
          url: "https://vuejs.org/",
        },
        // Add more tech logos and URLs
      },
    };
  },
  computed: {
    limitedProjects() {
      return this.projects.slice(0, 2);
    },
    hasMoreProjects() {
      return this.projects.length > 2;
    }
  },
  mounted() {
    this.typeWriter();
  },
  methods: {
    typeWriter() {
      let i = 0;
      const speed = 50;
      const typeText = () => {
        if (i < this.typewriterText.length) {
          this.typedText += this.typewriterText.charAt(i);
          i++;
          setTimeout(typeText, speed);
        }
      };
      typeText();
    },
    showTechLogo(skill) {
      if (this.techLogos[skill.name]) {
        this.activeTech = {
          ...this.techLogos[skill.name],
          name: skill.name,
        };
      }
    },
    hideTechLogo() {
      this.activeTech = null;
    },
  },
};
</script>

<style scoped>
/* Adding only new styles, keeping the color theme from UnderDevelopment.vue */
.portfolio-container {
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 60px 0 0 0; /* Add top padding for navbar */
  background: linear-gradient(135deg, #0a192f 0%, #112240 100%);
  color: #64ffda;
  position: relative;
  overflow-x: hidden;
  perspective: 1000px;
}

.gradient-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at center,
    rgba(100, 255, 218, 0.1) 0%,
    transparent 70%
  );
  z-index: 1;
}

.hero-section {
  min-height: calc(100vh - 60px); /* Account for navbar */
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  z-index: 2;
}

.skills-section,
.education-section,
.projects-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
}

.intro-text h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  animation: fadeInUp 1s ease;
}

.intro-text h2 {
  font-size: 2rem;
  color: #8892b0;
  margin-bottom: 2rem;
  animation: fadeInUp 1s ease 0.2s;
}

.highlight {
  color: #64ffda;
  text-shadow: 0 0 10px rgba(100, 255, 218, 0.5);
}

.typewriter {
  font-family: "Courier New", monospace;
  margin-bottom: 2rem;
  min-height: 2em;
}

.social-btn {
  font-size: 1.5rem;
  margin: 0 1rem;
  color: #64ffda;
  transition: all 0.3s ease;
}

.social-btn:hover {
  transform: translateY(-3px);
  filter: drop-shadow(0 0 10px rgba(100, 255, 218, 0.8));
}

.section-title {
  font-size: 2rem;
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

/* Add animations */
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

/* Add responsive design */
@media (max-width: 768px) {
  .intro-text h1 {
    font-size: 2.5rem;
  }

  .intro-text h2 {
    font-size: 1.5rem;
  }
}

.content-wrapper {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
}

/* Enhanced Section Titles */
.glow-on-hover {
  transition: all 0.3s ease;
}

.glow-on-hover:hover {
  transform: scale(1.05);
  text-shadow: 0 0 20px rgba(100, 255, 218, 0.8);
}

/* Skill Items Animation */
.pop-on-hover {
  transition: all 0.3s ease;
  cursor: pointer;
}

.pop-on-hover:hover {
  transform: translateY(-5px) scale(1.05);
  filter: drop-shadow(0 0 10px rgba(100, 255, 218, 0.5));
}

/* Tech Modal */
.tech-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 25, 47, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
}

.tech-logo-container {
  background: rgba(16, 32, 61, 0.95);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(100, 255, 218, 0.3);
  text-align: center;
  transform: scale(0.9);
  transition: transform 0.3s ease;
}

.tech-logo-container:hover {
  transform: scale(1);
}

.tech-logo-container img {
  max-width: 200px;
  max-height: 200px;
  margin-bottom: 1rem;
}

/* Animation Classes */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}

.floating {
  animation: float 3s ease-in-out infinite;
}

/* Animations */
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Skills Grid */
.skills-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  padding: 2rem 0;
}

.skill-category {
  background: rgba(16, 32, 61, 0.4);
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px -15px rgba(100, 255, 218, 0.2);
}

.category-title {
  color: #64ffda;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
}

.skill-items {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.skill-item {
  width: 100%;
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.skill-header i {
  color: #64ffda;
  font-size: 1.2rem;
}

.skill-bar {
  width: 100%;
  height: 6px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: #64ffda;
  border-radius: 3px;
  transition: width 1s ease-in-out;
}

/* Education Card */
.education-card {
  background: rgba(16, 32, 61, 0.4);
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid rgba(100, 255, 218, 0.1);
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  gap: 2rem;
  align-items: center;
  transition: all 0.3s ease;
}

.education-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px -15px rgba(100, 255, 218, 0.2);
}

.edu-icon {
  font-size: 2.5rem;
  color: #64ffda;
}

.edu-details {
  flex: 1;
}

.edu-details h3 {
  color: #64ffda;
  margin-bottom: 0.5rem;
}

.edu-details p {
  color: #8892b0;
}

/* Section Titles */
.section-title {
  font-size: 2.5rem;
  color: #64ffda;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  width: 100%;
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
  .content-wrapper {
    gap: 4rem;
    padding: 0 1rem;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .education-card {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }
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
</style>