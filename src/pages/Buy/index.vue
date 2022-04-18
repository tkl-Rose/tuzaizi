<template>
  <div>
    <div id="app">
      <div class="container">
        <div class="header-logo">
          <img src="../Buy/images/1(1).jpg" alt="" />
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

    <div class="page-main">
      <div class="page-container">
        <div class="buy-suc-box">
          <div class="goods-content">
            <div class="goods-img">
              <img src="../Buy/images/80.png" alt="" />
            </div>
            <div class="goods-info">
              <h3>已经加入购物车！</h3>
              <span class="name"> 黑鲨5 Pro 12GB+256GB 陨石黑 </span>
            </div>
          </div>

          <div class="actions">
            <a href="">
              <el-button type="info">返回上一级</el-button>
            </a>

            <a href="">
              <el-button class="info-btn" type="info">去购物车结算</el-button>
            </a>
          </div>
        </div>

        <div class="mi-recommend">
          <h2 class="recommend-title">
            <span>买购物车中商品的人还买了</span>
          </h2>
          <div class="recommend-bd">
            <ul class="recommend-list">
              <li class="recommend-item">
                <a href="">
                  <img src="../Buy/images/81.png" alt="" />
                  <div class="recommend-name">Xiaomi 11 青春版</div>
                  <div class="recommend-price">1999元</div>
                  <div class="recommend-tips">32.2万人好评</div>
                </a>
              </li>
              <li class="recommend-item">
                <a href="">
                  <img src="../Buy/images/82.png" alt="" />
                  <div class="recommend-name">Redmi 9A</div>
                  <div class="recommend-price">599元</div>
                  <div class="recommend-tips">112.2万人好评</div>
                </a>
              </li>
              <li class="recommend-item">
                <a href="">
                  <img src="../Buy/images/83.png" alt="" />
                  <div class="recommend-name">小米巨能写中性笔10支装</div>
                  <div class="recommend-price">9.99元</div>
                  <div class="recommend-tips">196.2万人好评</div>
                </a>
              </li>
              <li class="recommend-item">
                <a href="">
                  <img src="../Buy/images/84.png" alt="" />
                  <div class="recommend-name">Redmi 10A</div>
                  <div class="recommend-price">699元</div>
                  <div class="recommend-tips">3141人好评</div>
                </a>
              </li>
              <li class="recommend-item">
                <a href="">
                  <img src="../Buy/images/85.png" alt="" />
                  <div class="recommend-name">Note 10 5G</div>
                  <div class="recommend-price">1099元</div>
                  <div class="recommend-tips">62.2万人好评</div>
                </a>
              </li>
              <li class="recommend-item">
                <a href="">
                  <img src="../Buy/images/86.png" alt="" />
                  <div class="recommend-name">米哈游手环6</div>
                  <div class="recommend-price">199元</div>
                  <div class="recommend-tips">64.2万人好评</div>
                </a>
              </li>
              <li class="recommend-item">
                <a href="">
                  <img src="../Buy/images/87.png" alt="" />
                  <div class="recommend-name">Note 10 Pro</div>
                  <div class="recommend-price">1499元</div>
                  <div class="recommend-tips">62.2万人好评</div>
                </a>
              </li>
              <li class="recommend-item">
                <a href="">
                  <img src="../Buy/images/88.png" alt="" />
                  <div class="recommend-name">Note 11 4G</div>
                  <div class="recommend-price">999元</div>
                  <div class="recommend-tips">5.4万人好评</div>
                </a>
              </li>
              <li class="recommend-item">
                <a href="">
                  <img src="../Buy/images/89.png" alt="" />
                  <div class="recommend-name">
                    小米车载充电器快充版1A1C 100W
                  </div>
                  <div class="recommend-price">99元</div>
                  <div class="recommend-tips">13.2万人好评</div>
                </a>
              </li>
              <li class="recommend-item">
                <a href="">
                  <img src="../Buy/images/90.png" alt="" />
                  <div class="recommend-name">Redmi Buds 3</div>
                  <div class="recommend-price">179元</div>
                  <div class="recommend-tips">21.2万人好评</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Buy",
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
.page-main {
  width: 100%;
  height: 806px;
  padding: 38px 0;
  background: #f5f5f5;
}
.page-container {
  width: 1126px;
  margin-right: auto;
  margin-left: auto;
}
.buy-suc-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 26px;
  padding: 0 0 28px 0;
  height: 68px;
  border-bottom: 1px solid #e0e0e0;
}
.goods-content {
  display: flex;
  align-items: center;
}
.goods-img {
  width: 64px;
  height: 64px;
}
.goods-info {
  margin-left: 20px;
}
.goods-info h3 {
  margin: 0;
  color: #424242;
  font-size: 24px;
  font-weight: 400;
  margin-top: 3px;
}
.goods-info .name {
  margin-right: 15px;
  font-size: 14px;
  color: #757575;
}
.el-button--info {
  width: 170px;
  height: 40px;
  color: #b0b0b0;
  background-color: #f5f5f5;
  border-color: #b0b0b0;
  margin-right: 12px;
}
.goods-info.el-button--info:hover {
  text-decoration: none;
}
.info-btn {
  background-color: #ff6700;
  color: #fff;
}
.actions {
  display: flex;
}
.mi-recommend {
  padding-top: 30px;
  width: 1226px;
  height: 665px;
}
.recommend-title {
  position: relative;
  margin: 0;
  height: 50px;
  font-size: 30px;
  font-weight: 400;
  color: #757575;
  border-top: 1px solid #e0e0e0;
}
.recommend-title span {
  position: absolute;
  top: -20px;
  left: 372px;
  height: 40px;
  width: 482px;
  line-height: 40px;
  text-align: center;
  display: block;
  background-color: #f5f5f5;
}
.recommend-bd {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  list-style: none;
  padding: 0;
  z-index: 1;
}
.recommend-list {
  display: flex;
  flex-wrap: wrap;
}
.recommend-item {
  display: flex;
  // align-items: center;
  justify-content: center;
  width: 234px;
  height: 300px;
  padding: 0 20px;
  // margin: 0 0 14px 14px;
  padding: 0;
  position: relative;
  overflow: hidden;
  list-style: none;
  background-color: #fff;
  text-align: center;
  margin: 0 10px 10px 0;
}
.recommend-item img {
  width: 140px;
  height: 140px;
  margin-top: 40px;
}
.recommend-name {
  margin: 10px 10px 10px;
  height: 18px;
  font-size: 13px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #333;
}
.recommend-price {
  margin-bottom: 10px;
  color: #ff6700;
}
.recommend-tips {
  position: relative;
  color: #757575;
  margin-top: 15px;
}
.recommend-item a:hover {
  text-decoration: none;
}
</style>
