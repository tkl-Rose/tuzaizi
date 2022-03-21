import ajax from './ajax'
import mockAjax from './mockAjax'






// 发送请求获取导航图中的数据
export const reqBannerListData = () => mockAjax.get('/banner')
//获取三级分类导航数据
export const reqCategoryListData = () => ajax.get("/product/getBaseCategoryList")