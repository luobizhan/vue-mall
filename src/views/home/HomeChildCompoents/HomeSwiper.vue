<template>
  <div>
    <swiper>
       <swiper-item v-for="item in banner.list" :key="item">
         <a :href="item.link">
           <img :src="item.image" alt="" @load="imageLoad">
         </a>
       </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from "@/components/common/swiper"

export default {
  name: "HomeSwiper",
  props:{
    banner:{
      type:Array,
      default() {
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem,
  },
  data(){
    return{
      onceLoad:true
    }
  },
  methods:{
    imageLoad(){
      if(this.onceLoad){
        this.$emit('imageLoad');
        this.onceLoad = false;
      }
    }
  }

}
</script>

<style scoped>

</style>
