<template>
    <div v-if='f'  class=" relative full bg-indigo-50 text-center pt-auto justify-center flex items-center ">
    <div class="flex rounded-lg flex-col w-1/2 h-1/2 justify-center items-center bg-red-100">
          <input type="password" v-model="message" class="input1">
          <button class="bth1 mt-1" @click="a()">点我{{name}}</button>
      </div>    
    </div>
</template>


<script setup lang="ts">
import {alret} from '@/hooks/alret/alret'
const message:string=ref('');
const LOVE:string=ref('qinzihao123')
const f:boolean=ref(true)
    const play = inject('play')

    
function a(){
   
    if (message.value===LOVE.value) {
       
        play();
    }else{
        alert("密码不对哦")
    }
}
</script>

