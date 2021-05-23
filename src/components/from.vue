
<template>
  <div v-if="isOpen" class="z-50 fromList flex justify-center items-center">
    <div class="bg-white rounded-xl">
      <div class="w-100 h-12 flex justify-between pt-4">
        <span class="text-lg pl-4">新增用户</span>
        <!-- 关闭按钮 -->
        <i @click="outIsShow" class="el-icon-close px-5"></i>
      </div>
      <el-form
        ref="fromlist"
        :model="fromlist"
        class="pr-16 pl-6 pt-4"
        label-width="100px"
      >
        <el-form-item label="用户姓名">
          <el-input v-model="fromlist.name"></el-input>
        </el-form-item>
        <el-form-item label="用户岗位">
          <el-select v-model="fromlist.region" placeholder="请选择活动区域">
            <el-option label="前端" value="前端"></el-option>
            <el-option label="后端" value="后端"></el-option>
            <el-option label="全栈" value="全栈"></el-option>
            <el-option label="摸鱼" value="摸鱼"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="入职时间">
          <el-col :span="15">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="fromlist.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>

        <el-form-item label="用户权限">
          <el-radio-group v-model="fromlist.resource">
            <el-radio label="管理员"></el-radio>
            <el-radio label="正式工"></el-radio>
            <el-radio label="实习生"></el-radio>
          </el-radio-group>
        </el-form-item>

        <div class="flex pl-8">
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即添加</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { ElMessage } from "element-plus";
import { AddStaffApi } from "../api/userApi";
export default {
  data() {
    return {
      fromlist: {
        name: "",
        date1: "",
        region: "",
        resource: "",
      },
    };
  },
  computed: {
    isOpen() {
      return this.$store.state.isShow;
    },
  },
  methods: {
    // 关闭弹出框
    outIsShow() {
      this.$store.commit("UseIshow", false);
    },
    // 创建用户
    onSubmit() {
      AddStaffApi(
        this.fromlist.name,
        this.fromlist.region,
        this.fromlist.resource,
        this.fromlist.date1
      ).then((res) => {
        if (res.code === 200) {
          ElMessage.success({
            message: "添加成功",
            type: "success",
          });
          // 隐藏窗口
          this.$store.commit("UseIshow", false);
          //刷新用户数据
          this.$store.dispatch("GetSaffList");
        }
      });
    },
  },

  // setup() {
  //   console.log(fromlist.name);
  //   const store = useStore();
  //   const isOpen = computed(() => store.state.isShow);
  //   // 关闭弹出框
  //   const outIsShow = () => {
  //     store.commit("UseIshow", false);
  //   };

  //   const onSubmit = () => {
  //     console.log(fromlist.name);
  //   };
  //   return {
  //     isOpen,
  //     outIsShow,
  //     fromlist,
  //     onSubmit,
  //   };
  // },
  // data() {
  //   return {
  //     form: {
  //       name: "",
  //       region: "",
  //       date1: "",
  //       date2: "",
  //       delivery: false,
  //       type: [],
  //       resource: "",
  //       desc: "",
  //     },
  //   };
  // },
};
</script>

<style>
.fromList {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
}
</style>
