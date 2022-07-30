<template>
        <div>
        <router-view></router-view>
        </div>
</template>
    
<script setup lang='ts'>
import {useRoute} from 'vue-router'
const route=useRoute()
     onMounted(() => {
      
      })
</script>
    
<style scoped>
    div{
            width: 40vw;
            height: 80vh;
            position: absolute;
            left: 50%;
            background: rgba(255, 255, 255, 0.1);
            transform: translateX(-50%);
    }
    @media  only screen and (max-width: 600px) {
            div{
                    width: 80vw;
            }
    }
</style>