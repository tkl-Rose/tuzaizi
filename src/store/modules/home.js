/**
 * 1. 这个home.js文件是专门用于处理home组件(主页面)数据的
 * 2. 这个相当于是一个独立的空间 只存储home中的数据
 * 3. 在这个模块当中也有Vuex中的state mutations actions ...
 * 4. 当前这个文件是一个独立的模块，在设置完成之后，一定要和store关联起来
 */
// import { reqCategoryListData } from '../api'
// import { reqCategoryListData } from '@/api' // 如果想让@取代之前的...,并在使用的时候给我们一个路径提示的话，需要配置vscode
import {
    reqCategoryListData,
    reqBannerListData,
    reqSwiperListData,
    reqBarListData,
    reqFloorsListData
} from '@/api'

const state = {
    // 存储三级分类导航数据
    categoryList: [],
    // 存储轮播图数据
    bannerList: [],
    //轮播图数据
    swiperList: [],
    //手机列表的数据
    barList: [],
    //商品列表得数据
    floorsList: []
}
const actions = {
    // 可以做异步操作
    // 1. 获取三级分类信息数据
    async getCategoryListData({
        commit
    }) {
        const result = await reqCategoryListData()
        if (result.code === 200) { // 根据状态码来判断是否真正的有请求回来的数据
            // 提交给mutations来操作state中的数据
            commit('SAVE_CATEGORY_LIST_DATA', result)
        } else {
            console.log(result.message);
        }
    },
    // 2. 获取轮播图数据
    async getBannerListData({
        commit
    }) {
        const result = await reqBannerListData()
        // console.log('actionsBanner',result);
        if (result.code === 200) {
            commit('SAVE_BANNER_LIST_DATA', result.data)
        } else {
            console.log(result.message);
        }
    },

    //3.轮播图中的数据
    async getSwiperListData({
        commit
    }) {
        const result = await reqSwiperListData()
        if (result.code === 200) {
            commit('SAVE_SWIPER_LIST_DATA', result.data)
        } else {
            console.log(result.message);
        }
    },

    //4.手机列表的数据
    async getBarListData({
        commit
    }) {
        const result = await reqBarListData()
        if (result.code === 200) {
            commit('SAVE_BAR_LIST_DATA', result.data)
        } else {
            console.log(result.message);
        }
    },

    //5.商品列表得数据
    async getFloorsListData({
        commit
    }) {
        const result = await reqFloorsListData()
        if (result.code === 200) {
            commit('SAVE_FLOORS_LIST_DATA', result.data)
        } else {
            console.log(result.message);
        }
    }
}
const mutations = {
    SAVE_CATEGORY_LIST_DATA(state, payload) {
        state.categoryList = payload.data
    },
    // 2. 将轮播图数据存入state中
    SAVE_BANNER_LIST_DATA(state, payload) {
        state.bannerList = payload
    },
    //3.将轮播图中的数据存入state中
    SAVE_SWIPER_LIST_DATA(state, payload) {
        state.swiperList = payload
    },
    //4.将手机的数据存入state中
    SAVE_BAR_LIST_DATA(state, payload) {
        state.barList = payload
    },
    //5.将商品数据存入state中
    SAVE_FLOORS_LIST_DATA(state, payload) {
        state.floorsList = payload
    }
}
const getters = {}

export default {
    namespaced: true, // 开启命名空间
    state,
    actions,
    mutations,
    getters
}