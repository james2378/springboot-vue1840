import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import yuangong from '@/views/modules/yuangong/list'
    import zichancaigou from '@/views/modules/zichancaigou/list'
    import zichandiaobo from '@/views/modules/zichandiaobo/list'
    import gudingzichan from '@/views/modules/gudingzichan/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import lingyongxinxi from '@/views/modules/lingyongxinxi/list'
    import zichanpandian from '@/views/modules/zichanpandian/list'
    import zichanweixiu from '@/views/modules/zichanweixiu/list'
    import jieyongxinxi from '@/views/modules/jieyongxinxi/list'
    import zichanbaofei from '@/views/modules/zichanbaofei/list'
    import caigou from '@/views/modules/caigou/list'
    import zichanfenlei from '@/views/modules/zichanfenlei/list'
    import zichanruku from '@/views/modules/zichanruku/list'
    import zichanbaoxiu from '@/views/modules/zichanbaoxiu/list'
    import zichanweihu from '@/views/modules/zichanweihu/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/yuangong',
        name: '员工',
        component: yuangong
      }
      ,{
	path: '/zichancaigou',
        name: '资产采购',
        component: zichancaigou
      }
      ,{
	path: '/zichandiaobo',
        name: '资产调拨',
        component: zichandiaobo
      }
      ,{
	path: '/gudingzichan',
        name: '固定资产',
        component: gudingzichan
      }
      ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
      ,{
	path: '/lingyongxinxi',
        name: '领用信息',
        component: lingyongxinxi
      }
      ,{
	path: '/zichanpandian',
        name: '资产盘点',
        component: zichanpandian
      }
      ,{
	path: '/zichanweixiu',
        name: '资产维修',
        component: zichanweixiu
      }
      ,{
	path: '/jieyongxinxi',
        name: '借用信息',
        component: jieyongxinxi
      }
      ,{
	path: '/zichanbaofei',
        name: '资产报废',
        component: zichanbaofei
      }
      ,{
	path: '/caigou',
        name: '采购',
        component: caigou
      }
      ,{
	path: '/zichanfenlei',
        name: '资产分类',
        component: zichanfenlei
      }
      ,{
	path: '/zichanruku',
        name: '资产入库',
        component: zichanruku
      }
      ,{
	path: '/zichanbaoxiu',
        name: '资产报修',
        component: zichanbaoxiu
      }
      ,{
	path: '/zichanweihu',
        name: '资产维护',
        component: zichanweihu
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '系统首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
