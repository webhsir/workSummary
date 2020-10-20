<template>
  <div class="btnFixed">
    <div class="leftHideBox" :class="flag ? 'show' : ''">
      <div class="mainBox">
        <div class="trangle" @click="flag = false">
          <!-- <i class="iconfont">
            &#xe66f;
          </i> -->
          <!-- <div class="name">Tang Xue</div> -->
          <div class="heart">
            <div class="name">Tx</div>
          </div>
          <img src="../assets/images/home/peopleC.png" alt="" srcset="" />
        </div>
      </div>
    </div>
    <div :class="flag ? '' : 'hide'" class="open" @click="flag = true">
      <img src="../assets/images/home/people.png" alt="" srcset="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true
    };
  }
};
</script>

<style scoped lang="scss">
.btnFixed {
  .leftHideBox {
    z-index: 20;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: -110%;
    // background: gainsboro;
    transition: all 0.8s ease-in;
    cursor: pointer;

    .mainBox {
      max-width: 1200px;
      margin: 0 auto;
      background: #2d3e50;
      height: 50px;
      position: relative;
      .trangle {
        .name {
          color: #fff;
          position: relative;
          right: -20px;
          z-index: 100;
        }
        position: absolute;
        right: 0;
        // top: 0;
        top: -160px;
        i {
          color: red;
        }
        .heart {
          background-color: crimson;
          display: inline-block;
          width: 50px;
          height: 50px;
          position: relative;
          top: 0;
          transform: rotate(-45deg);
          position: absolute;
          left: 40px;
          top: 100px;
          // 45%
          animation: heartbeat 1.25s infinite;
        }

        .heart::before,
        .heart::after {
          content: "";
          background-color: crimson;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          position: absolute;
          animation: pulsecolor 1.25s infinite;
        }

        .heart::before {
          top: -25px;
          left: 0;
        }

        .heart::after {
          top: 0;
          left: 25px;
        }

        @keyframes heartbeat {
          0% {
            transform: scale(1) rotate(-45deg);
          }
          10% {
            transform: scale(1.25) rotate(-45deg);
            background-color: #ef395e;
          }
          100% {
            transform: scale(1) rotate(-45deg);
          }
        }

        @keyframes pulsecolor {
          10% {
            background-color: #ef395e;
          }
        }
      }
    }
    img {
      height: 200px;
    }
  }
  .open {
    position: fixed;
    bottom: 50px;
    left: -100px;
    // background: red;
    opacity: 0;
    transition: all 0.8s ease-in;
    z-index: 20;
    img {
      height: 200px;
    }
    cursor: pointer;
  }

  .show {
    left: 0;
  }
  .hide {
    opacity: 1;
    left: 0;
  }
}
</style>
