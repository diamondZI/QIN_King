
import axios from 'axios'
import { Url } from 'url';
function fun() {
  console.log('错误');  
}
export  async function getWord(ur:any,fun1:Function,fun2:Function=fun) {
    const url=ur
  try {
      const data = await axios.get(url)
      // img.value = data
      fun1(data)
      console.log(data)
  } catch (err) {
      // count.value = false
      // fun2(err)
      console.log(err);
  }
}
