<template>
  <div class="goods">
    <good-list-item v-for="item in list" :key="item" :good="item"></good-list-item>
  </div>
</template>

<script>
import GoodListItem from "@/components/content/goods/GoodListItem";
export default {
  name: "GoodsList",
  props:{
    list:{
      type:Array,
      default(){
        return[]
      }
    }
  },
  components:{
    GoodListItem
  }
}
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  padding: 2px;
}
</style>
