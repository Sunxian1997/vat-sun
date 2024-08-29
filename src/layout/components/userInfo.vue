<script setup lang="ts">
import { ref } from "vue";

import avatarSrc from "@/assets/user/avatar1.jpg";
</script>
<template>
  <div class="vat-userInfo">
    <!-- 用户基本信息 -->
    <div class="vat-userInfo_base">
      <!-- 头像 -->
      <el-avatar
        shape="circle"
        :size="42"
        :src="avatarSrc"
        fit="contain"
      />
      <!-- 用户昵称 -->
      <el-dropdown
        placement="bottom"
        trigger="click"
      >
        <el-text class="vat-userInfo_base--name">住在网易云</el-text>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item><el-icon><User /></el-icon>个人中心</el-dropdown-item>
            <el-dropdown-item><el-icon><SwitchButton /></el-icon>退出系统</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<style scoped lang='scss'>
@include block(userInfo) {
  float: right;
  @include element(base) {
    display: flex;
    align-items: center;
    @include modify(name) {
      font-size: 18px;
      margin-left: 12px;
      color: #ffffff;
      cursor: pointer;
    }
  }
}
</style>
