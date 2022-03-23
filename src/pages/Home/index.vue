<template>
  <div>
    <!--头部搜索框-->
    <Brand></Brand>

    <TypeNav></TypeNav>

    <Swiper></Swiper>
  </div>
</template>

<script>
import Brand from "./Brand";
import TypeNav from "./TypeNav";
import Swiper from "./Swiper";
export default {
  components: {
    Brand,
    TypeNav,
    Swiper,
  },
};
</script>

<style></style>
