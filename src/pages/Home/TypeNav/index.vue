<template>
  <div class="type-nav">
    <div class="container1">
      <div class="nav-left">
        <transition name="sort">
          <div class="sort">
            <div class="all-sort-list2" @click="btnSearch">
              <div
                class="item"
                v-for="c1 in categoryList.slice(0, -2)"
                :key="c1.categoryId"
              >
                <h3>
                  <a :data-id1="c1.categoryId" :data-name="c1.categoryName">{{
                    c1.categoryName
                  }}</a>
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl
                      class="fore"
                      v-for="c2 in c1.categoryChild"
                      :key="c2.categoryId"
                    >
                      <dt>
                        <a
                          :data-id2="c2.categoryId"
                          :data-name="c2.categoryName"
                          >{{ c2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <a
                            :data-id3="c3.categoryId"
                            :data-name="c3.categoryName"
                            >{{ c3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"; // 引入mapState
export default {
  name: "TypeNav", // 组件名
  data() {
    return {};
  },
  computed: {
    // 现在分模块了，所以使用mapState的时候，第一项应该指定模块名称
    ...mapState("home", ["categoryList"]), // 就相当于将vuex中的数据映射到当前组件上了
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

        //判断之前有没有params,合并参数
        location.params = this.$route.params;
        this.$router.push(location);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  .container1 {
    width: 1120px;
    height: 520px;
    // border: 1px solid #333;
    position: absolute;
    margin-left: 300px;
    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: relative;
      left: 0;
      top: 0;
      width: 210px;
      height: 461px;
      // background: #fafafa;
      z-index: 999;

      &.sort-enter {
        height: 0;
        opacity: 0;
      }
      &.sort-enter-to {
        height: 461px;
        opacity: 1;
      }
      &.sort-enter-active {
        transition: all 2s;
      }

      .all-sort-list2 {
        filter: alpha(opacity=0);
        .item {
          width: 200px;
          color: #fff;
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 4px 0;

            a {
              color: #90be8f;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 200px;
            top: 0;
            z-index: 9999;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
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
            }
          }

          &:hover {
            background-color: #ff6a00;
            cursor: pointer;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
