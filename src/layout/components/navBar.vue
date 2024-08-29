<script setup lang="ts">
import WeatherMini from "@/components/weatherMini/index.vue";
import UserInfo from "./userInfo.vue";
import { ref } from "vue";
// 控制菜单折叠
let isFold = ref(false);
</script>
<template>
  <div class="vat-navbar">
    <!-- 放置个面包屑吧 -->
    <div class="vat-navbar_left">
      <el-icon size="32">
        <Expand v-if="isFold" />
        <Fold v-else />
      </el-icon>
    </div>
    <!-- 中间暂时放一个日期控件 -->
    <div class="vat-navbar_center">
      <WeatherMini />
    </div>
    <!-- 个人信息 -->
    <div class="vat-navbar_right">
      <UserInfo />
    </div>
  </div>
</template>
<style scoped lang='scss'>
@include block(navbar) {
  height: 68px;
  color: #ffffff;
  background-image: url("@/assets/bg/navbar1.png");
  background-size: cover;
  display: flex;
  align-items: center;
  padding: 0px 12px;
  @include element(left) {
    flex: 1;
    display: flex;
    align-items: center;
  }
  @include element(center) {
    flex: 1;
    display: flex;
    justify-content: center;
  }
  @include element(right) {
    flex: 1;
  }
}
</style>
