<template>
    <div class="search">
      <header>
        <router-link to="/choose">
          <img class="logo1" src="../../assets/images/index/headerLogo-iqiyi.png" alt="">
        </router-link>
        <div class="search1">
          <span></span>
          <form action="/choose">
            <input type="text" placeholder="王一博" autofocus="autofocus">
          </form>
        </div>
        <router-link to="/choose">
          <span>取消</span>
        </router-link>
      </header>
      <div class="history">
        <h2>搜索历史 <span class="iconfont icon-lajitong"></span></h2>
        <ul>
          <li v-for="(item,index) in history">
            {{item}}
            <router-link to="/choose"></router-link>
          </li>
        </ul>
      </div>
      <div class="hot_search">
        <h2>热门搜索</h2>
        <ul>
          <li v-for="(item,index) in hot_search">
            <span v-color>{{index+1}}</span>
            {{item}}
            <router-link to="/choose"></router-link>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>

    export default {
        data(){
          return {
            history:{},
            hot_search:{},
            msg:'hello'
          }
        },
        directives:{
          color:{
            inserted(el){
              el.style.color="red";
            }
          }
        },
        mounted() {
            this.$http.get('../../../data/search.json')
            .then((response)=>{
              //success
              console.log(response.data);
              this.history=response.data.history;
              this.hot_search=response.data.hot_search;
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
  @header_bg :linear-gradient(90deg, #1a2e4a 0, #409890 100%);
  @header_input:linear-gradient(90deg, rgba(16,36,65,0.259) 0, rgba(17,85,99,0.259) 100%);

  header{
    height: 44px;
    background-image: @header_bg;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  header a{
    width: 18%;
    height: auto;
  }
  header a:nth-of-type(2){
    color: #d8e8e7;
    text-decoration: none;
    font-size: 16px;
  }
  .logo1{
    width: 60%;
  }
  header .search1{
    width: 100%;
    background-image:@header_input;
    display: flex;
    flex-wrap: nowrap;
    border-radius: 16px;
    transform: scale(0.9) translate(-12px,0);
  }
  header .search1 input{
    background: transparent;
    outline: none;
    border: none;
    border-radius: 16px;
    padding-left: 10px;
    color: white;
    position: relative;
    transform: translate(0,6px);
  }
  header .search1 span{
    width: 30px;
    height: 32px;
    transform: scale(0.6);
    background: url("../../assets/images/index/litter01.png")no-repeat 0 -48px;
  }
  .search>div{
    padding: 20px 20px;
    font-size: 0.96em;
  }
  .history h2,.hot_search h2{
    font-weight: bold;
    display: flex;
    position: relative;
  }
  .history h2>span{
    position: absolute;
    top: 0;
    right: 0;
    color: gray;
  }
  .history ul{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;
  }
  .history li{
    margin-top: 10px;
    margin-right: 20px;
    padding: 4px 6px;
    background: #f5f7fa;
    position: relative;
  }
  .hot_search ul{
    width: 100%;
    display: flex;
    margin-top: 10px;
    flex-wrap: wrap;
  }
  .hot_search li{
    width: 50%;
    margin-bottom: 10px;
    position: relative;
  }
  .search>div li>a{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

</style>
