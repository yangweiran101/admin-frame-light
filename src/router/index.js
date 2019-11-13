import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard/dashboard'),
      meta: { title: '斑达阅读', icon: 'dashboard' }
    }]
  },
  // 轮播图
  {
    path: '/slide',
    component: Layout,
    redirect: 'noRedirect',
    name: 'slide',
    meta: { title: '轮播图', icon: 'example' },
    children: [
      {
        path: 'category',
        name: 'slideCategory',
        component: () => import('@/views/slide/slideCategory'),
        meta: { title: '轮播图分类', icon: 'component' }
      },
      {
        path: 'list',
        name: 'slideList',
        component: () => import('@/views/slide/slideList'),
        meta: { title: '轮播图列表', icon: 'list' }
      }
    ]
  },
  // 用户管理
  {
    path: '/user',
    component: Layout,
    redirect: 'noRedirect',
    name: 'user',
    meta: { title: '用户', icon: 'peoples' },
    children: [
      {
        path: 'list',
        name: 'userList',
        component: () => import('@/views/user/userList'),
        meta: { title: '用户列表', icon: 'list' }
      },
      {
        path: 'info',
        name: 'userInfo',
        component: () => import('@/views/user/userInfo'),
        meta: { title: '账户信息', icon: 'user' }
      }
    ]
  },
  // 活动管理
  {
    path: '/activity',
    component: Layout,
    redirect: 'noRedirect',
    name: 'activity',
    meta: { title: '活动', icon: 'form' },
    children: [
      {
        path: 'category',
        name: 'activityCategory',
        component: () => import('@/views/activity/activityCategory'),
        meta: { title: '活动分类', icon: 'component' }
      },
      {
        path: 'address',
        name: 'activityAddress',
        component: () => import('@/views/activity/activityAddress'),
        meta: { title: '活动地点', icon: 'guide' }
      },
      {
        path: 'list',
        name: 'activityList',
        component: () => import('@/views/activity/activityList'),
        meta: { title: '活动列表', icon: 'list' }
      }
    ]
  },
  // 订单管理
  {
    path: '/order',
    component: Layout,
    name: 'order',
    redirect: 'noRedirect',
    meta: { title: '订单', icon: 'shopping' },
    children: [
      {
        path: 'course',
        name: 'courseOrder',
        component: () => import('@/views/order/courseOrder'),
        meta: { title: '课程订单', icon: 'list' }
      },
      {
        path: 'activity',
        name: 'activityOrder',
        component: () => import('@/views/order/activityOrder'),
        meta: { title: '活动订单', icon: 'list' }
      }
    ]
  },
  //  外链
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
