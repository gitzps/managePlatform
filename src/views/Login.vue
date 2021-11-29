<template>
  <div class="page-login">
    <div class="login-content">
      <div class="login-title">智慧社区管理工作台</div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="manage-ruleForm"
        size="small"
      >
        <el-form-item label="账号" prop="account">
          <el-input v-model="ruleForm.account"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passWord">
          <el-input
            type="password"
            v-model="ruleForm.passWord"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  inject: ["rootInstace"],
  data() {
    function validatePassWord(rule, value, callback) {
      if (this.ruleForm.passWord === value) {
        callback();
      } else {
        callback("密码输入不一致请重新输入");
      }
    }
    return {
      ruleForm: { account: "", passWord: "", checkPass: "" },
      rules: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        passWord: [{ required: true, message: "请输入密码", trigger: "blur" }],
        checkPass: [
          { required: true, message: "请再次输入密码", trigger: "blur" },
          // { required: true, validator: validatePassWord, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    resetForm() {
      this.$refs["ruleForm"].resetFields();
    },
    submitForm() {
      this.$refs["ruleForm"].validate((valid) => {
        console.log(44444);
        if (valid) {
          if (this.ruleForm.account !== "admin") {
            this.$message({ type: "error", message: "输入账号有误请重新输入" });
          } else if (this.ruleForm.passWord !== "123456") {
            this.$message({ type: "error", message: "输入密码有误请重新输入" });
          } else {
            this.rootInstace.currentComponent = "home";
          }
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.page-login {
  display: flex;
  height: 100%;
  width: 100%;
  position: relative;
  background: url("./../assets/bg.png") no-repeat;
  background-size: 100% 100%;
  background-origin: content-box;

  .login-content {
    position: absolute;
    padding: 50px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 4px;

    .login-title {
      color: #08457e;
      font-size: 35px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 35px;
    }
  }
}
</style>
