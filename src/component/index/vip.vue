<template>
  <div class="vip">
    <header>
      <div class="top">
        <div class="img">
          <img src="../../assets/images/money/1.jpg" alt="">
        </div>
        <router-link to="/money"></router-link>
        <span>黄金VIP会员 2021年05月24日</span>
      </div>
      <div class="bottom">
        <ul>
          <li>
            <router-link to="/vip_choose">会员精选</router-link>
          </li>
          <li>
            <router-link to="/vip_lib">会员片库</router-link>
          </li>
          <li>
            <router-link to="vip_club">会员俱乐部</router-link>
          </li>
        </ul>
      </div>
    </header>

    <router-view></router-view>
  </div>

</template>

<script>
    export default {
        name: "vip"
    }
</script>

<style scoped lang="less">
  header{
    height: 84px;
    padding: 0 20px;
  }
  header .top{
    position: relative;
    height: 42px;
    align-items: center;
    display: flex;
  }
  header .top>a{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  header .top::after{
    content: "续费";
    display: flex;
    padding: 1px 6px;
    border-radius: 8px;
    font-size: 12px;
    color: #684031;
    background: #e8be7d;
    position: absolute;
    top:50%;
    right: 0;
    transform: translateY(-50%);
  }
  header .top .img{
    width: 26px;
    height: 26px;
    border-radius: 50%;
    overflow: hidden;
  }
  header .top>span{
    font-size: 13px;
    margin-left: 10px;
    font-weight: bold;
    color: #666666;
  }
  header .top .img img{
    width: 100%;
  }
  header .bottom{
    height: 42px;
    border-bottom: 1px solid #f2f2f2;
  }
  header .bottom ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  header .bottom li a{
    color: black;
    text-decoration: none;
    display: flex;
    line-height: 42px;
  }
  header .bottom .router-link-active{
    color: #bb8b51;
    font-weight: bold;
    position: relative;
  }
  header .bottom .router-link-active::after{
    content: '';
    width: 20px;
    height: 2px;
    background: #bb8b51;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
