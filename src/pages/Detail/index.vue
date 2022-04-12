<template>
  <div>
    <div id="app">
      <div class="container">
        <div class="header-logo">
          <img src="../Detail/images/1(1).jpg" alt="" />
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

    <div class="xm-product-box">
      <div class="nav-bar">
        <div class="xm-container">
          <h2>黑鲨5 Pro</h2>
          <div class="xm-left">
            <span class="separator">|</span>
            <a href="">黑鲨4S Pro</a>
          </div>

          <div class="xm-right">
            <a href="">概述页</a>
            <span class="separator">|</span>
            <a href="">参数页</a>
            <span class="separator">|</span>
            <a href="">F码通道</a>
            <span class="separator">|</span>
            <a href="">咨询客服</a>
            <span class="separator">|</span>
            <a href="">用户评价</a>
          </div>
        </div>
      </div>
    </div>

    <div class="mi-detail">
      <div class="product-box">
        <div class="img-left">
          <div class="swiper-container">
              
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
.xm-product-box {
  position: relative;
  z-index: 4;
  background: #fff;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 5px 5px rgb(0 0 0 / 7%);
}
.nav-bar {
  position: relative;
  height: 63px;
  width: 100%;
  margin-top: 0;
  color: #616161;
}
.xm-container {
  width: 1226px;
  height: 63px;
  display: flex;
  align-items: center;
  margin-left: 300px;
}
.xm-left {
  float: left;
  margin-left: 5px;
  font-size: 12px;
}
.separator {
  margin: 0 10px;
  color: #424242;
}
.xm-right {
  float: right;
  margin-left: 650px;
}
.xm-container a:hover {
  color: red;
  flex-direction: none;
}
</style>
