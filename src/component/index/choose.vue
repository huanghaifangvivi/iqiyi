<template>
  <div class="choose">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in banner">
        <div class="banner">
          <router-link to="/details2"></router-link>
          <img :src="item.imgsrc" alt="">
          <h5>{{item.h5}}</h5>
          <span>{{item.flag}}</span>
        </div>
      </mt-swipe-item>
    </mt-swipe>
    <div class="ad">
      <img src="../../assets/images/index/banner.gif" alt="">
    </div>
    <div class="first">
      <ul>
        <li v-for="item in first">
          <router-link to="/details">
            <div class="img">
              <img :src="item.imgsrc" alt="">
              <span>{{item.flag}}</span><span>{{item.tip}}</span>
            </div>
            <h5>{{item.h5}}</h5>
            <p>{{item.p}}</p>
          </router-link>
        </li>
      </ul>
    </div>
    <section>
      <div class="information">
        <h5>今日资讯</h5>
        <p><span></span>{{information[0].p1}}</p>
        <p><span></span>{{information[0].p2}}</p>
        <ul>
          <li>
            <div class="img">
              <router-link to="/details1"></router-link>
              <img :src="information[0].imgsrc1" alt="">
              <span>{{information[0].tip1}}</span>
              <span>{{information[0].time1}}</span>
            </div>
            <span>{{information[0].span1}}</span>
          </li>
          <li>
            <div class="img">
              <img :src="information[0].imgsrc2" alt="">
              <span>{{information[0].tip2}}</span>
              <span>{{information[0].time2}}</span>
            </div>
            <span>{{information[0].span2}}</span>
          </li>
        </ul>
        <div class="btn">
          <p><span></span>{{information[0].btn1}}</p>
          <p><span></span>{{information[0].btn2}}</p>
        </div>
      </div>
      <div class="tv_movie">
        <div v-for="item in tv_movie">
          <h5>{{item.h5}}</h5>
          <ul>
            <li v-for="i in item.li">
              <div class="img">
                <router-link to="/details1"></router-link>
                <img :src="i.imgsrc" alt="">
                <span>{{i.flag}}</span><span>{{i.tip}}</span>
              </div>
              <span>{{i.span}}</span>
            </li>
          </ul>
          <div class="btn">
            <p><span></span>{{item.btn1}}</p>
            <p><span></span>{{item.btn2}}</p>
          </div>
        </div>
      </div>
      <div class="for">
        <h5>应用推荐</h5>
        <ul>
          <li v-for="item in for1">
            <img :src="item.imgsrc" alt="">
            <span>{{item.span}}</span>
          </li>
        </ul>
      </div>
    </section>
    <div class="end">
      <img src="../../assets/images/hide/foot.png" alt="">
    </div>
  </div>
</template>

