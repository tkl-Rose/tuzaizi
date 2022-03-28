<template>
  <div class="appid">
    <div class="floos-one">
      <div class="box-hd1">
        <h2 class="box-title">智能穿戴</h2>
        <div class="box-more">
          <a href="">
            <ul class="tab-box">
              <li>热门</li>
              <li class="tab-active-one">穿戴</li>
            </ul>
          </a>
        </div>
      </div>
      <div class="box-bd">
        <div class="left-one">
          <img src="../List/images/10.jpg" alt="" />
        </div>

        <div class="right-one">
          <ul class="brick-list">
            <li class="brick-item">
              <a href="">
                <div class="figure">
                  <img src="../Floors/images/21.jpg" alt="" />
                </div>
                <h3 class="title-one">Xiaomi Watch S1</h3>
                <p class="desc">腕事具备</p>
                <p class="price">
                  <span class="num">1049元起</span>
                  <span class="num-one">1099元</span>
                </p>
              </a>
            </li>
            <li class="brick-item">
              <a href="">
                <div class="figure">
                  <img src="../Floors/images/21.jpg" alt="" />
                </div>
                <h3 class="title-one">Xiaomi Watch S1</h3>
                <p class="desc">腕事具备</p>
                <p class="price">
                  <span class="num">1049元起</span>
                  <span class="num-one">1099元</span>
                </p>
              </a>
            </li>
            <li class="brick-item">
              <a href="">
                <div class="figure">
                  <img src="../Floors/images/21.jpg" alt="" />
                </div>
                <h3 class="title-one">Xiaomi Watch S1</h3>
                <p class="desc">腕事具备</p>
                <p class="price">
                  <span class="num">1049元起</span>
                  <span class="num-one">1099元</span>
                </p>
              </a>
            </li>
            <li class="brick-item">
              <a href="">
                <div class="figure">
                  <img src="../Floors/images/21.jpg" alt="" />
                </div>
                <h3 class="title-one">Xiaomi Watch S1</h3>
                <p class="desc">腕事具备</p>
                <p class="price">
                  <span class="num">1049元起</span>
                  <span class="num-one">1099元</span>
                </p>
              </a>
            </li>
            <li class="brick-item">
              <a href="">
                <div class="figure">
                  <img src="../Floors/images/21.jpg" alt="" />
                </div>
                <h3 class="title-one">Xiaomi Watch S1</h3>
                <p class="desc">腕事具备</p>
                <p class="price">
                  <span class="num">1049元起</span>
                  <span class="num-one">1099元</span>
                </p>
              </a>
            </li>
            <li class="brick-item">
              <a href="">
                <div class="figure">
                  <img src="../Floors/images/21.jpg" alt="" />
                </div>
                <h3 class="title-one">Xiaomi Watch S1</h3>
                <p class="desc">腕事具备</p>
                <p class="price">
                  <span class="num">1049元起</span>
                  <span class="num-one">1099元</span>
                </p>
              </a>
            </li>
            <li class="brick-item">
              <a href="">
                <div class="figure">
                  <img src="../Floors/images/21.jpg" alt="" />
                </div>
                <h3 class="title-one">Xiaomi Watch S1</h3>
                <p class="desc">腕事具备</p>
                <p class="price">
                  <span class="num">1049元起</span>
                  <span class="num-one">1099元</span>
                </p>
              </a>
            </li>
            <li class="brick-one">
              <a href="">
                <div class="top-one">
                  <div class="top-socond">
                    <h3 title-one>Redmi Buds 3 青春版</h3>
                    <p class="num">99元</p>
                  </div>

                  <img src="../Floors/images/22.jpg" alt="" />
                </div>
              </a>
              <a href="">
                <div class="top-one">
                  <div class="top-socond">
                    <h3 title-one>浏览更多</h3>
                    <p class="num">热门</p>
                  </div>

                  <img class="num-img" src="../Floors/images/23.png" alt="" />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scope>
.appid {
  height: 8000px;
  background-color: #f5f5f5;
}
.floos-one {
  width: 1226px;
  height: 686px;
  margin-left: 300px;
}
.box-hd1 {
  height: 58px;
  width: 1115px;
  text-align: center;
  line-height: 58px;
  display: flex;
  justify-content: space-between;
}
.box-title {
  font-size: 20px;
  font-weight: 400;
}
.box-more {
  // width: 124px;
  height: 42px;
}
.tab-box {
  display: flex;
  // width: 124px;
  height: 42px;
  text-align: center;
  line-height: 42px;
  font-size: 15px;
  text-decoration: none;
}
.tab-active-one {
  margin-left: 30px;
}
.tab-box li:hover {
  color: #fc7d00;
}
.num-one {
  margin-left: 5px;
  text-decoration: line-through;
}
.brick-one {
  width: 208px;
  height: 143px;
  background-color: #fff;
  margin-left: 10px;
  transition: bottom 0.2s linear 0s;
  bottom: 0px;
}
.top-one {
  display: flex;
  width: 208px;
  height: 143px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}
.num {
  margin-top: 10px;
}
.num-img {
  margin-left: 30px;
}
.top-socond {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 25px;
  text-decoration: none;
}
.brick-one .top-one:hover {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  bottom: 2px;
}
</style>
