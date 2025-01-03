import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home'

const routes = [
    {
        path: '/',
        name: 'Loading',
        component: () => import('@/views/Loading.vue'),
        meta: {
            layout: 'blank',
            hideNavigation: true,  // Add this flag
            title: '🚀 Loading...',
            description: 'Loading Page',
            emoji: '🚀'
        }
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: {
            layout: 'default',
            title: '🏠 Idris Bouargoub | Portfolio',
            description: 'Portfolio Home Page',
            emoji: '🏠'
        }

    },
    {
        path: '/underdevelopment',
        name: 'UnderDevelopment', // Fixed duplicate route name
        component: () => import('@/views/Loading.vue'),
        meta: {
            layout: 'blank',
            title: 'Under Development',
            description: 'Under Development Page'
        }
    },
    {
        path: '/projects',
        name: 'Projects',
        component: () => import('@/views/Projects.vue'),
        meta: {
            title: '💻 My Projects',
            description: 'My Portfolio Projects',
            emoji: '💻'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue'),
        meta: {
            title: '👨‍💻 About Me',
            description: 'Learn more about me',
            emoji: '👨‍💻'
        }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('@/views/Contact.vue'),
        meta: {
            title: '📧 Contact Me',
            description: 'Get in touch with me',
            emoji: '📧'
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

// Add navigation guard to prevent direct access to /home
router.beforeEach((to, from, next) => {
    // Reset scroll position
    window.scrollTo(0, 0);

    // Only redirect to loading if trying to access /home directly (not from within the app)
    if (to.path === '/home' && from.path === '') {
        next('/');
    } else {
        next();
    }
});

// Navigation guard to handle title changes
router.beforeEach((to, from, next) => {
    // Update page title
    document.title = to.meta.title || 'Idris Bouargoub | Portfolio'
    next()
})

export default router