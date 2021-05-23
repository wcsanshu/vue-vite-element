<template>
  <div class="home flex">
    <div class="LeftBar">
      <!-- 左边框架 -->
      <div class="flex mt-2 justify-center items-center">
        <img class="imgtitle" src="@/assets/logo.png" alt="" />
        <span class="font-bold text-xl pl-3">Manager</span>
      </div>
      <!-- 导航菜单 -->

      <el-menu
        router
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        text-color="#fff"
      >
        <tree-menu :userMenu="userMenu" />
      </el-menu>
    </div>

    <!-- 右边框架 -->
    <div class="flex w-100 flex-col">
      <!-- 右边顶部 -->
      <hea-der />
      <!-- 右边内容区 动态路由 -->
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import TreeMenu from "./navbar/navbar.vue";
import HeaDer from "../views/header/header.vue";

export default defineComponent({
  name: "Home",
  components: {
    TreeMenu,
    HeaDer,
  },
  setup() {
    const userMenu = ref([]);
    // const GetmenList = async () => {
    //   let result = await getmenApi();
    //   console.log(result);
    //   const res = result.data.shift();
    //   userMenu.value = result.data;
    // };
    // GetmenList();
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
    return {
      userMenu,
      handleOpen,
      handleClose,
    };
  },
});
</script>

<style >
.home {
  background-color: #f4f6f7;
  min-width: 1500px;
}
.LeftBar {
  border: none;
  min-width: 265px;
  height: 100vh;
  background-color: #545c64;
  color: #fff;
  overflow-y: auto;
}

.el-menu-vertical-demo {
  border: none;
}
.imgtitle {
  width: 80px;
}
</style>