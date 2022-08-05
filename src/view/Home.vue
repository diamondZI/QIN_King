<template>
    <div class="Page">
            
            
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
    }]
    
</script>
    
<style scoped>
    .Page{
        color: #000;
         position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
align-items: center;
        max-width: 62.5rem;
        width: 90vw;
        height: 92vh;
      z-index: 1;
      background-color: #f9a647;
     
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
    }
    ul:hover{
        background: rgb(255, 255, 255,0.2);
    }
    ul:active{
        background: rgb(255, 255, 255,0.2);
    }
    .f{
        padding: 2px;
        color: rgb(255, 255, 255);
        font-size: 10px;
        margin-left: 10px;
    }
</style>