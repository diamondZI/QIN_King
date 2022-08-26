<template>
        <div class=" w-11/12  mt-16 mx-auto sm:w-3/4 md:w-2/4 fixed inset-x-0 top-10 border-double border-4 border-light-blue-500 ">
        <div> 
        </div>
        <div>
        <form class=" flex  items-center py-32 justify-center flex-col text-blue-500">
       账号 <input type="text" name="" id="use" class="input1">
密码
        <input type="password" name="" id="password" class="input1" >
        <input @click="gettonken()" type="submit" value="登录" class="bth1  mt-1 ">
        </form>
        </div>
        </div>
</template>
    
<script setup lang='ts'>
    import  useStore  from "../store";
    import {storeToRefs } from 'pinia'
const {use} = useStore();
const {tonken}=storeToRefs(use)


function gettonken(){
use.tonken='1001011'
// setTimeout(()=>{
//     store.tonken=null
//     console.log(tonken);
// },10000)
}

</script>
    
<style scoped>
 .login{
     position: absolute;
     left: 50%;
     top: 50%;
     transform: translate(-50%,-50%);
     width: 40.75vw;
     height:30.75vw;
     
 }
</style>