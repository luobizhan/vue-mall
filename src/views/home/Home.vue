<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:left></template>
      <template v-slot:center>购物街</template>
      <template v-slot:right></template>
    </nav-bar>
    <tab-control :tabControlData="['流行','新款','精选']" class="tab-control" @tabClick="tabClick" v-show="offsetTopFlag" ref="tabControl1"></tab-control>
    <my-scroll class="content"
               @pullingUp="loadMore"
               @get-position="getPosition"
               :probe-type="3"
               :pull-up-load="1000"
               ref="scroll">
        <home-swiper :banner="banner" @imageLoad="getTabControlOffsettop"></home-swiper>
        <recommend-view :recommend="recommend"></recommend-view>
        <feature-view></feature-view>
        <tab-control :tabControlData="['流行','新款','精选']" class="tabControl" @tabClick="tabClick" ref="tabControl"></tab-control>
        <goods-list :list="showGoods"></goods-list>
    </my-scroll>
    <back-top @click="backTopClick"  v-show="show"></back-top>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/HomeChildCompoents/HomeSwiper";
import {getMultiData,getTabControlData} from "@/network/homeRequest";
import RecommendView from "@/views/home/HomeChildCompoents/RecommendView";
import FeatureView from "@/views/home/HomeChildCompoents/FeatureView";

import TabControl from "@/components/content/tabcontrol/TabControl";
import GoodsList from "@/components/content/goods/GoodsList";
import MyScroll from "@/components/common/scroll/My-Scroll"
import BackTop from "@/components/content/backTop/BackTop";


export default {
name: "Home",
  components:{
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    MyScroll,
    BackTop
  },
  created() {
    this.getMultiData();
    this.getTabControlData('pop');
    this.getTabControlData('new');
    this.getTabControlData('sell');

  },
  data(){
    return{
      banner:[],
      recommend:[],
      keywords:[],
      dKeyword:[],
      goods:{
        'pop':{page:1,list:[]},
        'new':{page:1,list:[]},
        'sell':{page:1,list:[]},
      },
      currentGoods:'pop',
      show:false,
      tabControlOffSetTop:817,
      offsetTopFlag:false
    }
  },

  methods:{
    getMultiData(){
      getMultiData().then(res =>{
        this.banner = res.data.banner;
        this.recommend = res.data.recommend;
        this.keywords = res.data.keywords;
        this.dKeyword = res.data.dKeyword;
      });
    },
    getTabControlData(type){
      const page = this.goods[type].page;
      getTabControlData(type,page).then(res =>{
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      })
    },

    tabClick(index){
      switch (index){
        case 0:
          this.currentGoods = 'pop';
          break;
        case 1:
          this.currentGoods = 'new';
          break;
        case 2:
          this.currentGoods = 'sell';
          break;
      }
      this.$refs.tabControl.currentIndex = index;
      this.$refs.tabControl1.currentIndex = index;
    },

    loadMore(){
      this.getTabControlData(this.currentGoods);
    },
    backTopClick(){
      this.$refs.scroll.scrollTo(0,0);
    },
    getPosition(position){
      this.offsetTopFlag = -(position.y) > this.tabControlOffSetTop;

      return this.show = -(position.y)>1000;
    },
    getTabControlOffsettop(){
      this.offsetTopFlag = this.position>this.offsetTopFlag;
    }
  },
  computed:{
  showGoods(){
    return this.goods[this.currentGoods].list
  }
  }
}
</script>

<style scoped>
#home {
  /*padding-top: 44px;*/
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}

.content {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

</style>
