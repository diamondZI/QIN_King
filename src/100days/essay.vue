<template>
     <div class=" text-sm absolute md:w-1/2 lg:1/2"  >
      <Toolbar
        class="sm:space-x-1  "
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="height: 31.25rem; overflow-y: hidden;"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
      />
    </div>
</template>
    
<script setup lang='ts'>
   import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
const editorRef = shallowRef()

    // 内容 HTML
    const valueHtml = ref('<p>hello</p>')

    // 模拟 ajax 异步获取内容
    onMounted(() => {
        setTimeout(() => {
            valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
        }, 100000)
    })

    const toolbarConfig = {}
    const editorConfig = { placeholder: '请输入内容...' }

    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
        console.log('asdl;');
        const editor = editorRef.value
        if (editor == null) return
        editor.destroy()
    })
    function a(){
        console.log(valueHtml.value);
    }

    const handleCreated = (editor) => {
      editorRef.value = editor // 记录 editor 实例，重要！
    }
</script>
    
<style scoped>
    .essay{
        background-color: rgb(248, 241, 241);
    }
     #editor—wrapper {
    border: 1px solid #ccc;
    z-index: 100; /* 按需定义 */
  }
  #toolbar-container { border-bottom: 1px solid #ccc; }
  #editor-container { height: 500px; }
</style>