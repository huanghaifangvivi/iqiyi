<template>
    <div class="hide">
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
      <section>
        <div class="movie">
          <p>影视·休闲</p>
          <ul>
            <li>
              <dl>
                <router-link to="/TV">
                  <dd>
                    <span class="icon"></span>
                    <span>电视剧</span>
                  </dd>
                </router-link>
                <router-link to="/movie">
                  <dd>
                    <span class="icon"></span>
                    <span>电影</span>
                  </dd>
                </router-link>
                <router-link to="/movie">
                  <dd>
                    <span class="icon"></span>
                    <span>纪录片</span>
                  </dd>
                </router-link>
                <router-link to="/movie">
                  <dd>
                    <span class="icon"></span>
                    <span>影讯</span>
                  </dd>
                </router-link>
                <router-link to="/movie">
                  <dd>
                    <span class="icon"></span>
                    <span>片花</span>
                  </dd>
                </router-link>
                <router-link to="/movie">
                  <dd>
                    <span class="icon"></span>
                    <span>网络电影</span>
                  </dd>
                </router-link>
              </dl>
            </li>
            <li>
              <dl>
                <router-link to="/TV">
                  <dd>
                    <span class="icon"></span>
                    <span>综艺</span>
                  </dd>
                </router-link>
                <router-link to="/movie">
                  <dd>
                    <span class="icon"></span>
                    <span>动漫</span>
                  </dd>
                </router-link>
                <router-link to="/movie">
                  <dd>
                    <span class="icon"></span>
                    <span>脱口秀</span>
                  </dd>
                </router-link>
                <router-link to="/movie">
                  <dd>
                    <span class="icon"></span>
                    <span>娱乐</span>
                  </dd>
                </router-link>
                <router-link to="TV">
                  <dd>
                    <span class="icon"></span>
                    <span>搞笑</span>
                  </dd>
                </router-link>
                <router-link to="/movie">
                  <dd>
                    <span class="icon"></span>
                    <span>音乐</span>
                  </dd>
                </router-link>
              </dl>
            </li>
            <li>
              <dl>
                <router-link to="/movie">
                  <dd>
                    <span class="icon"></span>
                    <span>奇秀直播</span>
                  </dd>
                </router-link>
                <router-link to="/TV">
                  <dd>
                    <span class="icon"></span>
                    <span>直播中心</span>
                  </dd>
                </router-link>
                <router-link to="/TV">
                  <dd>
                    <span class="icon"></span>
                    <span>全网影视</span>
                  </dd>
                </router-link>
              </dl>
            </li>
          </ul>
        </div>
        <div class="choose">
          <p>精选·合家欢</p>
          <ul>
            <li>
              <dl>
                <router-link to="/hot">
                  <dd>
                    <span class="icon"></span>
                    <span>游戏</span>
                  </dd>
                </router-link>
                <router-link to="/hot">
                  <dd>
                    <span class="icon"></span>
                    <span>热点</span>
                  </dd>
                </router-link>
                <router-link to="/hot">
                  <dd>
                    <span class="icon"></span>
                    <span>风云榜</span>
                  </dd>
                </router-link>
                <router-link to="/hot">
                  <dd>
                    <span class="icon"></span>
                    <span>资讯</span>
                  </dd>
                </router-link>
                <router-link to="/hot">
                  <dd>
                    <span class="icon"></span>
                    <span>原创</span>
                  </dd>
                </router-link>
                <router-link to="/children">
                  <dd>
                    <span class="icon"></span>
                    <span>儿童</span>
                  </dd>
                </router-link>
              </dl>
            </li>
            <li>
              <dl>
                <router-link to="/children">
                  <dd>
                    <span class="icon"></span>
                    <span>母婴</span>
                  </dd>
                </router-link>
                <router-link to="/children">
                  <dd>
                    <span class="icon"></span>
                    <span>知识</span>
                  </dd>
                </router-link>
                <router-link to="/children">
                  <dd>
                    <span class="icon"></span>
                    <span>健康</span>
                  </dd>
                </router-link>
                <router-link to="/children">
                  <dd>
                    <span class="icon"></span>
                    <span>生活</span>
                  </dd>
                </router-link>
                <router-link to="/children">
                  <dd>
                    <span class="icon"></span>
                    <span>体育</span>
                  </dd>
                </router-link>
              </dl>
            </li>
          </ul>
        </div>
        <div class="other">
          <p>其他频道</p>
          <ul>
            <li>
              <dl>
                <router-link to="/choose">
                  <dd>
                    <span class="icon"></span>
                    <span>科技</span>
                  </dd>
                </router-link>
                <router-link to="/choose">
                  <dd>
                    <span class="icon"></span>
                    <span>军事</span>
                  </dd>
                </router-link>
                <router-link to="/choose">
                  <dd>
                    <span class="icon"></span>
                    <span>汽车</span>
                  </dd>
                </router-link>
                <router-link to="/choose">
                  <dd>
                    <span class="icon"></span>
                    <span>财经</span>
                  </dd>
                </router-link>
                <router-link to="/choose">
                  <dd>
                    <span class="icon"></span>
                    <span>旅游</span>
                  </dd>
                </router-link>
                <router-link to="/choose">
                  <dd>
                    <span class="icon"></span>
                    <span>时尚</span>
                  </dd>
                </router-link>
              </dl>
            </li>
            <li>
              <dl>
                <router-link to="/choose">
                  <dd>
                    <span class="icon"></span>
                    <span>演出</span>
                  </dd>
                </router-link>
                <router-link to="/choose">
                  <dd>
                    <span class="icon"></span>
                    <span>广告</span>
                  </dd>
                </router-link>
                <router-link to="/choose">
                  <dd>
                    <span class="icon"></span>
                    <span>公益</span>
                  </dd>
                </router-link>
              </dl>
            </li>
          </ul>
        </div>
        <div class="end"><img src="../../assets/images/hide/foot.png" alt=""></div>
      </section>
    </div>
