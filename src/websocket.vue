<template>
<el-button @click="send()">Websocket发送消息</el-button>
<el-button @click="stop()">Websocket断开连接</el-button>
</template>

<script setup>
//创建websocket
var socket = new WebSocket('ws://127.0.0.1:8000/room/')
console.log("websocket连接成功！")

//定义收到服务器消息之后如何处理
socket.onmessage = function(message){
  console.log(message.data)
}

socket.onclose = function(evt) {
  console.log("Websocket连接已经关闭！");
};

// setTimeout(function(){
//   socket.send('你好')
// }, 1000)

function send(){
  socket.send('奥利给！')
}

function stop(){
  socket.close()
}
</script>

<style scoped>
</style>