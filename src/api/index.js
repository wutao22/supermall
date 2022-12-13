// api统一管理
import requests from './request'
import mockRequests from './mockAjax'

// 三级联动接口
// /api/product/getBaseCategoryList
export const reqCategoryList = (res) => {
  return requests({
    url: '/product/getBaseCategoryList',
    method: 'get'
  })
}
export const reqGetBannerList = (res) => mockRequests.get('/banner')


export const reqFloorList = (res) => mockRequests.get('/floor')

// 获取搜索模块数据 /api/list

export const reqGetSearchInfo = (params) => requests({ url: '/list', method: "post", data: params })

// 商品详情
export const reqGoodsInfo = (skuId) => requests({url:`/item/${skuId}`, method:'get'})

// 加入购物车 /api/cart/addToCart/{ skuId }/{ skuNum }
export const reqShopCart = ({skuId,skuNum}) => requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method: "post"})

// 购物车数据
export const reqShop = () => requests({url:'/cart/cartList', method:'get'})

// 删除购物车数据
export const delShopcart = (skuId) => requests({url: `/cart/deleteCart/${skuId}`, method:'delete'})

// 修改购物车商品选中状态
export const updateChecked = (skuId,isChecked) => requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})

// 获取验证码 /api/user/passport/sendCode/phone   get
export const getCode = (phone) => requests({url:`/user/passport/sendCode/${phone}`, method:'get'})

// 注冊
export const reqRegister = (data) => requests({url:`/user/passport/register`,data,method:'post'})

// 登录
export const reqLogin = (data) => requests({url:`/user/passport/login`,data,method:'post'})

//获取用户信息 /api/user/passport/auth/getUserInfo  get
export const reqUserInfo = () => requests({url:'/user/passport/auth/getUserInfo',method:'get'})

//退出登录
export const reqLogOut = () => requests({url:'/user/passport/logout', method:'get'})

