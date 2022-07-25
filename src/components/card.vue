<template>
        <div class="card" ref="card" @mousemove="mouse()" @mousedown="mousedown()" @mouseup="mouseup(_)">
       1
        </div>
</template>
    
<script setup lang='ts'>
    import {useMouseInElement,useMousePressed,useMouse } from '@vueuse/core'
    const card=ref(null)
    const { pressed } = useMousePressed({ target: card })
    const {x,y}=useMouse(card)
     const disX=ref<number>()!;
     const disY=ref<number>()!;
     function mousedown(){
           disX.value =x.value- card.value.offsetLeft;
           disY.value =y.value- card.value.offsetTop;
           console.log(disX.value);
     }
 function mouse(){
    
if(pressed.value&&disX.value>=0){   
   card.value.style.top=y.value-disY.value+'px'
   card.value.style.left=x.value-disX.value+'px'
}
 }
 function mouseup(){
     disX.value=null
 }
   
</script>
    
<style scoped>
    .card{
        display:inline-block    ;
        position: absolute;
       border-radius: 50%;
        width: 100%;
        height: 100%;
        background-color: rgb(234,207,216,.3);
       
    }
</style>