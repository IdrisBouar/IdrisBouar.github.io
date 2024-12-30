<template>
  <div class="about-container">
    <div class="gradient-bg"></div>
    
    <div class="content-wrapper">
      <!-- Animated Header -->
      <header class="about-header">
        <h1 class="glitch-text" data-text="About Me">About Me</h1>
        <div class="animated-underline"></div>
      </header>

      <!-- Profile Section -->
      <section class="profile-section">
        <div class="profile-card" v-scrollanimation>
          <div class="profile-image-container">
            <img :src="`https://github.com/${githubUsername}.png`" alt="Profile Image" class="profile-image">
            <div class="image-overlay"></div>
          </div>
          <div class="profile-info">
            <h2 class="neon-text">{{ personalData.name }}</h2>
            <h3 class="typing-text">{{ personalData.title }}</h3>
            <p class="location"><i class="fas fa-map-marker-alt"></i> {{ personalData.location }}</p>
          </div>
        </div>
      </section>

      <!-- Bio Section -->
      <section class="bio-section" v-scrollanimation>
        <div class="bio-content">
          <h2 class="section-title">My Journey</h2>
          <p class="bio-text">
            As a passionate Backend Developer and Computer Science student, I've dedicated myself to crafting robust and scalable solutions. My journey in technology began with a curiosity about how things work behind the scenes, which led me to explore the depths of backend development.
          </p>
          <div class="passion-points">
            <div class="passion-item" v-for="(passion, index) in passions" :key="index"
                 :style="{ animationDelay: `${index * 0.2}s` }">
              <i :class="passion.icon"></i>
              <h3>{{ passion.title }}</h3>
              <p>{{ passion.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Timeline Section -->
      <section class="timeline-section" v-scrollanimation>
        <h2 class="section-title">My Timeline</h2>
        <div class="timeline">
          <div class="timeline-item" v-for="(item, index) in timeline" :key="index"
               :class="{ 'right': index % 2 === 0 }">
            <div class="timeline-content">
              <div class="date">{{ item.date }}</div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="stats-section" v-scrollanimation>
        <div class="stats-grid">
          <div class="stat-card" v-for="(stat, index) in stats" :key="index"
               :style="{ animationDelay: `${index * 0.15}s` }">
            <i :class="stat.icon"></i>
            <div class="stat-number">{{ stat.value }}</div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { personalData } from '@/config/personalData'

export default {
  name: 'About',
  data() {
    return {
      personalData,
      githubUsername: 'IdrisBouar',
      passions: [
        {
          icon: 'fas fa-code',
          title: 'Clean Code Advocate',
          description: 'Passionate about writing maintainable, efficient, and elegant code.'
        },
        {
          icon: 'fas fa-brain',
          title: 'Problem Solver',
          description: 'Love tackling complex challenges and finding innovative solutions.'
        },
        {
          icon: 'fas fa-users',
          title: 'Team Player',
          description: 'Thrive in collaborative environments and enjoy knowledge sharing.'
        }
      ],
      timeline: [
        {
          date: '2020',
          title: 'Started Computer Science Journey',
          description: 'Enrolled at Higher Institute of Computer Science Medenine'
        },
        {
          date: '2021',
          title: 'First Backend Project',
          description: 'Developed my first major backend application using Spring Boot'
        },
        // Add more timeline items...
      ],
      stats: [
        {
          icon: 'fas fa-project-diagram',
          value: '15+',
          label: 'Projects Completed'
        },
        {
          icon: 'fas fa-code-branch',
          value: '1000+',
          label: 'Git Commits'
        },
        {
          icon: 'fas fa-coffee',
          value: '∞',
          label: 'Cups of Coffee'
        }
      ]
    }
  },
  directives: {
    scrollanimation: {
      mounted(el) {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              el.classList.add('scroll-visible')
            }
          })
        })
        observer.observe(el)
      }
    }
  }
}
</script>

<style scoped>
.about-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #0a192f 0%, #112240 100%);
  color: #64ffda;
  padding: 80px 0;
  position: relative;
  overflow: hidden;
}

.gradient-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

/* Glitch Text Effect */
.glitch-text {
  font-size: 4rem;
  position: relative;
  text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
              -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
              0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  animation: glitch 500ms infinite;
}

