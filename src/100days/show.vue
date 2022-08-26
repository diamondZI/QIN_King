<template>
    <div  class="full ">
<div  :class="{full:f,'a':true}" @click="f=!f" style="background-image:url('https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')">
<h3>群攻</h3>
</div>       
<div style="background-image:url('https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')">
<h3>群攻</h3>
</div>       
<div style="background-image:url(https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')">
<h3>群攻</h3>
</div>       
<div style="background-image:url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')">
<h3>群攻</h3>
</div>       

   <!--  -->
   <!--  -->
  <!--  -->
  <!--  -->
    </div>
</template>
<script setup lang="ts">
    const a=ref(0)
    const f=ref(1)
</script>
<style  scoped>
    .a{
      transition:all 2s linear ;
    }
   
   
</style>