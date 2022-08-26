<script setup lang="ts">
import {a,Car} from '@/api/router.ts'
</script>

<template>
<div class="Navigation_bar">
<div ref='ON'  class=" text-2xl text-green-300 hover:text-gray-400" >QIN_KING</div>
 <div class="w-1/5 flex justify-around">
  <router-link to="/login">登录</router-link>
    <router-link to="/">100days</router-link>
  </div>
      

</div>
</template>

<style scoped>
.Navigation_bar{
position: fixed;
width: 100%;
height:8vh;
display: flex;
z-index:199;
align-items: center;
  background: radial-gradient(transparent, rgb(0, 0, 0) 3px);
    background-size: 4px 4px;
    backdrop-filter: blur(10px);
color: rgb(255,242,8);
justify-content: space-around;
}

</style>
