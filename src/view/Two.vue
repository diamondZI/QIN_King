<template>
        <div class=" mt-16 rounded-lg w-2/3 h-4/5 sm:w-1/3  absolute bg-gray-50   left-1/2 transform-gpu  -translate-x-1/2">
        <router-view ></router-view>
        </div>
</template>
    
<script setup lang='ts'>
import {useRoute} from 'vue-router'
const route=useRoute()
    
</script>
    
<style scoped>

  
</style>