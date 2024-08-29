export default [
    {
        path: "/",
        redirect: '/login'
    },
    {
        path: "/login",
        name: 'login',
        component: () => import("@/views/Login/index.vue"),
        mate: {
            title: '登录',
        }
    },
    {
        path: "/404",
        name: '404',
        component: () => import("@/views/errorPage/404.vue"),
        mate: {
            title: '404',
        }
    }, {
        path: "/noPromission",
        name: 'noPromission',
        component: () => import("@/views/errorPage/noPromission.vue"),
        mate: {
            title: '没有权限',
        }
    }
]