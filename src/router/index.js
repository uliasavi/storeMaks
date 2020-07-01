import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () =>
        import('../views/Home.vue')
    },
    {
      path: '*',
      name: 'error',
      component: () =>
        import('../views/ErrorPage.vue')
    },
    {
      path: '/delivery',
      name: 'delivery',
      component: () =>
        import('../views/Delivery.vue')
    },
    {
      path: '/Catalog',
      name: 'Catalog',
      component: () =>
        import('../views/Catalog.vue')
    },
    {
      path: '/Category',
      name: 'Category',
      component: () =>
        import('../views/Category.vue')
    },
    {
      path: '/Contacts',
      name: 'Contacts',
      component: () =>
        import('../views/Contacts.vue')
    },
    {
      path: '/NewsPage',
      name: 'NewsPage',
      component: () =>
        import('../views/NewsPage.vue')
    },
    {
      path: '/Details',
      name: 'Details',
      component: () =>
        import('../views/Details.vue')
    },
    {
      path: '/NewsToDay/:id',
      name: 'NewsToDay',
      component: () =>
        import('../views/NewsToDay.vue')
    },
    {
      path: '/Tooltip',
      name: 'Tooltip',
      component: () =>
        import('../views/Tooltip.vue')
    }
  ]
})

export default router
