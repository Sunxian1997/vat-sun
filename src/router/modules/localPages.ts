const Layout = () => import('@/layout/index.vue')

export default [
    {
        path: '/home',
        name: 'home',
        component: Layout,
        children: [
            {
                path: '/welcome',
                name: 'welcome',
                component: () => import('@/views/welcome/index.vue'),
                meta: {
                    title: "首页"
                }
            }

        ]
    }
] as Array<RouteConfigsTable>