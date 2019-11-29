<!--
 * @Author: siwenfeng
 * @Date: 2019-11-25 21:05:38
 * @LastEditTime: 2019-11-26 10:47:42
 * @Description: this is ....
 -->
<template>
  <div class="login-container">
    <div class="login-wrapper">
      <div class="login-top">
        <img src="/img/lg.png" alt class="login-logo" />
        <h4 class="login-title">水环境信息化整合平台</h4>
      </div>
      <div class="login-main">
        <el-form ref="loginForm" :model="loginForm">
          <el-form-item prop="user">
            <el-input
              prefix-icon="el-icon-user"
              placeholder="请输入用户名称"
              name="username"
              auto-complete="on"
              v-model="loginForm.username"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              prefix-icon="el-icon-lock"
              type="password"
              placeholder="请输入密码"
              name="password"
              auto-complete="on"
              v-model="loginForm.password"
            />
          </el-form-item>
          <el-button type="primary" class="login-btn" @click.native.prevent="handleLogin" :loading="loading">登&nbsp;录</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456"
      },
      loading: false,
      rules: {
        user: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          },
          {
            min: 6,
            max: 10,
            message: "密码长度不能小于6位",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          const loading = this.$loading({
            lock: true,
            text: "登录中,请稍后。。。",
            spinner: "el-icon-loading"
          });
          this.$store
            .dispatch("LoginByUsername", this.loginForm)
            .then(() => {
              this.$router.push({ path: '/' });
              loading.close();
            })
            .catch(() => {
              loading.close();
            });
        }
      });
    }
  }
};
</script>

<style lang="scss">
@import "@/styles/login.scss";
</style>
