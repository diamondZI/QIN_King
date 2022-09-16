<template>

<video ref="a" class="full"  controls>
<source src="../assets/lll.mp4" type="video/mp4">
</video>
</template>
<script lang="ts" setup>
// import { defineProps } from "vue";
const num=defineProps({
    src:{
        type:String,
        default:'../assets/可能.mp4'
    }
})

const a:HTMLVideoElement=ref(null)

onMounted(() => {
    
})




</script>
