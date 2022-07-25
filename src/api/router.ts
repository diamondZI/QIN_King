

export function a() {
    console.log(
        '1'

    );
}
export class Car { 
    // 字段 
    x:number
    y:HTMLDivElement
    // 构造函数 
    constructor(x:number,y:HTMLDivElement) { 
        this.x = x 
        this.y = y
    }  
    // 方法 
    disp():void { 
       this.x+=100
       console.log(this.x);
       console.log(this.y.style.left);
       this.y.style.left=this.x+'px'
    } 
}
export function routerPath(a:any,b:number):void{
    console.log(b);
    
a.push({name:'TWO', params:{ b } })
}
