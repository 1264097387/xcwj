<template>
  <div id="my-details" class="my-details" >
    <!-- 顶部导航卡开始 -->
    <mt-header style="background-color:rgba(255,255,0255,.1)" fixed>
      <router-link to="/search" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <router-link to="/fenxiang" slot="right">
        <mt-button icon="more"></mt-button>
      </router-link>
    </mt-header>
    <!-- 顶部导航卡结束 -->
    <!-- 面板内容开始 -->
    <!-- 轮播图开始 -->
    <div class="lbt">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img :src="fang.img1"/>
        </mt-swipe-item>
        <mt-swipe-item>
          <img :src="fang.img2"/>
        </mt-swipe-item>
        <mt-swipe-item>
          <img :src="fang.img3"/>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 轮播图结束 -->
    <div>
      <mt-tab-container>
        <!-- 面板内容开始 -->
        <!-- 第一章节开始 -->
        <mt-tab-container-item>
          <h1 v-text="fang.title" ></h1>
          <span class="spanstyle" v-text="fang.price"></span><span class="spanstyle1">元 / 月</span>
          <!-- 第一章节结束 -->
          <!-- 第二章节开始 -->
          <div class="containertwo">
            <div id="containertwo">
              <div class="containertwo1">
                <div id="icon1"></div>
              </div>
              <div class="containertwo2">
                <div>
                  <p>房屋信息</p>
                  <p class="pcolor" v-text="fang.wholeRenting+' | '+fang.rtype+' | '+fang.position"></p>
                </div>
              </div>
            </div>
            <div id="containertwo">
              <div class="containertwo1">
                <div id="icon2"></div>
              </div>
              <div class="containertwo2">
                <div>
                  <p>房间信息</p>
                  <p class="pcolor" v-text="fang.area+'M²'" ></p>
                </div>
              </div>
            </div>
            <div id="containertwo">
              <div class="containertwo1">
                <div id="icon3"></div>
              </div>
              <div class="containertwo2">
                <div>
                  <p>可入住日期</p>
                  <p class="pcolor" v-text="fang.ruzhuriqi" ></p>
                </div>
              </div>
            </div>
          </div>
          <div class="jianju"></div>
          <!-- 第二章节结束 -->
          <!-- 第三章节开始 -->
          <p style="font-size: 18px;">房屋配置</p>
          <div class="containerthree">
            <mt-navbar>
              <mt-tab-item>
                <p :class="fang.bed==0?'hui':'hei'" >床</p>
                <img :src="fang.bed==0?require('../assets/chuang1.png'):require('../assets/chuang.png')" slot="icon" />
              </mt-tab-item>
              <mt-tab-item>
                <p :class="fang.toilet==0?'hui':'hei'" >衣柜</p>
                <img :src="fang.toilet==0?require('../assets/yigui1.png'):require('../assets/yigui.png')" slot="icon" />
              </mt-tab-item>
              <mt-tab-item>
                <p  :class="fang.wifi==0?'hui':'hei'"  >WIFI</p>
                <img :src="fang.bed==0?require('../assets/wifi1.png'):require('../assets/wifi.png')" slot="icon" />
              </mt-tab-item>
              <mt-tab-item>
                <p  :class="fang.air_conditioner==0?'hui':'hei'"  >空调</p>
                <img :src="fang.air_conditioner==0?require('../assets/kongtiao1.png'):require('../assets/kongtiao.png')" slot="icon" />
              </mt-tab-item>
              <mt-tab-item>
                <p  :class="fang.washing==0?'hui':'hei'"  >洗衣机</p> 
                <img :src="fang.washing==0?require('../assets/xiyiji1.png'):require('../assets/xiyiji.png')" slot="icon" />
              </mt-tab-item>
            </mt-navbar>
            <div class="jianju"></div>
          </div>
          <!-- 第三章节结束 -->
          <!-- 第四章节开始 -->
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <p style="font-size: 18px;" >
      <span>地址:</span>
      <span style="font-size: 14px;" v-text="fang.subtitle" ></span>
    </p>
    <!-- 面板内容结束 -->
    <div>
      <!--百度地图容器-->
      <div style="width:100%;height:200px;border:#ccc solid 1px;" id="container"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fang:{}
    }
  },
  props: ['lid'],
  mounted() {
    console.log(111);
    this.axios.get('/details?lid='+this.lid).then(res=>{
        this.fang=res.data.result[0]
        this.fang.img1=require('../assets/image/img1/' + this.fang.img1)
        this.fang.img2=require('../assets/image/img2/' + this.fang.img2)
        this.fang.img3=require('../assets/image/img3/' + this.fang.img3)
        console.log(this.fang);
    })
    document.body.scrollIntoView()


    window.onLoad  = function(){ 
      this.map = new AMap.Map('container',{
        zoom:11,//级别
        center: [114.084000, 22.548000],//中心点坐标
      });
      var marker = new AMap.Marker({
        position:[114.084000, 22.548000]//位置
      })
      this.map.add(marker);
    }
    var url = 'https://webapi.amap.com/maps?v=2.0&key=444d5cc047bcc8bfd1d5f7ef397f6edf&callback=onLoad';
    var jsapi = document.createElement('script');
    jsapi.charset = 'utf-8';
    jsapi.src = url;
    document.head.appendChild(jsapi);
  },
};
</script>
<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 14px;
	font: inherit;
	vertical-align: baseline;
}
a{
  text-decoration: none;
  color: #000;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
</style>

<style type="text/css" scoped>

.iw_poi_title {
  color: #cc5522;
  font-size: 14px;
  font-weight: bold;
  overflow: hidden;
  padding-right: 13px;
  white-space: nowrap;
}
.iw_poi_content {
  font: 12px arial, sans-serif;
  overflow: visible;
  padding-top: 4px;
  white-space: -moz-pre-wrap;
  word-wrap: break-word;
}
</style>
<style scoped>

.hui{
color: #aaa;
}

.hei{
  color: #d81e06;
}

.mt-button {
  color: white;
}

.mint-navbar .mint-tab-item.is-selected {
  border: 0;
}

div > .mint-swipe-item img {
  width: 100%;
  height: 100%;
}

/* 第四章节样式开始 */
.containerfour {
  width: 100%;
  height: 120px;
  background-color: rgba(0, 0, 0, 0.2);
}

.containerfour1 {
  width: 60%;
  height: 120px;
  background-color: rgba(255, 255, 255, 0.6);
  text-align: center;
}

.containerfour1 > span:nth-child(1) {
  font-weight: 600;
}

.containerfour1 > span:nth-child(2) {
  color: rgb(16, 145, 85);
  margin-left: 20px;
}

.containerfour1 > span {
  display: inline-block;
  margin-top: 25px;
}

.containerfour1 > button {
  background-color: rgba(255, 255, 255, 0.4);
  border: 0;
  color: rgba(0, 0, 0, 0.7);
  padding-bottom: 4px;
}

.containerfour1 > p {
  color: rgba(0, 0, 0, 0.6);
  font-size: 400;
}

.you {
  height: 120px;
  width: 40%;
  position: absolute;
  top: 0;
  right: 0;
}

/* 第四章节样式结束 */
</style>
<style scoped>
/* 轮播图样式 */
.lbt {
  height: 200px;

  /* margin-bottom: 10px; */
}

/* 去除轮播图插件引起的抖动 */
.mint-swipe {
  transform: translateZ(0);
}

/* 第一章节样式 */
.containerone {
  height: 60px;
  width: 80%;
  margin: 30px auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

li > span {
  background-color: rgba(255, 0, 0, 0.2);
  padding: 0 5px;
  font-weight: 500;
  color: red;
  display: block;
  margin: 10px;
}

/* 第一章节样式结束 */
/* 第二章节样式 */
.containertwo {
  border: 1px solid rgba(0, 0, 0, 0.1);

  height: 200px;
}

#containertwo {
  height: 60px;
}

.containertwo1 {
  float: left;
  margin-left: 10%;
  margin-top: 2%;
}

.containertwo2 {
  text-align: left;
  margin-left: 20%;
}

.jianju {
  height: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  clear: both;
}

.pcolor {
  color: rgba(0, 0, 0, 0.4);
  font-weight: 400;
}

#icon1,
#icon2,
#icon3 {
  height: 20px;
  width: 20px;
}

#icon1 {
  background: url("../assets/fangwu.png");
  background-size: 100%;
}

#icon2 {
  background: url("../assets/fangjian.png");
  background-size: 100%;
}

#icon3 {
  background: url("../assets/shizhong.png");
  background-size: 100%;
}

/* 第二章节样式结束 */
p,
h1 {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.8);
  margin: 10px;
}

h1 {
  font-size: 20px;
  margin-top: 12px;
}

.spanstyle {
  display: inline-block;
  margin: 0 10px 10px 20px;
  font-size: 20px;
  color: red;
  font-weight: 700;
}
.spanstyle1{
  font-size: 10px;
  color: red;
}

ul > li {
  float: left;
}
</style>