</template>

<script>
    export default {
        name: "hide.vue",
        data(){
          return {

          }
        }
    }

</script>

<style scoped lang="less">
  header{
    height: 44px;
    background: #191919;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
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
  @imgsrc:url('../../assets/images/hide/litter_03.png') no-repeat;
  section{
    margin-top: 44px;
  }
  section p{
    background: #f7f7f7;
    color: #999999;
    line-height: 24px;
    font-size: 14px;
    padding-left: 20px;
  }
  section ul{
    display: flex;
    flex-direction: column;
  }
  section li{
    border-bottom: 1px solid #f0f0f0;
  }
  .movie li:nth-of-type(3){
    border: none;
  }
  .choose li:nth-of-type(2){
    border: none;
  }
  .other li:nth-of-type(2){
    border: none;
  }
  section ul>li>dl{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    /*border-bottom: 1px solid #a8a8a8;*/
    justify-content: center;
    align-content: center;
  }

  section li dd{
    width: 33vw;
    height: 33vw;
    text-align: center;
    display: flex;
    font-size: 14px;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }

  section li dd>.icon{
    width: 72%;
    height: 72%;
    display: flex;
    margin: 0 auto;
    background: red;
    transform: scale(0.4);
  }

  .end{
    text-align: center;
    transform: scale(0.8);
  }
  section li a{
    color: black;
    text-decoration: none;
  }
  .movie li:nth-of-type(1) a:nth-of-type(1) .icon{
    background: @imgsrc -30px -32px;
  }
  .movie li:nth-of-type(1) a:nth-of-type(2) .icon{
    background: @imgsrc -180px -32px;
  }
  .movie li:nth-of-type(1) a:nth-of-type(3) .icon{
    background: @imgsrc -330px -32px;
  }
  .movie li:nth-of-type(1) a:nth-of-type(4) .icon{
    background: @imgsrc -480px -32px;
  }
  .movie li:nth-of-type(1) a:nth-of-type(5) .icon{
    background: @imgsrc -630px -32px;
  }
  .movie li:nth-of-type(1) a:nth-of-type(6) .icon{
    background: @imgsrc -780px -32px;
  }
  .movie li:nth-of-type(2) a:nth-of-type(1) .icon{
    background: @imgsrc -30px -182px;
  }
  .movie li:nth-of-type(2) a:nth-of-type(2) .icon{
    background: @imgsrc -180px -182px;
  }
  .movie li:nth-of-type(2) a:nth-of-type(3) .icon{
    background: @imgsrc -330px -182px;
  }
  .movie li:nth-of-type(2) a:nth-of-type(4) .icon{
    background: @imgsrc -480px -182px;
  }
  .movie li:nth-of-type(2) a:nth-of-type(5) .icon{
    background: @imgsrc -630px -182px;
  }
  .movie li:nth-of-type(2) a:nth-of-type(6) .icon{
    background: @imgsrc -780px -182px;
  }
  .movie li:nth-of-type(3) a:nth-of-type(1) .icon{
    background: @imgsrc -30px -336px;
  }
  .movie li:nth-of-type(3) a:nth-of-type(2) .icon{
    background: @imgsrc -180px -336px;
  }
  .movie li:nth-of-type(3) a:nth-of-type(3) .icon{
    background: @imgsrc -330px -336px;
  }
  .choose li:nth-of-type(1) a:nth-of-type(1) .icon{
    background: @imgsrc -480px -336px;
  }
  .choose li:nth-of-type(1) a:nth-of-type(2) .icon{
    background: @imgsrc -630px -336px;
  }
  .choose li:nth-of-type(1) a:nth-of-type(3) .icon{
    background: @imgsrc -780px -336px;
  }
  .choose li:nth-of-type(1) a:nth-of-type(4) .icon{
    background: @imgsrc -30px -488px;
  }
  .choose li:nth-of-type(1) a:nth-of-type(5) .icon{
    background: @imgsrc -180px -488px;
  }
  .choose li:nth-of-type(1) a:nth-of-type(6) .icon{
    background: @imgsrc -330px -488px;
  }
  .choose li:nth-of-type(2) a:nth-of-type(1) .icon{
    background: @imgsrc -480px -488px;
  }
  .choose li:nth-of-type(2) a:nth-of-type(2) .icon{
    background: @imgsrc -630px -488px;
  }
  .choose li:nth-of-type(2) a:nth-of-type(3) .icon{
    background: @imgsrc -780px -488px;
  }
  .choose li:nth-of-type(2) a:nth-of-type(4) .icon{
    background: @imgsrc -30px -632px;
  }
  .choose li:nth-of-type(2) a:nth-of-type(5) .icon{
    background: @imgsrc -180px -632px;
  }
  .other li:nth-of-type(1) a:nth-of-type(1) .icon{
    background: @imgsrc -330px -632px;
  }
  .other li:nth-of-type(1) a:nth-of-type(2) .icon{
    background: @imgsrc -480px -632px;
  }
  .other li:nth-of-type(1) a:nth-of-type(3) .icon{
    background: @imgsrc -630px -632px;
  }
  .other li:nth-of-type(1) a:nth-of-type(4) .icon{
    background: @imgsrc -780px -632px;
  }
  .other li:nth-of-type(1) a:nth-of-type(5) .icon{
    background: @imgsrc -30px -784px;
  }
  .other li:nth-of-type(1) a:nth-of-type(6) .icon{
    background: @imgsrc -180px -784px;
  }
  .other li:nth-of-type(2) a:nth-of-type(1) .icon{
    background: @imgsrc -330px -784px;
  }
  .other li:nth-of-type(2) a:nth-of-type(2) .icon{
    background: @imgsrc -480px -784px;
  }
  .other li:nth-of-type(2) a:nth-of-type(3) .icon{
    background: @imgsrc -630px -784px;
  }





</style>
