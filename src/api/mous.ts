export class mouse{
    div:HTMLDivElement
    constructor(div:HTMLDivElement) {   
            this.div = div;
    }
  fun(){
    console.log(this.div);
    
  }
  //定义获取鼠标x轴,y轴偏移值
  Getpage(event:any) {
    console.log(event);
    console.log(this.div);
    // let mouseX = event.pageX;
    // let mouseY = event.pageY;
    // this.div.style.top = mouseY + "px";
    // this.div.style.left = mouseX + "px";
  }

 
}

 //dom挂载完毕执行方法
