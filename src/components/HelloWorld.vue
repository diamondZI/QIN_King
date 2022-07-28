<script setup lang="ts">
import {a,Car} from '@/api/router.ts'
const count =ref(9)
const ON=ref(null)
const obj=ref(null)
onMounted(() => {
    console.log(ON.value);
    
      obj.value=new Car(0,ON.value)
      
})
function K() {
    // obj.disp()
    console.log(ON.value.style.left)
    
}
// const a:number =ref(obj.x)


defineProps<{ msg: Function }>()
</script>
<!-- / -->
<template>
<div class="Navigation_bar">
<div ref='ON'>秦子豪</div>
 <div
    style="
      display: flex;
      justify-content: space-between;
      width: 240px;
      margin: 0 auto;
    "
  >
    <router-link to="/">100days</router-link>
  </div>
      

</div>
</template>

<style scoped>
.Navigation_bar{
position: fixed;
width: 100%;
height:8vh;
z-index: 10000;
display: flex;
align-items: center;

}
div{
    transition: .3s all ;
    position:relative;

}
</style>
