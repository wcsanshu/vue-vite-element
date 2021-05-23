<template>
  <div
    class="login animate__animated animate__fadeIn flex items-center justify-center"
  >
    <div class="boxLogin flex flex-col items-center">
      <span class="text-3xl font-bold mb-6">火星登录</span>
      <!-- 登录框 -->
      <div>
        <el-form class="inputBox"  :rules="rules">
          <!-- 账号 -->
          <el-form-item prop="userName">
            <el-input
              prefix-icon="el-icon-user"
              v-model="userName"
              autocomplete="off"
            ></el-input>
          </el-form-item>

          <!-- 密码 -->
          <el-form-item prop="password">
            <el-input
              prefix-icon="el-icon-view"
              v-model="password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <!-- 登录按钮 -->
          <el-button class="w-100 mt-4" type="primary" @click="submitForm()"
            >登录</el-button
          >
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { ElMessage } from "element-plus";
import { PostLoginAPI } from "../../api/userApi";
import { tescApi } from "../../api/userApi";
export default {
  data() {
    return {
      password: "",
      userName: "",
      rules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        pasw: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    // 登录
    submitForm() {
      PostLoginAPI(this.userName, this.password).then((res) => {
        console.log("res", res);
        if (res.code === 200) {
          ElMessage.success({
            message: "登录成功!",
            type: "success",
          });
          // 保存token
          localStorage.setItem("token", res.token);
          this.$router.push("/");
        }else{
          ElMessage.error('登录失败，用户名或密码错误');
        }
      });
    },
  },
};
</script>

<style >
.login {
  height: 100vh;
}

.boxLogin {
  width: 500px;
  padding: 50px;
  box-shadow: 0px 0px 10px 3px #c7c9cb4d;
}

.inputBox {
  width: 300px;
}
</style>