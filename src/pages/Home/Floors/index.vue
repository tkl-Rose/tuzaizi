<template>
  <div class="appid">
    <div class="floos-one" v-for="floors in floorsList" :key="floors.id">
      <div class="box-hd1">
        <h2 class="box-title">{{ floors.name[0] }}</h2>
        <div class="box-more">
          <a href="">
            <ul class="tab-box">
              <li>{{ floors.keywords[0] }}</li>
              <li class="tab-active-one">{{ floors.text[0] }}</li>
            </ul>
          </a>
        </div>
      </div>
      <div class="box-bd">
        <div class="left-one">
          <img :src="floors.imgUrl" alt="" />
        </div>

        <div class="right-one">
          <ul class="brick-list">
            <li
              class="brick-item"
              v-for="nav in floors.navList"
              :key="nav.text"
            >
              <a href="">
                <div class="figure">
                  <img :src="nav.imgUrl" alt="" />
                </div>
                <h3 class="title-one">{{ nav.name }}</h3>
                <p class="desc">{{ nav.text }}</p>
                <p class="price">
                  <span class="num">{{ nav.price }}</span>
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

    <div class="home-video-box">
      <div class="box-hd1">
        <h2 class="box-title">视频</h2>
        <div class="box-more">
          <a href="">
            <ul class="tab-box">
              <li>查看全部</li>
              <img class="num-img1" src="../Floors/images/23.png" alt="" />
            </ul>
          </a>
        </div>
      </div>

      <div class="box-video">
        <ul class="video-list">
          <li class="video-item">
            <a href="">
              <div class="figure1">
                <img src="../Floors/images/50.jpg" alt="" />
                <span @click.prevent="showCont" class="play">
                  <img class="play-img" src="../Floors/images/52.png" alt="" />
                </span>
                <h3 class="title-too">2021年春季新品发布会第一场</h3>
              </div>
            </a>
          </li>
          <li class="video-item">
            <a href="">
              <div class="figure1">
                <img src="../Floors/images/50.jpg" alt="" />
                <span @click.prevent="showCont" class="play">
                  <img class="play-img" src="../Floors/images/52.png" alt="" />
                </span>
                <h3 class="title-too">2021年春季新品发布会第一场</h3>
              </div>
            </a>
          </li>
          <li class="video-item">
            <a href="">
              <div class="figure1">
                <img src="../Floors/images/50.jpg" alt="" />
                <span @click.prevent="showCont" class="play">
                  <img class="play-img" src="../Floors/images/52.png" alt="" />
                </span>
                <h3 class="title-too">2021年春季新品发布会第一场</h3>
              </div>
            </a>
          </li>
          <li class="video-item">
            <a href="">
              <div class="figure1">
                <img src="../Floors/images/50.jpg" alt="" />
                <span @click.prevent="showCont" class="play">
                  <img class="play-img" src="../Floors/images/52.png" alt="" />
                </span>
                <h3 class="title-too">2021年春季新品发布会第一场</h3>
              </div>
            </a>
          </li>
        </ul>
      </div>

      <!--在视频外面加一个容器-->
      <div v-if="showModal" class="video-box">
        <div class="box-hd2">
          <h2 class="box-text">2021年春季新品发布会第一场</h2>
          <a @click.prevent="showClose" href=""
            ><img class="box-img2" src="../Floors/images/53.png" alt=""
          /></a>
        </div>
        <div class="input_video">
          <video-player
            class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
          ></video-player>
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
      showModal: false,
      //视频播放
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], //可选择的播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4",
            src: "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/812358b69886e576c66a01f1f00affe9.mp4", //url地址
          },
        ],
        poster: require("../Floors/images/50.jpg"), //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, //当前时间和持续时间的分隔符
          durationDisplay: true, //显示持续时间
          remainingTimeDisplay: false, //是否显示剩余时间功能
          fullscreenToggle: true, //全屏按钮
        },
      },
    };
  },
  computed: {
    ...mapState("home", ["floorsList"]),
  },
  mounted() {
    this.$store.dispatch("home/getFloorsListData");
  },
  methods: {
    showCont() {
      this.showModal = true;
    },
    showClose() {
      this.showModal = false;
    },
  },
};
</script>

<style lang="less" scope>
.appid {
  height: 1800px;
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
  align-items: center;
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
.home-video-box {
  // display: flex;
  width: 1226px;
  height: 357px;
  margin-left: 300px;
}
.num-img1 {
  width: 20px;
  height: 20px;
  margin-left: 10px;
}

.box-video {
  display: inline-block;
  width: 826px;
  height: 280px;
}
.video-item {
  width: 296px;
  height: 280px;
  background-color: #fff;
  text-align: center;
}
.video-list {
  display: flex;
  width: 296px;
  height: 280px;
}
.figure1 {
  width: 296px;
  height: 280px;
}
.play {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 330px;
  bottom: -291%;
  width: 30px;
  height: 20px;
  text-align: center;
  line-height: 30px;
  border-radius: 12px;
  border: 2px solid #fff;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  transition: all 0.2s;
  overflow: hidden;
}
.play-img {
  width: 10px;
  height: 10px;
}
.video-box {
  position: absolute;
  left: 25%;
  bottom: -310%;
  width: 800px;
  height: 520px;
}
.box-hd2 {
  width: 802px;
  height: 60px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  background-color: #f5f5f5;
}
.input_video {
  width: 800px;
  height: 400px;
  margin: 0 auto;
}
.title-too {
  text-decoration: none;
  margin-top: 20px;
}
.box-text {
  margin-left: 20px;
  font-weight: 400;
}
.box-img2 {
  margin-right: 10px;
}
</style>
