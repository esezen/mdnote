<template>
  <div class="home">

    <el-row :gutter="20">
      <el-col :span="12">
        <el-input resize="none" type="textarea" placeholder="Please input" v-model="markdown">
        </el-input>
      </el-col>
      <el-col :span="12">
        <vue-markdown :source="markdown"></vue-markdown>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
export default {
  name: 'home',
  components: {
    VueMarkdown
  },
  data() {
    return {
      markdown: ''
    }
  }
}
</script>
<style lang="scss">
.home {
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

