import { type } from '../../.nuxt/types/imports';
<template>
  <!-- 头部导航栏背景隐藏 -->
  <div :class="isTransparent ? 'transparent big-hrader' : 'header'">
    <div class="nav">
      <!-- 参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。 -->
      <el-row type="flex" style="height: 100%" justify="space-between">
        <el-col
          :xs="12"
          :sm="12"
          :md="6"
          :lg="9"
          :xl="1"
          style="display: flex; justify-content: center; align-items: center"
        >
          <div class="logo left"></div
        ></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
        <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
          ><div class="grid-content bg-purple"></div
        ></el-col>
        <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
          ><div class="grid-content bg-purple-light"></div
        ></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTransparent: "header",
    };
  },
};
</script>

<style>
</style>
