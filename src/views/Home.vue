<template>
  <div>
    <div class="my_zhuye">
      <table></table>
      <div>
        <div class="div1">
          <p class="p2" @click="a=-a" >
            {{ptext}}
            <img src="../assets/sanjiao2.png" >
          </p>
          <div class="xlcd" v-show="a==-1" >
            <p v-for="(v,i) of area" :key="i" @click="ptext=v ;a=-a" v-text="v+'区'" ></p>
          </div>
          <img src="../assets/sousuo.png">
          <input type="text" class="input1"  placeholder="搜索">
          <p class="p3"  >
            <img src="../assets/daohang/xiaoxi.png" v-if="$store.state.isLogin" >
            <img src="../assets/daohang/denglu.png" v-else @click="$router.push('/login');" >
          </p>
        </div>
        <mt-swipe :auto="4000" class="div2" :style="'height:'+width+'px'" >
          <mt-swipe-item><img src="../assets/daohang/lunbo1.jpg"
             alt="" /></mt-swipe-item>
          <mt-swipe-item><img src="../assets/daohang/lunbo2.jpg"
             alt="" /></mt-swipe-item>
          <mt-swipe-item><img src="../assets/daohang/lunbo3.jpg"
             alt="" /></mt-swipe-item>
        </mt-swipe>
        <div class="div3">
          <div>
            <div>
              <span>整租</span>
              <img src="../assets/zhengzu.png">
            </div>
          </div>
          <div>
            <div>
              <span>合租</span>
              <img src="../assets/hezu.png">
            </div>
          </div>
          <div>
            <div>
              房东加盟
              <img class="jiameng" src="../assets/jiameng.png">
            </div>
          </div>
          <p></p>
        </div>
        <div class="div4">
          <h4>
            <div></div>
            <p>精品房源</p>
          </h4>
          <div>
            <div v-for="(v,i) of fang" :key="i" @click="$router.push('/details/'+v.lid);" >
              <img :src="require('../assets/image/imgs/' + v.imgs)">
              <span>
                <p v-text="v.title" ></p>
                <p v-text="v.subtitle+' | '+v.area+'m²'" ></p>
                <p><span v-text="v.price" ></span>元/月</p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Navigation/>
    </div>
  </div>
</template>

<script>

import Navigation from '@/components/Navigation.vue'

export default {
  name: 'Home',
  components: {
    Navigation
  },
  data() {
    return {
      area:['宝安','福田','南山','龙华','龙岗','罗湖','盐田','坪山','光明'],
      a:1,
      fang:[],
      ptext:'深圳',
      width:document.body.clientWidth*0.45
    }
  },
  mounted(){
      this.axios.get('/fang').then(res=>{
        this.fang=res.data.result
      })
  },
  watch: {
    ptext(){
      this.axios.get('/fang?position='+this.ptext).then(res=>{
        this.fang=res.data.result
        
      })
    }
  }
}
</script>
<style >
  .mint-swipe-indicators>.mint-swipe-indicator.is-active{
    background:#e74d47;
    opacity: 0.8;
  }
</style>
<style scoped>

.xlcd{
  position: absolute;
  z-index: 10;
  width: 100%;
  left: 0;
  background-color: #fff;
  padding: 0 24px;
  top: 50px;
  box-sizing: border-box;
}
.xlcd>p{
  padding: 15px 0;
  text-align: center;
  border-bottom: 1px solid #ddd;
}
.xlcd>p:first-child{
  border-top: 1px solid #ddd;
}
.mint-button-text>img{
  height: 40px;
}
.mint-button-text>span{
  color: #000;
}
.p2 {
  height: 24px;
  display: flex;
  align-items: center;
  font-size: 10px;
  padding-left: 7px;
}
.p2>img{
  margin:0 7px 0 4px;
}
.p3{
  margin-left: 10px;
}
.input1 {
  flex-grow: 1;
  height: 24px;
  padding: 0px 10px 0 26px;
  box-sizing: border-box;
  border-radius: 12px;
  border: 1px solid #999;
  outline: 0;
}
.span1 {
  margin-right: 10px;
}
.div1 {
  width: 100%;
  margin: 0 auto 5px;
  padding: 10px 20px 5px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  left: 0;top: 0;
  z-index: 90;
  box-sizing: border-box;
  background: #fff ;
}
.div1>img{
  width: 18px;
  position: absolute;
  top: 14px;left: 75px;
  z-index: 10;
}
.div2 {
  margin-top: 50px;
  padding: 0 20px;
  width: 100%;
  height: 200px;
  box-sizing: border-box;
}
.div2>div>div>img{
  width: 100%;
}
.div3 {
  height: 60px;
  padding: 0 20px;
}
.div3 > div {
  width: 33%;
  height: 60px;
  float: left;
  padding: 5px;
  box-sizing: border-box;
  font-weight: 800;
}
.div3 > div > div {
  position: relative;
  padding: 5px;
  box-sizing: border-box;
  height: 100%;
  border: 1px solid #333;
  border-radius: 5px;
  font-size: 17px;
  box-shadow: 1px 1px 0 #888, 2px 2px 0 #aaa, 3px 3px 0 #ccc, 4px 4px 0 #eee,5px 5px 0 #f8f8f8;
}
.div3 > div > div > img{
  position: absolute;
  bottom: 0px;right: 5px;
}
.div3 > div > div > span{
    position: absolute;
    left: 18px;
}

.jiameng{
  padding: 2px 3px 4px;
  box-sizing: border-box;
  width: 42px;
}
.div4 {
  padding: 5px 20px 60px;
}
.div4 > h4 > div {
  width: 6px;
  height: 16px;
  background-color: #f00;
  float: left;
  margin-right: 5px;
  margin-bottom: 10px;
}
.div4 > h4 > p {
  float: left;
}
.div4 > div {
  clear: both;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
}
.div4>div>div{
  display: flex;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
}
.div4>div>div>img{
  width: 100px;height: 75px;
  border-radius: 5px;
}
.div4>div>div>span{
  flex-grow: 1;
  padding-left: 10px;
  overflow: hidden; /*内容超出,隐藏元素 */
}

.div4 > div > div > span > p:first-child {
  margin-top: 6px;
  font-weight: 600;
  width: 100%;  /* IE6 needs any width */
  white-space: nowrap;  /*强制不换行*/
  text-overflow: ellipsis;  /*文本溢出时,显示省略号 IE, WebKit (Safari, Chrome), Firefox 7, Opera 11*/
  overflow: hidden; /*内容超出,隐藏元素 */
}
.div4 > div > div > span > p:nth-child(2) {
  font-size: 10px;
  color: #999;
  padding: 10px 0;
  width: 100%;  /* IE6 needs any width */
  white-space: nowrap;  /*强制不换行*/
  text-overflow: ellipsis;  /*文本溢出时,显示省略号 IE, WebKit (Safari, Chrome), Firefox 7, Opera 11*/
  overflow: hidden; /*内容超出,隐藏元素 */
}
.div4 > div > div > span > p:last-child {
  color: #e74d47;
  font-size: 12px;
}
.div4 > div > div > span > p:last-child > span {
  font-weight: 600;
  font-size: 16px;
}
/* .mint-tabbar.is-fixed{
  background-color: #666;
} */
</style>