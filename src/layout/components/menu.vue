<script setup lang="ts">
import { getMenuRouters } from "@/utils/router";
const menuRouters: any = getMenuRouters();

const handleOpen = async () => {};
const handleClose = async () => {};
</script>
<template>
  <div class="vat-menuPage">
    <!-- 菜单栏logo -->
    <img
      src="@/assets/logo/logo3.jpeg"
      class="vat-menuPage_logo"
    >
    <!-- 路由菜单 -->
    <div class="vat-menuPage_menu">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="vat-menuComp"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="4" >
          <el-icon>
            <setting />
          </el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<style scoped lang='scss'>
@include block(menuPage) {
  display: flex;
  flex-direction: column;
  @include element(logo) {
    height: 68px;
  }
  @include element(menu) {
    @include block(menuComp) {
      height: calc(100vh - 68px);
      background-image: url("@/assets/bg/menu1.jpg");
      background-size: cover;
    }
  }
}
</style>
