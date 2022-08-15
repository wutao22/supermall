import { reqGoodsInfo, reqShopCart } from "@/api"

const state = {
    goodsinfo: {}
}
const actions = {
    async getGoodsInfo({ commit }, skuid) {
        var r = await reqGoodsInfo(skuid);
        if (r.code == 200) {
            commit('GETGOODSINFO', r.data)
        }
    },
    async addShopCart({ commit }, { skuId, skuNum }) {
        let result = await reqShopCart({ skuId, skuNum })
        if(result.code == 200 ) {
           return 'ok' 
        }else {
            return Promise.reject(new Error(e))
        }
        
    }
}
const mutations = {
    GETGOODSINFO(state, goodsinfo) {
        state.goodsinfo = goodsinfo
    }
}
const getters = {
    categoryView(state) {
        return state.goodsinfo.categoryView || {}
    },
    skuInfo(state) {
        return state.goodsinfo.skuInfo || {}
    },
    skuSaleAttrValueList(state) {
        return state.goodsinfo.skuInfo.skuSaleAttrValueList || {}
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    // namespace:true
}