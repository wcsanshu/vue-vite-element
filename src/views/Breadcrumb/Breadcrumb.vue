<template>
  <el-breadcrumb class="breadList" separator="/">
    <el-breadcrumb-item
      v-for="(item, index) in breadList"
      :key="index"
      :to="{ path: '/' }"
      >{{ item.meta.title }}</el-breadcrumb-item
    >
    <!-- <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
  </el-breadcrumb>
</template>

<script lang="ts">
export default {
  name: "",
  computed: {
    breadList() {
      return this.$route.matched;
    },
  },
};
</script>

<style >
</style>