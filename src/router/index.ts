import { createRouter, createWebHashHistory } from "vue-router";
import home from "@/view/Home.vue";
import login from "@/view/login.vue";
import TWO from "@/view/Two.vue";
import Matchman from "@/100days/Matchman.vue";
import free from "@/100days/free.vue";
import tree from "@/100days/tree.vue";
import pagination from "@/100days/pagination.vue";
import Shuttle_box from "@/100days/Shuttle_box.vue";
import essay from "@/100days/essay.vue";
import T2048 from "@/100days/2048.vue";
import todo from "@/100days/todolist.vue";
import show from "@/100days/show.vue";
const routes = [
  {
   
    path: "/",
    name: "home",
    component: home,
  },
  {
    
    path: "/login",
    name: "login",
    component: login,
  },
  
  {
    path: "/TWO",
    name: "TWO",
    component: TWO,
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
    ]
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
import  useStore  from "../store"
import {ponit1} from '../hooks/alret/alret'
import {storeToRefs} from 'pinia'
router.beforeEach((to) => {
  const {use} = useStore();
  const {tonken}=use
  
  if (
    // 检查用户是否已登录
    !tonken &&
    // ❗️ 避免无限重定向
    to.name !== 'login'
  ) {
   
    ponit1.alert()
    // 将用户重定向到登录页面
    return { name: 'login' }
  }
})
export default router;
