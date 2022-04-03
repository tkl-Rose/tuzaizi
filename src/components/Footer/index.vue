<template>
  <div class="site-footer">
    <div class="site-container">
      <div class="footer-service">
        <ul class="list-service">
          <li>
            <em>
              <img class="site-img" src="../Footer/images/54(1).png" alt="" />
            </em>
            <span>预约维修服务</span>
          </li>
          <li>
            <em>
              <img class="site-img" src="../Footer/images/55.png" alt="" />
            </em>
            <span>7天无理由退货</span>
          </li>
          <li>
            <em>
              <img class="site-img" src="../Footer/images/56.png" alt="" />
            </em>
            <span>15天免费换货</span>
          </li>
          <li>
            <em>
              <img class="site-img" src="../Footer/images/57.png" alt="" />
            </em>
            <span>满69包邮</span>
          </li>
          <li>
            <em>
              <img class="site-img" src="../Footer/images/58.png" alt="" />
            </em>
            <span>520余家售后网点</span>
          </li>
        </ul>
      </div>

      <div class="footer-links">
        <dl class="col-links">
          <dt class="col-links-one">帮助中心</dt>
          <dd><a href="">账号管理</a></dd>
          <dd><a href="">购物指南</a></dd>
          <dd><a href="">订单操作</a></dd>
        </dl>

        <dl class="col-links">
          <dt class="col-links-one">服务支持</dt>
          <dd><a href="">售后政策</a></dd>
          <dd><a href="">自动服务</a></dd>
          <dd><a href="">相关下载</a></dd>
        </dl>

        <dl class="col-links">
          <dt class="col-links-one">线下门店</dt>
          <dd><a href="">小米之家</a></dd>
          <dd><a href="">服务网点</a></dd>
          <dd><a href="">授权体验店/专区</a></dd>
        </dl>

        <dl class="col-links">
          <dt class="col-links-one">关于小米</dt>
          <dd><a href="">了解小米</a></dd>
          <dd><a href="">加入小米</a></dd>
          <dd><a href="">投资者关系</a></dd>
          <dd><a href="">企业社会责任</a></dd>
          <dd><a href="">廉洁举报</a></dd>
        </dl>

        <dl class="col-links">
          <dt class="col-links-one">关于我们</dt>
          <dd><a href="">新浪微博</a></dd>
          <dd><a href="">官方微信</a></dd>
          <dd><a href="">联系我们</a></dd>
          <dd><a href="">公益基金会</a></dd>
        </dl>

        <dl class="col-links">
          <dt class="col-links-one">特色服务</dt>
          <dd><a href="">F码通道</a></dd>
          <dd><a href="">礼物码</a></dd>
          <dd><a href="">防伪查询</a></dd>
        </dl>

        <div class="col-contact">
          <p class="phone">400-100-5678</p>
          <p class="phone1">8:00-18:00（仅收市话费）</p>
          <a class="btn-one" href="">
            <em
              ><img class="btn-one-img" src="../Footer/images/59.png" alt=""
            /></em>
            <span>人工服务</span>
          </a>
          <div class="follow">
            <span>关注米哈游:</span>
            <a href="">
              <img class="follow-one" src="../Footer/images/60.png" alt="" />
            </a>
            <a href="">
              <img class="follow-one" src="../Footer/images/61.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scope>
.site-footer {
  width: 1502px;
  height: 333px;
}
.site-container {
  width: 1180px;
  margin-right: auto;
  margin-left: 300px;
}
.footer-service {
  display: flex;
  align-items: center;
  // width: 1226px;
  height: 80px;
  border-bottom: 1px solid #e0e0e0;
}
.list-service {
  display: flex;
  justify-content: space-between;
  width: 1180px;
  height: 25px;
  font-size: 15px;
  line-height: 25px;
  text-align: center;
  display: flex;
}
.site-img {
  position: relative;
  top: 30%;
  width: 24px;
  height: 25px;
  margin-right: 3px;
}
.footer-links {
  display: flex;
  justify-content: space-between;
  width: 1180px;
  height: 253px;
  margin-top: 20px;
  font-size: 13px;
  text-align: center;
}
.col-links-one {
  margin-bottom: 20px;
  color: #333;
  font-size: 14px;
}
.footer-links dd {
  margin: 10px 0;
  color: #424242;
}
.col-contact {
  width: 251px;
  height: 111px;
  border-left: 1px solid #e0e0e0;
  text-align: center;
  color: #616161;
}
.phone {
  font-size: 22px;
  line-height: 1;
  color: #ff6700;
}
.phone1 {
  margin: 15px 0;
}
.btn-one {
  font-size: 16px;
  border-color: #ff6700;
  background: #fff;
  color: #ff6700;
}
.btn-one-img {
  position: relative;
  top: 2%;
  width: 15px;
  height: 15px;
  margin-right: 5px;
}
.follow {
  font-size: 14px;
  margin-top: 10px;
}
.follow-one {
  margin-left: 10px;
  position: relative;
  top: 5px;
}
</style>
