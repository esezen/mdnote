<template>
    <!-- <div class="navbar" @mouseenter="isCollapse = false" @mouseleave="isCollapse = true"> -->
    <div class="navbar">
        <el-menu class="el-menu-vertical" :router="true" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-share"></i>
                    <span slot="title">Classes</span>
                </template>
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
                <el-menu-item index="1-3">item three</el-menu-item>
            </el-submenu>
            <el-menu-item route="settings" index="2">
                <i class="el-icon-setting"></i>
                <span slot="title">Settings</span>
            </el-menu-item>

        </el-menu>
    </div>
</template>

<style>
.el-menu-vertical {
  height: 100%;
}
.navbar {
  height: 100vh;
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
