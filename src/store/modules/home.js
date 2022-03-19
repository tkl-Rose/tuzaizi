/**
 * 1. 这个home.js文件是专门用于处理home组件(主页面)数据的
 * 2. 这个相当于是一个独立的空间 只存储home中的数据
 * 3. 在这个模块当中也有Vuex中的state mutations actions ...
 * 4. 当前这个文件是一个独立的模块，在设置完成之后，一定要和store关联起来
 */
// import { reqCategoryListData } from '../api'
// import { reqCategoryListData } from '@/api' // 如果想让@取代之前的...,并在使用的时候给我们一个路径提示的话，需要配置vscode
import {
    reqBannerListData,
} from '@/api'

const state = {
    bannerList: [],
}
const actions = {
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
}
const mutations = {
    SAVE_BANNER_LIST_DATA(state, payload) {
        state.bannerList = payload
    },
}
const getters = {}

export default {
    namespaced: true, // 开启命名空间
    state,
    actions,
    mutations,
    getters
}