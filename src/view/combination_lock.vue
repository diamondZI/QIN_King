<template>
    <div class="w-3/4 h-2/3 absolute md:w-2/3 md:h-2/3  bg-black">
    
   <lock v-if='!playVideo' ></lock>


<Video v-else></Video>


    </div>
</template>
<script lang="ts" setup>
const srcarry:Array=['../assets/lll.mp4','../assets/lll.mp4']
import lock from '@/components/lock.vue'
import Video from '@/components/video.vue'
const playVideo:boolean=ref(false);
const GG=ref(null)


function Play() {
    playVideo.value=true
}
provide('play',Play)

</script>
