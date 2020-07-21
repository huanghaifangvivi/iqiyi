<template>
    <div class="index">
      <div class="header">
        <div class="top">
          <router-link to="/choose">
            <div class="logo_div">
              <img class="logo" src="../../assets/images/index/headerLogo-iqiyi.png" alt="">
            </div>
          </router-link>
          <router-link to="/search">
            <div class="search">
              <input type="text" placeholder="王一博">
              <span></span>
            </div>
          </router-link>
          <span class="user">
            <router-link to="/user"></router-link>
          </span>
          <router-link to="/choose">
            <img class="watch" src="../../assets/images/index/all.png" alt="">
          </router-link>
        </div>
        <div class="bottom-nav">
          <div class="left">
            <ul>
              <li><router-link to="/choose">精选</router-link></li>
              <li><router-link to="/vip">VIP会员</router-link></li>
              <li><router-link to="/hot">热点</router-link></li>
              <li><router-link to="/TV">电视剧</router-link></li>
              <li><router-link to="/movie">电影</router-link></li>
              <li><router-link to="/children">儿童</router-link></li>
              <li><router-link to="/game">游戏</router-link></li>
              <li><router-link to="/anime">动漫</router-link></li>
              <li><router-link to="/live">直播</router-link></li>
              <li><router-link to="/information">资讯</router-link></li>
              <li><router-link to="/iqiyi">爱奇艺号</router-link></li>
              <li><router-link to="/play">娱乐</router-link></li>
              <li><router-link to="/original">原创</router-link></li>
              <li><router-link to="/funny">搞笑</router-link></li>
              <li><router-link to="/film">影讯</router-link></li>
              <li><router-link to="/health">健康</router-link></li>
              <li><router-link to="/lift">生活</router-link></li>
              <li><router-link to="/mother">母婴</router-link></li>
              <li><router-link to="/talk">脱口秀</router-link></li>
              <li><router-link to="/military">军事</router-link></li>
            </ul>
          </div>
          <router-link to="/hide">
            <div class="right">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </router-link>
        </div>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "index.vue"
    }
</script>

<style scoped lang="less">
  @header_bg :linear-gradient(90deg, #1a2e4a 0, #409890 100%);
  @header_input:linear-gradient(90deg, rgba(16,36,65,0.259) 0, rgba(17,85,99,0.259) 100%);
  .header{
    width: 100%;
    height: 84px;
    background-image:@header_bg;
  }
  .top{
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: space-around;
    align-items: center;
    padding: 0px 20px;
  }
  .top a:nth-of-type(1){
    width: 8%;
    height: 8%;
  }
  .logo_div img{
    width: 100%;
    height: 100%;
  }
  .top a:nth-of-type(2){
    width: 60%;
  }
  .top .search{
    width: 100%;
    background-image:@header_input;
    display: flex;
    flex-wrap: nowrap;
    border-radius: 16px;
    transform: scale(0.8) translate(-10px,0);
  }
  .top .search input{
    background: transparent;
    outline: none;
    border: none;
    border-radius: 16px;
    padding-left: 10px;
    width: 80%;
    color: white;
  }
  .top .search span{
    width: 30px;
    height: 32px;
    transform: scale(0.6);
    background: url("../../assets/images/index/litter01.png")no-repeat 0 -48px;
  }
  .top .user a{
    display: flex;
    width: 100%;
    height: 100%;
  }
  .top .user{
    width: 12%;
    height:42px;
    flex-basis:auto;
    transform: scale(0.6) translate(-22px,0);
    background: url("../../assets/images/index/litter01.png")no-repeat -30px -46px;
  }
  .top a:nth-of-type(3){
    width: 22%;
    height: 7%;
  }
  .top .watch{
    width: 100%;
    height: 100%;
  }
  .bottom-nav{
    display: flex;
    flex-direction: row;
    padding: 0px 20px;
  }
  .bottom-nav .left{
    width: 90%;
    overflow: auto;
  }
  .bottom-nav .left::-webkit-scrollbar{
    display: none;
  }
  .left ul{
    width:480%;
    height: 42px;
    font-size: 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .left ul>li{
    margin-right: 24px;
    height: 50%;
  }
  .left ul>li a{
    color: #ceddde;
    font-weight: bold;
    text-decoration: none;
  }
  .bottom-nav .right{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    transform: translate(20px,10px);
  }
  .right span{
    width: 12px;
    height: 0px;
    border: 1px solid #ceddde;
    margin-top: 4px;
  }
  .left ul .router-link-active{
    color: white;
    font-size: 1.1em;
    position: relative;
  }
  .left ul .router-link-active::after{
    content: '';
    display: block;
    width: 10px;
    border: 1px solid #16e05d;
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
