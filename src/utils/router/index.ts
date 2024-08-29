// 获取本地所有路由
const modules: Record<string, any> = import.meta.glob(
    ['@/router/modules/**/*.ts'], { eager: true }
)
let routers: any[] = []
Object.keys(modules).forEach(key => {
    routers = [
        ...routers,
        ...modules[key].default
    ]
})
export const getMenuRouters = () => routers