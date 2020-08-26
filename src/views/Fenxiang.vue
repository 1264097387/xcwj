<template>
  <div  >
    <div class="container">
      <h1>分享</h1>
    </div>
    <div class="container1">
      <div><img src="../assets/weixin.png" alt="">
        <p>微信</p>
      </div>
      <div><img src="../assets/weibo.png" alt="">
        <p>微博</p>
      </div>
      <div><img src="../assets/qq.png" alt="">
        <p>QQ</p>
      </div>
      <div><img src="../assets/kongjian.png" alt="">
        <p>QQ空间</p>
      </div>
      <div><img src="../assets/youxiang.png" alt="">
        <p>邮箱</p>
      </div>
    </div>
    <div @click="prev" class="container2"></div>
  </div>
</template>
<style scoped>
  .container {
    text-align: center;
    margin-top: 50%;
    opacity: .7;
  }

  h1 {
    font-size: 26px;
    font-weight: 600;
  }

  .container1 {
    display: flex;
    flex-wrap: wrap;
    height: 200px;
    text-align: center;
    margin-top: 15%;

  }

  .container1>div {
    flex: 0 0 33.33%;
    height: 50px;
    width: 50px;

  }

  p {
    margin-top: 5px;
  }

  .container2 {
    width: 20px;
    height: 20px;
    background: url("../assets/X .png");
    background-size: 100%;
    margin: 90px auto;
    opacity: .7;
  }
</style>
<script>
export default{
  data () {
    return {
    
    }
  },
  methods: {
    prev(){
    		this.$router.go(-1)
    	}
      
    }
}
</script>