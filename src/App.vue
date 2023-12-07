<template>
  <div class="body">
    <div class="header">
      <div class="header-left"><p></p></div>
      <div class="header-right"></div>
    </div>
    <div class="bottom" id="bottom">
      <div class="body-left">
        <el-row class="tac">
          <el-menu
              active-text-color="#ffd04b"
              background-color="#545c64"
              class="el-menu-vertical-demo"
              default-active="2"
              text-color="#fff"
              @open="handleOpen"
              @close="handleClose"
              @select="handleSelect"
          >
            <el-sub-menu index="1" style="width: 200px">
              <template #title>
                <el-icon>
                  <location/>
                </el-icon>
                <span>日志监控</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="elb">Elb</el-menu-item>
                <el-menu-item index="esip">Esip</el-menu-item>
                <el-menu-item index="mif">Mif</el-menu-item>
                <el-menu-item index="scmd">Scmd</el-menu-item>
                <el-menu-item index="vmsip">Vmsip</el-menu-item>
                <el-menu-item index="ivps">Ivps</el-menu-item>
                <el-menu-item index="rtds">Rtds</el-menu-item>
                <el-menu-item index="isftp">Isftp</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        </el-row>
      </div>
      <div class="body-right">
<!--        <router-view ></router-view>-->

        <component :is="com"></component>

      </div>
    </div>

  </div>
</template>


<script lang="ts"  >
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import {getCurrentInstance, onMounted, ref} from "vue";

import esip from "../src/components/esip/esip.vue"
import elb from "../src/components/elb/elb.vue"
import mif from "../src/components/mif/mif.vue"
import scmd from "../src/components/scmd/scmd.vue"
import lsam from "../src/components/lsam/lsam.vue"
import vmsip from "../src/components/vmsip/vmsip.vue"
import ivps from "../src/components/ivps/ivps.vue"
import rtds from "../src/components/rtds/rtds.vue"
import isftp from "../src/components/isftp/isftp.vue"


export default {
  name : "App",
  components : {
    esip,elb,mif,scmd,lsam,vmsip,ivps,rtds,isftp
  },
  setup() {
    let com : any = ref();

    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }
    const handleClose = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
    }

    /**
     * 再选择后进行路由的跳转,(对应的路由规则已经匹配完成)
     * @param data
     */
    const handleSelect = (data : any) : void => {
      com.value = data;
      let url = location.href;
      let index = url.lastIndexOf("/");
      history.replaceState(null, "",url.substring(0,index) + "/" + data);
    }


    return {
      com,handleSelect,handleClose,handleOpen
    }

  }

}




</script>

<style src="../src/components/index.css"></style>