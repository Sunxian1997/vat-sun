// 这里无需安装postcss依赖了，vite已经内置了
import { Plugin } from "postcss";
// 配置基础参数
const Options = {
    // 默认的开发设计图宽度
    viewPortWidth: 1920
}
// 定义一个类型接口
type Options = {
    viewPortWidth?: number
}
/**
 * PostCssToViewPort    插件名
 * options 插件函数参数
 * Options  参数类型
 * Options = Options    为参数赋值默认值
 */
export const PostCssToViewPort = (options: Options = Options): Plugin => {
    // 这里吧定义的默认参数拿过来
    const opt = (<any>Object).assign({}, Options, options)
    return {
        postcssPlugin: 'postcss-px-to-viewport',
        // 钩子函数
        Declaration(node) {
            // 这里node有很多参数，node.prop 为属性名字，node.value为属性值
            // 把px转换
            if (node.value.includes('vatPx')) {
                // parseFloat方法去掉px
                const num = parseFloat(node.value)
                // 通过计算为css样式重新计算值
                node.value = `${((num / opt.viewPortWidth) * 100).toFixed(2)}vw`
            }
        }
    }
}