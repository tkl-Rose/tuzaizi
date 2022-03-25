<template>
  <div class="home-hero-sub">
    <div class="span4">
      <ul class="home-channel-list">
        <li>
          <a href="">
            <img
              class="home-img"
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png?w=48&h=48"
              alt=""
            />
            <div class="home-text">保障服务</div>
          </a>
        </li>
        <li>
          <a href="">
            <img
              class="home-img"
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png?w=48&h=48"
              alt=""
            />
            <div class="home-text">企业团购</div>
          </a>
        </li>
        <li>
          <a href="">
            <img
              class="home-img"
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eded6fa3b897a058163e2485532c4f10.png?w=48&h=48"
              alt=""
            />
            <div class="home-text">F码通道</div>
          </a>
        </li>
        <li>
          <a href="">
            <img
              class="home-img"
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&h=48"
              alt=""
            />
            <div class="home-text">米粉卡</div>
          </a>
        </li>
        <li>
          <a href="">
            <img
              class="home-img"
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4846bca6010a0deb9f85464409862af.png?w=48&h=48"
              alt=""
            />
            <div class="home-text">以旧换新</div>
          </a>
        </li>
        <li>
          <a href="">
            <img
              class="home-img"
              src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a76d7636b08e0988efb4fc384ae497b.png?w=48&h=48"
              alt=""
            />
            <div class="home-text">话费充值</div>
          </a>
        </li>
      </ul>
    </div>
    <div class="span16">
      <ul class="home-promo-list">
        <li class="tp">
          <img
            class="tp-img"
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ab8e5096ac6f08bd632e4d5a15d1792.jpg?w=632&h=340"
            alt=""
          />
        </li>
        <li class="tp">
          <img
            class="tp-img"
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c5f019908e21571fe48fdad0ebf79249.jpg?w=632&h=340"
            alt=""
          />
        </li>
        <li class="tp">
          <img
            class="tp-img"
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/28c13d0d11b38ec17fa5d83bc6ba5912.jpg?w=632&h=340"
            alt=""
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scope>
.home-hero-sub {
  display: flex;
  width: 1240px;
  height: 170px;
  margin-left: 302px;
  margin-top: 14px;
}
.span4 {
  width: 250px;
}
.home-channel-list {
  display: flex;
  width: 250px;
  height: 170px;
  display: flex;
  margin: 0;
  list-style-type: center;
  flex-wrap: wrap;
  text-align: center;
  background-color: #5f5750;
}
.home-channel-list li {
  padding: 20px 3px;
  display: flex;
  width: 76px;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
.home-channel-list li :hover {
  color: #fff;
}
.home-img {
  width: 24px;
  height: 24px;
}
.home-text {
  color: #bebbb8;
}
.span16 {
  // width: 978px;
}
.home-promo-list {
  width: 720px;
  display: flex;
  margin: 0 10px;
}
.tp {
  width: 310px;
  height: 170px;
}
.tp-img {
  width: 275px;
  height: 170px;
  margin: 0 7px;
}
</style>
