<template>
    <div class="Page">
    <div v-for="i in 10" :key="i" class="LitterPage">
    <card></card>
 <router-link to='/TWO/Matchman'>走</router-link>
    </div> 
    1
<router-view></router-view>
    </div>
</template>
    
<script setup lang='ts'>
    import card from '../components/card.vue'
</script>
    
<style scoped>
    .Page{
         position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
        max-width: 62.5rem;
        width: 1000px;
        height: 1000px;
      z-index: 1;
    }
    .LitterPage{
         min-width: 6.25rem;
        min-height: 6.25rem;
        max-width: 100%;
        max-height: 100%;   
         width: 12rem;
         height: 12rem;
        position: relative;
        border-radius: 50%;
    }
</style>