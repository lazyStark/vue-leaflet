import {
  setToken,
  removeToken
} from '@/utils/auth'
import {
  setStore,
  getStore,
  clearStore
} from '@/utils/store'

import {
  deepClone
} from '@/utils/util'

import {
  loginByUsername,
  getUserInfo,
  getMenu,
  getTopMenu,
  logout,
  refeshToken
} from '@/api/user'

const user = {
  state: {
    userInfo: getStore({
      name: 'userInfo'
    }) || [],
    permission: getStore({
      name: 'permission'
    }) || {},
    roles: [],
    menu: getStore({
      name: 'menu'
    }) || [],
    menuAll: [],
    token: getStore({
      name: 'token'
    }) || ''
  },
  actions: {
    // 根据用户名登录
    LoginByUsername({
      commit
    }, userInfo) {
      return new Promise((resolve, reject) => {
        loginByUsername(userInfo.tenantId, userInfo.username, userInfo.password, userInfo.type).then(res => {
          const data = res.data.data;
          commit('SET_TOKEN', data.access_token);
          commit('SET_USERIFNO', data);
          resolve();
        }).catch(error => {
          reject(error);
        })
      })
    },
    GetUserInfo({
      commit
    }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then((res) => {
          const data = res.data.data;
          commit('SET_ROLES', data.roles);
          resolve(data);
        }).catch(err => {
          reject(err);
        })
      })
    },
    // 刷新token
    RefeshToken({
      state,
      commit
    }) {
      return new Promise((resolve, reject) => {
        refeshToken(state.refeshToken).then(res => {
          const data = res.data.data;
          commit('SET_TOKEN', data);
          resolve(data);
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 登出
    LogOut({
      commit
    }) {
      return new Promise((resolve, reject) => {
        logout().then(() => {
          commit('SET_TOKEN', '')
          commit('SET_MENU', [])
          commit('SET_ROLES', [])
          removeToken()
          clearStore({ type: 'session' })
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 注销session
    FedLogOut({
      commit
    }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_MENU', [])
        commit('SET_ROLES', [])
        removeToken()
        resolve()
      })
    },
    GetTopMenu() {
      return new Promise(resolve => {
        getTopMenu().then((res) => {
          const data = res.data.data || []
          resolve(data)
        })
      })
    },
    // 获取系统菜单
    GetMenu({
      commit
    }, parentId) {
      return new Promise(resolve => {
        getMenu(parentId).then((res) => {
          const data = res.data.data
          let menu = deepClone(data);
          commit('SET_MENU', menu)
          resolve(menu)
        })
      })
    }
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      setToken(token)
      state.token = token;
      setStore({
        name: 'token',
        content: state.token,
        type: 'session'
      })
    },
    SET_USERIFNO: (state, userInfo) => {
      state.userInfo = userInfo;
      setStore({
        name: 'userInfo',
        content: state.userInfo
      })
    },
    SET_MENU: (state, menu) => {
      state.menu = menu
      setStore({
        name: 'menu',
        content: state.menu,
        type: 'session'
      })
    },
    SET_MENU_ALL: (state, menuAll) => {
      state.menuAll = menuAll;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_PERMISSION: (state, permission) => {
      let result = [];

      function getCode(list) {
        list.forEach(ele => {
          if (typeof (ele) === 'object') {
            const chiildren = ele.children;
            const code = ele.code;
            if (chiildren) {
              getCode(chiildren)
            } else {
              result.push(code);
            }
          }
        })
      }
      getCode(permission);
      state.permission = {};
      result.forEach(ele => {
        state.permission[ele] = true;
      });
      setStore({
        name: 'permission',
        content: state.permission,
        type: 'session'
      })
    }
  }

}
export default user
