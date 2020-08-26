<template>
  <div class="home">
    <div class="my-btm">
      <router-link to="/">
        <div>
          <i></i>
        </div>
        <div>
          <span  >首页</span> 
        </div>
      </router-link>
      <router-link to="/search">
        <div>
          <i></i>
        </div>
        <div>
          <span >找房</span> 
        </div>
      </router-link>
      <router-link to="/collec">
        <div>
          <i></i>
        </div>
        <div>
          <span >收藏</span> 
        </div>
      </router-link>
      <router-link to="/personal">
        <div>
          <i></i>  
        </div>
        <div>
          <span >我的</span> 
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    msg: String,
  },
  data() {
    return {
      b:1,
    };
  },
  methods: {

  }
};
</script>

<style scoped>
  .my-btm{
    background-image: linear-gradient(180deg, #d9d9d9, #d9d9d9 50%, transparent 50%);
    background-size: 100% 1px;
    background-repeat: no-repeat;
    background-position: top left;
    background-color: #fafafa;
    display: flex;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    text-align: center;
    position: fixed;
  }
  .my-btm>a{
    display: block;
    padding: 7px 0;
    flex: 1;
    text-decoration: none;
    font-size: 12px;
  }
  .router-link-exact-active{
    color: #f00;
    background-color:#dfdfdf
  }
  .my-btm>a>div>i{
    display: inline-block;
    width: 24px;height: 24px;
  }
  .my-btm>a:first-child>div>i{
    background-image: url(../assets/daohang/5.png);
  }
  .my-btm>a:nth-child(2)>div>i{
    background-image: url(../assets/daohang/6.png);
  }
  .my-btm>a:nth-child(3)>div>i{
    background-image: url(../assets/daohang/7.png);
  }
  .my-btm>a:last-child>div>i{
    background-image: url(../assets/daohang/8.png);
  }
  .my-btm>a:first-child.router-link-exact-active>div>i{
    background-image: url(../assets/daohang/1.png);
  }
  .my-btm>a:nth-child(2).router-link-exact-active>div>i{
    background-image: url(../assets/daohang/2.png);
  }
  .my-btm>a:nth-child(3).router-link-exact-active>div>i{
    background-image: url(../assets/daohang/3.png);
  }
  .my-btm>a:last-child.router-link-exact-active>div>i{
    background-image: url(../assets/daohang/4.png);
  }
</style>