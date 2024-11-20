import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/product',
      name: 'Product',
      component: () => import('@/views/product/index.vue')
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('@/views/blog/index.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('@/views/contact/index.vue')
    },
    {
      path:'/product-group',
      name:'ProductGroup',
      component: () => import('@/views/productGroup/index.vue')
    }
  ]
});

export default router;
