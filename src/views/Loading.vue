<template>
  <div class="portfolio-wrapper">
    <!-- Tech Stack Orbit -->
    <div class="orbit-container">
      <div
        v-for="(tech, index) in techStack"
        :key="index"
        class="tech-icon"
        :style="calculatePosition(index)"
      >
        <img :src="tech.icon" :alt="tech.name" :title="tech.name" />
      </div>
    </div>

    <!-- Main Content -->
    <div class="content-wrapper">
      <div class="cyber-header">
        <h1>INITIALIZING PORTFOLIO</h1>
        <div class="cyber-bar"></div>
      </div>
      <div class="cyber-message">
        <p class="status">STATUS: {{ loadingStatus }}</p>
        <div class="terminal">
          <p
            v-for="(message, index) in displayedMessages"
            :key="index"
            :style="{ animationDelay: `${index * 0.5}s` }"
          >
            > {{ message }}
          </p>
        </div>
      </div>
    </div>

    <div v-if="!devMode && loadingComplete" class="loading-footer">
      <div class="loading-spinner"></div>
      <p>Redirecting to portfolio...</p>
    </div>

    <!-- Footer -->
    <footer>
      <p>
        &copy; {{ new Date().getFullYear() }} | IdrisBouar, Built with code and
        creativity
      </p>
    </footer>
  </div>
</template>

<script>
import { personalData } from "@/data/personalData";

export default {
  name: "Loading",
  data() {
    return {
      techStack: [
        { name: "Vue.js", icon: "/icons/vue.svg" },
        { name: "MySQL", icon: "/icons/mysql.svg" },
        { name: ".NET", icon: "/icons/dotnet.svg" },
        { name: "Spring", icon: "/icons/spring.svg" },
        { name: "JavaScript", icon: "/icons/javascript.svg" },
        { name: "TypeScript", icon: "/icons/typescript.svg" },
        { name: "React", icon: "/icons/react.svg" },
        { name: "Node.js", icon: "/icons/nodejs.svg" },
        { name: "Docker", icon: "/icons/docker.svg" },
        { name: "AWS", icon: "/icons/aws.svg" },
      ],
      devMode: personalData.developmentMode,
      loadingComplete: false,
      loadingStatus: "DEVELOPMENT IN PROGRESS",
      messages: [
        "Loading creative solutions...",
        "Compiling experiences...",
        "Optimizing innovation...",
        "System will be ready soon...",
        "Initialization complete!",
      ],
      displayedMessages: [],
    };
  },
  created() {
    this.startLoading();
  },
  methods: {
    calculatePosition(index) {
      const radius = 250;
      const angle = (index / this.techStack.length) * 2 * Math.PI;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      return {
        transform: `translate(${x}px, ${y}px)`,
        animationDelay: `${index * -2}s`,
      };
    },
    async startLoading() {
      // Display messages one by one
      for (let i = 0; i < this.messages.length; i++) {
        await this.wait(1000);
        this.displayedMessages.push(this.messages[i]);

        if (i === this.messages.length - 1 && !this.devMode) {
          this.loadingComplete = true;
          this.loadingStatus = "INITIALIZATION COMPLETE";
          await this.wait(5000);
          this.$router.push("/home");
        }
      }
    },
    wait(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
  },
};
</script>

<style scoped>
/* Add these global styles at the top */
:root {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.portfolio-wrapper {
  min-height: 100vh;
  min-width: 100vw;
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #0a192f 0%, #112240 100%);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.orbit-container {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tech-icon {
  position: absolute;
  width: 45px;
  height: 45px;
  transform-origin: center;
  animation: orbit 20s linear infinite;
  transition: all 0.3s ease;
  left: calc(50% - 22.5px); /* Center the icon (half of width) */
  top: calc(50% - 22.5px); /* Center the icon (half of height) */
}

.tech-icon img {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 0 8px rgba(100, 255, 218, 0.5));
  transition: all 0.3s ease;
}

.tech-icon:hover {
  z-index: 10;
}

.tech-icon:hover img {
  transform: scale(2);
  filter: drop-shadow(0 0 15px rgba(100, 255, 218, 0.8));
}

.content-wrapper {
  z-index: 2;
  text-align: center;
  padding: 2rem;
  color: #64ffda;
}

.cyber-header h1 {
  font-size: 2.5rem;
  text-shadow: 0 0 10px rgba(100, 255, 218, 0.5);
  animation: glow 2s ease-in-out infinite alternate;
}

.cyber-bar {
  width: 300px;
  height: 3px;
  background: linear-gradient(90deg, #64ffda, transparent);
  margin: 1rem auto;
  animation: loading 2s infinite;
}

.cyber-message {
  margin-top: 2rem;
}

.status {
  color: #8892b0;
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.terminal {
  font-family: "Courier New", monospace;
  text-align: left;
  max-width: 400px;
  margin: 0 auto;
  color: #64ffda;
  line-height: 1.6;
}

.terminal p {
  margin: 0.5rem 0;
  animation: fadeIn 0.5s ease-in-out forwards;
  opacity: 0;
}

.terminal p:nth-child(2) {
  animation-delay: 0.5s;
}
.terminal p:nth-child(3) {
  animation-delay: 1s;
}
.terminal p:nth-child(4) {
  animation-delay: 1.5s;
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  padding: 1rem;
  color: #8892b0;
}

@keyframes orbit {
  from {
    transform: rotate(0deg) translateY(-250px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateY(-250px) rotate(-360deg);
  }
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px rgba(100, 255, 218, 0.5);
  }
  to {
    text-shadow: 0 0 20px rgba(100, 255, 218, 0.8);
  }
}

@keyframes loading {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .cyber-header h1 {
    font-size: 1.8rem;
  }

  .tech-icon {
    width: 35px;
    height: 35px;
  }
}

.loading-footer {
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 10px;
  color: #64ffda;
  animation: fadeIn 0.5s ease-in-out;
}

.loading-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid #64ffda;
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
