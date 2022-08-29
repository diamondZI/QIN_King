<template>
    <div class="w-3/4 h-2/3 absolute md:w-2/3 md:h-2/3  bg-black">
    
<lock v-if='!playVideo' ></lock>

<video  v-else ref="GG" class="full" controls>
    <source  src="../assets/可能.mp4" type="video/mp4">
   
    您的浏览器不支持 video 标签。
</video>
    </div>
</template>
<script lang="ts" setup>
import lock from '@/components/lock.vue'
import { setTimeout } from 'timers/promises';
const playVideo:boolean=ref(false);
const GG=ref(null)
function Play() {
   
 playVideo.value=true
   GG.value.play()
    

// setTimeout(() => {
//     console.log("2");
    
//      play.value=true
// }, 3000);   
    
}
provide('play',Play)

</script>
