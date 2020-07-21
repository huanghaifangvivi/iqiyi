<template>
  <div class="hot">
    <ul>
      <li v-for="(item,index) in hot">
        <div class="img">
          <router-link to="/details2"></router-link>
          <img :src="item.imgsrc" alt="">
          <h5>{{item.h5}}</h5>
          <span>{{item.time}}</span>
        </div>
        <div class="bottom">
          <div class="head">
            <img :src="item.head_img" alt="">
          </div>
          <span>{{item.head_name}}</span>
          <span>+关注</span>
          <span class="iconfont icon-gengduo" @click="showhide(index)"></span>
        </div>
        <div class="hide" v-if="show==index && show1==true">
          <ul>
            <li>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-iconfontzhizuobiaozhunbduan32"></use>
              </svg>
              微信好友
            </li>
            <li>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-pengyouquan"></use>
              </svg>
              朋友圈
            </li>
            <li>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-QQ"></use>
              </svg>
              QQ
            </li>
            <li>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-QQkongjian"></use>
              </svg>
              QQ空间
            </li>
            <li>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-changyonglogo29"></use>
              </svg>
              新浪微博
            </li>
            <li>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-link"></use>
              </svg>
              复制链接
            </li>
          </ul>
          <ul>
            <li><span class="iconfont icon-shoucang"></span>收藏</li>
            <li><span class="iconfont icon-jubao"></span>举报</li>
            <li><span class="iconfont icon-bukaixin"></span>不喜欢</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
      name: "hot",
      data(){
        return{
          hot:{},
          show:-1,
          show1:false
        }
      },
      methods:{
        showhide(index){
          this.show1=!this.show1;
          this.show=index;
        }
      },
      mounted() {
        this.$http.get('./data/hot.json')
          .then((response)=>{
            //success
            console.log(response.data);
            this.hot=response.data.hot;
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
  .hot>ul>li{
    margin-bottom: 20px;
  }
  .hot>ul>li .img img{
    width: 100%;
    display: flex;
  }
  .hot>ul>li .img{
    position: relative;
  }
  .hot>ul>li .img a{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .hot .img h5{
    color: white;
    font-size: 16px;
    font-weight: bold;
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .hot .img span{
    color: white;
    font-weight: bold;
    font-size: 12px;
    position: absolute;
    bottom: 4px;
    right: 4px;
  }
  .hot>ul>li .head{
    margin: 10px 10px;
    width: 30px;
    height: 30px;
    overflow: hidden;
    border-radius: 50%;
  }
  .hot>ul>li .head img{
    width: 100%;
  }
  .hot>ul>li .bottom{
    display: flex;
    align-items: center;
    position: relative;
  }
  .hot>ul>li .bottom>span:nth-of-type(2){
    margin-left: 10px;
    color: #00cc36;
    font-weight: bold;
    font-size: 14px;
  }
  .hot>ul>li .bottom>span:nth-of-type(3){
    position: absolute;
    top: 18px;
    right: 10px;
    font-size: 18px;
    color: gray;
  }
  .hot .img::after{
    content: '';
    width: 80px;
    height: 80px;
    display: flex;
    background: url("../../assets/images/details/playPage-icon-2019040315.png")no-repeat -221px -76px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) scale(0.8);
  }
  .hot .hide{
    background: #f5f7fa;
    width: 90%;
    margin: 10px auto;
  }
  .hide>ul{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  }
  .hide>ul:nth-of-type(1){
    border-bottom: 1px dotted gray;
  }
  .hide>ul:nth-of-type(1) li:nth-of-type(1) svg{
    color: #00cc36;
  }
  .hide>ul:nth-of-type(1) li:nth-of-type(5) svg{
    color:red;
  }
  .hide>ul:nth-of-type(2) span{
    font-size: 22px;
  }
  .hide>ul>li{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
  }
  .hide>ul>li>svg{
    font-size: 22px;
  }
  .hot .img>a{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
</style>

<style>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
