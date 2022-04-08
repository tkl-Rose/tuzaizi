<template>
  <div>
    <div id="app">
      <div class="container">
        <div class="header-logo">
          <img src="../Search/images/3.jpg" alt="" />
        </div>
        <div class="header-nav">
          <ul @mouseenter="enter" @mouseleave="leave" class="nav-list">
            <li class="nav-item">
              <a href="" class="text">手办模玩</a>
            </li>
            <li class="nav-item">
              <a href="" class="text">服饰配饰</a>
            </li>
            <li class="nav-item">
              <a href="" class="text">礼包福袋</a>
            </li>
            <li class="nav-item">
              <a href="" class="text">挂件摆件</a>
            </li>
            <li class="nav-item">
              <a href="" class="text">3C数码</a>
            </li>
            <li class="nav-item">
              <a href="" class="text">日用百货</a>
            </li>
            <li class="nav-item">
              <a href="" class="text">社区</a>
            </li>
            <li class="nav-item">
              <a href="" class="text">服务</a>
            </li>
          </ul>
          <div class="header-search">
            <el-autocomplete
              popper-class="my-autocomplete"
              v-model="state"
              :fetch-suggestions="querySearch"
              placeholder="请输入内容"
              @select="handleSelect"
            >
              <el-button
                @click="btnSearch"
                slot="append"
                icon="el-icon-search"
              ></el-button>
              <template slot-scope="{ item }">
                <div class="name">{{ item.value }}</div>
                <span class="addr">{{ item.address }}</span>
              </template>
            </el-autocomplete>
          </div>
        </div>
      </div>
      <transition name="fade">
        <div v-show="seen" class="item-children">
          <div class="cont">
            <ul class="children-list">
              <li v-for="banner in bannerList" :key="banner.id" class="first">
                <img :src="banner.imgUrl" alt="" />
                <div class="title">
                  {{ banner.name }}
                </div>
                <p class="price">{{ banner.price }}</p>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>

    <div class="container-main">
      <div class="breadcrumbs">
        <div class="breadcrumbs-container">
          <a href="">首页 ></a>
          <a class="breadcrumbs-container-in" href="">全部结果 ></a>
          <span>小米手机</span>
        </div>
      </div>

      <div class="search-filter">
        <div class="filter-wrap">
          <div class="filter-list">
            <ul class="item-show">
              <span class="label">分类:</span>
              <li class="active">
                <a href="">全部</a>
              </li>
              <li class="active">
                <a href="">黑鲨手机</a>
              </li>
              <li class="active">
                <a href="">手机饰品</a>
              </li>
              <li class="active">
                <a href="">手机饰品</a>
              </li>
              <li class="active">
                <a href="">手机其他配件</a>
              </li>
              <li class="active">
                <a href="">游戏手机配件</a>
              </li>
              <li class="active">
                <a href="">手机壳套</a>
              </li>
              <span class="more-btn">
                更多
                <img class="more-img" src="../Search/images/62.png" alt="" />
              </span>
            </ul>
            <ul class="item-show">
              <span class="label">拍照像素:</span>
              <li class="active">
                <a href="">三摄像头</a>
              </li>
            </ul>
            <ul class="item-show">
              <span class="label">屏幕大小:</span>
              <li class="active">
                <a href="">超大屏</a>
              </li>
            </ul>
            <ul class="item-show">
              <span class="label">运行内存:</span>
              <li class="active">
                <a href="">极速畅玩</a>
              </li>
              <li class="active">
                <a href="">实用</a>
              </li>
            </ul>
            <ul class="item-show">
              <span class="label">电池续航:</span>
              <li class="active">
                <a href="">超长待机</a>
              </li>
            </ul>
            <ul class="item-show">
              <span class="label">高级选项:</span>
              <li class="active">
                <a href="">cpu型号</a>
                <img class="more-img" src="../Search/images/62.png" alt="" />
              </li>
              <li class="active">
                <a href="">cpu主频</a>
                <img class="more-img" src="../Search/images/62.png" alt="" />
              </li>
              <li class="active">
                <a href="">前置摄像头</a>
                <img class="more-img" src="../Search/images/62.png" alt="" />
              </li>
              <li class="active">
                <a href="">屏幕分辨率</a>
                <img class="more-img" src="../Search/images/62.png" alt="" />
              </li>
              <li class="active">
                <a href="">存储容量</a>
                <img class="more-img" src="../Search/images/62.png" alt="" />
              </li>
              <li class="active">
                <a href="">独立AI键</a>
                <img class="more-img" src="../Search/images/62.png" alt="" />
              </li>
              <li class="active">
                <a href="">机身厚度</a>
                <img class="more-img" src="../Search/images/62.png" alt="" />
              </li>

              <span class="more-btn">
                更多
                <img class="more-img" src="../Search/images/62.png" alt="" />
              </span>
            </ul>
          </div>
        </div>
      </div>

      <div class="search-result">
        <div class="result-order">
          <div class="order-list-box">
            <ul class="order-list">
              <li class="order-item">
                <a href="">综合</a>
              </li>
              <li class="order-item">
                <a href="">新品</a>
              </li>
              <li class="order-item">
                <a href="">销量</a>
              </li>
              <li class="order-item">
                <a href="">价格</a>
                <img class="order-item-img" src="../Search/images/63.png" alt="">
              </li>
            </ul>

            <ul class="type-list">
              <li>
                <div class="address-choose">
                  <span class="label">收货地 :</span>
                  <a href="">
                    <span class="address">北京 北京市</span>
                  </a>
                </div>
              </li>

              <li>
                <a class="checkbox" href="">
                  <el-checkbox v-model="checked">促销</el-checkbox></el-checkbox>
                </a>
              </li>
                <li>
                <a class="checkbox"  href="">
                  <el-checkbox v-model="checked">分期</el-checkbox></el-checkbox>
                </a>
              </li>
               <li>
                <a class="checkbox" href="">
                  <el-checkbox v-model="checked">仅看有货</el-checkbox></el-checkbox></el-checkbox>
                </a>
              </li>
            </ul>
          </div>
          <div class="goods-list-box">
            <div class="goods-list">
               <div class="goods-item">
                 <a href="">
                   <div class="figure">
                     <img class="figure-img" src="../Search/images/64.png" alt="">
                     <h2 class="figure-title">黑鲨5 12GB+128GB</h2>
                     <p class="price">
                       <span>2999元</span>
                     </p>
                   </div>

                   <div class="flags">
                      <img class="flags-img" src="../Search/images/65.png" alt="">
                   </div>
                 </a>
               </div>
            </div>
          
