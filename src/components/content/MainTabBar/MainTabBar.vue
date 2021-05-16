<template>
  <tab-bar>
    <tab-bar-item link="/home" activeColor="deepPink">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/首页.png" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/首页active.png" alt="">
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>

    <tab-bar-item link="/category" activeColor="deepPink">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/分类.png" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/分类active.png" alt="">
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>

    <tab-bar-item link="/cart" activeColor="deepPink">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/购物车.png" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/购物车active.png" alt="">
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>

    <tab-bar-item link="/profile" activeColor="deepPink">
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/我的.png" alt="">
      </template>
      <template v-slot:item-icon-active>
        <img src="@/assets/img/tabbar/我的active.png" alt="">
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>

import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
