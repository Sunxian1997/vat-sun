import { createRouter, createWebHashHistory } from 'vue-router'
// 导入加载进度条
import NProgress from '@/utils/nprogress'

/* 
    调用api自动匹配所有路由文件内想要获取的路由信息
*/
const modules: Record<string, any> = import.meta.glob(
    ['./modules/**/*.ts'],
    {
        eager: true
    }
)
/* 导出的modules是一个模块，需要对其进行处理 */
let routers: any[]= []
Object.keys(modules).forEach(item => {
    routers = [
        ...routers,
        ...modules[item].default
    ]
})


// 创建路由实力
const router = createRouter({
    // 路由的模式--这里使用的是创建hash模式
    history: createWebHashHistory(),
    // 配置的路由数组
    // routes: [...staticPagesRouters, ...syncPagesRouters, ...localRouter],
    routes: routers,
    // 路由的滚动个行为
    scrollBehavior(to, from, savedPosition) {
        // 当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，就像重新加载页面那样。 vue-router 能做到，而且更好，它让你可以自定义路由切换时页面如何滚动。
        // savedPosition，只有当这是一个 popstate 导航时才可用（由浏览器的后退/前进按钮触发）

        // 始终滚动到顶部
        // return { top: 0 }

        // 你也可以通过 el 传递一个 CSS 选择器或一个 DOM 元素。在这种情况下，top 和 left 将被视为该元素的相对偏移量。
        /* return {
            // 也可以这么写
            // el: document.getElementById('main'),
            el: '#main',
            // 在元素上 10 像素
            top: 10,
        } */

        // 返回 savedPosition，在按下 后退/前进 按钮时，就会像浏览器的原生表现那样
        // if (savedPosition) {
        //     return savedPosition
        // } else {
        //     return { top: 0, behavior: 'smooth', }
        // }
        return new Promise(resolve => {
            if (savedPosition) {
                resolve(savedPosition)
            } else {
                resolve({ top: 0, behavior: 'smooth', })
            }
        })
    }
})
router.beforeEach((to: ToRouteType, _from, next) => {
    NProgress.start()
    next()
})
router.afterEach(() => {
    NProgress.done()

})
// 导出路由实例，为了后期挂载到app上面
export default router;
