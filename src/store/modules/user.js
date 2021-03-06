export default {
  state: {
    uInfo: {},
  },
  getters: {
    getuInfo(state){
      return state.uInfo
    }
  },
  mutations: {
    setUserInfo(state,uInfo){
      state.uInfo = uInfo;
    }
  },
  actions: {
    setUserInfo({commit},user){
      commit('setUserInfo',user)
    }
  }
}