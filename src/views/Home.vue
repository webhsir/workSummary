<template>
  <div class="home">
    <headerComp></headerComp>
    <div class="homeBg">
      <h1><i class="iconfont">&#xe60c;</i> Anbition</h1>
    </div>
    <div class="homeCont">
      <div class="homeT">Anbition</div>
      <div class="homeModal">
        <div class="modalLeft">
          <h3>Handle CSS3 Animations</h3>
          <ul class="colorArr" v-for="pitem in 6" :key="pitem">
            <li class="liColor" v-for="item in 5" :key="item"></li>
          </ul>
        </div>
        <div class="modalRight">
          <h3>Some Pictures</h3>
          <div class="imgBox">
            <img src="../assets/images/home/1.png" alt="" srcset="" />
            <img src="../assets/images/home/2.png" alt="" srcset="" />
            <img src="../assets/images/home/3.png" alt="" srcset="" />
            <img src="../assets/images/home/4.png" alt="" srcset="" />
            <img src="../assets/images/home/5.png" alt="" srcset="" />
            <img src="../assets/images/home/6.png" alt="" srcset="" />
            <img src="../assets/images/home/1.png" alt="" srcset="" />
            <img src="../assets/images/home/2.png" alt="" srcset="" />
            <img src="../assets/images/home/3.png" alt="" srcset="" />
            <img src="../assets/images/home/4.png" alt="" srcset="" />
            <img src="../assets/images/home/5.png" alt="" srcset="" />
            <img src="../assets/images/home/6.png" alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
    <btnComp></btnComp>
  </div>
</template>

<script>
import btnComp from "@/components/btnFixed";
import headerComp from "@/components/header";

export default {
  components: {
    btnComp,
    headerComp
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.home {
  .homeBg {
    background: #1f8dd6;
    z-index: 1;
    overflow: hidden;
    width: 100%;
    height: 88%;
    top: 0;
    left: 0;
    position: fixed !important;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    i {
      font-size: 48px;
    }
  }
  .homeCont {
    position: absolute;
    top: 87%;
    width: 100%;
    min-height: 12%;
    z-index: 2;
    background: white;
    min-height: 800px;
    padding-bottom: 300px;
    .homeT {
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin: 2em 0 1em;
      text-align: center;
      color: #34495e;
      font-size: 24px;
    }
    .homeModal {
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      h3 {
        padding: 10px;
      }

      .modalLeft {
        $colors: #1f8dd6, #fbb44c, #fc797a, #2abb9b, #858585, #000080;
        .colorArr {
          display: flex;
          justify-content: space-evenly;
          margin-bottom: 10px;
          .liColor {
            width: 50px;
            height: 50px;
            margin-left: 10px;
            @for $i from 1 through 5 {
              &:nth-child(#{$i}) {
                background: nth($colors, $i);
              }
            }
          }
        }
      }
      .modalRight {
        width: 500px;
        .imgBox {
          display: flex;
          justify-content: space-evenly;
          flex-wrap: wrap;
        }
        img {
          width: 150px;
          height: 150px;
          cursor: pointer;
          margin: 4px;
          &:hover {
            box-shadow: 1px 1px 10px 2px #ccc;
          }
        }
      }
    }
  }
}
</style>
