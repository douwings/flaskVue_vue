<template>
  <div class="header">
    <div></div>
    <div>
    <HeaderItem v-for="(item, index) in items" :key="item.message" v-bind:class="{ itemHomePage: item.homePage }" :msg=item.message :icon=item.icon :iconTransition=item.iconTransition></HeaderItem>
    </div>
  </div>
  </template>

<script>
    import HeaderItem from "../widget/HeaderItem"
    export default {
      data: function() {
        return {
          items: [

            { message: '首页', homePage: true, icon: "home", iconTransition: false },
            { message: '我', homePage: true, icon: "address-card", iconTransition: false  },
            { message: '关于', homePage: true, icon: "cog", iconTransition: true  }
          ]
        }
      },
      name: "Header",
      components: {
          HeaderItem
      }
    }
</script>

<style scoped>

  .header {
    background: lightskyblue;
    display: flex;
    position: fixed;
    width: 100%;
    height: 60px;
    /*bottom: 100px;*/
    top: 0px;
    /*半透明*/
    filter:alpha(opacity=20);
    -moz-opacity:0.2;
    -khtml-opacity: 0.2;
    opacity: 0.2;
    justify-content: space-between;
  }
  .header:hover{
    background: lightskyblue;
    /*全显示*/
    filter:alpha(opacity=100);
    -moz-opacity:1;
    -khtml-opacity: 1;
    opacity: 1;
  }
  .itemHomePage::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -2px;
    width: 0;
    height: 2px;
    background: #4285f4;
    transition: all .3s;
  }
  .itemHomePage:hover::before {
    width: 100%;
    left: 0;
    right: 0;
  }
  .itemHomePage {
    /*position: absolute;*/
    width: 60px;
    height: 40px;
    /*bottom: 100px;*/
    /*top: 80px;*/
    margin: 0 0 0 0;
    padding: 8px 16px;
    /*left: 200px;*/
    /*right: 20px;*/
  }

</style>
