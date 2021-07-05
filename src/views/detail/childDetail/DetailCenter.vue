<template>
  <div v-if="Object.keys(good).length!=0">
    <div class="title">
      <span>{{good.title}}</span>
    </div>
    <div class="price-wrap">
      <span  class="new-price">{{good.newPrice}}</span>
      <span  class="old-price">{{good.oldPrice}}</span>
      <span v-if="good.discount" class="discount-desc">{{good.discount}}</span>
    </div>
    <div class="other-info">
      <span>{{good.columns[0]}}</span>
      <span>{{good.columns[1]}}</span>
      <span>{{good.services[good.services.length-1].name}}</span>
    </div>
    <div class="serves-wrap">
      <span v-for="index in good.services.length" :key="index">
        <img :src="good.services[index-1].icon" alt="">
        <span>{{good.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailCenter",
  props:{
    good:{
      type:Object,
      default(){
        return{}
      }
    }
  },
}
</script>

<style scoped>
.title {
  margin: 10px 0;
  padding: 0 4px;
  font-size: 14px;
  line-height: 20px;
}
.price-wrap {
  display: flex;
  padding: 0 4px 10px;
}
.new-price {
  color: var(--color-high-text)
}
.old-price {
  color: #999;
  font-size: 12px;
  margin: 0 4px;
  text-decoration: line-through;
}
.discount-desc {
  color: #fff;
  font-size: 12px;
  border-radius: 100px;
  padding: 2px 6px;
  background-color: var(--color-high-text);
}

.other-info {
  display: flex;
  color: #999;
  font-size: 12px;
  padding: 10px 4px;
  border-bottom: 1px solid #ededed;
  border-top: 1px solid #ededed;}
div {
  flex: 1;
}
.serves-wrap {
  display: flex;
  font-size: 12px;
  color: #333;
  padding: 10px 4px;
  justify-content: space-between;
  border-bottom: 4px solid #ededed;
}
img {
  width: 12px;
  height: 12px;
  vertical-align: middle;
}
</style>
