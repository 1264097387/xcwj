<template>
  <!-- 顶部 -->
  <div class="personal">
    <div></div>
    <div class="personal_header">
      <div>
        <img :src="touxiang" />
      </div>
      <div>
        <div v-if="$store.state.isLogin">
          <p style="color:#cc5522" v-text="'欢迎'+$store.state.username+'  回家'" ></p>
          <p>因为一个人 爱上一座城</p>
        </div>
        <div v-else  @click="$router.push('/login')">
          <p 
            @click="$router.push('/register')"
            @load="inner">
            登录/注册
          </p>
          <p>因为美丽屋 爱上一座城</p>
        </div>
        <div>
          <img src="../assets/icon_w8tkk6teaws/dayu.png"
              alt="" />
        </div>
      </div>
    </div>
    <!-- 内容1 -->
    <div class="personal_info">
      <div>
        <img src="../assets/icon_w8tkk6teaws/shijian.png"
             alt="" />
        <p>我的约看</p>
      </div>
      <div>
        <img src="../assets/icon_w8tkk6teaws/prehetong.png"
             alt="" />
        <p>我的合同</p>
      </div>
      <div>
        <img src="../assets/icon_w8tkk6teaws/zhangdan-copy-copy.png"
             alt="" />
        <p>代缴账单</p>
      </div>
      <div>
        <img src="../assets/icon_w8tkk6teaws/youhuiquan.png"
             alt="" />
        <p>优惠券</p>
      </div>
    </div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000"
              class="personal_lun">
      <mt-swipe-item><img src="../assets/icon_w8tkk6teaws/meiliwu1.jpg"
             alt="" /></mt-swipe-item>
      <mt-swipe-item><img src="../assets/icon_w8tkk6teaws/meiliwu2.jpg"
             alt="" /></mt-swipe-item>
    </mt-swipe>
    <!-- 内容2 -->
    <div class="personal_info">
      <div>
        <img src="../assets/icon_w8tkk6teaws/zaixianbaoxiu.png"
             alt="" />
        <p>在线保修</p>
      </div>
      <div>
        <img src="../assets/icon_w8tkk6teaws/mensuo.png"
             alt="" />
        <p>只能门锁</p>
      </div>
      <div>
        <img src="../assets/icon_w8tkk6teaws/order.png"
             alt="" />
        <p>服务订单</p>
      </div>
      <div>
        <img src="../assets/icon_w8tkk6teaws/guanjia.png"
             alt="" />
        <p>我的管家</p>
      </div>
    </div>
    <!-- 内容3 -->
    <div class="personal_foot">
      <div>帮助与反馈</div>
      <div>个人设置</div>
      <div>关于美丽屋</div>
    </div>
    <navi-gation></navi-gation>
  </div>
</template>

<script>
import NaviGation from '../components/Navigation'
export default {
  name: 'Personal',
  components: {
    NaviGation
  },
  data () {
    return {
      msg: '',
      touxiang:'yonghu.png',
    }
  },
  methods: {
    inner (event) {
      let username = sessionStorage.getItem('username')
      console.log('aa' + username);
      event.target.innerHTML = username
    }
  },
  mounted() {
    document.body.scrollIntoView()
    console.log(this.$store.state.isLogin);
    if(this.$store.state.isLogin){
      this.touxiang=require('../assets/icon_w8tkk6teaws/admin.jpg')
      console.log(this.touxiang);
    }else{
      this.touxiang=require('../assets/icon_w8tkk6teaws/yonghu.png')
    }
  }

}
</script>

<style lang="less" scoped>
body,
div,
p {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.personal {
  margin: 2.778vw;
  margin-bottom: 60px;
  background-color: white;
  .personal_header {
    display: flex;
    justify-content: center;
    div {
      flex: 1;
      img {
        width: 13.889vw;
        height: 13.889vw;
        padding: 5.556vw 5.556vw;
        margin: 1.389vw;
      }
    }
    div:last-child{
      flex: 3;
      display: flex;
      justify-content: center;
      div:last-child {
        flex: 1;
        img {
          display: block;
          width: 6.667vw;
          height: 6.667vw;
          margin-top: 5.556vw;
          opacity: 0.5;
        }
      }
      div:first-child {
        flex: 2;
        font-size: 3.333vw;
        padding: 5.556vw 1.389vw;
        margin-top: 2.778vw;
        p:first-child{
          font-size:18px
        }
        p {
          margin: 7px auto;
          padding: 0;
          font-weight: 500;
        }
        :nth-child(2) {
          color: #aaa;
          font-weight: 200;
          margin-top: 0.833vw;
        }
      }
    }
  }
  .personal_info {
    height: 19.444vw;
    display: flex;
    justify-content: center;
    margin-top: 5.556vw;
    border-radius: 1.389vw;
    box-shadow: 0 0 3.333vw -1.389vw #aaa;
    div {
      height: 100%;
      flex: 1;
      font-size: 2.778vw;
      text-align: center;
      box-sizing: border-box;
      margin: 2.778vw auto;
      img {
        display: block;
        width: 6.667vw;
        height: 6.667vw;
        margin: 1.389vw auto;
      }
    }
  }
  .personal_lun {
    height: 33.333vw;
    margin-top: 5.556vw;
    img {
      width: 100%;
      height: 33.333vw;
    }
  }
  .personal_foot {
    height: 32.667vw;
    position: relative;
    margin-top: 5.556vw;
    border-radius: 1.389vw;
    box-shadow: 0 0 3.333vw -1.389vw #aaa;
    div {
      height: 33.333%;
      line-height: 13.889vw;
      margin-left: 5.556vw;
    }
    div::after {
      width: 6.667vw;
      height: 6.667vw;
      margin-top: 3.333vw;
      content: "";
      background: url("../assets/icon_w8tkk6teaws/dayu.png") no-repeat center
        center;
      background-size: cover;
      position: absolute;
      right: 5.556vw;
      opacity: 0.5;
    }
  }
}
</style>
