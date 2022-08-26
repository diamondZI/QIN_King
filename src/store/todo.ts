
import { identity } from 'lodash';
import { defineStore } from 'pinia'
import {reactive,ref} from 'vue'
type Item={
  id:number;
  context:string
}
// 第一个参数是应用程序中 store 的唯一 id
const useUsersStore = defineStore('todo', ()=>{
  const todobox = reactive<Item[]>([]);
  const newItem =ref("");
  const persist=true
  let i=0;
  function addItem(){
   
    todobox.push({
      id:i,
      context:newItem.value
    })  
    i++;
    newItem.value=''
  }
  function deftItem(i:number){ 
    todobox.splice(i,1);
  
  }
  return{
    
    todobox,newItem,addItem,deftItem
  }
}
  
  // 其它配置项
)  


export default useUsersStore