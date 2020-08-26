<template>
  <div>
    <login-head>
      <div slot="left"
           style="font-size:3.611vw"
           @click="$router.push({ path: '/personal' })">
        返回
      </div>
      <div slot="img"
           :class="{ register_img: isClassName }"></div>
      <div slot="right"
           style="font-size:3.611vw"
           @click="handle">
        登录
      </div>
    </login-head>
    <div class="login-text">
      <login-text label="姓名"
                  style="margin:4.167vw 0;"
                  placeholder="请输入姓名"
                  @contentWatch="res => model.xc_username = res">
      </login-text>

      <login-text label="账号"
                  placeholder="请输入账号"
                  @contentWatch="res => model.username = res">
      </login-text>

      <login-text label="密码"
                  placeholder="请输入密码"
                  type="password"
                  @contentWatch="res => model.password = res">
      </login-text>
      <login-text label="密码"
                  placeholder="请再次输入密码"
                  type="password"
                  @contentWatch="res => model.password2 = res">
      </login-text>
      <login-btn BtnText="注册"></login-btn>
    </div>
  </div>
</template>

<script>
import loginHead from '@/components/loginHead.vue'
import loginText from '@/components/loginText.vue'
import loginBtn from '@/components/loginBtn.vue'
export default {
  data () {
    return {
      model: {},
      isClassName: true
    }
  },
  components: {
    loginHead,
    loginText,
    loginBtn
  },
  methods: {
    handle () {
      this.$router.push('/login')
      this.isClassName = false
    },
    //检测用户名
    checkUsername () {
      let username = this.model.username;
      //校验用户名,用户名的规则为:字母、数字及下划线的组合,长度为6~12个字符
      let usernameRegExp = /^[0-9A-Za-z_]{6,12}$/
      this.axios.get('/user', 'username=' + username).then(res => {
        if (usernameRegExp.test(username)) {
          this.usernameState = 'success';
          return true;
        } else if (res.data.code == 1) {
          this.usernameState = 'error';
          this.$toast({
            message: "用户名已存在",
            position: "top",
            duration: 2000
          });
          return false;
        } else {
          this.usernameState = 'error';
          this.$toast({
            message: "请输入合法用户名",
            position: "top",
            duration: 2000
          });
          return false;
        }
      });
    },
    //检测密码
    checkPassword () {
      let password = this.model.password;
      //校验密码,密码的规则为:字母、数字及下划线的组合,长度为8~20个字符
      let passwordRegExp = /^[0-9A-Za-z_]{8,20}$/;
      if (passwordRegExp.test(password)) {
        this.passwordState = 'success';
        return true;
      } else {
        this.passwordState = 'error';
        this.$toast({
          message: "请输入合法密码",
          position: "top",
          duration: 2000
        });
        return false;
      }
    }
  }
}
</script>

<style lang="less">
.login-text {
  margin: 13.889vw 5.556vw !important;
}
.register_img {
  width: 100%;
  height: 100%;
  background: url("../assets/icon_w8tkk6teaws/login1.png") no-repeat 65%;
}
</style>
