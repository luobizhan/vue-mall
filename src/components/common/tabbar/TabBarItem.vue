<template>
  <div class="tab-bar-item" @click="click" :style="activeStyle">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div>
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabbarItem",
  props:{
    link:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data() {
    return {
    }
  },
  methods:{
    click(){
      this.$router.replace(this.link);
    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.link) != -1;
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {};
    }
  }
}
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;

}

.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}
</style>
