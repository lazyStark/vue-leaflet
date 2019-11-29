/*
 * @Author: siwenfeng
 * @Date: 2019-11-28 17:31:27
 * @LastEditTime: 2019-11-29 10:05:08
 * @Description: this is ....
 */
import request from '@/utils/request';

export const findPollutionType = (type) => {
  console.log(type)
  return request({
    url: '/poll/type',
    method: 'post',
    data: {
      type
    }
  });
}
