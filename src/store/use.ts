import { defineStore } from 'pinia'

// 第一个参数是应用程序中 store 的唯一 id
export const useUsersStore = defineStore('users', {
  persist: true,
  state: () => ({ count : 0 ,
    tonken:null
  }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
  
  // 其它配置项
})  

export default useUsersStore