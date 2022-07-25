<template>
        <div>
        <router-view></router-view>
        </div>
</template>
    
<script setup lang='ts'>
import {useRoute} from 'vue-router'
const route=useRoute()
     onMounted(() => {
        console.log(route.params.b)
        console.log(route.path);
      })
</script>
    
<style scoped>
    div{
            width: 500px;
            height: 600px;
            position: absolute;
            left: 50%;
            border: 1px black solid;
            background: rgb(255, 255, 255,.2);
            transform: translateX(-50%);
    }
</style>