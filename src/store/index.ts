import useUsersStore from './use'
import useCounterStore from './todo'

// 统一导出useStore方法
 function useStore() {
  return {
    use: useUsersStore(),
    todo: useCounterStore(),
  }
}
export default useStore

