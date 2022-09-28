<template>

    <div  class="full  bg-indigo-300 relative" ref="card"  >
    {{yyyy.a}}
    </div>
</template>
    
<script setup lang='ts'>

const card=ref(null);

const yyyy = defineProps({
a:Number
})


</script>
    
<style scoped>
   
</style>
