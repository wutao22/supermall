import { getCode,reqRegister ,reqLogin,reqUserInfo, reqLogOut} from "@/api"

const state = {
    code: '',
    userInfo: {}
}
const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, userInfo) {
        state.userInfo = userInfo
    }
}
const actions = {
    async getUserCode({ commit }, phone) {
        let r = await getCode(phone)
        if (r.code === 200) {
            commit('GETCODE', r.data)
        } else {
            return new Promise.reject('failed')
        }
    },
   async registerUser ({commit}, data) {
        let res = await reqRegister(data)
        if (res.code === 200) {
            return 'ok'
        } else {
            return new Promise.reject('failed')
        }
    },
    async userLogin({commit}, data) {
        let r = await reqLogin(data)
        if (r.code === 200) {
            localStorage.setItem('userInfo', JSON.stringify(r.data))
            commit('USERLOGIN', r.data)
            return 'ok'
        }
    },
    async getUserInfo({commit}) {
        let res = await reqUserInfo()
        if (res.code === 200) {
            localStorage.setItem('user', JSON.stringify( res.data))
        }
    },
    async logout() {
        let res = await reqLogOut()
        if(res.code === 200) {
            localStorage.removeItem('user')
            localStorage.removeItem('userInfo')
            return 'ok'
        }
    }
}
const getters = {}

export default {
    state, mutations, actions, getters
}