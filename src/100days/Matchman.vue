<script setup lang="ts">
// import { $ref } from '@vueuse/core'
const el = ref<HTMLCanvasElement>()
const foo = ref<HTMLDivElement>(null)
const ctx = computed(() => el.value!.getContext('2d')!)
interface Point {
  x: number
  y: number
}
interface Branch {
  start: Point
  length: number
  theta: number
}
function init() {

  ctx.value.strokeStyle = '#000'
 
  step({
    start: { x: 0, y: 0 },
    length: 10,
    theta: Math.PI / 4,
  })
}
let pendingTasks: Function[] = []
function step(b: Branch, depth = 0) {
  const end = getEndPoint(b)
  drawBranch(b)
  if (depth < 4 || Math.random() < 0.5) {
    pendingTasks.push(() => step({
      start: end,
      length: b.length + (Math.random() * 2 - 1),
      theta: b.theta - 0.2 * Math.random(),
    }, depth + 1))
  }
  if (depth < 4 || Math.random() < 0.5) {
    pendingTasks.push(() => step({
      start: end,
      length: b.length + (Math.random() * 2 - 1),
      theta: b.theta + 0.2 * Math.random(),
    }, depth + 1))
  }
}
function frame() {
  const tasks: Function[] = []
  pendingTasks = pendingTasks.filter((i) => {
    if (Math.random() > 0.4) {
      tasks.push(i)
      return false
    }
    return true
  })
  tasks.forEach(fn => fn())
}
let framesCount = 0
function startFrame() {
  requestAnimationFrame(() => {
    framesCount += 1
    if (framesCount % 3 === 0)
      frame()
    startFrame()
  })
}
startFrame()
function lineTo(p1: Point, p2: Point) {
  ctx.value.beginPath()
  ctx.value.moveTo(p1.x, p1.y)
  ctx.value.lineTo(p2.x, p2.y)
  ctx.value.stroke()
}
function getEndPoint(b: Branch): Point {
  return {
    x: b.start.x + b.length * Math.cos(b.theta),
    y: b.start.y + b.length * Math.sin(b.theta),
  }
}
function drawBranch(b: Branch) {
  lineTo(b.start, getEndPoint(b))
}

onMounted(() => {
   el.value.style.width=100+'%'
        el.value.style.height=100+'%'
 
  init()
})
</script>

<template>
<div ref='foo'>
  <canvas ref="el" width="500" height="600" scale-50 origin-top-left />
</div>
</template>
<style  scoped>
canvas{
    color: black;
}
</style>