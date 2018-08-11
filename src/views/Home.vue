<template>
  <div class="home">

    <el-container>
      <el-aside>
        <navbar/>

      </el-aside>
      <el-main>
        <vue-markdown>i am a ~~tast~~ **test**.</vue-markdown>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-input resize="none" type="textarea" placeholder="Please input" v-model="markdown">
            </el-input>
          </el-col>
          <el-col :span="12">
            <el-input resize="none" type="textarea" placeholder="Please input" v-model="converted">
            </el-input>
          </el-col>
        </el-row>

      </el-main>
    </el-container>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import VueMarkdown from 'vue-markdown'
export default {
  name: 'home',
  components: {
    navbar: NavBar,
    VueMarkdown
  },
  data() {
    return {
      markdown: '',
      converted: ''
    }
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Quicksand');
.home {
  font-family: 'Quicksand', sans-serif;
  .el-row {
    .el-col {
      .el-textarea {
        textarea {
          min-height: 95vh !important;
        }
      }
    }
  }
}
</style>

