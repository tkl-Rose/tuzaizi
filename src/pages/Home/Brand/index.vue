<template>
  <div id="app">
    <div class="container">
      <div class="header-logo">
        <img src="../Brand/images/1(1).jpg" alt="" />
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
            <el-button slot="append" icon="el-icon-search"></el-button>
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
        <div class="container1">
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
  },
  mounted() {
    this.restaurants = this.loadAll();

    //派发任务获取数据
    this.$store.dispatch("home/getBannerListData");
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
  width: 100%;
  height: 200px;
  border-top: 1px solid #efefef;
  border-bottom: 2px solid #efefef;
  box-shadow: 2px 2px 10px #efefef;
}
.container1 {
  display: flex;
  width: 1226px;
  height: 200px;
  margin-left: 300px;
}
.children-list {
  display: block;
  display: flex;
  height: 200px;
  text-align: center;
  font-size: 13px;
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
</style>
