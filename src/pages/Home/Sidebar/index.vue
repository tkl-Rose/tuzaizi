<template>
  <div class="home-tool-bar">
    <a class="home-item" href="">
      <div @mouseenter="enter" @mouseleave="leave">
        <img class="icon" src="../Sidebar/images/54.png" alt="" />
      </div>
      <span class="text-item1">手机APP</span>
    </a>
    <a class="home-item" href="">
      <div>
        <img class="icon" src="../Sidebar/images/55.png" alt="" />
      </div>
      <span class="text-item1">个人中心</span>
    </a>
    <a class="home-item" href="">
      <div>
        <img class="icon" src="../Sidebar/images/56.png" alt="" />
      </div>
      <span class="text-item1">售后服务</span>
    </a>
    <a class="home-item" href="">
      <div>
        <img class="icon" src="../Sidebar/images/57.png" alt="" />
      </div>
      <span class="text-item1">人工客服</span>
    </a>
    <a class="home-item" href="">
      <div>
        <img class="icon" src="../Sidebar/images/58.png" alt="" />
      </div>
      <span class="text-item1">购物车</span>
    </a>
    <a v-if="btnFlag" @click.prevent="backTop" class="home-item1" href="">
      <div>
        <img class="icon" src="../Sidebar/images/61.png" alt="" />
      </div>
      <span class="text-item1">回顶部</span>
    </a>

    <div v-show="seen" class="pop-content">
      <img class="pop-img" src="../Sidebar/images/60.png" alt="" />
      <span class="pop-text">扫码领取新人百元大礼包</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seen: true,
      btnFlag: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  },
  methods: {
    enter() {
      this.seen = true;
    },
    leave() {
      this.seen = false;
    },
    //点击图片回到顶部方法，加计时器是为了过度顺滑
    backTop() {
      let that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },

    //为了计算距离顶部的高度，当高度大于1500显示顶部图标，小于1500则隐藏
    scrollToTop() {
      let that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 1200) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    },
  },
};
</script>

<style lang="less" scope>
.home-tool-bar {
  width: 85px;
  height: 561px;
  position: fixed;
  bottom: 70px;
  right: 0;
  z-index: 99;
  //   border: 1px solid #;
}
.home-item {
  position: relative;
  display: block;
  width: 82px;
  height: 90px;
  margin-top: -1px;
  background-color: #fff;
  border: 1px solid #f5f5f5;
  text-align: center;
}

.icon {
  width: 30px;
  height: 30px;
  padding: 15px 0 10px 0;
}

.text-item1 {
  color: #757575;
  text-decoration: none;
}
.pop-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  position: relative;
  left: -160%;
  top: -81%;
  width: 120px;
  height: 192px;
  background: #fff;
  border: 1px solid #f5f5f5;
}
.pop-text {
  font-size: 14px;
  padding-top: 10px;
}
.pop-img {
  width: 100px;
  height: 100px;
}
.home-item1 {
  position: relative;
  display: block;
  width: 82px;
  height: 90px;
  margin-top: -1px;
  background-color: #fff;
  border: 1px solid #f5f5f5;
  text-align: center;
  margin: 10px 0;
}
</style>
