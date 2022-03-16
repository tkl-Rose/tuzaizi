<template>
  <div class="header">
    <div class="top">
      <!--头部第一行-->
      <div class="left">
        <a href="###">米游商城</a>
        <a href="###">MIUI</a>
        <a href="###">loT</a>
        <a href="###">云服务</a>
        <a href="###">天星科技</a>
        <a href="###">有品</a>
        <a href="###">小爱开放平台</a>
        <a href="###">企业团购</a>
        <a href="###">资质证照</a>
        <a href="###">协议规则</a>
        <a href="###">下载app</a>
        <a href="###">selectLocation</a>
      </div>

      <div class="right">
        <router-link to="/login">登录</router-link>
        <router-link to="/register" class="register">注册</router-link>
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
export default {};
</script>

<style lang="less" scope>
/* 清除内外边距 */
body,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
blockquote,
dl,
dt,
dd,
ul,
ol,
li,
pre,
fieldset,
lengend,
button,
input,
textarea,
th,
td {
  margin: 0;
  padding: 0;
}
.header {
  position: relative;
  z-index: 30;
  height: 40px;
  font-size: 12px;
  color: #b0b0b0;
  background: #333;
}
</style>
