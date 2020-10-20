<template>
  <el-container class="layoutMain">
    <el-aside width="200px" class="leftMeau">
      <asideMeau />
    </el-aside>
    <el-container class="rightCont">
      <el-header class="headerNav">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-main class="mainCont">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import asideMeau from "./aside";
export default {
  components: { asideMeau },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {}
};
</script>

<style scoped lang="scss">
.layoutMain {
  background: #ccc;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  .leftMeau {
    background: blanchedalmond;
    overflow: hidden;
  }
  .rightCont {
    background: burlywood;
    .headerNav {
      padding: 20px 10px;
      background: #fff;
      cursor: pointer;
    }
    .mainCont::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }
  }
}
</style>
