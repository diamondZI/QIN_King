<template>
    <div class="w-4/5 lg:w-2/3 md:h-4/5  border-yellow-300 border-double absolute flex flex-col justify-center items-center bg-pink-200">
            
    <div v-for="(i,index) in pages" :key="index" class="LitterPage">
          <ul @click="routerPath(router,i.path)">
          <li>{{i.title}}</li>
          <li class="f">{{i.author}}</li>
          <li class="f">{{i.time}}</li>
          </ul>
    </div> 
    
<router-view></router-view>
    </div>
</template>
    
<script setup lang='ts'>
    import card from '../components/card.vue'
    import {routerPath} from '@/api/router.ts'
    import {useRouter} from 'vue-router'
     const router=useRouter()

    const pages=[{
title:'MatchMan',
time:'2022-7-26-15:54',
author:'QIN_KING',
path:'Matchman'
    },{
title:'Free',
time:'2022-7-26-15:54',
author:'QIN_KING',
path:'free'
    },
    {
title:'Tree',
time:'2022-7-28-13:12',
author:'QIN_KING',
path:'tree'
    },
     {
title:'pagination',
time:'2022-7-30-13:12',
author:'QIN_KING',
path:'pagination'
    },
     {
title:'show',
time:'2022-8-21-17:17',
author:'QIN_KING',
path:'show'
    },
     {
title:'Shuttle_box',
time:'2022-7-30-13:12',
author:'QIN_KING',
path:'Shuttle_box'
    },
     {
title:'essay',
time:'2022-8-5-15:55',
author:'QIN_KING',
path:'essay'
    },
     {
title:'2048',
time:'2022-8-5-15:55',
author:'QIN_KING',
path:'2048'
    },
     {
title:'todo',
time:'2022-8-20-16:46',
author:'QIN_KING',
path:'todo'
    },
     {
title:'NEW',
time:'2022-9-6-20:00',
author:'QIN_KING',
path:'NEW'
    },
    ]
    
</script>
    
<style scoped>
    .Page{
        color: #000;
   
    display: flex;
    flex-direction: column;
align-items: center;
        max-width: 62.5rem;
        width: 90vw;
        height: 2000px;
      z-index: 1;
    
      border: double rgb(255,242,8) .25rem;
 
    }
    .LitterPage{

          margin-top: 30px;
        position: relative;
        
    }
    ul{
        list-style: none;
        display: flex;
        cursor: pointer;
        color: #000;
transition: .3s all linear;
    }
    ul:hover{
        width: 20.5rem;
        background: rgba(255, 251, 41,.5);
    }
    ul:active{
        background: rgb(255, 255, 255,0.2);
    }
    .f{
        padding: 2px;
        color: rgb(110,231,183);
        font-size: 10px;
        margin-left: 10px;
    }
</style>