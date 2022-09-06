<template>
    <div v-if='f'  class=" relative full bg-indigo-50 text-center pt-auto justify-center flex items-center ">
   <man class="full">1</man>
    <div class="flex  z-20 rounded-lg flex-col w-1/2 h-1/2 justify-center items-center bg-red-100">
          <input type="password" v-model="message" class="input1">
          <button class="bth1 mt-1" @click="a()">点我{{name}}</button>
    </div>    
    <man class="full"></man>
    </div>
</template>


<script setup lang="ts">
import man from '@/100days/Matchman.vue'

import {alret} from '@/hooks/alret/alret'
const message:string=ref('');
const LOVE:string=ref('qinzihao123')
const f:boolean=ref(true)
    const play:Function = inject('play')    
function a(){
   
    if (message.value===LOVE.value) {
       
        play();
    }else{
        alert("密码不对哦")
    }
}
</script>

