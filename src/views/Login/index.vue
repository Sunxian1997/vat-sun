<script setup lang="ts">
import { reactive, ref } from "vue";
import type { ComponentSize, FormInstance } from "element-plus";
import { Lock, User } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
let router = useRouter();
// 登录表单的类型接口
interface LoginFormMode {
  userName: "";
  passWord: "";
}
// 创建登录表单的数据存储变量
let loginFormMode = reactive<LoginFormMode>({});
// 创建登录表单的元素Ref实例
const loginFormRef = ref<FormInstance>();
// 创建登录表单组件的大小设置变量
let formSize = ref<ComponentSize>("default");
// 点击‘登录’触发登录事件
const toLogin = async () => {
  let validate = await loginFormRef.value.validate();
  if (validate) {
    router.push("/welcome");
  }
};
</script>
<template>
  <div class="vat-page">
    <el-card class="vat-page_card">
      <img
        src="@/assets/logo/logoTitle.png"
        class="vat-page_card--img"
      >
      <el-form
        ref="loginFormRef"
        style="max-width: 600px"
        :model="loginFormMode"
        label-width="auto"
        :size="formSize"
      >
        <el-form-item
          prop="userName"
          :rules="[
                    {
                      required: true,
                      message: '请输入账号',
                      trigger: 'blur'
                    }
                  ]"
        >
          <el-input
            v-model="loginFormMode.userName"
            :prefix-icon="User"
            placeholder="请输入账号"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item
          prop="passWord"
          :rules="[
                    {
                      required: true,
                      message: '请输入密码',
                      trigger: 'blur'
                    }
                  ]"
        >
          <el-input
            v-model="loginFormMode.passWord"
            :prefix-icon="Lock"
            placeholder="请输入密码"
            type="passWord"
            show-password
            clearable
          />
        </el-form-item>
      </el-form>
      <el-button
        class="vat-page_card--btn"
        @click="toLogin"
      >登录</el-button>
    </el-card>
  </div>
</template>
<style scoped lang='scss'>
@include block(page) {
  background-image: url("@/assets/bg/bg2.jpg");
  background-size: 100% 100%;
  height: 100vh;
  position: relative;
  @include element(card) {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 900vatPx;
    max-width: 600px;
    border-radius: 20vatPx;
    background-color: rgba($color: #ffffff, $alpha: 0.15);

    @include modify(img) {
      width: 100%;
      height: 100px;
      //   opacity: .55;
      margin-bottom: 20px;
    }
    @include modify(btn) {
      margin: 20px 0px;
      border-radius: 10px;
      width: 100%;
      border: 0;
      color: #fff;
      text-align: center;
      line-height: 30px;
      font-size: 15px;
      background-image: linear-gradient(to right, #30cfd0, #330867);
      word-spacing: 6px;
    }
  }
}
</style>
