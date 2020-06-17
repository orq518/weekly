// import router from './router'
// router.beforeEach((to, from, next) => {
//   const prePath = to.path.split('/')[1] // to.path的前缀路由
//
//
//   // 检测跳转到须认证后访问的页面
//   if (['add', 'home', 'safe', 'feedback'].includes(prePath)) {
//     if (token) {
//       next()
//     } else {
//       // 未登录跳转到登录页面
//       next('/login')
//     }
//   } else {
//     next()
//   }
//   // 这个放在next前tittle会变成地址？？？
//   window.document.title = to.meta.title === undefined ? '周报' : to.meta.title
// })

