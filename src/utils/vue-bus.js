/*
 * @Author: siwenfeng
 * @Date: 2019-11-21 10:30:26
 * @LastEditTime: 2019-11-27 10:39:50
 * @Description: this is ....
 */
const install = (Vue) => {
  const Bus = new Vue({
    methods: {
      emit(event, ...args) {
        this.$emit(event, ...args);
      },
      on(event, callback) {
        this.$on(event, callback);
      },
      off(event, callback) {
        this.$off(event, callback);
      }
    }
  })
  Vue.prototype.$bus = Bus;
}
export default install;
