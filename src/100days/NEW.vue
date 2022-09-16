<template>
    <div class=' bg-clip-content  full bg-no-repeat bg-cover bg-center' @click="get">
        <div class=" z-40 fixed full">
         <h1>作者:{{user.author}}</h1>
         <h2>id:{{user.id}}</h2>
        </div>
        <img class="full"  ref='div' src="../assets/yi.jpg" alt="">
   
    </div>
    
</template>
<script setup lang="ts">
import axios from 'axios'
import {getWord} from '../api/GET'
import { useActiveElement } from '@vueuse/core'
const activeElement = useActiveElement()
const div:HTMLImageElement=ref(null)
const  user=ref({});
function get(){
getWord('https://img.paulzzh.com/touhou/random?type=json&tag=mokou',function(data){
  user.value=data.data
//  console.log(user.value.author); 
 div.value.src=`${user.value.preview}`;
})
}


watch(activeElement, (el) => {
  console.log('focus changed to', el)
  el.style.display='none'
}) 
onMounted(() => {
  get()
})

</script>
<style  scoped>
  .a{
height: 40%;
  }
</style>
