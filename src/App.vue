<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<style lang="less">
@font-face {
  font-family: "iconfont"; /* project id 2109149 */
  src: url("//at.alicdn.com/t/font_2109149_xl2y384p6z.eot");
  src: url("//at.alicdn.com/t/font_2109149_xl2y384p6z.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_2109149_xl2y384p6z.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_2109149_xl2y384p6z.woff") format("woff"),
    url("//at.alicdn.com/t/font_2109149_xl2y384p6z.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_2109149_xl2y384p6z.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont";
  font-size: 40px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  overflow: auto;
}

::-webkit-scrollbar-thumb {
  background-color: #e6e6e6;
  min-height: 25px;
  min-width: 25px;
  border: 1px solid #e0e0e0;
}

::-webkit-scrollbar-track {
  background-color: #f7f7f7;
  border: 1px solid #efefef;
}
</style>
