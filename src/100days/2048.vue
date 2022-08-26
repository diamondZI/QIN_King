<template>
<div >
<div class=" h-96 w-30 bg-black flex justify-center items-center  lg:bg-yellow-100 rounded-lg hover:filter " >
<button ref="a" class="a w-1/3 h-10 rounded-lg  ring-2 outline-none bg-indigo-700  hover:text-blue-100 "> 基本的过渡</button>
<div class="full  bg-white " :class="{hidden:is}">
    
</div>
</div>
</div>

</template>

<script setup lang='ts'>

const a:HTMLButtonElement=ref(null)
 
 const is=ref(true)
  onMounted(() => {
  
    console.log(a.value.style);
})
 watch(a.value,(n)=>{
console.log(n);
 })
</script>

<style scoped>
.a:hover{
    width: 100%;
    height: 100%;
   font-size: 2.5rem;
}
.a{
     transition: all 1s linear;
}

</style>
