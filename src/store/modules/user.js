import { setStore, getStore, removeStore } from "@/utils/auth";
import router from "@/router";
import { login } from '@/apiMock'

const state = {
  token: getStore('token'),
  userInfo: {}
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
  }
}

const actions = {
  // 登录
  login({ commit }) {
    return new Promise((resolve, reject) => {
      login()
        .then((response) => {
          const { data } = response
          if (data.code !== '20000') return resolve(response)
          const { token } = data.record
          commit('SET_TOKEN', token)
          setStore('token', token)
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  // 用户信息
  setInfo({ commit }, data) {
    commit('SET_USERINFO', data)
  },
  settoken({ commit }, data) {
    commit('SET_TOKEN', data)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
