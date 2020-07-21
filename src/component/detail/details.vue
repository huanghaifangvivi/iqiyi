<template>
    <div class="details">
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
          <img src="../../assets/images/details/02.png" alt="">
          <router-link to="/choose"></router-link>
        </span>
      </header>
      <div class="video">
        <video src="../../../data/data/assets/vedio/01.mp4" controls>
        </video>
      </div>
      <div class="ad">
        <router-link to="/choose"></router-link>
        <img src="../../assets/images/details/01.gif" alt="">
      </div>
      <div class="video_infor">
        <h3>陈情令</h3>
        <p><span class="hot">热度39&nbsp;&nbsp;&nbsp;</span><span class="time">2020-07-15发布</span></p>
        <span class="person"><span class="headpic"><img src="../../../data/data/assets/images/details/01.jpg" alt=""></span>是奶茶啊C</span>
      </div>
      <div class="btn">
        <ul>
          <li><span class="pic" @click="share"></span><span class="font">分享</span></li>
          <li><span class="pic" @click="artical"></span><span class="font">评论</span></li>
          <li><span class="pic" @click="good"></span><span class="font">点赞</span></li>
          <li><span class="pic" @click="more"></span><span class="font">更多</span></li>
        </ul>
      </div>
      <section>
        <h6>为你推荐</h6>
        <ul>
          <li v-for="item in for_you" v-lazy="item">
            <router-link to="/details1">
              <div class="top">
                <h4>{{item.h4}}</h4>
                <img :src="item.imgsrc" alt="">
                <span class="hot1">{{item.hot}}</span>
                <span class="time1">{{item.time}}</span>
              </div>
              <div class="bottom">
                <div class="users"><span class="head"><img :src="item.head_imgsrc" alt=""></span><span>{{item.head_name}}</span></div>
                <div class="others">
                <span>
                  <span class="like">{{item.like}}</span>
                </span>
                  <span>
                  <span class="speak">{{item.speak}}</span>
                </span>
                  <span></span>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </section>
      <span class="fix iconfont icon-huidaodingbu" v-if="flag" @click="backTop"></span>
      <div class="end">
        <img src="../../assets/images/hide/foot.png" alt="">
      </div>
    </div>
</template>

