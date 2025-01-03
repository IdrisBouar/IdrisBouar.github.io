<template>
  <section class="skills-section">
    <h2 class="section-title glow-title">{{ sectionTitle }}</h2>
    <div class="skills-grid">
      <div
        v-for="(category, key) in skills"
        :key="key"
        class="skill-category"
        :class="{ visible: true }"
        :style="{
          animationDelay: `${key === 'backend' ? 0 : key === 'frontend' ? 0.2 : 0.4}s`,
          height: 'auto',
          minHeight: `${120 + (category.items.length * 50)}px`
        }"
      >
        <h3 class="category-title glow-on-hover">{{ category.name }}</h3>
        <div class="skill-items">
          <div
            v-for="(skill, idx) in category.items"
            :key="idx"
            class="skill-item"
            @click="$emit('show-tech-logo', skill)"
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
</template>

<script>
export default {
  name: "TechGrid",
  props: {
    skills: {
      type: Object,
      required: true
    },
    sectionTitle: {
      type: String,
      default: "🛠️ Technical Arsenal"
    }
  }
};
</script>

<style scoped>
.skills-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
}

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
  animation: fadeInUp 0.5s ease forwards;
  opacity: 0;
  display: flex;
  flex-direction: column;
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
  flex: 1;
  justify-content: space-around;
}

.skill-item {
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.skill-item:hover {
  transform: translateX(5px);
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

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .skill-category {
    height: auto !important; /* Override inline height on mobile */
    min-height: 0 !important;
  }
}
</style>
