<script setup>
import { ref, onMounted } from 'vue'

// 响应式状态
let count = ref(0)

let msg = ref("FUCK !")

let number;
number = ref(0)

// 用来修改状态、触发更新的函数
function increment() {
  count.value = count.value + 10
  msg.value = msg.value + count.value
  number.value = count.value
}

// 生命周期钩子
onMounted(() => {
  // console.log(`The initial count is ${count.value}.`)
})
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>{{ number }}</h2>
  <el-button @click="increment">Count is: {{ count }}</el-button>
  <el-button type="success">{{msg}}</el-button>
</template>

<style scoped>
button {
  font-weight: bold;
}
</style>