<script>
  import {Toast} from 'mint-ui';
    export default {
      name: "details.vue",
      data(){
          return{
            share_msg:false,
            good_msg:false,
            artical_msg:false,
            more_msg:false,
            for_you:{},
            flag:true
          }
      },
      methods:{
          share(a){
            this.share_msg=!this.share_msg;
            if(this.share_msg){
              Toast('分享成功~');
              a.target.style.background='url("./src/assets/images/details/litter_video.png")no-repeat -522px -31px';
            }else{
              a.target.style.background='url("./src/assets/images/details/litter_video.png")no-repeat 0px -31px';
            }
          },
          good(a){
            this.good_msg=!this.good_msg;
            if(this.good_msg){
              Toast('确认过眼神，你是个有品位的人~');
              a.target.style.background='url("./src/assets/images/details/litter_video.png")no-repeat -368px -31px';
            }else{
              a.target.style.background='url("./src/assets/images/details/litter_video.png")no-repeat -291px -31px';
            }
          },
          artical(a){
            this.artical_msg=!this.artical_msg;
            if(this.artical_msg){
              Toast('评论成功~');
            }
          },
          more(a){
            this.more_msg=!this.more_msg;
            if(this.more_msg) {
              a.target.style.background = 'url("./src/assets/images/details/litter_video.png")no-repeat -214px -31px';
            }else{
              a.target.style.background = 'url("./src/assets/images/details/litter_video.png")no-repeat -144px -31px';
            }
          },
          backTop(){
            //加定时器是为画面顺滑
            let that=this;
            let timer=setInterval(()=>{
              let ispeed=Math.floor(-that.scrollTop/5);
              document.documentElement.scrollTop=document.body.scrollTop=that.scrollTop+ispeed;
              if(that.scrollTop===0){
                clearInterval(timer);
              }
            },16)
          },
          scrollToTop(){
              let that=this;
              //计算距离顶部的距离
              let scrollTop=window.pageYOffset || document.documentElement.scrollTop||document.body.scrollTop;
              that.scrollTop=scrollTop;
              if(that.scrollTop>0){
                that.flag=true;
              }else{
                that.flag=false;
              }
          }
      },
      mounted() {
        this.$http.get('./data/details.json')
          .then((response)=>{
            //success
            console.log(response.data);
            this.for_you=response.data.for_you;
          })
          .catch(function (error) {
            //error
            console.log('错误',error);
          })
          .then(function(){
            //always executed
          })
        window.addEventListener('scroll',this.scrollToTop)
      },
      destroyed() {
        window.removeEventListener('scroll',this.scrollTop)
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
  .video{
    width: 100%;
    height: 220px;
  }
  .video video{
    width: 100%;
  }
  .ad{
    width: 90%;
    margin: 0 auto;
    position: relative;
  }
  .ad>img{
    width: 100%;
  }
  .ad>a{
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .video_infor{
    /*width: 100%;*/
    margin: 10px 20px;
    position: relative;
  }
  .video_infor h3{
    font-size: 18px;
    font-weight: bold;
  }
  .video_infor p{
    margin: 10px 20px;
    font-size: 14px;
    color: darkgray;
    width: 300px;
  }
  .video_infor .hot{
    position: relative;
  }
  .video_infor .hot::before{
    content: '';
    width: 40px;
    height: 40px;
    display: flex;
    background: url("../../assets/images/details/hot-icon-20181112.png") no-repeat -90px -3px;
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(0.5) translate(-62px,-20px);
  }
  .person{
    font-size: 14px;
    width: 100px;
    display: flex;
    position: absolute;
    top: 34px;
    right: 15px;
    color: gray;
  }
  .headpic{
    display: flex;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 5px;
  }
  .headpic img{
    width: 20px;
  }
  .btn{
    position: relative;
    width: 100%;
    border-bottom: 1px solid #f2f2f2;
  }
  .btn ul{
    display: flex;
    justify-content: space-around;
  }
  .btn li{
    text-align: center;
  }
  .btn ul>li .pic{
    content: '';
    display: flex;
    width: 70px;
    height: 64px;
    transform: scale(0.4) translate(0,-20px);
  }
  .btn ul>li .font{
    position: absolute;
    transform: translate(-16px,-20px);
    font-size: 14px;
  }
  .btn ul>li:nth-of-type(3) .font{
    transform: translate(-16px,-26px);
  }
  .btn ul>li:nth-of-type(4) .font{
    transform: translate(-16px,-24px);
  }
  .btn li:nth-of-type(1) .pic{
    background: url("../../assets/images/details/litter_video.png")no-repeat 0 -31px;
  }
  .btn li:nth-of-type(2) .pic{
    background: url("../../assets/images/details/litter_video.png")no-repeat -74px -31px;
  }
  .btn li:nth-of-type(3) .pic{
    width: 72px;
    height: 70px;
    background: url("../../assets/images/details/litter_video.png")no-repeat -291px -31px;
  }
  .btn li:nth-of-type(4) .pic{
    height: 68px;
    background: url("../../assets/images/details/litter_video.png")no-repeat -144px -31px;
  }
  section>h6{
    font-size: 14px;
    font-weight: bold;
    margin: 20px;
  }
  section li>a{
    color: gray;
    text-decoration: none;
  }
  section .top{
    position: relative;
    width: 100%;
    overflow: hidden;
  }
  section .top h4{
    font-size: 16px;
    color: white;
    font-weight: bold;
    position: absolute;
    top: 10px;
    left: 10px;
  }
  section .top img{
    width: 100%;
  }
  section .top .hot1{
    color: white;
    position: absolute;
    left: 10px;
    bottom: 10px;
  }
  section .top .time1{
    color: white;
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
  section .bottom .users .head{
    display: flex;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
  }
  .users .head img{
    width: 30px;
  }
  .users{
    display: flex;
    align-items: center;
  }
  section .bottom{
    /*width: 100%;*/
    margin: 10px;
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
    position: relative;
  }
  section .bottom .others{
    display: flex;
    position: absolute;
    right: 0px;
    top: 0;
    transform: translate(0, -10px);
  }
  section .bottom .others>span{
    display: flex;
    width: 55px;
    height: 55px;
    transform: scale(0.42);
    position: relative;
  }
  section .bottom .others>span:nth-of-type(1){
    background: url("../../assets/images/details/litter_video.png")no-repeat -1px -251px;
  }
  section .bottom .others>span:nth-of-type(2){
    background: url("../../assets/images/details/litter_video.png")no-repeat -120px -251px;
  }
  section .bottom .others>span:nth-of-type(3){
    background: url("../../assets/images/details/litter_video.png")no-repeat -178px -251px;
  }
  .others span>.like,.others span>.speak{
    position: absolute;
    top: -12px;
    right: -21px;
    font-size: 25px;
  }
  section .top::after{
    content: '';
    display: flex;
    width: 44px;
    height: 44px;
    background: url("../../assets/images/details/playPage-icon-2019040315.png")no-repeat -128px -81px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .fix{
    display: flex;
    width: 30px;
    height: 30px;
    position: fixed;
    right: 20px;
    bottom: 20px;
    transform: scale(2.6);
  }
  .end{
    text-align: center;
    transform: scale(0.6);
  }

</style>
<style>

</style>
