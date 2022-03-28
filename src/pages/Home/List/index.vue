<template>
  <div class="page-main">
    <div class="con">
      <div class="home-banner-box">
        <a href="">
          <img class="home-banner-box-img" src="../List/images/5.jpg" alt="" />
        </a>
      </div>

      <div class="home-brick-box">
        <div class="box-hd">
          <h2 class="title2">手机</h2>
          <div class="more">
            <a href="">
              <span class="more-text">查看更多</span>
              <i class="iconfont-a">
                <img src="../List/images/7.png" alt="" />
              </i>
            </a>
          </div>
        </div>

        <div class="box-bd">
          <div class="left-one">
            <img src="../List/images/10.jpg" alt="" />
          </div>

          <div class="right-one">
            <ul class="brick-list">
              <li v-for="bar in barList" :key="bar.id" class="brick-item">
                <a href="">
                  <div class="figure">
                    <img :src="bar.imgUrl" alt="" />
                  </div>
                  <h3 class="title-one">{{ bar.name }}</h3>
                  <p class="desc">{{ bar.text }}</p>
                  <p class="price">
                    <span class="num">{{ bar.price }}</span>
                  </p>
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
  computed: {
    ...mapState("home", ["barList"]),
  },
  mounted() {
    this.$store.dispatch("home/getBarListData");
  },
};
</script>

<style lang="less" scope>
.page-main {
  background-color: #f5f5f5;
  margin-top: 20px;
}
.con {
  width: 1260px;
  // height: 8000px;
  margin-left: 230px;
}
.home-banner-box {
  width: 1260px;
  height: 150px;
  text-align: center;
}
.home-banner-box-img {
  width: 1120px;
  height: 120px;
  margin-top: 30px;
}
.home-brick-box {
  width: 1226px;
  height: 686px;
  margin-left: 70px;
  margin-top: 10px;
}
.box-hd {
  width: 1126px;
  height: 58px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title2 {
  font-size: 20px;
  font-weight: 400;
}
.more {
  width: 92px;
  height: 58px;
  display: flex;
  text-align: center;
  line-height: 58px;

  .more a {
    text-decoration: none;
  }
}
.more a:hover {
  color: #ff6700;
}
.more-text {
  font-size: 18px;
}
.iconfont-a {
  width: 18px;
  height: 18px;
  padding-left: 5px;
}
.box-bd {
  display: flex;
}
.left-one {
  width: 234px;
  height: 614px;
  background-color: #fff;
  transition: bottom 0.2s linear 0s;
  bottom: 0px;
}
.left-one img:hover {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  bottom: 2px;
}
.right-one {
  display: flex;
  width: 2000px;
  height: 628px;
}
.brick-list {
  width: 1060px;
  height: 628px;
  display: flex;
  flex-wrap: wrap;
  margin-left: 10px;
}
.brick-item {
  display: flex;
  width: 208px;
  height: 300px;
  margin: 0 0 10px 10px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #fff;
  transition: bottom 0.2s linear 0s;
  bottom: 0px;
}
.brick-item a:hover {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  height: 300px;
  width: 208px;
  position: relative;
  bottom: 2px;
  text-decoration: none;
}
.title-one {
  font-size: 15px;
  font-weight: 400;
  color: #333;
}
.desc {
  font-size: 13px;
  padding-top: 5px;
}
.num {
  color: #ff6700;
}
</style>
