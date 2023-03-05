<template>
<el-button>奥利给！</el-button>
<el-button text @click="dialogVisible = true">
  Click to open Dialog
</el-button>

<el-dialog v-model="dialogVisible" title="弹出层" width="30%" draggable>
  <style2></style2>
  <template #footer>
    <span class="dialog-footer">
      <el-button @click="dialogVisible = false">Cancel</el-button>
      <el-button type="primary" @click="dialogVisible = false">
        Confirm
      </el-button>
    </span>
  </template>

</el-dialog>
</template>

<script setup>
import { ref } from 'vue'
import style2 from './style.vue'

let dialogVisible = ref(false)
</script>

<style scoped>

</style>