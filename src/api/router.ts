export class Car { 
    // 字段 
    x:number
    y:number
    div:HTMLDivElement
    // 构造函数 
    constructor(x:number,y:number,div:HTMLDivElement) { 
        this.x = x 
        this.y = y
        this.div = div
    } 
    dowm(){
            this.div.style.content='move'
    } 
    move(){
        
    
                this.div.style.left = x + 7 + 'px';
                this.div.style.top = y - 5 + 'px';
    
   } 
}
//自定义按键控制
export  function KEY(obj:any){
    window.addEventListener("keydown", function(e) {
           switch (e.key) {
                   case 'ArrowUp':
                           obj.top()
                           break;
           
                   case 'ArrowDown':
                           obj.down()
                           break;
           
                   case 'ArrowRight':
                           obj.right()
                           break;
           
                   case 'ArrowLeft':
                           obj.left()
                           break;
           
                   default:
                           break;
           }
})
}

export function routerPath(a:any,b:number):void{
a.push(`/TWO/${b}`)
}
