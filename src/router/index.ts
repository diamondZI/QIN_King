import { createRouter, createWebHashHistory } from "vue-router";
import home from "../view/Home.vue";
import TWO from "../view/Two.vue";
import Matchman from "../100days/Matchman.vue";
import free from "../100days/free.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: home,
    
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
        path: "free",
        component: free,
      },
    ]
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
export default router;
