<template>
  <div class='w-full  h-4/5   border-yellow-300 border-double absolute flex flex-col sm:flex-row bg-pink-300'>
      <div class=" flex   w-full bg-blue-400 h-36 md:w-1/6 sm:h-full sm:mr-1 sm:flex-col  overflow-x-auto">
         <div v-for="(i,index) in 15"  :key='index' class=" flex-none w-36 h-full bg-indigo-300 ml-1 flex-1 sm:h-16 sm:m-1 ">{{index}}</div>
      </div>
      <div class="w-full h-full bg-feel h-16   sm:h-full ">
   
      
      </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>


</style>