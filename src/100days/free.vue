<template>

  <div ref="foo" class="p">
<canvas id="myCanvas" ref="EL" width="100" height="100" @mousemove="click()" @touchmove='click()'> </canvas>  
  </div>
</template>
    
<script setup lang='ts'>
    import {useMouseInElement,useMousePressed,useMouse, logicAnd } from '@vueuse/core'
    import { Car,KEY } from '@/api/router.ts'
      
    const EL=ref<HTMLCanvasElement>(null)
   const {elementX,elementY,x,y,elementPositionX,elementPositionY}=useMouseInElement(EL)
    const ctx = computed(() => EL.value!.getContext('2d')!)
    const foo=ref(null)
  function drwn(ctx:HTMLCanvasElement,x:number, y:number, radius:number,color:string){
      
       ctx.beginPath()
     ctx.fillStyle = color;
        ctx.arc(x, y, radius, 0, 2*Math.PI,true);
		ctx.stroke();

        
        ctx.fill();
        ctx.closePath();      
  }
  interface X_Y{
    x:number
    y:number
  }
  let i=ref(0);
  let j=ref(null);
  function ij():X_Y{
         return {
        x:Math.random() *100,
        y:Math.random() *100
        }
  }
  const color=['#FF5F5D','#3F7C85','#3F7C85','#72F2EB','#747E7E']
  function click(){
    // console.log(elementX.value-elementPositionX.value);
drwn(ctx.value,elementX.value-elementPositionX.value,elementY.value-elementPositionY.value,2,'rgb(255, 255, 255,.9)')
  }
 let framesCount=0
  function move()
   {
     const l=Math.floor(Math.random()*6);
        const a=  requestAnimationFrame(() => {
    framesCount += 1
     i.value++  
    if (framesCount % 3 === 0)
   
    drwn(ctx.value,ij().x,ij().y,1,color[l])
    move()
  })
    if(i.value>1000){
      
     cancelAnimationFrame(a)
    }
    
    // console.log();
    
  


   }
 function  init(){
         //必须的

          EL.value.style.width=100+'%'
          EL.value.style.height=100+'%'
         move()
         
 }
      
  
  onMounted(() => {
         init()
    })
   
</script>
    
<style scoped>
#myCanvas {
 position: relative;
 z-index: 100;

}
.p{
position: relative;
}
</style>