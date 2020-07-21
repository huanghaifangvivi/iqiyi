<template>
  <div class="vip_choose">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in banner">
        <div class="banner">
          <router-link to="/details2"></router-link>
          <img :src="item.imgsrc" alt="">
          <h5>{{item.h5}}</h5>
          <span>{{item.tip}}</span>
        </div>
      </mt-swipe-item>
    </mt-swipe>
    <section>
        <div class="hot">
          <h4>正在热播</h4>
          <ul>
            <li v-for="item in hot">
              <router-link to="/details1"></router-link>
              <div class="img">
                <img :src="item.imgsrc" alt="">
                <span>{{item.flag}}</span><span>{{item.tip}}</span>
              </div>
              <h5>{{item.h5}}</h5>
              <p>{{item.p}}</p>
            </li>
          </ul>
          <p><span class="iconfont icon-shuaxin"></span> 换一批</p>
        </div>
        <div class="online">
          <h4>即将上线</h4>
          <ul>
            <li v-for="item in online">
              <router-link to="/details"></router-link>
              <span>{{item.time}}</span>
              <div class="img">
                <img :src="item.imgsrc" alt="">
                <span>{{item.tip}}</span>
              </div>
              <h5>{{item.h5}}</h5>
              <p>{{item.p}}</p>
              <span><span class="iconfont icon-shijianzhongbiao2"></span>预约</span>
            </li>
          </ul>
          <p class="more"><span class="iconfont icon-bofang"></span> 查看更多</p>
        </div>
        <div class="movie">
          <h4>电影魔方</h4>
          <p>查看片库 <span class="iconfont icon-danseshixintubiao-"></span></p>
          <ul>
            <li v-for="item in movie">
              <h5>{{item.h5}}</h5>
              <p>{{item.p}}</p>
            </li>
          </ul>
        </div>
        <div class="loop">
          <div v-for="item in loop">
            <h4>{{item.h4}}</h4>
            <ul>
              <li v-for="i in item.li">
                <div class="img">
                  <img :src="i.imgsrc" alt="">
                  <span>{{i.flag}}</span><span>{{i.tip}}</span>
                </div>
                <h5>{{i.h5}}</h5>
                <p>{{i.p}}</p>
              </li>
            </ul>
            <p class="more"><span class="iconfont icon-bofang"></span> 查看更多</p>
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
      name: "vip_choose",
      data(){
        return{
          banner:{},
          hot:{},
          online:{},
          movie:{},
          loop:{},
          for1:{}
        }
      },
      mounted() {
        this.$http.get('./data/vip_choose.json')
          .then((response)=>{
            //success
            console.log(response.data);
            this.banner=response.data.banner;
            this.hot=response.data.hot;
            this.online=response.data.online;
            this.movie=response.data.movie;
            this.loop=response.data.loop;
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
  .banner{
    height: 185px;
    position: relative;
  }
  .banner>a{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .banner img{
    width: 100%;
  }
  .banner>h5{
    position: absolute;
    color: white;
    bottom: 2px;
    left: 20px;
    font-weight: bold;
  }
  .banner>span{
    position: absolute;
    color: white;
    bottom: 2px;
    right: 2px;
    font-size: 12px;
  }

  section>div{
    margin-top: 20px;
    padding-bottom: 20px;
  }
  section h4{
    font-size: 16px;
    font-weight: bold;
    margin: 10px;
  }
  section .hot{
    border-bottom: 1px solid #f2f2f2;
  }
  .hot .img{
    position: relative;
  }
  .hot ul{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .hot ul>li{
    width: 32%;
    position: relative;
  }
  .hot ul>li a,.online ul>li a{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .hot li .img>img{
    width: 100%;
  }
  .hot .img span:nth-of-type(1){
    background: #00cc36;
    padding: 1px 3px;
    color: white;
    font-size: 12px;
    position: absolute;
    top: 2px;
    right: 2px;
  }
  .hot .img span:nth-of-type(2){
    color: white;
    font-size: 12px;
    font-weight: bold;
    position: absolute;
    bottom: 4px;
    right: 2px;
  }
  .hot li>h5{
    margin-left: 2px;
    margin-top: 2px;
    font-size: 14px;
    font-weight: bold;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .hot li{
    margin-bottom: 20px;
  }
  .hot li>p{
    margin-left: 2px;
    font-size: 12px;
    color: gray;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .hot>p{
    text-align: center;
    color: #bb8b51;
    position: relative;
  }
  .online{
    border-bottom: 1px solid #f2f2f2;
    overflow: auto;
    position: relative;
  }
  .online::-webkit-scrollbar{
    display: none;
  }
  .online ul{
    width: 400%;
    display: flex;
    margin-top: 20px;
    border-top: 1px solid #f2f2f2;
  }
  .online li{
    width: 30vw;
    margin-right: 2px;
    position: relative;
    margin-top: 20px;
  }
  .online .img{
    height: 150px;
    overflow: hidden;
    position: relative;
  }
  .online li .img img{
    width: 100%;
    display: flex;
  }
  .online li>span:nth-of-type(1){
    display: flex;
    font-size: 12px;
    position: absolute;
    top:-28px;
    left: 50%;
    transform: translateX(-50%);
    background: white;
    padding: 0 2px;
  }
  .online li .img>span{
    color: white;
    font-size: 12px;
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    text-align: center;
  }
  .online li>h5{
    font-size: 14px;
    margin-top: 2px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .online li>p{
    font-size: 12px;
    color: gray;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .online li>span:nth-of-type(2){
    color: #bb8b51;
    display: flex;
    padding: 0 8px;
    width: 60px;
    line-height: 30px;
    border-radius: 20px;
    background: #f2f2f2;
    justify-content: center;
    font-size: 14px;
    margin: 20px auto;
  }
  p.more{
    color: #bb8b51;
    text-align: center;
  }
  .movie{
    position: relative;
    padding: 0px 10px;
    padding-bottom: 20px;
    border-bottom: 1px solid #f2f2f2;
  }
  .movie>p{
    color: gray;
    position: absolute;
    top: 0;
    right: 10px;
    font-size: 14px;
  }
  .movie li{
    width: 30vw;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    margin: 3px 0;
  }
  .movie ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .movie li:nth-of-type(2n+1){
    background: #faf6f1;
    color: #bb8b51;
  }
  .movie li:nth-of-type(2n){
    background: #f4f4f4;
  }
  .movie li:nth-of-type(n) p{
    color: gray;
    font-size: 12px;
  }
  .loop>div{
    padding-bottom: 20px;
    border-bottom: 1px solid #f2f2f2;
  }
  .loop>div ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .loop>div li{
    width: 32%;
    margin-bottom: 20px;
  }
  .loop>div li>.img{
    position: relative;
  }
  .loop>div li img{
    width: 100%;
    display: flex;
  }
  .loop>div li>.img span:nth-of-type(1){
    color: white;
    background: #00cc36;
    position: absolute;
    top:2px;
    right: 2px;
    font-size: 12px;
    padding: 1px 2px;
    border-radius: 2px;
  }
  .loop>div li>.img span:nth-of-type(2){
    color: #bb8b51;
    font-weight: bold;
    font-size: 12px;
    bottom: 2px;
    right: 2px;
    position: absolute;
  }
  .loop>div li>h5{
    font-size: 14px;
    margin-top: 2px;
    font-weight: bold;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .loop>div li>p{
    color: gray;
    font-size: 12px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
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
  .end{
    text-align: center;
    transform: scale(0.6);
  }
</style>
<style>
  .vip_choose .mint-swipe-items-wrap{
    width: 100%;
    height: 50vw;
    margin-top: 10px;
  }
  .vip_choose .mint-swipe-indicators{
    display: none;
  }
  .vip_choose .is-active{
    transform: scale(1.2);
  }

</style>
