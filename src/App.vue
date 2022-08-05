<script setup lang="ts">
import HelloWorld   from './components/HelloWorld.vue'
import  {routerPath} from '@/api/router.ts'
import {useRouter} from "vue-router";
const router=useRouter()

</script>

<template>
<div class="BOX">
<HelloWorld :msg='a' ></HelloWorld>
 <router-view  class="view" ></router-view>
 </div>
</template>

<style scoped>
.BOX{
    display: flex;
}
.view{
   
    margin-top: 3.5rem;
}
</style>
