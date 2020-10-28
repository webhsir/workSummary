<template>
  <div class="main_cont">
    <Header />
    <div class="content_box">
      <div class="left">
        <ul>
          <li
            v-for="(item, index) in 20"
            :key="index"
            :class="activeIndex == index ? 'active' : ''"
          >
            {{ "singleNavTitleBar" }}
          </li>
        </ul>
      </div>
      <div class="middle">
        <div class="carousel">
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
              <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="article">
          <ul>
            <li v-for="(item, index) in 10" :key="index">
              <div class="img">
                <img
                  src="../../assets/images/4.png"
                  width="171"
                  alt=""
                  srcset=""
                />
              </div>
              <div class="des">
                <p>this is test words</p>
                <p>this is test words</p>
                <p>this is test words</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="right">
        <div class="mainBox">
          <Calendar
            :textTop="['S', 'M', 'T', 'W', 'T', 'F', 'S']"
            :sundayStart="true"
          >
          </Calendar>
        </div>
        <ul class="hobbyBox">
          <li v-for="(item, index) in 10" :key="index">
            hobby kinds [56]
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/header";
import Calendar from "vue-calendar-component";
export default {
  components: { Header, Calendar },

  data() {
    return {
      activeIndex: 0
    };
  }
};
</script>

<style lang="scss">
.main_cont {
  background: #eee;
  font-size: 14px;
  .content_box {
    width: 1080px;
    margin: 0 auto;
    min-height: 500px;
    display: flex;
    padding-top: 20px;
    .left {
      width: 160px;
      height: auto;
      user-select: none;
      position: relative;
      ul {
        li {
          height: 42px;
          text-align: center;
          line-height: 42px;
          cursor: pointer;
          margin: 20px 0;
          &:hover {
            background: #fff;
            color: #0088f5;
          }
        }
      }
    }
    .middle {
      position: relative;
      flex: 1;
      .carousel {
        text-align: center;
        .el-carousel__item h3 {
          color: #475669;
          font-size: 14px;
          opacity: 0.75;
          line-height: 200px;
          margin: 0;
        }

        .el-carousel__item:nth-child(2n) {
          background-color: #99a9bf;
        }

        .el-carousel__item:nth-child(2n + 1) {
          background-color: #d3dce6;
        }
      }
      .article {
        ul {
          li {
            display: flex;
            padding: 20px;
            margin: 10px 0;
            background: hsla(0, 0%, 100%, 0.6);
          }
        }
      }
    }
    .right {
      width: 320px;
      position: relative;
      .mainBox {
        width: 100%;
        .wh_content_all {
          background-color: #08214d;
          .wh_top_changge li {
            color: #1fb331;
          }
          .wh_content_item {
            .wh_item_date {
              color: #1ae558;
            }
            .wh_other_dayhide {
              color: #bfbfbf;
            }
            .wh_chose_day {
              background: #d1ff19;
              color: #0d0b0b;
            }
            .wh_isToday {
              background: #33ad53;
              color: #0d0b0b;
            }
          }
        }
      }
      .hobbyBox {
        display: flex;
        flex-wrap: wrap;
        background: #fff;
        padding: 20px;
        position: sticky;
        top: 0;

        li {
          padding: 10px;
          background: #c5c5c580;
          margin: 10px;
          color: #555555;
        }
      }
    }
  }
}
</style>
