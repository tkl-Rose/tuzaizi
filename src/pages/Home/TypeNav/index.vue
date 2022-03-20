<template>
  <div id="app">
    <div class="container1">
      <transition name="sort">
        <div class="sort">
          <div class="item">
            <h3>
              <a href="">图书、音像、电子书刊</a>
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
export default {};
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
