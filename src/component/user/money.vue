<template>
  <div class="money">
    <header>
      <div class="top">
        <span><router-link to="/user"></router-link></span>
        <span><router-link to="/user"></router-link></span>
        <ul>
          <li @click="change" :class="{add:king}">
            <router-link to="/vip_gold">
              VIP会员
            </router-link>
          </li>
          <li>
            <router-link to="/vip_all">
              所有会员
            </router-link>
          </li>
        </ul>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
      name: "money",
      data(){
        return{
          king:false
        }
      },
      methods:{
        change(){
          this.king=!this.king;
        }
      }
    }
</script>

<style scoped lang="less">
  header{
    background: #2e2e30;
  }
  header .top{
    position: relative;
  }
  header .top>span{
    width: 43px;
    height: 53px;
    display: flex;
    position: absolute;
    top: 0;
  }
  header .top>span:nth-of-type(1){
    background: url("../../assets/images/money/go-back.png");
    transform: scale(0.6) translate(-20px,-20px);
    left: 0;
  }
  header .top>span:nth-of-type(2){
    background: url("../../assets/images/money/menu-icon.png");
    right: 0;
    transform: scale(0.4) translate(10px,-18px);
  }
  .top ul{
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }
  .top ul>li{
    width: 30%;
    text-align: center;
  }
  .top ul>li a{
    color: gray;
    font-size: 16px;
    font-weight: bold;
    text-decoration: none;
  }
  .top .router-link-active{
    color: #f0c882;
    position: relative;
  }
  .top .router-link-active::after{
    content:'';
    display: flex;
    width: 12px;
    height: 2px;
    background: #f0c882;
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
  }
  .top>span>a{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .add{
    color: #f0c882;
    position: relative;
  }
  .add::after{
    content: '';
    display: flex;
    width: 10px;
    height: 2px;
    background: #f0c882;
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
