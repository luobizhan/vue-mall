<template>
  <detail-nav-bar></detail-nav-bar>
  <detail-swiper :topImages="topImages"></detail-swiper>
  <detail-center :good="good"></detail-center>
</template>

<script>
import DetailNavBar from "@/views/detail/childDetail/DetailNavBar";
import {getDetailData} from "@/network/homeRequest";
import DetailSwiper from "@/views/detail/detailSwiper/DetailSwiper";
import DetailCenter from "@/views/detail/childDetail/DetailCenter";
import {Good} from "@/network/detail";

export default {
  name: "Detail",
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailCenter
  },
  created() {
    this.id = this.$route.params.id;
    getDetailData(this.id).then(res=>{
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      this.good = new Good(data.itemInfo,data.columns,data.shopInfo.services);
      console.log(data);
    })
  },
  data(){
    return{
      id:null,
      topImages:[],
      good:{}
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

</style>
