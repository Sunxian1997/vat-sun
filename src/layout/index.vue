<script setup>
import NavBar from "./components/navBar.vue"; //导航栏
import Menu from "./components/menu.vue"; //菜单栏
</script>
<template>
  <div class="vat-layout">
    <div class="vat-layout_menubox">
      <Menu></Menu>
    </div>
    <div class="vat-layout_contentbox">
      <NavBar></NavBar>
      <div class="vat-routeview">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style scoped lang='scss'>
@include block(layout) {
  height: 100%;
  width: 100%;
  display: flex;
  @include element(menubox) {
    width: 200px;
    color: #fff;
    height: 100%;
  }
  @include element(contentbox) {
    height: 100%;
    flex: 1;
    @include block(routeview) {
      height: calc(100vh - 68px);
      box-sizing: border-box;
      padding: 20px;
      overflow-y: scroll;
    }
  }
}
</style>
