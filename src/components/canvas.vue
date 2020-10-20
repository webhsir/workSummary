<template>
  <div class="loadingContainer">
    <div class="loading">
      <div class="dot" v-for="(item, index) in 5" :key="index"></div>
    </div>
    <div id="divTyping">{{ showMsg }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Design By Hsir",
      index: 0,
      timer: 0,
      showMsg: ""
    };
  },
  mounted() {
    this.autoWrite();
  },
  methods: {
    autoWrite() {
      if (this.index <= this.msg.length) {
        this.showMsg = this.msg.slice(0, this.index++) + "_";
        this.timer = setTimeout(() => {
          this.autoWrite();
        }, 200);
      } else {
        clearTimeout(this.timer);
      }
    }
  }
};
</script>
<style scoped lang="scss">
.loadingContainer {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  #divTyping {
    position: relative;
    left: -2px;
    top: 50px;
  }
}
.loading {
  // $colors: #7ef9ff, #89cff0, #4682b4, #0f52ba, #000080;
  $colors: #fbb44c, #fc797a, #2abb9b, #858585, #2abb9b;
  display: flex;
  animation-delay: 1s;

  .dot {
    position: relative;
    width: 10px;
    height: 10px;
    margin: 0.8em;
    border-radius: 50%;

    &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background: inherit;
      border-radius: inherit;
      animation: wave 2s ease-out infinite;
    }

    @for $i from 1 through 5 {
      &:nth-child(#{$i}) {
        background: nth($colors, $i);

        &::before {
          animation-delay: $i * 0.2s;
        }
      }
    }
  }
}

@keyframes wave {
  50%,
  75% {
    transform: scale(2.5);
  }

  80%,
  100% {
    opacity: 0;
  }
}
</style>
