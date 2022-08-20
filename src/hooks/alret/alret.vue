<template>
        <div class="mx-auto justify-center
         flex-col items-center
          sm:w-1/4 h-28   flex md:w-1/4 fixed inset-x-0 top-10      bg-white        z-40 " >
       <h1 class=" font-black text-red-600" @click="cleartonken()">请重新登录</h1> <br>
       <button class="bth1 w-1/2  relative" @click="ponit1.clear()">删除</button>
        </div>
</template>
    
<script setup lang='ts'>
   import {ponit1} from './alret'
      import {storeToRefs } from 'pinia'
       import { useUsersStore } from "@/store/use";
const store = useUsersStore();
   import { tonken} from '@/store/use.ts'

function cleartonken() {
      store.tonken=null 
}

</script>
    
<style scoped>

</style>