<div class="block">
  <span class="demonstration">大于 7 页时的效果</span>
  <el-pagination
    layout="prev, pager, next"
    :total="1000">
  </el-pagination>
</div>
          </div>
        </div>
      </div>
 
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      restaurants: [],
      state: "",
      seen: false,
      checked: false,
    };
  },
  mounted() {
    //给全局事件总线注册一个事件
    this.$bus.$on("remove-state", () => {
      this.state = "";
    });
    this.restaurants = this.loadAll();

    //派发任务获取数据
    this.$store.dispatch("home/getBannerListData");
  },
  beforeDestroy() {
    //在组件销毁之前，一定要清除之前事件总线注册的事件
    this.$bus.$off("remove-state");
  },
  computed: {
    ...mapState("home", ["bannerList"]),
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [
        { value: "全部商品" },
        { value: "黑鲨手机" },
        { value: "希尔 摇曳猫尾" },
        { value: "兰夜行歌" },
        { value: "芽衣 雷之律者" },
        { value: "雨意系列" },
        { value: "Q版盒蛋" },
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
    handleIconClick(ev) {
      console.log(ev);
    },
    enter() {
      this.seen = true;
    },
    leave() {
      this.seen = false;
    },

    btnSearch() {
      let location = {
        name: "search",
        params: {
          state: this.state || undefined,
        },
      };
      //判断之前有没有query参数，合并参数
      location.query = this.$router.query;

      this.$router.push(location);
    },
  },
};
</script>

