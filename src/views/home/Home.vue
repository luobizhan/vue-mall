<template>
  <div>
    <nav-bar>
      <template v-slot:left></template>
      <template v-slot:center>首页</template>
      <template v-slot:right></template>
    </nav-bar>
    <home-swiper :banner="banner"></home-swiper>
    <recommend-view :recommend="recommend"></recommend-view>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/HomeChildCompoents/HomeSwiper";
import {getMultiData} from "@/network/homeRequest";
import RecommendView from "@/views/home/HomeChildCompoents/RecommendView";

export default {
name: "Home",
  components:{
    NavBar,
    HomeSwiper,
    RecommendView
  },
  created() {
    getMultiData().then(res =>{
      this.banner = res.data.banner;
      this.recommend = res.data.recommend;
      this.keywords = res.data.keywords;
      this.dKeyword = res.data.dKeyword;
    })
  },
  data(){
    return{
      banner:[],
      recommend:[],
      keywords:[],
      dKeyword:[]
    }
  }
}
</script>

<style scoped>

</style>
