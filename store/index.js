/*
 * @Author: 王精华
 * @Date: 2020-10-26 09:27:07
 * @LastEditTime: 2020-10-26 15:41:24
 * @LastEditors: 王精华
 * @Description: 
 */
export const state = () => {
  return {
    token: ''
  }
}

export const mutations = {
  // 设置token
  SETTOKEN (state, token) {
    state.token = token
  }
}

export const getters = {
}

export const actions = {
  // nuxtServerInit(a, { route }) {
  // }
}
