/*
 * @Author: siwenfeng
 * @Date: 2019-11-07 16:13:58
 * @LastEditTime: 2019-11-07 16:45:51
 * @Description: this is ....
 */
import Mock from 'mockjs'
const auth = {
  "tenant_id": "000000",
  "account": "admin",
  "user_name": "admin",
  "nick_name": "管理员",
  "role_name": "administrator",
  "avatar": "https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",
  "access_token": "eyJ0eXAiOiJKc29uV2ViVG9rZW4iLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJpc3N1c2VyIiwiYXVkIjoiYXVkaWVuY2UiLCJ0ZW5hbnRfaWQiOiIwMDAwMDAiLCJyb2xlX25hbWUiOiJhZG1pbmlzdHJhdG9yIiwidXNlcl9pZCI6IjExMjM1OTg4MjE3Mzg2NzUyMDEiLCJyb2xlX2lkIjoiMTEyMzU5ODgxNjczODY3NTIwMSIsInVzZXJfbmFtZSI6ImFkbWluIiwibmlja19uYW1lIjoi566h55CG5ZGYIiwidG9rZW5fdHlwZSI6ImFjY2Vzc190b2tlbiIsImRlcHRfaWQiOiIxMTIzNTk4ODEzNzM4Njc1MjAxIiwiYWNjb3VudCI6ImFkbWluIiwiY2xpZW50X2lkIjoic2FiZXIiLCJleHAiOjE1NzMxMTc5NTYsIm5iZiI6MTU3MzExNDM1Nn0.3zV6EjruKUXjmpc3rQaTpSp-_hhhHbHCGR-qfPo4NB8",
  "refresh_token": "eyJ0eXAiOiJKc29uV2ViVG9rZW4iLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJpc3N1c2VyIiwiYXVkIjoiYXVkaWVuY2UiLCJ1c2VyX2lkIjoiMTEyMzU5ODgyMTczODY3NTIwMSIsInRva2VuX3R5cGUiOiJyZWZyZXNoX3Rva2VuIiwiY2xpZW50X2lkIjoic2FiZXIiLCJleHAiOjE1NzM3MTkxNTYsIm5iZiI6MTU3MzExNDM1Nn0.VebOWjfmF30Kn1fpyr9q-UBFFiF6SO3skYUX96K2aL8",
  "token_type": "bearer",
  "expires_in": 3600,
  "license": "powered by bladex"
};
export default ({ mock }) => {
  if (!mock) return;
  Mock.mock(RegExp('/api/blade-auth/token'), 'post', () => {
    console.log('/*mock拦截成功,返回用户信息!*/')
    return {
      data: auth
    }
  })
}
