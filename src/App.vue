<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <!-- 通过路由元的方式来控制底部是否显示 在Footer组件中控制的是第1个 -->
  </div>
</template>

<script>
// 引入其它组件  App.vue相当于一个组件的大容器
import Header from "./components/Header/index.vue";

export default {
  name: "App",
  components: {
    // 注册组件
    Header,
  },
  mounted() {
    //三级导航派发请求
    this.$store.dispatch("home/getCategoryListData");
  },
};
</script>

<style scope></style>
