<template>
  <div id="app">
    <el-container>
      <el-aside>
        <navbar/>

      </el-aside>
      <el-main>

        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import NavBar from '@/components/NavBar'
export default {
  components: {
    navbar: NavBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Quicksand');
html,
body,
div {
  font-family: 'Quicksand', sans-serif !important;
  margin: 0;
  padding: 0;
  border: 0;
}
</style>
