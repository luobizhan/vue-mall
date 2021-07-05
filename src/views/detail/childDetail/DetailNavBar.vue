<template>
  <nav-bar>
    <template v-slot:left>
      <div @click="back">
      <img src="@/assets/img/common/back.svg" alt="" class="back">
      </div>
    </template>
    <template v-slot:center>
      <div class="title">
      <span class="titleItem" v-for="(item,index) in title" :key="item" @click="itemClick(index)" :class="{'currentItem':currentIndex===index}">{{item}}</span>
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components:{
    NavBar
  },
  data(){
    return{
      title:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex = index;
    },
    back(){
      this.$router.back();
    }
  }
}
</script>

<style scoped>
.title{
  display: flex;
}
.titleItem{
  flex: 1;
  font-size: 13px;
}
.currentItem{
  color: var(--color-high-text);
}
.back{
  margin-top: 10px;
}
</style>
