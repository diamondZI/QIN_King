<template>
        <div  class="full flex bg-white justify-around">
          <div  class="w-1/2 bg-red-100  ">
    
            <select id="sexlist" ref='myDatalist' @change="a()">
             <option v-for="(item,index) in data" :key="index">{{item.name}}</option>
            </select>
            <div >
         <div class="li  animate__animated animate__bounce" v-if="options.classify">
            <li v-for="(time,index) in options.classify" :key="index" ref="li">           
           <input type="radio" id="dewey" name="drone" :value='tiem' @click="remove(time,index)">
            {{time}}
            </li>
            </div>
            </div>
        </div>
        <div class="w-1/3 flex flex-col  justify-around">
        <button class="bth1 w-full"> right </button>
        <button class="bth1 w-full" @click="left()"> left </button>
        </div>
        <div  class="w-1/2 bg-red-100  ">
         <li v-for="(time,index) in copydata2" :key="index" >
           <input type="radio" id="dewey" name="drone" :value='tiem' @click="remove(time)">
            {{time}}
        </li>
        </div>
        
        </div>
</template>
    
<script setup lang='ts'>
import {ref} from 'vue'
import {Car} from '@/src/api/router.ts'
const li=ref(null)
onMounted(() => {
//   const obj=new Car(x,y,li)  
console.log(li);
})
 const x:string=ref('1')
    const data=ref([{
        name:'HUAWEI',
        classify:['qwe','adf','zxc','zcc']
    },
    {
        name:'小米',
        classify:['啦','asd','zx','zcc']
    },
    {
        name:'苹果',
        classify:['撒扩大了','sdf','zxc','zcc']
    }])
    function a(){
      console.log(myDatalist.value.value);
        x.value=myDatalist.value.value
       data.value.forEach((element,index) => {
           if (x.value===element.name) {
               options.value=data.value[index]
           }
       })
    }
    function remove(e:string,i:number) {
      copydata.value.push(e)
       console.log(i);
       console.log(e);
       data.value.forEach((element,index) => {
           if (options.value.name===element.name) {
             element.classify.splice(i,1);
           }
       })
    }
    function left (){
        if(copydata.value.length){
      copydata2.value=copydata2.value.concat(copydata.value)

             copydata.value=[]
        }

    }
    const options=ref(data.value[0])
const myDatalist=ref(null)
    const copydata=ref([])
    const copydata2=ref([])
   
</script>
    
<style scoped>

</style>