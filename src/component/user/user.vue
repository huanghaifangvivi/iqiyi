<template>
    <div class="user">
      <header>
        <router-link to="/choose">
          <img class="logo1" src="../../assets/images/hide/iqiyi-logo.png" alt="">
        </router-link>

        <span class="iconfont icon-sousuo">
          <router-link to="/search"></router-link>
        </span>
        <span class="iconfont icon-lishijilu">
          <router-link to="/search"></router-link>
        </span>
        <span class="my">
          我的
          <router-link to="/user"></router-link>
        </span>
        <span class="all">
          <img src="../../assets/images/hide/all.png" alt="">
          <router-link to="/choose"></router-link>
        </span>
      </header>
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
          </div>
        </router-link>
      </div>
      <div class="my_div">
        <div class="my_infor">
          <div class="head"></div>
          <div class="font">
            <h5>大的小橘子</h5>
            <span></span>
          </div>
        </div>
        <div class="vip_item">
          <div class="vip">
            <div class="gold">
              <router-link to="/money"></router-link>
              <span></span>
              <div class="font1">
                <p>黄金VIP会员</p>
                <p>2021年05月24日到期</p>
              </div>
              <span> 续费</span>
            </div>
            <div class="pe">
              <span></span>
              <div class="font2">
                <p>体育大众会员</p>
                <p>畅享精彩体育赛事</p>
              </div>
              <span> 开通</span>
            </div>
          </div>
        </div>
      </div>
      <div class="con">
        <ul>
          <li>
            <span></span>
            <mt-cell title="播放记录" is-link>
              <span>记录看过的精彩</span>
            </mt-cell>
            <div class="pass">
              <ul>
                <li v-for="(item,index) in memory">
                  <router-link to="/details">
                    <div class="img">
                      <img :src="item.imgsrc" alt="">
                      <span>{{item.time}}</span>
                    </div>
                    <span>{{item.img_msg}}</span>
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <span></span>
            <mt-cell title="点赞记录" label="" is-link></mt-cell>
          </li>
          <li>
            <span></span>
            <mt-cell title="收藏" label="" is-link></mt-cell>
          </li>
          <li>
            <span></span>
            <mt-cell title="关注" is-link>
              <span>发现未知的精彩</span>
            </mt-cell>
          </li>
        </ul>
        <ul>
          <li>
            <span></span>
            <mt-cell title="我的账号" label="" is-link></mt-cell>
          </li>
          <li>
            <span></span>
            <mt-cell title="免流量追剧" label="" is-link></mt-cell>
          </li>
          <li>
            <span></span>
            <mt-cell title="借钱" is-link>
              <span>额度高 易通过</span>
            </mt-cell>
          </li>
          <li>
            <span></span>
            <mt-cell title="办信用卡" is-link>
              <span>首刷领3个月会员</span>
            </mt-cell>
          </li>
          <li>
            <span></span>
            <mt-cell title="安全中心" label="" is-link></mt-cell>
          </li>
          <li>
            <span></span>
            <mt-cell title="隐私设置" label="" is-link></mt-cell>
          </li>
        </ul>
        <ul>
          <li>
            <span></span>
            <mt-cell title="意见反馈" label="" is-link></mt-cell>
          </li>
        </ul>
        <ul>
          <li>
            <span></span>
            <mt-cell title="关于我们" label="" is-link></mt-cell>
          </li>
        </ul>
      </div>
      <div class="end">
        <img src="../../assets/images/hide/foot.png" alt="">
      </div>
    </div>
</template>

<script>
    export default {
      name: "my.vue",
      data(){
          return{
            memory:{}
          }
      },
      mounted() {
        this.$http.get('./data/user.json')
          .then((response)=>{
            //success
            console.log(response.data);
            this.memory=response.data.memory;
          })
          .catch(function (error) {
            //error
            console.log('错误',error);
          })
          .then(function(){
            //always executed
          })
      }
    }
</script>

