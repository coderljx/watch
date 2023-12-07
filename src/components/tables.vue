<template>
  <div style="width: 95%;margin: 10px auto;">
    <el-table :data="tableData" border style="width: 100%" :height="tableHeight">
      <el-table-column prop="ip" label="IP" width="180"/>
      <el-table-column prop="date" label="时间" width="180"/>
      <el-table-column prop="data" label="文件大小" width="180" sortable />
      <el-table-column prop="name" label="文件名"/>

      <el-table-column label="操作" width="120">
        <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">详情</el-button>
        </template>
      </el-table-column>

    </el-table>
  </div>
</template>

<script lang="ts" setup>
import {defineProps, onMounted, onUpdated,defineEmits,onUnmounted} from "vue";


let tableHeight;
onMounted(() => {
  let elementData = document.getElementById("bottom") as HTMLElement;
  tableHeight = elementData.offsetHeight - 40;
})

const emit = defineEmits(["click"]);


const props = defineProps({
  tableData: {
    type: Array,
  },
});
const handleEdit = (index: number, row: any) => {
  emit("click",row);
}


</script>

<style scoped>

</style>