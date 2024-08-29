<script  lang="ts" setup>
import { computed, ref } from "vue";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import en from "element-plus/dist/locale/en.mjs";

const language = ref("zh-cn");
const locale = computed(() => (language.value === "zh-cn" ? zhCn : en));
</script>

<template>
  <!-- Config Provider 被用来提供全局的配置选项，让你的配置能够在全局都能够被访问到。 -->
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>

</template>

<style scoped>
</style>
