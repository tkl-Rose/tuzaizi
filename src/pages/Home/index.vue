<template>
  <div id="app">
    <!--头部搜索框-->
    <Brand></Brand>

    <TypeNav></TypeNav>

    <Swiper></Swiper>

    <Recommend></Recommend>

    <List></List>
  </div>
</template>

<script>
import Brand from "./Brand";
import TypeNav from "./TypeNav";
import Swiper from "./Swiper";
import Recommend from "./Recommend";
import List from "./List";
export default {
  components: {
    Brand,
    TypeNav,
    Swiper,
    Recommend,
    List,
  },
};
</script>

<style></style>
