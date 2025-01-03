export const titleAnimation = {
  methods: {
    animateTitle(title) {
      const emoji = this.$route.meta.emoji || '🚀';
      let counter = 0;
      const animations = [
        `${emoji} ${title}`,
        `✨ ${title} ✨`,
        `${emoji} ${title}`,
        `⭐ ${title} ⭐`
      ];
      
      if (this.titleInterval) clearInterval(this.titleInterval);
      
      this.titleInterval = setInterval(() => {
        document.title = animations[counter % animations.length];
        counter++;
      }, 2000);
    }
  },
  mounted() {
    this.animateTitle(this.$route.meta.title);
  },
  beforeUnmount() {
    if (this.titleInterval) clearInterval(this.titleInterval);
  }
};
