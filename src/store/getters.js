/*
 * @Author: siwenfeng
 * @Date: 2019-11-06 17:59:54
 * @LastEditTime: 2019-11-27 15:41:40
 * @Description: this is ....
 */
const getters = {
  userInfo: state => state.user.userInfo,
  token: state => state.user.token,
  roles: state => state.user.roles,
  permission: state => state.user.permission,
  menu: state => state.user.menu,
  menuAll: state => state.user.menuAll
}
export default getters
