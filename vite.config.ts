import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from "path";
import { PostCssToViewPort } from "./src/plugins/postcss-px-to-viewport";

export default defineConfig({
    plugins: [vue()],
    resolve: {
        // 路径别名替换
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "./bem.scss";'
            }
        },
        postcss: {
            // 记住我们的插件属于css，不要上来看到插件 就放到 plugins: [vue()]当中
            plugins: [PostCssToViewPort()]
        }
    }
})