<style scoped lang="less">
  body{
    background: #f7f7f7;
  }
  header{
    height: 44px;
    background: #191919;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  header a{
    width: 24%;
    height: auto;
    margin-right: 16%;
  }
  .logo1{
    width: 100%;
  }
  header span:nth-of-type(3){
    font-size: 14px;
  }
  header span>a{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  header span{
    position: relative;
    font-size: 24px;
    color: #8d8d8d;
    width: 32px;
    line-height: 32px;
  }
  .all{
    width: 20%;
  }
  .all img{
    width: 100%;
    height: 100%;
  }
  .bottom-nav{
    display: flex;
    flex-direction: row;
    padding: 0px 20px;
    border-bottom: 2px solid #f2f2f2;
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
    color: black;
    text-decoration: none;
  }
  .bottom-nav a{
    text-decoration: none;
  }
  .bottom-nav .right{
    width: 36px;
    height: 36px;
    background: url("../../assets/images/user/menu-more-icon.png")no-repeat 4px 0px;
    background-size: 240%;
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
  .my_div{
    padding: 20px;
    padding-right: 0;
    border-bottom: 5px solid #f2f2f2;
  }
  .vip_item{
    width: 100%;
    overflow: auto;
  }
  .vip_item::-webkit-scrollbar{
    display: none;
  }
  .my_div .head{
    width: 60px;
    height: 60px;
    background: url("../../assets/images/user/11.jpg")no-repeat;
    background-size: 110%;
    border-radius: 50%;
  }
  .my_infor{
    display: flex;
    flex-direction: row;
  }
  .my_infor .font{
    margin-top: 10px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
  }
  .my_infor span{
    width: 62px;
    height: 52px;
    background: url("../../assets/images/user/vip-grade-icon.png")no-repeat -364px -82px;
    transform: scale(0.3) translate(-68px,-30px);
  }
  .vip{
    display: flex;
    flex-direction: row;
    width: 160%;
    height: 60px;
  }
  .vip>div{
    width: 230px;
    height: 50px;
    border-radius: 50px;
    border: 2px solid #f2f2f2;
    margin-right: 14px;
    position: relative;
  }
  .gold span:nth-of-type(1){
    display: flex;
    width: 130px;
    height: 119px;
    background: url("../../assets/images/user/litter_04.png")no-repeat -10px -16px;
    transform: scale(0.36) translate(-108px,-95px);
    position: absolute;
    top:0;
    left: 0;
  }
  .pe span:nth-of-type(1){
    display: flex;
    width: 130px;
    height: 119px;
    background: url("../../assets/images/user/litter_04.png")no-repeat -311px -16px;
    transform: scale(0.36) translate(-108px,-95px);
    position: absolute;
    top:0;
    left: 0;
  }
  .gold,.pe{
    font-size: 12px;
    display: flex;
    align-items: center;
  }
  .gold .font1{
    width: 124px;
    margin-left: 52px;
  }
  .gold .font2,.pe .font2{
    width: 124px;
    margin-left: 52px;
  }
  .font1 p:nth-of-type(1){
    color: #d4b58b;
    font-size: 1.2em;
  }
  .font1 p:nth-of-type(2){
    color: gray;
  }
  .font2 p:nth-of-type(1){
    color: #3ccf6a;
    font-size: 1.2em;
  }
  .font2 p:nth-of-type(2){
    color: gray;
  }
  .gold span:nth-of-type(2),.pe span:nth-of-type(2){
    display: flex;
    width: 30px;
    background: #dab176;
    border-radius: 30px;
    color: white;
    padding: 4px 8px;
  }
  .pe span:nth-of-type(2){
    background: #3ccf6a;
  }
  .con>ul{
    border-bottom: 5px solid #f2f2f2;
  }

  .con ul>li{
    border-bottom: 1px solid #f2f2f2;
    position: relative;
  }
  .con ul>li>span{
    width: 55px;
    height: 54px;
    position: absolute;
    transform: scale(0.36);
    top: 0;
    left: 0;
  }
  .con ul:nth-of-type(1) li:nth-of-type(1)>span{
    background: url("../../assets/images/user/litter_05.png") no-repeat -63px -3px;
  }
  .con ul:nth-of-type(1) li:nth-of-type(2)>span{
    background: url("../../assets/images/user/litter_05.png") no-repeat -121px -3px;
  }
  .con ul:nth-of-type(1) li:nth-of-type(3)>span{
    background: url("../../assets/images/user/litter_05.png") no-repeat -364px -125px;
  }
  .con ul:nth-of-type(1) li:nth-of-type(4)>span{
    background: url("../../assets/images/user/litter_05.png") no-repeat -183px -3px;
  }
  .con ul:nth-of-type(2) li:nth-of-type(1)>span{
    background: url("../../assets/images/user/litter_05.png") no-repeat -241px -3px;
  }
  .con ul:nth-of-type(2) li:nth-of-type(2)>span{
    background: url("../../assets/images/user/litter_05.png") no-repeat -302px -3px;
  }
  .con ul:nth-of-type(2) li:nth-of-type(3)>span{
    background: url("../../assets/images/user/litter_05.png") no-repeat -62px -184px;
  }
  .con ul:nth-of-type(2) li:nth-of-type(4)>span{
    background: url("../../assets/images/user/litter_05.png") no-repeat -421px -125px;
  }
  .con ul:nth-of-type(2) li:nth-of-type(5)>span{
    background: url("../../assets/images/user/litter_05.png") no-repeat -363px -3px;
  }
  .con ul:nth-of-type(2) li:nth-of-type(6)>span{
    background: url("../../assets/images/user/litter_05.png") no-repeat -304px -123px;
  }
  .con ul:nth-of-type(3) li:nth-of-type(1)>span{
    background: url("../../assets/images/user/litter_05.png") no-repeat -2px -182px;
  }
  .con ul:nth-of-type(4) li:nth-of-type(1)>span{
    background: url("../../assets/images/user/litter_05.png") no-repeat -421px -3px;
  }
  .pass{
    width: 100%;
    height: 130px;
    overflow: auto;
  }
  .pass::-webkit-scrollbar{
    display: none;
  }
  .pass ul{
    width: 210%;
    height: 130px;
    display: flex;
    margin-left: 20px;
  }
  .pass a{
    color: black;
    text-decoration: none;
  }
  .pass ul>li .img{
    width: 120px;
    height: 80px;
    overflow: hidden;
    position: relative;
  }
  .pass .img>span{
    position: absolute;
    bottom: 0;
    right: 20px;
    color: white;
    font-size: 10px;
  }
  .pass li img{
    width: 100px;
    height: auto;
  }
  .pass a>span{
    width: 100px;
    display: flex;
    font-size: 14px;
    margin-top: 2px;
  }
  .end{
    text-align: center;
    transform: scale(0.6);
  }
  .gold>a{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>
<style>
  .con li .mint-cell{
    margin-left: 40px;
    border: none;
  }
  .con li .mint-cell .mint-cell-mask::after{
    display: none;
    background-color: rgba(0,0,0,0);
  }
</style>
