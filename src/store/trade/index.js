import {reqTradeInfo} from '@/api'

const state = {
    tradeInfo: {}
};
const mutations = {
    TRADEINFO(state, tradeInfo) {
        state.tradeInfo = tradeInfo
    }
};
const actions = {
   async getTradeInfo({commit}){
        let res = await reqTradeInfo();
        if(res.code === 200) {
            commit('TRADEINFO', res.data)
        }
    }
};
const getters = {};

export default {
    state, mutations, actions, getters
}