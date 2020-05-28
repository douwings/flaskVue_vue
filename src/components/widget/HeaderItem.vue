<template>
  <div class="item"><font-awesome-icon v-bind:class="{ icon, iconTransition: iconTransition }" :icon=icon></font-awesome-icon>{{msg}}</div>
</template>

<script>
    // import HeaderItem from "../widget/HeaderItem"
    export default {
        props: {
          msg: {
              default: 'text'
          },
          isShow: {
              default: true
          },
          icon: {
              default: "arrow-circle-down"
          },
            iconTransition: {
              default: false
          }
        },
        name: "HeaderItem",
        components: {

        }
    }
</script>

<style scoped>
  @import "../../assets/static/css/headerFont.css";
  .item {
    float:left;
    font-family: "headerFont";
    font-size: 25px;
    text-align: center; /*居中*/
    display: flex;
    /*position: absolute;*/
    width: 90px;
    color: royalblue;
    height: 40px;
    /*bottom: 100px;*/
    /*top: 80px;*/
    /*margin: 10px 0 0 0;*/
    /*padding: 8px 16px;*/
    /*left: 200px;*/
    /*right: 20px;*/
    /*半透明*/
    /*filter:alpha(opacity=70);*/
    /*-moz-opacity:0.7;*/
    /*-khtml-opacity: 0.7;*/
    /*opacity: 0.7;*/
  }

  .item:hover{
    /*background: lightskyblue;*/
    /*全显示*/
    /*filter:alpha(opacity=100);*/
    /*-moz-opacity:1;*/
    /*-khtml-opacity: 1;*/
    /*opacity: 1;*/
  }
  .icon {
    font-size: 20px;
    margin: 7px 0 0 0;
    vertical-align: middle;
    display: table-cell;
  }
  .iconTransition:hover{
    -webkit-transform:rotate(360deg);
    transform:rotate(360deg);
    -webkit-transition:-webkit-transform 1s linear;
    transition:transform 1s linear;
  }
</style>
