<template>
  <!-- 菜单列表 -->
  <template v-for="menu in userMenu">
    <!-- 父级菜单 -->
    <!-- v-if判断 如果数据里没有children 则不需要渲染子级菜单 -->
    <!-- 递归第二次传递 menu 没有 children -->
    <el-submenu
      v-if="
        menu.children &&
        menu.children.length > 0 &&
        menu.children[0].menuType == 1
      "
      :key="menu._id"
      :index="menu.path"
    >
      <!-- 如果 有children 有则渲染父菜单 -->
      <template #title>
        <i :class="menu.icon"></i>
        <span>{{ menu.menuName }}</span>
      </template>

      <!-- 渲染子菜单 需要继续调用自己 -->
      <!-- 第二次传递则没有 menu.children 则直接进入下方的子级菜单渲染 -->
      <tree-menu :userMenu="menu.children" />
    </el-submenu>

    <!-- 子级 -->
    <!-- 没有  menu.children 则直接渲染子级菜单 -->
    <el-menu-item
      v-else-if="menu.menuType == 1"
      :index="menu.path"
      :key="menu._id"
      >{{ menu.menuName }}
    </el-menu-item>
  </template>
</template>


<script>
export default {
  name: "TreeMenu",
  props: {
    userMenu: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {},
};
</script>