@keyframes glitch {
  0% {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
                -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
                -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }
  14% {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
                -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
                -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }
  15% {
    text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
                0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
                -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  49% {
    text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
                0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
                -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  50% {
    text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
                0.05em 0 0 rgba(0, 255, 0, 0.75),
                0 -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  99% {
    text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
                0.05em 0 0 rgba(0, 255, 0, 0.75),
                0 -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  100% {
    text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
                -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
                -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
}

/* Profile Section */
.profile-section {
  margin: 4rem 0;
}

.profile-card {
  display: flex;
  gap: 2rem;
  align-items: center;
  background: rgba(16, 32, 61, 0.4);
  padding: 2rem;
  border-radius: 15px;
  transform: translateY(50px);
  opacity: 0;
  transition: all 0.6s ease;
}

.profile-card.scroll-visible {
  transform: translateY(0);
  opacity: 1;
}

.profile-image-container {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, transparent 30%, rgba(100, 255, 218, 0.2));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.profile-image-container:hover .profile-image {
  transform: scale(1.1);
}

.profile-image-container:hover .image-overlay {
  opacity: 1;
}

/* Timeline Section */
.timeline {
  position: relative;
  max-width: 800px;
  margin: 4rem auto;
  padding: 0 20px;
}

.timeline-item {
  position: relative;
  width: 50%;
  padding: 20px 40px;
  opacity: 0;
  transform: translateX(-100px);
  transition: all 0.6s ease;
}

.timeline-item.scroll-visible {
  opacity: 1;
  transform: translateX(0);
}

.timeline-item.right {
  left: 50%;
  transform: translateX(100px);
}

.timeline-content {
  background: rgba(16, 32, 61, 0.4);
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid rgba(100, 255, 218, 0.1);
  position: relative;
}

.timeline-content::before {
  content: '';
  position: absolute;
  top: 50%;
  width: 20px;
  height: 20px;
  background: #64ffda;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(100, 255, 218, 0.5);
}

.timeline-item:not(.right) .timeline-content::before {
  right: -50px;
}

.timeline-item.right .timeline-content::before {
  left: -50px;
}

.date {
  color: #64ffda;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

/* Bio Section */
.bio-section {
  text-align: center;
  margin: 4rem 0;
  padding: 0 20px;
}

.bio-content {
  max-width: 800px;
  margin: 0 auto;
}

.bio-text {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #8892b0;
  margin-bottom: 3rem;
}

.passion-points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.passion-item {
  background: rgba(16, 32, 61, 0.4);
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
}

.passion-item.scroll-visible {
  opacity: 1;
  transform: translateY(0);
}

.passion-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px -15px rgba(100, 255, 218, 0.2);
}

.passion-item i {
  font-size: 2.5rem;
  color: #64ffda;
  margin-bottom: 1rem;
}

.passion-item h3 {
  color: #64ffda;
  margin-bottom: 1rem;
}

.passion-item p {
  color: #8892b0;
  line-height: 1.6;
}

/* Stats Section */
.stats-section {
  margin: 4rem 0;
  padding: 0 20px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.stat-card {
  background: rgba(16, 32, 61, 0.4);
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid rgba(100, 255, 218, 0.1);
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease forwards;
}

.stat-card i {
  font-size: 2.5rem;
  color: #64ffda;
  margin-bottom: 1rem;
}

.stat-number {
  font-size: 2.5rem;
  color: #64ffda;
  font-weight: bold;
  margin: 1rem 0;
}

.stat-label {
  color: #8892b0;
  font-size: 1.1rem;
}

/* Section Title Styling */
.section-title {
  font-size: 2.5rem;
  color: #64ffda;
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 3px;
  background: #64ffda;
}

/* Animations */
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

/* Responsive Design */
@media (max-width: 768px) {
  .profile-card {
    flex-direction: column;
    text-align: center;
  }

  .timeline-item {
    width: 100%;
    left: 0;
    padding: 20px 0;
  }

  .timeline-item.right {
    left: 0;
  }

  .timeline::after {
    left: 20px;
  }

  .timeline-content::before {
    left: -40px !important;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }
}

/* Additional Hover Effects */
.neon-text {
  color: #64ffda;
  text-shadow: 0 0 5px rgba(100, 255, 218, 0.5),
               0 0 10px rgba(100, 255, 218, 0.3),
               0 0 15px rgba(100, 255, 218, 0.2);
}

.typing-text {
  color: #8892b0;
  border-right: 3px solid #64ffda;
  padding-right: 5px;
  animation: typing 3.5s steps(40, end),
             blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #64ffda }
}

.about-header {
  text-align: center;
  margin: 2rem 0 4rem 0;
}

.animated-underline {
  width: 0;
  height: 3px;
  background: #64ffda;
  margin: 1rem auto;
  animation: expand 1s ease forwards;
}

@keyframes expand {
  to {
    width: 200px;
  }
}
</style>