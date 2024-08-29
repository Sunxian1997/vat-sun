// 全局路由声明
import { FunctionalComponent } from "vue";
import { type RouteComponent, type RouteLocationNormalized } from "vue-router";

declare global {
    interface ToRouteType extends RouteLocationNormalized {
        meta: CustomizeRouteMeta;
    }

    /* 完整子路由的meta配置 */
    interface CustomizeRouteMeta {
        title: string,      //  菜单名称
        icon?: string | FunctionalComponent,    //  菜单图标
        extraIcon?: string | FunctionalComponent,    //  菜单名称右侧的额外图标
        showLink?: boolean,     //  是否在菜单中显示
        showParent?: boolean,    //  是否显示父级菜单，可选
        roles?: Array<string>,    //  页面级别权限设置，可选
        auths?: Array<string>,    //  按钮级别权限设置，可选
        keepAlive?: boolean,     //  路由组件缓存
        frameSrc?: string,       //  内嵌iframe链接
        /* 
            是否是内部页面  如果使用frameSrc来嵌入页面的时候，isFrameSrcInternal=true 
            需要做特殊处理
            例如：链接是    /demo/index.html
            前端需要处理成  http://localhost:8080/demo/index.html
        */
        isFrameSrcInternal?: boolean,
        frameLoading?: boolean,      //  开启首次加载动画
        /* 
            加载动画的方式有两种
            1.vue内置的transitions
            2.使用animate.css
        */
        transition?: {
            /**
       * @description 当前路由动画效果
       * @see {@link https://next.router.vuejs.org/guide/advanced/transitions.html#transitions}
       * @see animate.css {@link https://animate.style}
       */
            name?: string;
            /** 进场动画 */
            enterTransition?: string;
            /** 离场动画 */
            leaveTransition?: string;
        },
        hiddenTag?: boolean,     //  是否添加信息到标签页
        dynamicLevel?: number,   //  动态路由可打开最大数量
        /* 
            将某个菜单激活
            主要用于通过params和query传参的路由，当他们通过配置showLink:false后不在菜单中显示，就不会有任何菜单高亮
            而通过设置activePath指定激活菜单即可获得高亮，activePath为指定激活菜单的path
        */
        activePath?: string
    }
    /* 完整子路由配置表 */
    interface RouteChildrenConfigsTable {
        path: string,       //  子路由地址  
        name?: string,      //   路由名称
        redirect?: string,  //  路由重定向
        component?: RouteComponent, //  按需加载的组件
        meta?: CustomizeRouteMeta,  //  子路由的meta配置
        children?: Array<RouteChildrenConfigsTable> //  子路由配置项
    }

    /* 整体路由配置 */
    interface RouteConfigsTable {
        name?: string,
        path: string,
        component?: RouteComponent,
        redirect?: string;
        meta?: {
            title?: string,
            icon?: string | FunctionalComponent,
            showLink?: boolean,
            rank?: number,   // 菜单升序排序
        },
        children?: Array<RouteChildrenConfigsTable>
    }
}

declare module "vue-router" {
    interface RouteMeta extends CustomizeRouteMeta { }
}