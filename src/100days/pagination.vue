<template>
<div class="box">
<div class="pages">

</div>
<div class="number" >
<li @click="app()"> ⬅️ </li>
 <li v-for="(i,index) in ALL" :key="index" @click="po(i)" :class="{active:i===INDEX}">{{i}}</li>  
<li @click="add()"> ➡️</li>
</div>
<button @click="ALL++">添加</button>
</div>
</template>
    
<script setup lang='ts'>
function po(i):void {
    INDEX.value=i
   
}
let ALL:number=ref(10)
function add():void {
    if(INDEX.value<ALL.value){
        INDEX.value++
         
    }else{
        alert('都最后了')
    }
   
}
function app():void {
   if(INDEX.value>1){
        INDEX.value--
    }else{
        alert('这是第一页了')
    }
}
    const INDEX =ref(1)
    // const is:boolean =ref(INDEX.value===index)
</script>
    
<style scoped>
.box{
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-between;
}
    .pages{
        width: 80%;
        height: 90%;
        background-color: #fff;
        transition: .3s all linear;
    }
    .number{
        display: flex;
        width: 100%;
        height: 5%;
        background-color: rgb(252, 247, 247,.2);
        text-align: center;
    }
    li{
        list-style: none;
        flex:1;
    }
    li:hover, li:active{
        color: antiquewhite;
    }
     .active{
        color: antiquewhite;
    }
</style>