<script>
    export default {
      name: "choose",
      data(){
        return{
          banner:{},
          first:{},
          information:{},
          tv_movie:{},
          for1:{}
        }
      },
      mounted() {
        this.$http.get('./data/choose.json')
          .then((response)=>{
            //success
            console.log(response.data);
            this.banner=response.data.banner;
            this.first=response.data.first;
            this.information=response.data.information;
            this.tv_movie=response.data.tv_movie;
            this.for1=response.data.for;
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
  .choose .banner h5{
    font-size: 16px;
    color: white;
    font-weight: bold;
    position: absolute;
    bottom: 10px;
    left: 20px;
  }
  .banner>span{
    position: absolute;
    top: 10px;
    right: 20px;
    color: white;
    font-size: 12px;
    background: #00cc36;
    padding:1px 4px;
    border-radius: 2px;
  }
  .choose .banner img{
    width: 100%;
  }
  .ad{
    width: 94%;
    display: flex;
    margin: 10px auto;
  }
  .ad img{
    width: 100%;
  }
  .first{
    padding: 0 10px;
    overflow: hidden;
  }
  .first .img{
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  .first .img img{
    width: 100%;
    display: flex;
  }
  .first ul{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .first ul>li{
    width: 48%;
    margin-bottom: 10px;
  }
  .first ul>li a{
    text-decoration: none;
    color: black;
  }
  .first .img>span:nth-of-type(1){
    position: absolute;
    top: 2px;
    right: 2px;
    display: flex;
    color: white;
    font-size: 12px;
    padding: 1px 3px;
    background: #00cc36;
    border-radius: 2px;
  }
  .first .img>span:nth-of-type(2){
    position: absolute;
    color: white;
    font-size: 12px;
    bottom: 2px;
    right: 2px;
  }
  .first li a>h5{
    font-size: 15px;
    margin-top: 2px;
  }
  .first li a>p{
    color: gray;
    font-size: 12px;
  }
  section{
    padding: 10px 10px;
  }
  section .information h5{
    font-weight: bold;
    font-size: 14px;
  }
  .information>p{
    font-size: 14px;
    margin: 10px 24px;
    position: relative;
  }
  .information>p>span{
    position: absolute;
    top: -2px;
    left: -24px;
    display: flex;
    width: 22px;
    height: 22px;
    transform: scale(0.6);
    background: url("../../assets/images/index/litter01.png")no-repeat -13px -85px;
  }
  .information ul{
    display: flex;
    justify-content: space-around;
  }
  .information ul>li{
    width: 48%;
  }
  .information li img{
    width: 100%;
    display: flex;
  }
  .information .img{
    position: relative;
  }
  .information .img span:nth-of-type(1),.information .img span:nth-of-type(2){
    font-size: 12px;
    color: white;
    position: absolute;
    bottom: 2px;
    font-weight: bold;
  }
  .information .img span:nth-of-type(1){
    left: 4px;
  }
  .information .img span:nth-of-type(2){
    right: 4px;
  }
  .information li>span{
    font-size: 14px;
    margin-top: 2px;
  }
  .btn{
    display: flex;
    margin-top: 10px;
    justify-content: space-around;
  }
  .btn p{
    width: 45%;
    text-align: center;
    background: #f5f7fa;
    padding: 6px 0;
    padding-left: 10px;
    font-size: 14px;
    border-radius: 4px;
    position: relative;
  }
  .btn>p:nth-of-type(1) span,.btn>p:nth-of-type(2) span{
    display: flex;
    width: 44px;
    height:44px;
    position: absolute;
    top: 0;
    left: 0;
    background: url("../../assets/images/index/litter01.png")no-repeat 0px 0px;
    transform: scale(0.4) translate(42px,-20px);
  }
  .btn>p:nth-of-type(2) span{
    background: url("../../assets/images/index/litter01.png")no-repeat -48px 0px;
    transform: scale(0.4) translate(68px,-20px);
  }
  section .tv_movie{
    margin-top: 10px;
  }
  .tv_movie>div{
    margin-top: 20px;
  }
  .tv_movie>div>h5{
    font-size: 14px;
    font-weight: bold;
    padding: 10px 0;
  }
  .tv_movie ul{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .tv_movie ul>li{
    width: 30%;
    margin-bottom: 10px;
  }
  .tv_movie li .img{
    position: relative;
  }
  .tv_movie li img{
    width: 100%;
    display: flex;
  }
  .tv_movie li .img>span:nth-of-type(1),.tv_movie li .img>span:nth-of-type(2){
    color:white;
    font-size: 12px;
    position: absolute;
    right: 2px;
    background: #00cc36;
    padding: 1px 3px;
    border-radius: 2px;
  }
  .tv_movie li .img>span:nth-of-type(1){
    top: 3px;
  }
  .tv_movie li .img>span:nth-of-type(2){
    bottom: 3px;
    background: transparent;
  }
  .tv_movie li>span{
    font-size: 14px;
    margin-top: 2px;
  }
  section .for{
    margin: 20px 0;
  }
  .for h5{
    font-size: 16px;
    font-weight: bold;
  }
  .for ul{
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
  }
  .for ul>li{
    width: 30%;
    text-align: center;
  }
  .for li>img{
    width: 100%;
  }
  .img>a{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .banner>a{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .end{
    text-align: center;
    transform: scale(0.6);
  }
</style>
<style>
  .choose .mint-swipe-items-wrap{
    width: 100%;
    height: 50vw;
  }
  .choose .mint-swipe-indicator{
    border-radius: 0;
    width: 7px;
    height: 3px;
    background: gray;
    opacity: 0.9;
  }
  .choose .mint-swipe-indicators{
    left: 80%;
  }
  .choose .is-active{
    background-color: #00cc36;
    opacity: 1;
  }

</style>
