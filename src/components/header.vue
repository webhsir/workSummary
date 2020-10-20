<template>
  <header>
    <div class="logo">
      Anbition
    </div>
    <ul class="nav">
      <li v-for="(item, index) in nav" :key="index">
        {{ item.lable }}
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        {
          lable: "welcome",
          value: 0
        },
        {
          lable: "introduce",
          value: 0
        },
        {
          lable: "docs",
          value: 0
        },
        {
          lable: "using",
          value: 0
        },
        {
          lable: "try it",
          value: 0
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
header {
  min-height: 40px;
  width: 100%;
  background: #2d3e50;
  color: #6fbef3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  z-index: 10;
  .logo {
    color: #fff;
    font-size: 24px;
  }
  .nav {
    display: flex;
    width: 500px;
    flex-wrap: wrap;
    li {
      margin: 0 10px;
      &:hover {
        text-decoration: underline;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>
