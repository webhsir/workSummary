<template>
  <div class="index">
    second
    <div class="box">
      <el-steps :active="active" finish-status="success">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
      </el-steps>
      <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    next() {
      console.log(this.active, "activeqian");
      if (this.active++ > 2) this.active = 0;
      console.log(this.active, "activehou");
    }
  }
};
</script>

<style scoped lang="scss">
.index {
  color: #fff;
  min-height: 100vh;
  .box {
    margin-top: 800px;
  }
}
</style>
