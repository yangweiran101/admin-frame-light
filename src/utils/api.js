const mode = process.env.NODE_ENV === 'production'
export const baseUrl = mode
  // ? 'https://bb001.bamboo001.com/admin' // 正式
  ? 'https://api.m.wx.bamboo001.com/admin' // 正式
  : 'https://api.m.wx.bamboo001.com/admin' // 测试
export default {
  user: {
    login: baseUrl + '/login',
    captcha: baseUrl + '/captcha',
    users: baseUrl + '/users'
  },
  upload: {
    img: baseUrl + '/uploadImage', // 图片上传
    token: baseUrl + '/qiniu/token', // 七牛上传token
    video: baseUrl + '/uploadVideo', // 视频上传
    resource: baseUrl + '/resource' // 资源保存上传
  },
  order: {
    course: baseUrl + '/lessionsOrder', // 课程订单
    active: baseUrl + '/activesOrder' // 活动订单
  },

  clearCahce: baseUrl + '/clearCahce', // 缓存

  category: baseUrl + '/category', // 分类

  schools: baseUrl + '/schools', // 学校活动地点

  course: {
    lessions: baseUrl + '/lessions', // 课题
    lessionsDetail: baseUrl + '/lessions/read', // 课题详情
    lessionsPower: baseUrl + '/lessionsPower', // 助力课题
    lessionsPowerDetail: baseUrl + '/lessionsPower/read', // 助力课题详情
    lessionList: baseUrl + '/lessionList', // 子课程
    lessionType: baseUrl + '/lessionType' // 获取课程资源类型
  },

  categorys: {
    lessionCategorys: baseUrl + '/lessionCategorys' // 课程分类列表
  }, // 分类接口

  swpier: baseUrl + '/slide', // 轮播图

  active: {
    actives: baseUrl + '/actives', // 普通活动
    activesDetail: baseUrl + '/actives/read', // 普通活动详情
    activesPower: baseUrl + '/activesPower', // 助力活动
    activesPowerDetail: baseUrl + '/activesPower/read' // 助力活动详情
  }, // 活动接口

  community: baseUrl + '/community' // 社群
}
