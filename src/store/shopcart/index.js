import { reqShop,delShopcart,updateChecked } from "@/api"

const state = {
    shopList: []
}
const mutations = {
    GETSHOPLIST(state, shopList) {
        state.shopList = shopList
    }
}
const actions = {
    async getShopList ({commit}) {
        let res = await reqShop()
        if (res.code == 200) {
            commit("GETSHOPLIST", res.data)
        }
    },
    async deleteGoods({commit},skuId) {
        let res = await delShopcart(skuId)
        if(res.code == 200) {return true}
    },
    async updateisChecked({commit}, {skuId,isChecked}) {
        let r = await updateChecked(skuId,isChecked)
        if(r.code == 200) {return true}
    },
    async  deleteAllCheckedById ({dispatch,getters}) {
        getters.shopListInfo.cartInfoList.forEach(item => {
            let result = []
            result.push(item.isChecked == 1 ? dispatch('deleteGoods',item.skuId) : '')
        });
        return Promise.all(result)
    },
    async updateAllIsChecked ({dispatch, getters}, isChecked) {
        let promiseAll = []
        getters.shopListInfo.cartInfoList.forEach(item => {
            let result = dispatch('updateisChecked',{skuId: item.skuId,isChecked})
            promiseAll.push(result)
        })
       return Promise.all(promiseAll)
    }
}
const getters = {
    shopListInfo () {
        return state.shopList[0] || []
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}