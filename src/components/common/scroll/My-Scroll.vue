<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import ObserveDOM from '@better-scroll/observe-dom'
BetterScroll.use(ObserveDOM)
export default {
  name: "My-Scroll",
  props:{
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Number,
      default: 0
    }
  },
  data(){
    return{
      scroll:null
    }
  },
  mounted() {
      this.scroll = new BetterScroll(this.$refs.wrapper, {
        probeTypeL:this.probeTypeL,
        click:true,
        pullUpLoad:this.pullUpLoad,
        observeDOM:true
      });

    this.scroll.on('scroll', (position) => {
    });

    // 监听滚动的位置
    this.scroll.on('scroll', (position) => {
      this.$emit('getPosition', position)
    })
    // 监听上拉事件
    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    });
  },
  methods:{
    finishPullUp() {
      this.scroll.finishPullUp()
    },
    scrollTo(x, y, time=300) {
      this.scroll.scrollTo(x, y, time)
    }
  }
}
</script>

<style scoped>

</style>
