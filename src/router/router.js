import Vue from 'vue';
import Router from 'vue-router';
import Layout from '../layout/layout.vue';

Vue.use(Router);

const router = new Router({
    routes: [{
        path: '/',
        component: Layout,
        children: [{
            path: '',
            name: 'about',
            component: () => import('../views/About/index.vue'),
        },
        {
            path: '/curriculum',
            name: 'curriculum',
            component: () => import('../views/Curriculum/index.vue'),
        },
        {
            path: '/research',
            name: 'research',
            component: () => import('../views/Research/index.vue'),
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: () => import('../views/Portfolio/index.vue'),
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('../views/Contact/index.vue'),
        }

        ]
    }],
});
export default router;