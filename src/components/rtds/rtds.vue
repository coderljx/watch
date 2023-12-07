<!--eslint-disable -->
<template>
  <div>
<!--   eslint-disable -->
    <tables :tableData="tableData" @click="seeEadit"></tables>

    <el-dialog v-model="dialogTableVisible" title="文件内容">
      <pre style="font-family: 'Droid Sans';overflow: auto;">{{fileContent.context}}</pre>
    </el-dialog>

  </div>
</template>


<script lang="ts" setup>
/*eslint-disable */
import {Rtds} from "./rtds"
import tables from "@/components/tables.vue"
import {onMounted, ref,onUnmounted} from "vue"

const esipInstance = new Rtds();
let tableData = ref([]);
let dialogTableVisible = ref(false);
let fileContent = ref({});

onMounted(() => {
  esipInstance.loadEsip().then(data => {
    tableData.value = data.data.data;
  })
})

const seeEadit = (data : any) => {
  dialogTableVisible.value = true;
  const ip = data.ip.substring(11);
  esipInstance.getFileContent(ip,data.name).then(res => {
    fileContent.value = res.data.data;
  });
}




/* eslint-enable */
</script>

<style src="./rtds.css"></style>