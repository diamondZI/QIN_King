import {createRouter, createWebHashHistory ,RouteRecordRaw } from "vue-router";

const home = () => import("@/view/Home.vue")
const login = () => import("@/view/login.vue")
const combination_lock = () => import("@/view/combination_lock.vue")
const Two = () => import("@/view/Two.vue")
const NotFound = () => import("@/view/NotFound.vue")
const free = () => import("@/100days/free.vue")
const tree = () => import("@/100days/tree.vue")
const pagination = () => import("@/100days/pagination.vue")
const Shuttle_box = () => import("@/100days/Shuttle_box.vue")
const T2048 = () => import("@/100days/2048.vue")
const essay = () => import("@/100days/essay.vue")
const Matchman = () => import("@/100days/Matchman.vue")
const todo = () => import("@/100days/todolist.vue")
const NEW = () => import("@/100days/NEW.vue")
const show = () => import("@/100days/show.vue")


const routes:Array<RouteRecordRaw> = [
  {
   
    path: "/",
    name: "home",
    component: home,
    alias: '/home'
  },
  {
   
    path: "/combination_lock",
    name: "combination_lock",
    component: combination_lock,
  },
  {
    
    path: "/login",
    name: "login",
    component: login,
  },
  
  {
    path: "/TWO",
    name: "TWO",
    component: Two,
    children: [
     
      {
        path: "Matchman",
        component: Matchman,
      },
      {
        path: "Shuttle_box",
        component: Shuttle_box,
      },
      {
        path: "todo",
        component: todo,
      },
      {
        path: "show",
        component: show,
      },
      {
        path: "free",
        component: free,
      },
      {
        path: "tree",
        component: tree,
      },
      {
        path: "2048",
        component: T2048,
      },
      {
        path: "pagination",
        component: pagination,
      },
      {
        path: "essay",
        component: essay,
      },
      {
        path: "NEW",
        component: NEW,
      },
    ]
  },
  // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];



const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
import  useStore  from "../store"
import {ponit1} from '../hooks/alret/alret'

router.beforeEach((to) => {
  console.log(router.currentRoute.value.path);
   
  const {use} = useStore();
  const {tonken}=use
 if (
    // 检查用户是否已登录
    !tonken &&
    // ❗️ 避免无限重定向
    to.name !== 'login'
  ) {
    // ponit1.alert()
    // 将用户重定向到登录页面
  
    return { name: 'login' }
  }
})
export default router;
