import {h, render} from 'vue'
import Alert from './alret.vue'
class ponit{
     a:any
     container:HTMLDivElement | undefined
    alert () {
         this.a=h(Alert)
        this.container =document.createElement('div');
        document.body.appendChild(this.container);
     
        render(this.a,this.container)
    }
  clear() {
      if(this.container){
    document.body.removeChild(this.container)
      }
    }

} 
const ponit1 =new ponit;
export {ponit1,ponit}