<template>
  <div id="detail">
  <detail-nav-bar></detail-nav-bar>
  <my-scroll class="content" :probe-type="3" :pull-up-load="1000">
    <detail-swiper :topImages="topImages"></detail-swiper>
    <detail-center :good="good"></detail-center>
    <detail-shop-info :shop="shop"></detail-shop-info>
  </my-scroll>
  </div>
</template>

<script>
import MyScroll from "@/components/common/scroll/My-Scroll"
import DetailNavBar from "@/views/detail/childDetail/DetailNavBar";
import {getDetailData} from "@/network/homeRequest";
import DetailSwiper from "@/views/detail/detailSwiper/DetailSwiper";
import DetailCenter from "@/views/detail/childDetail/DetailCenter";
import DetailShopInfo from "@/views/detail/childDetail/DetailShopInfo";
import {Good,Shop} from "@/network/detail";

export default {
  name: "Detail",
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailCenter,
    DetailShopInfo,
    MyScroll
  },
  created() {
    this.id = this.$route.params.id;
    getDetailData(this.id).then(res=>{
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      this.good = new Good(data.itemInfo,data.columns,data.shopInfo.services);
      this.shop = new Shop(data.shopInfo);
      console.log(data);
    })
  },
  data(){
    return{
      id:null,
      topImages:[],
      good:{},
      shop:{}
    }
  },
  methods:{
    getDetailData(id){
      getDetailData(id);

    }
  }
}
</script>

<style scoped>
#detail {
  /* 利用z-index覆盖 tabbar，不过这样不好，想换种方法 */
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: 100vh;
}
.content{
  position: absolute;
  top: 1.9rem;
  bottom: 2.09rem;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
