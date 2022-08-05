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
        path: "free",
        component: free,
      },
      {
        path: "tree",
        component: tree,
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
export default router;
