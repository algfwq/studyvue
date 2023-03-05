<template>
<el-button @click="ajax()">AJAX</el-button>
</template>

<script setup>
import {ref} from "vue"
import axios  from "axios"

function ajax(){
  axios({
    url: '/',
    method: 'post',
    responseType: 'json', // 默认的
    data: {"aa":"hh"}
    }).then(function (response) {
      console.log(response);
      console.log(response.data);
      console.log(response.data["into"]);
    }).catch(function (error) {
      console.log(error);
  })
}

</script>

<style scoped>
</style>