<template>
  <Swiper class="detail-swiper">
    <swiper-item v-for="(item) in topImages" :key="item">
      <img :src="item" alt="">
    </swiper-item>
  </Swiper>
</template>

<script>
import {Swiper,SwiperItem} from "@/components/common/swiper"
export default {
  name: "DetailSwiper",
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    topImages:{
      type:Array,
      default(){
        return[]
      }
    }
  }
}
</script>

<style scoped>
.detail-swiper{
  height: 400px;
  overflow: hidden;
}
</style>
