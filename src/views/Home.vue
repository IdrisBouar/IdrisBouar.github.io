<template>
  <div class="portfolio-container">
    <!-- Animated Background -->
    <div class="gradient-bg"></div>

    <!-- Content Container -->
    <div class="content-wrapper">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="intro-text" v-animate-typing>
          <h1>Hello, I'm <span class="highlight animated-name">
            <span v-for="(char, index) in 'Idris Bouargoub'" 
                  :key="index" 
                  :style="{ animationDelay: `${index * 0.1}s` }">
              {{ char }}
            </span>
          </span></h1>
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

      <!-- About Me Section -->
      <section class="about-section">
        <h2 class="section-title glow-title">About Me</h2>
        <div class="about-content">
          <div class="about-text">
            <p class="about-description">
              I am a passionate Backend Developer with a strong foundation in Computer Science.
              Currently pursuing my studies while working on exciting projects that challenge
              and expand my technical capabilities. My focus lies in building scalable,
              efficient backend solutions and exploring new technologies.
            </p>
            <div class="key-points">
              <div class="point">
                <i class="fas fa-code"></i>
                <span>Clean Code Enthusiast</span>
              </div>
              <div class="point">
                <i class="fas fa-server"></i>
                <span>Backend Specialist</span>
              </div>
              <div class="point">
                <i class="fas fa-brain"></i>
                <span>Problem Solver</span>
              </div>
            </div>
          </div>
          <div class="about-image">
            <div class="image-frame">
              <img src="@/assets/image0.jpeg" alt="Profile Picture" />
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <TechGrid 
        :skills="personalData.skills"
        :sectionTitle="sectionTitles.skills"
        @show-tech-logo="showTechLogo"
      />

      <!-- Education Section -->
      <section class="education-section">
        <h2 class="section-title glow-title">{{ sectionTitles.education }}</h2>
        <div class="education-cards">
          <div 
            v-for="(edu, index) in personalData.education" 
            :key="index" 
            class="education-card"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="edu-icon">
              <i class="fas fa-university"></i>
            </div>
            <div class="edu-details">
              <h3>{{ edu.school }}</h3>
              <p class="degree">{{ edu.degree }}</p>
              <p class="location">{{ edu.country }}</p>
              <p class="period">{{ edu.period }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <ProjectGrid 
        :projects="projects"
        :sectionTitle="sectionTitles.projects"
      />
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
import { titleAnimation } from '@/mixins/titleAnimation';
import { personalData } from '@/config/personalData';
import ProjectGrid from '@/components/layouts/ProjectGrid.vue';
import TechGrid from '@/components/layouts/TechGrid.vue';

export default {
  name: "Home",
  components: {
    ProjectGrid,
    TechGrid
  },
  mixins: [titleAnimation],
  data() {
    return {
      sectionTitles: {
        skills: "🛠️ Technical Arsenal",
        education: "📚 Education Journey",
        projects: "💼 Featured Projects"
      },
      typedText: "",
      typewriterText:
        "Crafting robust backend solutions and elegant user experiences",
      projects: personalData.projects,
      activeTech: null,
      techLogos: personalData.techLogos,
      personalData,
    };
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
    }
  }
};
</script>

<style scoped>
/* Core styles */
.portfolio-container {
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 60px 0 0 0;
  background: linear-gradient(135deg, #0a192f 0%, #112240 100%);
  color: #64ffda;
  position: relative;
  overflow-x: hidden;
  perspective: 1000px;
}

/* Background and layout styles */
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

/* Hero section styles */
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

/* Skills section styles */
.skills-section,
.education-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
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

.education-cards {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.education-card {
  animation: fadeInUp 0.5s ease forwards;
  opacity: 0;
}

.edu-details .degree {
  color: #64ffda;
  font-size: 1.1rem;
  margin: 0.5rem 0;
}

.edu-details .period {
  color: #8892b0;
  font-size: 0.9rem;
  font-style: italic;
}

/* Animated Name Styles */
.animated-name {
  display: inline-flex;
  color: #64ffda;
  text-shadow: 0 0 10px rgba(100, 255, 218, 0.5);
  animation: glow 3s ease-in-out infinite;
}

.animated-name span {
  display: inline-block;
  animation: wave 2s ease-in-out infinite;
  transform-origin: bottom center;
}

/* Section Title Enhancement */
.section-title {
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  perspective: 1000px;
}

@keyframes glow {
  0%, 100% {
    text-shadow: 0 0 10px rgba(100, 255, 218, 0.5);
  }
  50% {
    text-shadow: 0 0 20px rgba(100, 255, 218, 0.8),
                 0 0 30px rgba(100, 255, 218, 0.6),
                 0 0 40px rgba(100, 255, 218, 0.4);
  }
}

@keyframes wave {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px) rotate(5deg);
  }
}

/* Enhanced hover effect for section titles */
.section-title.glow-on-hover:hover {
  transform: perspective(1000px) translateZ(50px);
  text-shadow: 0 0 20px rgba(100, 255, 218, 0.8),
               0 0 40px rgba(100, 255, 218, 0.4),
               0 0 60px rgba(100, 255, 218, 0.2);
}

/* Mobile optimization */
@media (max-width: 768px) {
  .animated-name span {
    animation: wave 2s ease-in-out infinite;
    transform-origin: center;
  }
}

/* Enhanced Section Title Styles */
.section-title.glow-effect {
  position: relative;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
}

.section-title.glow-effect::before {
  content: '';
  position: absolute;
  inset: -5px -20px;
  background: radial-gradient(circle at center, 
    rgba(100, 255, 218, 0.1), 
    transparent 70%
  );
  opacity: 0;
  transition: all 0.3s ease;
  z-index: -1;
  border-radius: 8px;
}

.section-title.glow-effect:hover {
  transform: translateY(-2px);
  color: #fff;
  text-shadow: 
    0 0 10px rgba(100, 255, 218, 0.8),
    0 0 20px rgba(100, 255, 218, 0.4),
    0 0 30px rgba(100, 255, 218, 0.2);
}

.section-title.glow-effect:hover::before {
  opacity: 1;
}

.section-title.glow-effect::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  width: 0;
  height: 3px;
  background: #64ffda;
  transform: translateX(-50%);
  transition: width 0.3s ease;
  box-shadow: 0 0 10px rgba(100, 255, 218, 0.4);
}

.section-title.glow-effect:hover::after {
  width: 100px;
}

/* About Section Styles */
.about-section {
  width: 100%;
  padding: 4rem 0;
}

.about-content {
  display: flex;
  gap: 4rem;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
}

.about-text {
  flex: 1;
  animation: fadeInLeft 1s ease;
}

.about-description {
  color: #8892b0;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
}

.key-points {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.point {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #64ffda;
}

.point i {
  font-size: 1.2rem;
}

.about-image {
  flex: 1;
  display: flex;
  justify-content: center;
  animation: fadeInRight 1s ease;
}

.image-frame {
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
}

.image-frame::before {
  content: '';
  position: absolute;
  inset: 0;
  border: 2px solid #64ffda;
  border-radius: 10px;
  transform: translate(10px, 10px);
  z-index: -1;
  transition: transform 0.3s ease;
}

.image-frame:hover::before {
  transform: translate(5px, 5px);
}

.image-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  filter: grayscale(50%);
  transition: all 0.3s ease;
}

.image-frame:hover img {
  filter: grayscale(0%);
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .about-content {
    flex-direction: column-reverse;
    gap: 2rem;
    padding: 0 1rem;
  }

  .image-frame {
    width: 250px;
    height: 250px;
  }
}
</style>