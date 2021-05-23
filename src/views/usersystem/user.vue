<template>
  <div class="flex items-center rounded-md m-2">
    <el-form
      size="small"
      :inline="true"
      :model="formInline"
      class="demo-form-inline bg-white flex pt-4 w-100 pl-5 border-b"
    >
      <el-form-item label="用户ID">
        <el-input v-model="formInline.user" placeholder="用户ID"></el-input>
      </el-form-item>

      <el-form-item label="在职状态">
        <el-select v-model="formInline.region" placeholder="在职状态">
          <el-option label="在职" value="shanghai"></el-option>
          <el-option label="离职" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </div>

  <!-- 用户管理表格 -->
  <div class="flex flex-col rounded-md m-5 h-100 bg-white">
    <!-- 顶部按钮 -->
    <div class="flex p-3">
      <el-button @click="isShow" size="small" type="primary"
        >新增用户</el-button
      >
      <el-button size="small" type="danger">删除用户</el-button>
    </div>

    <el-table size="small" :data="tableData" style="width: 99%">
      >
      <el-table-column prop="id" label="用户ID" width="180"> </el-table-column>
      <el-table-column prop="staffname" label="用户姓名" width="180">
      </el-table-column>
      <el-table-column prop="staffjur" label="用户角色" width="180">
      </el-table-column>

      <el-table-column prop="staffjob" label="当前岗位"> </el-table-column>
      <el-table-column prop="entrytime" label="入职时间"> </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <user-from />
  </div>
</template>

<script>
import UserFrom from "../../components/from.vue";
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    UserFrom,
  },
  setup() {
    const store = useStore();
    const isOpen = ref(false);
    // 控制新增弹出框是否显示
    // const isShow = () => {
    //   store.commit("UseIshow", true);
    // };
    // 查询
    const onSubmit = () => {
      console.log("测试啊");
    };
    // 获取用户管理数据
    store.dispatch("GetSaffList");

    // 监听改变并拿到用户管理数据
    const tableData = computed(() => store.state.tableData);

    return {
      onSubmit,
      tableData,
      isOpen,
    };
  },
  data() {
    return {
      formInline: {
        user: "",
        region: "",
      },
    };
  },
  // async created() {
  //   GetSaffLIst: {
  //     console.log("测试");
  //     const res = await GetStaffListApi("10");
  //     console.log(res);
  //     this.tableData = res.rows;
  //     console.log(this.tableData);
  //   }
  // },
  methods: {
    // 新增按钮点击
    isShow() {
      this.$store.commit("UseIshow", true);
    },
  },
};
</script>

<style>
.UserBut {
  width: 80px;
}
</style>