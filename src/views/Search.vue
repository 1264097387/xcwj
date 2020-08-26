<template>
  <div class="all">
    <div class="my-input">
      <img src="../assets/search.png" />
      <!-- 搜索框开始 -->
      <input type="text" placeholder="搜索" v-model="search"/>
      <!-- 搜索框结束 -->
      <!-- <input type="search"> -->
    </div>
    <!-- 顶部导航栏开始 -->
    <mt-navbar>
      <mt-tab-item v-for="(item,i) of navbar" :key="i">
        <div @click="change(i)">
          {{navbar[i]}}
          <img v-show="index != i" src="../assets/sanjiao2.png"/>
          <img v-show="index == i" src="../assets/sanjiao1.png"/>
        </div>
      </mt-tab-item>

    </mt-navbar>
    <!-- 区域的下拉菜单 -->
    <div :style="show" class="xlcd">
      <!-- 租房地理位置 -->
      <div v-if="index==0">
        <ul @click="show1">
          <li v-for="(item,index) of weizhi" :key="index"  @click="navbar[0]=item;change(0)">{{item}}</li>
        </ul>
      </div>
      <!-- 价格筛选 -->
      <div v-else-if="index==1">
        <ul @click="show1">
          <li v-for="(item,index) of price" :key="index"  @click="navbar[1]=item;change(1)">{{item}}</li>
        </ul>
      </div>

      <!-- 更多筛选 -->
      <div v-else-if="index==2">
        <ul @click="show1">
          <li v-for="(item,index) of more" :key="index"  @click="navbar[2]=item;change(2)">{{item}}</li>
        </ul>
      </div>
      <!-- 排序筛选 -->
      <div v-else>
        <ul @click="show1">
          <li v-for="(item,i) of sort" :key="i" @click="navbar[3]=item;change(3)" >{{item}} </li>
        </ul>
      </div>
    </div>
    <!-- 顶部导航栏结束 -->
    <!-- 面板区域开始 -->
    <div>
      <div class="mint-tab-container" v-for="(item,index) of fang" :key="index"  >
        <div class="mint-tab-container-wrap" @click="$router.push('/details/'+item.lid)" >
          <img :src="require(`../assets/image/imgs/${item.imgs}`)" alt />
          <div class="container">
            <h2 class="title">{{item.title}}</h2>
            <h2 class="details">{{item.subtitle}}</h2>
            <span class="price">{{item.price}}</span>
            <span class="price-2">元/月</span>
          </div>
        </div>
      </div>
    </div>
    <Navigation/>
    <!-- 面板区域结束 -->
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation'

export default {
  name: 'Home',
  components: {
    Navigation
  },
  data() {
    return {
      search:'',
      index: null,
      show: "display:none",
      navbar: ["位置", "价格", "面积", "排序"],
      weizhi: [
        "宝安区",
        "福田区",
        "龙华区",
        "盐田区",
        "南山区",
        "龙岗区",
        "罗湖区",
        "坪山区",
        "光明区",
      ],
      price: [
        "0-1000",
        "1000-2000",
        "2000-3000",
        "3000-4000",
        "4000以上",
      ],
      more: [
        "0m²-20m²",
        "20m²-40m²",
        "40m²-60m²",
        "60m²-80m²",
        "80m²以上",
      ],
      sort: [
        "默认排序",
        "价格从高到低",
        "价格从低到高",
        "面积从大到小",
        "面积从小到大",
      ],
      fang:[]
    };
  },
  mounted() {
    this.axios.get('/fang').then(res=>{
      this.fang=res.data.result
      // this.fang.forEach((item,index)=>{
      //     item.imgs = require('../assets/image/imgs/' + item.imgs);
      // })
    })
  },
  methods: {
    axaj(){
      this.axios.get(`/fang?position=${this.navbar[0]}&price=${this.navbar[1]}&area=${this.navbar[2]}`).then(res=>{
       this.fang = res.data.result;
       console.log(this.fang);
      })
    },
    show1(){
      this.axaj();
    },
    change(index) {
      console.log(index);
      // 导航栏切换事件
      // 如果两次点到一个相同的地方上
      if (this.index == index) {
        //隐藏其下拉内容
         this.show = "display:none",
          //并把i的值改为没有的值
         this.index = null;
      } else {
        //否则如果就是第一次点击导航栏.
        this.index = index;
        //让其下拉菜单显示
        this.show = "display:block";
      }
    },
  },
  watch:{
      search(){
        this.axios.get('/fang?title='+this.search).then(res=>{
          this.fang=res.data.result;
        })
      }
  }
};
</script>


<style  scoped>
.red {
  color: red;
}
.all {
  padding: 0 20px;
  box-sizing: border-box;
}
/* .mint-searchbar .mint-searchbar-inner {
  border: 1px solid #f00 !important;
  background-color: #000 !important;
} */
.mint-search {
  height: 55px;
}
.mint-navbar .mint-tab-item.is-selected {
  border: 0;
  color: #666;
}
.my-input {
  padding-top: 10px;
  box-sizing: border-box;
  position: relative;
}
.my-input > input {
  width: 100%;
  height: 24px;
  border: 1px solid #999;
  border-radius: 12px;
  outline: none;
  padding-left: 30px;
  box-sizing: border-box;
}
.my-input > img {
  position: absolute;
  left: 10px;
  width: 16px;
  top: 14px;
}
.mint-tab-container-wrap > img {
  width: 110px;
}
.mint-tab-container {
  margin-bottom: 10px;
}
.container {
  margin-left: 20px;
  margin-bottom: 5px;
}
.container > .title {
  font-weight: 500;
  font-size: 14px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.container > .details {
  font-size: 12px;
  margin-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #666;
}
.price {
  font-weight: 700;
  color: #e74d47;
}
.price-2 {
  font-size: 12px;
  color: #e74d47;
}
.xlcd {
  max-height: 70%;
  width: 100%;
  position: absolute;
  left: 0px;
  z-index: 10;
  background: #ffffff;
  font-size: 14px;
  text-align: center;
  box-sizing: border-box;
  line-height: 30px;
  overflow: auto;
}
.xlcd li:hover {
  color: #e74d47;
}

.xlcd-4 {
  text-align: left;
  margin-left: 20px;
}
.xlcd-4 p {
  text-align: left;
  margin-left: 5px;
  font-size: 12px;
  color: #666;
  margin-bottom: 2%;
}
.xlcd-4 span {
  border: 1px solid #eee;
  display: inline-block;
  width: 20%;
  margin-bottom: 3%;
  margin-right: 2.5%;
  text-align: center;
}
.xlcd-4 span:first-child {
  margin-left: 2.5%;
}
.xlcd-4 button {
  width: 50%;
  height: 40px;
  outline: none;
  border: 0;
  background: #eee;
}
</style>

