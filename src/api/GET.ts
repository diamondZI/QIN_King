
import axios from 'axios'

export function post(ong:string){
axios({
    method: 'post',
    url: 'https://shengapi.cn/api/qqyy.php',
    params: {
     song:'her',
     id:'1',
    },
    
  }).then((res)=>{
    console.log(res)
})

}