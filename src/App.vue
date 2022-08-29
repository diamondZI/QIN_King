<script setup lang="ts">
import HelloWorld   from './components/HelloWorld.vue'
import  {routerPath} from '@/api/router.ts'
import {useRouter} from "vue-router";
const router=useRouter()

</script>

<template>

<HelloWorld  ></HelloWorld>

 <router-view  class="view" ></router-view>

</template>

<style scoped>

.view{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

}
</style>
