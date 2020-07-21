<template>
    <div class="vip_gold">
      <header>
        <div class="middle">
          <div class="head">
            <img src="../../assets/images/money/1.jpg" alt="">
          </div>
          <div class="infor">
            <p>大的小橘子&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span></span>(136****16登录) <span>查看详情</span></p>
            <p>2021年05月24日到期&nbsp;&nbsp;<span>购买后有效期将顺延</span></p>
          </div>
        </div>
        <div class="bottom">
          <ul>
            <li><router-link to="/gold"><span></span>黄金VIP会员</router-link></li>
            <li><router-link to="/star"><span></span>升级星钻VIP会员</router-link></li>
          </ul>
        </div>
      </header>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "vip_gold"
    }
</script>

<style scoped lang="less">
  header{
    background: #2e2e30;
  }
  header .middle{
    position: relative;
    margin-bottom: 20px;
  }
  header .middle .head{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    top:10px;
    left: 25px;
  }
  header .middle .head img{
    width: 100%;
  }
  header .middle{
    display: flex;
    padding-top: 10px;
    justify-content: space-around;
  }
  header .middle .infor p{
    margin-left: 40px;
  }
  header .middle .infor p:nth-of-type(1){
    color: white;
    font-size: 14px;
    position: relative;
  }
  header .middle .infor p:nth-of-type(1) span:nth-of-type(1){
    width: 40px;
    height: 40px;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    background: url("../../assets/images/money/11.png");
    transform: scale(0.6) translate(110px,-16px);
  }
  header .middle .infor p:nth-of-type(1) span:nth-of-type(2){
    color: #f2f2f2;
    padding: 1px 8px;
    background: #4c4c4c;
    font-size: 12px;
    border-radius: 2px;
  }
  header .middle .infor p:nth-of-type(2){
    color: #e2ac62;
    font-size: 12px;
    margin-top: 2px;
  }
  header .middle .infor p:nth-of-type(2) span{
    color: gray;
  }
  header .bottom ul{
    display: flex;
    justify-content: space-around;
    height: 30px;
  }
  header .bottom ul li>a{
    text-decoration: none;
    color: gray;
    font-size: 16px;
    font-weight: bold;
  }
  header .bottom .router-link-active{
    color: #7c561e;
  }
</style>
