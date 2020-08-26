<template>
  <div class="container">
    <login-head>
      <div slot="left"
           style="font-size:3.611vw"
           @click="$router.push({ path:'/personal'})">返回</div>
      <div slot="img"
           :class="{ login_img: isClassName }"></div>
      <div slot="right"
           style="font-size:3.611vw"
           @click="handele">
        注册
      </div>
    </login-head>
    <div class="login-text">
      <login-text label="账号"
                  placeholder="请输入账号"
                  style="margin:4.167vw 0"
                  @contentWatch="res => model.username = res">
      </login-text>

      <login-text label="密码"
                  placeholder="请输入密码"
                  type="password"
                  @contentWatch="res => model.password = res">
      </login-text>
      <login-btn BtnText="登录"
                 @TextClick="TextClick"></login-btn>
    </div>
  </div>
</template>

<script>
import loginHead from '@/components/loginHead.vue'
import loginText from '@/components/loginText.vue'
import loginBtn from '@/components/loginBtn.vue'

export default {
  name: 'Login',
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
    handele () {
      this.$router.push('/register')
      this.isClassName = false
    },
    TextClick () {

      //如果所有信息都为合法的信息,则进行提交;
      this.axios.post('/login', 'username=' + this.model.username + '&password=' + this.model.password).then(res => {
        //登录成功
        
        if (res.data.code == 1) {
          sessionStorage.setItem('isLogin', true)
          sessionStorage.setItem('userId', res.data.results.user_id);
          sessionStorage.setItem('username', res.data.results.username);
          this.$store.commit('login_mutation',res.data.results)
          this.$router.push('/Personal');
        } else {
          this.$messagebox("登录提示", "对不起,用户名或密码错误");
        }
      })

    }

  },
  mounted() {
    document.body.scrollIntoView()
  }
}
</script>

<style scorde>

.login-text {
  margin: 13.889vw 5.556vw !important;
}

.login_img {
  width: 100%;
  height: 100%;
  background: url("../assets/icon_w8tkk6teaws/login2.png") no-repeat 65%;
}
</style>
