import { reqGetSearchInfo } from "@/api";

const state = {
    searchList: {}
};
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList
    }
};
const actions = {
    async getSearchList({ commit }, params = {}) {
        //至少要传一个空对象
        //params是在用户派发action时第二个参数传递过来的。至少是一个空对象
        let res = await reqGetSearchInfo(params)
        if (res.code == 200) {
            commit("GETSEARCHLIST", res.data)
        }
    }

};
const getters = {
    //当前state时当前仓库的
    goodsList(state) {
        return state.searchList.goodsList || []
    },
    attrsList(state) {
        return state.searchList.attrsList || []
    },
    trademarkList(state) {
        return state.searchList.trademarkList || []
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}