<style lang="less" scope>
.app {
  width: 1469px;
  height: 100px;
}
.container {
  display: flex;
  align-items: center;
  position: relative;
  width: 1226px;
  height: 100px;
  margin-right: auto;
  margin-left: 300px;
}
.header-nav {
  width: 1100px;
  display: flex;
  align-items: center;
}
.nav-list {
  // position: absolute;
  display: flex;
  text-align: center;
  line-height: 88px;
  position: relative;
  z-index: 10;
  width: 660px;
  height: 88px;
  margin: 0;
  padding: 0 0 0 120px;
  font-size: 15px;
}
.nav-item {
  padding-left: 20px;
}
.nav-item .text:hover {
  color: red;
}
.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;

    .name {
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .addr {
      font-size: 12px;
      color: #b4b4b4;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }
}
.item-children {
  position: absolute;
  width: 2000px;
  height: 200px;
  border-top: 1px solid #efefef;
  border-bottom: 2px solid #efefef;
  box-shadow: 2px 2px 10px #efefef;
  z-index: 10000 !important;
  background-color: #fff;
}
.title {
  font-size: 13px;
}
.cont {
  display: flex;
  width: 1500px;
  height: 200px;
  margin-left: 300px;
}
.children-list {
  position: relative;
  display: block;
  display: flex;
  height: 200px;
  text-align: center;
  font-size: 13px;
  background-color: #fff;
}
.first {
  width: 100px;
  height: 100px;
  padding: 0 40px;
}
.first img {
  width: 100px;
  height: 100px;
}
.price {
  padding-top: 10px;
}
.fade-leave-to {
  opacity: 0;
  transform: translate3d(0, 300px, 0);
}
.fade-enter {
  transform: translate3d(0, 300px, 0);
}
.fade-leave-active,
.fade-enter-active {
  transition: 0.5s all ease;
}
.container-main {
  width: 100%;
  height: 2069px;
}
.breadcrumbs {
  width: 100%;
  height: 40px;
  background-color: #f5f5f5;
}
.breadcrumbs-container {
  height: 40px;
  line-height: 40px;
  width: 1120px;
  margin-right: auto;
  margin-left: auto;
}
.breadcrumbs-container-in {
  margin: 0 10px;
}
.search-filter {
  width: 1332px;
  height: 329px;
  background-color: #fff;
}
.filter-wrap {
  margin-left: 305px;
  width: 1126px;
  padding: 18px 0;
}
.filter-list {
  width: 1126px;
}
.item-show {
  display: flex;

  width: 1226px;
  height: 48px;
  text-align: center;
  line-height: 48px;
  border-bottom: 1px solid #ededed;
}
.label {
  top: 0;
  left: 0;
  color: #b0b0b0;
}
.active {
  width: 148px;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #424242;
}
.active a:hover {
  text-decoration: none;
  color: red;
}
.more-btn {
  position: relative;
  // left: 10%;
  width: 46px;
  height: 48px;
  text-align: center;
  line-height: 48px;
  color: #757575;
  right: 0;
  top: 0;
}
.more-img {
  position: relative;
  top: 5%;
}
.search-result {
  padding: 20px 0 100px;
  background-color: #f5f5f5;
  height: 1222px;
}
.result-order {
  width: 1226px;
  margin-left: 300px;
}
.order-list-box {
  // display: flex;
  width: 1130px;
  height: 30px;
  justify-content: space-between;
}
.order-list {
  float: left;
  display: flex;
  height: 30px;
  line-height: 30px;
}
.order-list a:hover {
  color: red;
  text-decoration: none;
}
.order-item {
  width: 88px;
  height: 30px;
  margin: 0 10px;
  border-right: 1px solid #e0e0e0;
  font-weight: 700;
  font-size: 14px;
}
.order-item-img {
  position: relative;
  top: 10%;
}
.type-list {
  float: right;
  display: flex;
  height: 30px;
  line-height: 30px;
}
.address-choose {
  color: #424242;
}
.address {
  position: relative;
  display: inline-block;
  background: #fff;
  border: 1px solid #e3e3e3;
  height: 14px;
  line-height: 14px;
  padding: 7px 14px;
  cursor: pointer;
}
.checkbox {
  display: inline-block;
  margin-right: 8px;
  margin-left: 8px;
  line-height: 18px;
  text-align: center;
}
.goods-list-box {
  width: 1226px;
  margin-top: 20px;
}
.goods-list {
  display: flex;
  width: 1240px;

  margin: 0;
}
.goods-item {
  width: 296px;
  height: 430px;
  margin-right: 14px;
  margin-bottom: 14px;
  text-align: center;
  background-color: #fff;
}
.figure-img {
  width: 200px;
  height: 200px;
  padding-top: 30px;
}
.figure-title {
  font-size: 14px;
  margin: 0 auto;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
}
.price {
  color: red;
}
.flags {
  margin-top: 10px;
}
.flags-img {
  width: 56px;
  height: 18px;
  margin-top: 20px;
}
</style>
