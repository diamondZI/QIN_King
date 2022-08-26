<template>
    <div class="flex  items-center  flex-col ">
           <input class="input1" type="text"  placeholder="让我们开始吧!🤺"  v-model="newItem" @keydown.enter="a()">
<div class="mt-3 p-3 w-64 rounded-lg text-sm  bg-indigo-200">
   <ul @click="b(index)" 
   class="mt-1  animate-spin  bg-red-300 rounded-sm shadow-lg hover:bg-red-500   hover:-translate-y-1 hover:text-red-500 "
    v-for="(i,index) in todobox" :key="index" >
      <li >{{i.context}}</li>
   </ul>
   
</div>
    </div>

</template>
<script lang="ts" setup>
    import  useStore  from "../store";
    import {storeToRefs } from 'pinia'
const {todo} = useStore();
const {todobox,newItem,addItem,deftItem}=storeToRefs(todo);
function a(){
    todo.addItem();
    console.log(todo.todobox,todo.newItem,todo.addItem);
    
}
function b(e){
    todo.deftItem(e);
}
</script>
