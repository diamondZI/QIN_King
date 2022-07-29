<template>
        <div class="rot" ref="rot" >
        <details v-for="item in data" :key="item.id">
       <summary>📁{{item.text}}</summary>    

        <details  class="else"       v-for="obj in item.children" :key="obj.id">
        <summary>📁{{obj.text}}</summary>
          <details       v-for="oj in obj.children" :key="oj.id">
        <summary>📁{{oj.text}}</summary>
           <p>das1</p>
        </details>
        </details>
    </details>
    
        </div>
</template>
    
<script setup lang='ts'>
    const rot=ref(null)
 const data=[{
     text:'目录1',
     id:1,
     children:[{
          text:'目录1-1',
           id:1,
           children:[{
          text:'目录1-1-1',
           id:1,
     },{
          text:'目录1-1-2',
           id:1,
     }]
     },{
          text:'目录1-2',
           id:2,
           children:[]
     }
     ]
 },
 {
     text:'目录2',
     id:1,
     children:[{
          text:'目录2-1',
           id:1,
             children:[]
     },{
          text:'目录2-2',
           id:2,
             children:[]
     }
     ]
 }]
  
</script>
    
<style scoped>
.rot{
    color: rgb(0, 0, 0);
    font-size: 2vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}
details{
    transition: .3s all linear  ;
    color: aliceblue;
}
.else{
   margin-left: 20px;
}
</style>