/*
 * @Author: siwenfeng
 * @Date: 2019-11-06 14:28:06
 * @LastEditTime: 2019-11-27 15:41:49
 * @Description: this is ....
 */
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user
  },
  getters
})
