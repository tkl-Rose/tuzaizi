<template>
  <div class="header">
    <div class="top">
      <!--头部第一行-->
      <div class="left">
        <a href="">米游商城</a>
        <span class="shuxian">|</span>
        <a href="">MIUI</a>
        <span class="shuxian">|</span>
        <a href="">loT</a>
        <span class="shuxian">|</span>
        <a href="">云服务</a>
        <span class="shuxian">|</span>
        <a href="">天星科技</a>
        <span class="shuxian">|</span>
        <a href="">有品</a>
        <span class="shuxian">|</span>
        <a href="">小爱开放平台</a>
        <span class="shuxian">|</span>
        <a href="">企业团购</a>
        <span class="shuxian">|</span>
        <a href="">资质证照</a>
        <span class="shuxian">|</span>
        <a href="">协议规则</a>
        <span class="shuxian">|</span>
        <a @mouseenter="enter" @mouseleave="leave" href="">
          下载app
          <span v-show="seen" class="appcode">
            <img
              class="appcode-img"
              src="	https://i1.mifile.cn/f/i/17/appdownload/download.png?1"
              alt=""
            />
          </span>
        </a>
        <span class="shuxian">|</span>
        <a href="">selectLocation</a>
      </div>

      <div class="right">
        <router-link to="/login">登录</router-link>
        <span class="shuxian">|</span>
        <router-link to="/register">注册</router-link>
        <span class="shuxian">|</span>
        <a href="###">消息通知</a>
      </div>

      <div class="cart">
        <i class="el-icon-shopping-cart-full"></i>
        <span>购物车</span>
        <span>（0）</span>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      seen: false,
    };
  },
  methods: {
    enter() {
      this.seen = true;
    },
    leave() {
      this.seen = false;
    },
  },
};
</script>

<style lang="less" scope>
.header {
  position: relative;
  z-index: 30;
  height: 40px;
  color: #b0b0b0;
  background: #333;
}
.top {
  position: relative;
  left: 18%;
  display: flex;
  align-items: center;
  width: 1306px;
  height: 40px;
}
.left {
  width: 870px;
}
.left a {
  color: #b0b0b0;
}
.left a:hover {
  color: #fff;
}
.appcode {
  position: absolute;
  top: 100%;
  left: 43%;
  width: 124px;
  height: 0;
  background: #fff;
}
.appcode-img {
  width: 90px;
  height: 90px;
}
.shuxian {
  margin: 0 6px;
  color: #333;
}
.right a {
  color: #b0b0b0;
}
.right a:hover {
  color: #fff;
}
.cart {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95px;
  height: 40px;
  line-height: 40px;
  margin: 0 20px;
  background-color: #424242;
  text-align: center;
}
.cart .el-icon-shopping-cart-full {
  padding-right: 10px;
  font-size: 15px;
}
</style>
