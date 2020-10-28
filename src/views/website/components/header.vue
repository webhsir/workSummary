<template>
  <header class="web-header">
    <ul class="nav mainContainer">
      <li
        v-for="(item, index) in navArr"
        :class="index == activeIndex ? 'active' : ''"
        :key="index"
        @click="changeIndex(index)"
      >
        {{ item.label }}
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navArr: [
        {
          label: "模板世界"
        },
        {
          label: "模板世界"
        },
        {
          label: "模板世界"
        },
        {
          label: "模板世界"
        },
        {
          label: "模板世界"
        }
      ],
      activeIndex: 0
    };
  },
  methods: {
    changeIndex(index) {
      this.activeIndex = index;
    }
  }
};
</script>

<style scoped lang="scss">
.web-header {
  height: 56px;
  background: #222;
  position: relative;
  .mainContainer {
    max-width: 1080px;
    margin: 0 auto;
  }
  .nav {
    display: flex;
    height: 100%;
    text-align: center;
    li {
      color: #eee;
      width: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transform: perspective(1px) translateZ(0);
      position: relative;
    }
    li::before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: #eb532c;
      transform: scaleY(0);
      transform-origin: 50% 100%;
      transition-property: transform;
      transition-duration: 0.5s;
      transition-timing-function: ease-out;
    }
    li:hover:before {
      transform: scaleY(1);
      transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
    }
  }
  .active {
    background: #eb532c;
    color: #fff;
  }
}
</style>
