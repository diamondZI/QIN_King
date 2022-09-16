<template>

  <div ref="foo" class="relative w-full h-full">
  <div class="box" v-if="style">
  颜色<input type="color" @change="a(true,co)" ref="co">
  大小 <input type="number" ref="nu" @change="a(false,nu)">
  </div>
  <div class="prompt" v-else @click="style=!style">🖊🎗️</div>
<canvas  @click="style=false"  id="myCanvas" ref="EL" width="100" height="100" @mousedown="IQIS(true)"  @touchmove='touhclick()' @mousemove="click(size,Color)" @mouseup="IQIS(false)"> </canvas>  
  </div>
</template>
    
<script setup lang='ts'>
    import {useMouseInElement,useMousePressed,useMouse, logicAnd } from '@vueuse/core'
    import { Car,KEY } from '@/api/router.ts'
import { match } from 'assert'
      
    const EL=ref<HTMLCanvasElement>(null)
   const {elementX,elementY,x,y,elementPositionX,elementPositionY,elementHeight,elementWidth}=useMouseInElement(EL)
    const ctx = computed(() => EL.value!.getContext('2d')!)
    const foo=ref(null)
    const co=ref(null)
    const nu=ref(null)
    
    function a(po:boolean,e:HTMLInputElement){
      console.log(e);
    if(po){
      Color.value=e.value
    }else{
      size.value=e.value
    }
}
  function drwn(ctx:HTMLCanvasElement,x:number, y:number, radius:number,color:string){
      
       ctx.beginPath()
     ctx.fillStyle = color;
        ctx.arc(x, y, radius, 0, 2*Math.PI,true);
		ctx.stroke();

        
        ctx.fill();
        ctx.closePath();      
  }
  function IQIS(bol){
    IQ.value=bol
    click(size.value,Color.value)
  }
  interface X_Y{
    x:number
    y:number
  }
  const style:boolean=ref(false)
  let i=ref(0);
  const IQ:boolean=ref(0);
const size:number=ref(0.1)
const Color:string=ref('red')

  function ij():X_Y{
         return {
        x:Math.random() *100,
        y:Math.random() *100
        }
  }
  const color=['#FF5F5D','#3F7C85','#3F7C85','#72F2EB','#747E7E']
   const  click= function (Size=0.2,color='red'){
           console.log(IQ.value);
     if(IQ.value){
 
        const ratioy= (EL.value.offsetTop+elementHeight.value)/100
        const ratiox=(EL.value.offsetLeft+elementWidth.value)/100
        
        drwn(ctx.value,(x.value-elementPositionX.value)/ratiox,(y.value-elementPositionY.value)/ratioy,Size,color)
      }else{
        return 
      }
   }
    const  touhclick= function (Size=0.2,color='red'){
 
        const ratioy= (EL.value.offsetTop+elementHeight.value)/100
        const ratiox=(EL.value.offsetLeft+elementWidth.value)/100
        
        drwn(ctx.value,(x.value-elementPositionX.value)/ratiox,(y.value-elementPositionY.value)/ratioy,Size,color)
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
   }
 function  init(){
          EL.value.style.width=100+'%'
          EL.value.style.height=100+'%'
         move()
         
         
 }
      
  
  onMounted(() => {
         init()
    })
   
</script>
    
<style scoped>
.box{
  background-color: #f9a647;
  position:fixed;
  width: 100px;
  height: 100px;
 align-items: center;
 justify-content: space-around;
  display: flex;
  flex-direction: column;
}
input{
  width: 90%;

}
.p{
  position:absolute;
}
.prompt{
position: fixed;
}

</style>