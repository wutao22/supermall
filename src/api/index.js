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

