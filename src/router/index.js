import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home'

const routes = [
    {
        path: '/',
        name: 'Loading',
        component: () => import('@/views/Loading.vue'),
        meta: {
            layout: 'blank',
            hideNavigation: true,  // Add this flag
            title: 'Loading',
            description: 'Loading Page'
        }
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        meta: {
            layout: 'default',
            title: 'Home',
            description: 'Portfolio Home Page'
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
            title: 'Projects',
            description: 'My Portfolio Projects'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About.vue'),
        meta: {
            title: 'About Me',
            description: 'Learn more about me'
        }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import('@/views/Contact.vue'),
        meta: {
            title: 'Contact Me',
            description: 'Get in touch with me'
        }
    }
];

const router = createRouter({
    history: createWebHashHistory(),
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

export default router