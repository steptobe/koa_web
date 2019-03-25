<template>
  <div class="aside">
        
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <h5>
                KOAdemo
            </h5>
            <el-submenu index="1">                
                <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
           
        </el-menu>
        
           <!-- <i class="el-icon-menu" @click="isCollapse = !isCollapse"></i> -->
        
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style style lang='scss'>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 100vh;
        height: 100%;
        background: #eef1f6;

    }
    .aside{
        display: flex;
        .el-radio-group{

        }
        .el-menu{
            border-right: none;
        }
        h5{
            background:$bgcolor;
            height: 80px;
            line-height: $hheight;
            color: #fff;
            border-right: 1px solid hsla(62,77%,76%,.3);
        }
    }
</style>
