<template>
  <div>
    <pre>
        1.查看是否安装了 node.js 方法： cmd =》node -v
        2.查看是否安装了ts 方法：tsc  -v (npm install -g typescript)
        3.tsc --init 就会自动生成 tsconfig.json 文件 4.自动编译.ts文件,将
        tsconfig.json 文件中的一个注释的参数改为 “outDir”: “./js”,
        表示自动将ts文件编译生成到文件js文件下
    </pre>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss"></style>
