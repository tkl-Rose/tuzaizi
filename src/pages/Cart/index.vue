<template>
  <div>
    <div class="site-header">
      <div class="site-container1">
        <div class="header-logo">
          <a href="">
            <img src="./images/1(1).jpg" alt="" />
          </a>
        </div>

        <div class="header-title">
          <h2>我的购物车</h2>
          <p>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</p>
        </div>

        <div class="site-topbar">
          <div class="topbar-info">
            <a href=""> 登录 </a>
            <span class="sep">|</span>
            <a href="">注册</a>
          </div>
        </div>
      </div>
    </div>

    <div class="mi-cart">
      <div class="mi-container">
        <div class="cart-container">
          <div class="cart-wrap">
            <div class="cart-goods-list">
              <div class="list-head">
                <div class="colcol-check">
                  <el-checkbox class="colcol-check-check1" v-model="checked"
                    >全选</el-checkbox
                  >
                </div>
                <div class="colcol-img"></div>
                <div class="colcol-name">商品名称</div>
                <div class="colcol-price">单价</div>
                <div class="colcol-num">数量</div>
                <div class="colcol-total">小计</div>
                <div class="colcol-actions">操作</div>
              </div>

              <div class="list-body">
                <div class="list-item">
                  <div class="item-box">
                    <div class="item-table">
                      <div class="item-row">
                        <div class="colcol-check">
                          <el-checkbox
                            class="colcol-check-check2"
                            v-model="checked"
                          ></el-checkbox>
                        </div>
                        <div class="colcol-img">
                          <a href="">
                            <img src="./images/91.png" alt="" />
                          </a>
                        </div>
                        <div class="colcol-name">
                          <h3 class="name">
                            <a href="">黑鲨5 Pro 12GB+256GB 陨石黑</a>
                          </h3>
                        </div>
                        <div class="colcol-price">4699元</div>
                        <div class="colcol-num">
                          <el-input-number
                            class="colcol-num1"
                            v-model="num"
                            @change="handleChange"
                            :min="1"
                            :max="10"
                            label="描述文字"
                          ></el-input-number>
                        </div>
                        <div class="colcol-total1">4699元</div>
                        <div class="colcol-actions">
                          <a href="" class="del">
                            <img src="./images/92.png" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="item-sub-box1">
                      <div class="item-table1">
                        <div class="item-row1">
                          <div class="colcol-img">
                            <a href="">
                              <img src="./images/90.jpg" alt="" />
                            </a>
                          </div>
                          <div class="colcol-name">
                            <div class="tags">
                              <span class="tag">赠品</span>
                            </div>
                            <h3 class="name">
                              <a href="">冰封散热背夹 Pro</a>
                            </h3>
                          </div>
                          <div class="colcol-price"></div>
                          <div class="colcol-num">1</div>
                          <div class="colcol-total"></div>
                          <div class="colcol-actions"></div>
                        </div>
                      </div>
                    </div>

                    <div class="item-sub-box2">
                      <div class="exetend-buy">
                        <img src="./images/95.png" alt="" />
                        碎屏保障服务
                        <span>
                          299元
                          <span class="price-diff">（碎屏免费修）</span>
                        </span>
                        <a href="">了解意外保护 ></a>
                      </div>
                    </div>

                    <div class="item-sub-box3">
                      <div class="extend-buy">
                        <img src="./images/95.png" alt="" />
                        云空间年卡200G
                        <span> 208元 </span>
                        <a href="" class="agreement">了解云空间服务 ></a>
                      </div>
                      <div class="extend-buy">
                        <img src="./images/95.png" alt="" />
                        云空间年卡50G
                        <span> 58元 </span>
                        <a href="" class="agreement">了解云空间服务 ></a>
                      </div>
                      <div class="extend-buy">
                        <img src="./images/95.png" alt="" />
                        云空间年卡200G
                        <span> 21元 </span>
                        <a href="" class="agreement">了解云空间服务 ></a>
                      </div>
                    </div>

                    <div class="item-sub-box2">
                      <div class="exetend-buy">
                        <img src="./images/95.png" alt="" />
                        +99元赠小米游戏鼠标Lite 99元
                        <span>
                          <span class="price-diff">( 省 30 元 )</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="cart-bar">
              <div class="section-left">
                <a href="" class="back-shopping">继续购物</a>
                <span class="cart-total">
                  已选择
                  <i>0</i>
                  件
                </span>
              </div>

              <div>
                <span class="total-price">
                  合计:
                  <em>0</em>
                  元
                  <a href="">
                    <el-button class="total-btn">去结算</el-button>
                  </a>
                </span>

                <div v-show="Bug" class="no-select-tip">
                  请勾选需要结算的商品
                  <i class="arrow-a"></i>
                  <i class="arrow-b"></i>
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
export default {
  name: "cart",
  data() {
    return {
      checked: false,
      num: 1,
      Bug: false,
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="less" scope>
.site-header {
  font-size: 12px;
  border-bottom: 2px solid #ff6700;
  background: #fff;
  color: #b0b0b0;
  //   position: relative;
  //   z-index: 20;
  height: 100px;
}
.site-container1 {
  display: flex;
  width: 1126px;
  height: 74px;
  text-align: center;
  margin-right: auto;
  margin-left: 300px;
}
.header-logo {
  width: 93px;
  //   margin-top: 26px;
  //   float: left;
}
.header-title {
  display: flex;
  flex: 1;
  align-items: center;
  padding-top: 15px;
  margin-left: 60px;
}
.header-title h2 {
  font-size: 25px;
  color: #424242;
  font-weight: 400;
}
.header-title p {
  height: 20px;
  line-height: 20px;
  margin-top: 20px;
  margin-left: 15px;
  color: #757575;
}
.site-topbar {
  height: 40px;
  line-height: 40px;
  margin-top: 25px;
}
.site-topbar a:hover {
  text-decoration: none;
  color: red;
}
.sep {
  margin: 0 10px;
}
.mi-cart {
  width: 100%;
  height: 1072px;
  padding: 38px 0;
  background: #f5f5f5;
}
.mi-container {
  width: 1126px;
  margin-left: 300px;
}
.cart-wrap {
  width: 1126px;
  height: 257px;
}
.cart-goods-list {
  background-color: #fff;
}
.list-head {
  display: flex;
  height: 70px;
  line-height: 70px;
  padding-right: 26px;
  color: #424242;
  //   border-bottom: 1px solid #e0e0e0;
}
.colcol-check {
  width: 110px;
  height: 70px;
}
.colcol-check-check1 {
  margin-left: 24px;
}
.colcol-img {
  width: 120px;
}
.colcol-name {
  width: 380px;
}
.colcol-price {
  width: 140px;
  padding-right: 18px;
  text-align: center;
  color: #424242;
}
.colcol-num {
  width: 120px;
  text-align: center;
  color: #424242;
}
.colcol-total {
  width: 120px;
  padding-right: 51px;
  text-align: right;
}
.colcol-action {
  width: 80px;
  text-align: center;
}
.list-body .list-item {
  height: 117px;
}
.list-body {
  height: 117px;
}
.list-item {
  padding: 15px 26px 15px 0;
  border-top: 1px solid #e0e0e0;
}
.item-table .item-row {
  display: flex;
  align-items: center;
  height: 86px;
}
.colcol-check-check2 {
  margin-left: 24px;
  margin-top: 25px;
}
.colcol-num1 {
  width: 150px;
  height: 40px;
}
.colcol-total1 {
  width: 120px;
  padding-right: 51px;
  text-align: right;
  color: #ff6700;
  font-size: 16px;
}
.cart-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background-color: #fff;
  margin-top: 20px;
}
.section-left .back-shopping {
  line-height: 50px;
  margin-left: 32px;
}
.cart-total {
  margin-left: 16px;
  padding-left: 16px;
  border-left: 1px solid #eee;
  color: #757575;
}
.cart-total i {
  color: #ff6700;
}
.total-price {
  position: relative;
  top: -25px;
  padding-left: 13px;
  color: #ff6700;
}
.total-price em {
  font-style: normal;
  font-size: 30px;
}
.total-btn {
  width: 190px;
  height: 50px;
  margin-top: 50px;
  background-color: #e0e0e0;
  //   line-height: 48px;
  //   text-align: center;
  font-size: 18px;
  margin-left: 50px;
}
.no-select-tip {
  position: absolute;
  width: 190px;
  height: 48px;
  line-height: 48px;
  top: 280px;
  right: 300px;
  background-color: #fff;
  border: 1px solid #ff6700;
  color: #ff6700;
  text-align: center;
  font-size: 14px;
}
.arrow-a {
  position: relative;
  top: 25px;
  right: 70px;
  width: 0;
  height: 0;
  overflow: hidden;
  font-size: 0;
  line-height: 0;
  border-width: 5px;
  border-style: solid dashed dashed dashed;
  border-color: #f30 transparent transparent transparent;
}
</style>
