import { reqCategoryList } from '@/api'
import { reqGetBannerList, reqFloorList } from '@/api';

const state = {
    categoryList: [],
    bannerList: [],
    floorList: []
};
const mutations = {
    CATEGORYLIST(state, CategoryList) {
        state.categoryList = CategoryList.slice(0, 16)
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList
    },
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList
    }
};
const actions = {
    async CategoryList({ commit }) {
        var result = await reqCategoryList();
        //   console.log(result)
        if (result.code == 200) {
            commit('CATEGORYLIST', result.data)
        }
    },
    async getBannerList({ commit }) {
        let res = await reqGetBannerList();
        //    console.log(res)
        if (res.code == 200) {
            commit('GETBANNERLIST', res.data)
        }
    },
    async getFloorList({ commit }) {
        let res = await reqFloorList();
        console.log(res)
        if (res.code == 200) {
            commit("GETFLOORLIST", res.data)
        }
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters,
    // namespace:true
}