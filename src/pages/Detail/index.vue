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
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img class="img" src="../Detail/images/70.png" alt="" />
              </div>
              <div class="swiper-slide">
                <img class="img" src="../Detail/images/71.png" alt="" />
              </div>
              <div class="swiper-slide">
                <img class="img" src="../Detail/images/72.png" alt="" />
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <!-- 如果需要滚动条 -->
            <!--    <div class="swiper-scrollbar"></div>-->
          </div>
        </div>

        <div class="product-con">
          <h2>黑鲨5 Pro</h2>
          <p class="sale-desc">
            <font color="#ff4a00"
              >「购机即赠冰封散热背夹Pro ，享12期分期免息」</font
            >
            全新骁龙8处理器 | 120W超级闪充 | 逆重力双VC液冷系统 | 磁动力升降肩键
            | 144Hz OLED柔性直屏 | 磁盘阵列2.0 | DXOMARK 音频第一名 |
            一亿像素高清主摄
          </p>
          <p class="company-info">米哈游自营</p>
          <div class="price-info">
            <span>4699元</span>
          </div>

          <div class="activity-box">
            <div class="flow-box">
              <span class="flow-tag">赠品</span>
              <span class="flow-name">
                <div class="single">
                  满1件赠价值179元黑鲨冰封散热背夹 Pro 黑色 赠完即止
                </div>
              </span>
            </div>

            <div class="address-box">
              <div class="product-address">
                <img src="../Detail/images/75.png" alt="" />
                <div class="address-con">
                  <div class="address-info">
                    <span>北京</span>
                    <span>北京市</span>
                    <span>海定区</span>
                    <span>清河街道</span>
                  </div>
                  <a class="edit" href="">修改</a>
                  <div class="info">
                    <div class="desc">
                      <span>有现货</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="buy-option">
              <div class="buy-box-child">
                <div class="option-box">
                  <div class="option-title">选择版本</div>
                  <ul class="clearfix">
                    <li class="active">
                      <a href="">12GB+256GB</a>
                    </li>
                    <li class="active">
                      <a href="">8GB+256GB</a>
                    </li>
                    <li class="active">
                      <a href="">16GB+512GB</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="buy-box-child">
                <div class="option-box">
                  <div class="option-title">选择颜色</div>
                  <ul class="clearfix">
                    <li class="active">
                      <a href="">陨石黑</a>
                    </li>
                    <li class="active">
                      <a href="">天宫白</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
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
    var swiper = new Swiper(".swiper-container", {
      loop: true, //无缝轮播
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      // 如果需要分页器
      pagination: ".swiper-pagination",
      // 如果需要前进后退按钮
      nextButton: ".swiper-button-next",
      prevButton: ".swiper-button-prev",
      mousewheelControl: true, //开启鼠标滚轮控制
      pagination: {
        el: ".swiper-pagination",
      },
      // 如果需要滚动条
      // scrollbar: '.swiper-scrollbar',
      //如果需要自动切换海报
      autoplay: {
        delay: 3000, //时间 毫秒
        disableOnInteraction: false, //用户操作之后是否停止自动轮播默认true
      },
    });
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
.mi-detail {
  width: 1382px;
  height: 2092px;
}
.product-box {
  display: flex;
  justify-content: center;
  padding-top: 32px;
  padding-bottom: 12px;
  margin-left: 300px;
}
.img-left {
  width: 606px;
  height: 1732px;
  position: relative;
  left: -100px;
}
.swiper {
  width: 560px;
  height: 560px;
}
.swiper-container {
  width: 560px;
  height: 560px;
}

.img {
  width: 560px;
  height: 560px;
}
.swiper-button-prev {
  color: #d6d6d6;
}
.swiper-button-next {
  color: #d6d6d6;
}
.mi-detail .swiper-pagination-bullet {
  background: #ccc;
  width: 50px;
  border-radius: 0;
  border: 0;
  height: 3px;
}
.product-con {
  width: 600px;
  -webkit-box-flex: 1;
  flex: 1;
  margin-left: 20px;
}
.product-con h2 {
  margin: 0;
  padding: 0;
  font-size: 24px;
  font-weight: 400;
  color: #212121;
}
.product-con .sale-desc {
  color: #b0b0b0;
  margin: 0;
  padding: 0;
  padding-top: 8px;
  line-height: 1.5;
}
.product-con .company-info {
  color: #ff6700;
  margin-bottom: 0;
  height: 21px;
  margin: 10px 0;
}
.product-con .price-info {
  display: block;
  font-size: 18px;
  line-height: 1;
  color: #ff6700;
  padding: 12px 0 10px;
}
.activity-box {
  padding: 24px 0 0;
  border-bottom: 1px solid #e0e0e0;
}
.flow-box {
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-bottom: 24px;
}
.flow-box .flow-tag {
  width: 60px;
  padding: 2px 0;
  text-align: center;
  background: #ff6700;
  color: #fff;
}
.flow-box .flow-name {
  width: 430px;
  font-size: 14px;
  line-height: 19px;
  margin-left: 10px;
}
.product-con .address-box {
  margin: 20px 0;
}
.product-address {
  display: flex;
  align-items: center;
  padding: 30px 50px;
  position: relative;
  background: #fafafa;
  border: 1px solid #e0e0e0;
}
.product-address img {
  position: absolute;
  left: 20px;
  top: 30px;
  font-size: 20px;
  color: #999;
}
.address-con {
  width: 498px;
  height: 52px;
}
.product-address .address-info,
.product-address .edit {
  display: inline-block;
}
.product-address span {
  display: inline;
  margin-right: 14px;
}
.product-address .edit {
  color: #ff6700;
  margin: 0;
}
.product-address .info {
  color: #b0b0b0;
}
.buy-option .batch-box,
.buy-option .buy-box-child,
.buy-option .buy-box-mode {
  margin-bottom: 30px;
  position: relative;
}
.buy-option .option-title {
  font-size: 18px;
}
.clearfix {
  // width: 600px;
  // height: 108px;
  display: flex;
}
.buy-option li {
  width: 800px;
  margin-right: 12px;
  margin-top: 10px;
  line-height: 42px;
  height: 42px;
  position: relative;
  border: 1px solid #e0e0e0;
  list-style: none;
  cursor: pointer;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
  float: left;
  font-size: 16px;
  text-align: center;
}

.option-box li:hover {
  z-index: 3;
  border-color: #ff6700;
  flex-direction: none;
}
</style>
