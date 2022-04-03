<template>
  <div id="app">
    <!--头部搜索框-->
    <Brand></Brand>

    <TypeNav></TypeNav>

    <Swiper></Swiper>

    <Recommend></Recommend>

    <List></List>

    <Floors></Floors>

    <Sidebar></Sidebar>
  </div>
</template>

<script>
import Brand from "./Brand";
import TypeNav from "./TypeNav";
import Swiper from "./Swiper";
import Recommend from "./Recommend";
import List from "./List";
import Floors from "./Floors";
import Sidebar from "./Sidebar";
export default {
  components: {
    Brand,
    TypeNav,
    Swiper,
    Recommend,
    List,
    Floors,
    Sidebar,
  },
};
</script>

<style></style>
