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
        if(res.code == 200) {return true}
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