/*
 * @Author: siwenfeng
 * @Date: 2019-11-06 16:34:27
 * @LastEditTime: 2019-11-28 17:34:25
 * @Description: this is ....
 */
import user from './user';
import menu from './menu';
import login from './login';
import pollution from './pollution';

/**
 * 模拟数据mock
 *
 * mock是否开启模拟数据拦截
 */
user({ mock: false });

menu({ mock: true });

login({ mock: true });

pollution({ mock: true });
