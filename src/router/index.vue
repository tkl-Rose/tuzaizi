<template>
  <div id="app">
    <div class="container1">
      <transition name="sort">
        <div class="sort">
          <div class="item" @click="btnSearch">
            <h3>
              <a>图书、音像、电子书刊</a>
            </h3>

            <div class="item-list">
              <div class="subitem">
                <dl class="fore">
                  <dt>
                    <a href="">电子书刊</a>
                  </dt>
                  <dd>
                    <em>
                      <a href="">电子书</a>
                    </em>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TypeNav", // 组件名
  computed: {
    ...mapState("home", ["CategoryList"]),
  },
  methods: {
    btnSearch(event) {
      //点击之后，获取到点击id元素
      let target = event.target;
      //从点击的元素身上盲区，data-开头自定义属性组成的对象
      let dataset = target.dataset;
      //盲解
      let { id1, id2, id3, name } = dataset;
      if (name) {
        //代表点的是a标签
        let location = {
          name: "search",
        };
        let query = {
          categoryName: name,
        };
        if (id1) {
          query.category1Id = id1;
        } else if (id2) {
          query.category2Id = id2;
        } else {
          query.category3Id = id3;
        }
        location.query = query;

        //判断之前有没有params，合并参数
        location.params = this.$router.params;
        this.$router.push(location);
      }
    },
  },
  mounted() {
    // 下面这个判断是判断的search页面,当跳转到search页面的时候meta中是没有isShowTypeNav
    if (!this.$route.meta.isShowTypeNav) {
      // 能进到这里面，说明是search页面
      this.isShowNav = false;
    }
  },
};
</script>

<style lang="less" scope>
.app {
  height: 510px;
}
.container1 {
  width: 1120px;
  height: 510px;
  //   border: 1px solid #333;
}
.sort {
  position: absolute;
  left: 1;
  top: 145px;
  width: 210px;
  height: 461px;
  //   opacity: 0;
  z-index: 99999;
}
.item {
  width: 200px;
  text-align: center;
  height: 30px;
}
.item h3:hover {
  cursor: pointer;
  background-color: #ff6a00;
  text-decoration: none;
  .item-list {
    display: block;
  }
}
.item h3 {
  line-height: 30px;
  font-size: 14px;
  font-weight: 400;
  overflow: hidden;
  padding: 0 20px;
  margin: 0;
  a {
    color: #333;
  }
}
.item-list {
  //   display: none;
  position: absolute;
  width: 734px;
  min-height: 460px;
  //   background: #f7f7f7;
  left: 200px;
  //   border: 1px solid #ddd;
  top: -5px;
  z-index: 99999 !important;
}
.subitem {
  float: left;
  width: 650px;
  padding: 0 4px 0 8px;

  dl {
    border-top: 1px solid #eee;
    // padding: 6px 0;
    overflow: hidden;
    zoom: 1;

    &.fore {
      border-top: 0;
    }

    dt {
      float: left;
      width: 54px;
      line-height: 22px;
      text-align: right;
      padding: 3px 6px 0 0;
      font-weight: 700;
    }

    dd {
      float: left;
      width: 415px;
      padding: 3px 0 0;
      overflow: hidden;
    }

    em {
      float: left;
      height: 14px;
      line-height: 14px;
      padding: 0 8px;
      margin-top: 4px;
      border-left: 1px solid #ccc;
    }
  }
}

.fore {
  padding: 6px 0;
  overflow: hidden;
  zoom: 1;
}
</style>
