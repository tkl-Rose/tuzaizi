<template>
  <div class="list-container">
    <div class="sortList clearfix">
      <div class="center">
        <!--banner轮播-->
        <div class="swiper-container banner-container" id="mySwiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="swiper in swiperList"
              :key="swiper.id"
            >
              <img :src="swiper.imgUrl" class="swiper-img" alt="" />
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>

          <!-- 如果需要导航按钮 -->
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Swiper from "swiper";
export default {
  name: "ListContainer",
  data() {
    return {};
  },
  computed: {
    ...mapState("home", ["swiperList"]),
  },
  mounted() {
    // 派发任务获取轮播图数据
    this.$store.dispatch("home/getSwiperListData");
  },
  watch: {
    swiperList() {
      // 只要这个bannerList数据一发生了变化就立即启用swiper
      // 这个数据发生变化指的是bannerList由原来的空数组变成存有真正数据的数组
      // this.$nextTick 可以保证页面中的数据是最新的
      this.$nextTick(() => {
        var mySwiper = new Swiper(".swiper-container", {
          // direction: "vertical", // 垂直切换选项
          loop: true, // 循环模式选项
          effect: "fade",
          fadeEffect: {
            crossFade: true,
          },
          autoplay: true,
          observer: true,
          delay: 3000,
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination",
          },

          // 如果需要前进后退按钮
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
.list-container {
  width: 1120px;
  height: 520px;
  position: relative;
  left: 17.5%;
}
.swiper-wrapper {
  width: 1120px;
  height: 520px;
}
.swiper-img {
  width: 1120px;
  height: 520px;
}
.swiper-button-prev {
  left: 20%;
  bottom: 20%;
}
.swiper-pagination {
  left: 40%;
  top: 95%;
}
</style>
