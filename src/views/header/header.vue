<template>
  <div
    class="bg-#ddd border-b bg-white flex px-3 items-center justify-between shadow-sm w-100 h-12"
  >
    <div class="flex items-center">
      <i class="iconfont pr-2">&#xe60d;</i>
      <bread-crumb />
    </div>

    <div class="flex items-center">
      <i class="iconfont px-3">&#xe69b;</i>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          My user<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人资料</el-dropdown-item>
            <el-dropdown-item @click="OutLogin">退出登录</el-dropdown-item>
            <!-- <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item> -->
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";

import BreadCrumb from "../Breadcrumb/Breadcrumb.vue";
export default defineComponent({
  name: "Header",
  components: {
    BreadCrumb,
  },
  setup() {
    const router = useRouter();
    // 退出登录
    const OutLogin = () => {
      localStorage.removeItem("token");
      router.push("/login");
      ElMessage.success({
        message: "退出成功!",
        type: "success",
      });
      // 删除token 即可
    };
    return { OutLogin };
  },
});
</script>

<style >
</style>