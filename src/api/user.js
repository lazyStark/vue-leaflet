/*
 * @Author: siwenfeng
 * @Date: 2019-11-26 10:17:22
 * @LastEditTime: 2019-11-26 10:18:10
 * @Description: this is ....
 */
import request from '@/utils/request';
import { baseUrl } from '@/config/env';

export const loginByUsername = (tenantId, account, password, type) => request({
  url: '/api/blade-auth/token',
  method: 'post',
  params: {
    tenantId,
    account,
    password,
    type
  }
})

export const getButtons = () => request({
  url: '/api/blade-system/menu/buttons',
  method: 'get'
});

export const getUserInfo = () => request({
  url: baseUrl + '/user/getUserInfo',
  method: 'get'
});

export const refeshToken = () => request({
  url: baseUrl + '/user/refesh',
  method: 'post'
})

export const getMenu = () => request({
  url: '/api/blade-system/menu/routes',
  method: 'get'
});

export const getTopMenu = () => request({
  url: baseUrl + '/user/getTopMenu',
  method: 'get'
});

export const sendLogs = (list) => request({
  url: baseUrl + '/user/logout',
  method: 'post',
  data: list
})

export const logout = () => request({
  url: baseUrl + '/user/logout',
  method: 'get'
})
