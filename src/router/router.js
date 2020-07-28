import Vue from 'vue';
import Router from 'vue-router';
import Layout from '../layout/layout.vue';
// import home from '../views/home.vue';

Vue.use(Router);

const router = new Router({
    routes: [{
        path: '/',
        component: Layout,
        children: [{
                path: '',
                name: 'about',
                // component: () => import('../views/about.vue'),
                component: () => import('../views/About/index.vue'),
            },
            {
                path: '/curriculum',
                name: 'curriculum',
                //component: () => import('../views/curriculum.vue'),
                component: () => import('../views/Curriculum/index.vue'),
            },
            {
                path: '/research',
                name: 'research',
                //component: () => import('../views/research.vue'),
                component: () => import('../views/Research/index.vue'),
            },
            {
                path: '/personal',
                name: 'personal',
                //component: () => import('../views/personal.vue'),
                component: () => import('../views/Personal/index.vue'),
            },
            {
                path: '/contact',
                name: 'contact',
                //component: () => import('../views/contact.vue'),
                component: () => import('../views/Contact/index.vue'),
            }

        ]
    }]
});
export default router;