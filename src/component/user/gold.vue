<template>
    <div class="gold">
      <div class="gold1">
        <h5>黄金VIP会员 <span>(电脑、ipad、手机均可使用)</span><span>会员卡激活</span></h5>
        <div class="money">
          <ul>
            <li v-for="item in vip" @click="bg">
              <h4>{{item.h4}}</h4>
              <p>￥<span>{{item.free}}</span></p>
              <p>{{item.p}}</p>
              <span>{{item.span}}</span>
            </li>
          </ul>
        </div>
        <p>到期按每年178元自动续费，可随时取消 <span class="iconfont icon-jubao"></span></p>
        <h3>代金券<span>还没有代金券哦</span></h3>
      </div>
      <div class="pay">
        <p><img src="../../assets/images/money/9.png" alt=""><span>微信支付</span><span @click="change(1)" :class="{add:right==1}"></span></p>
        <p><img src="../../assets/images/money/10.png" alt=""><span>支付宝支付</span><span @click="change(2)" :class="{add:right==2}"></span></p>
        <p><img src="../../assets/images/money/3.png" alt=""><span>银行卡(买年卡首次绑卡立减20元)</span><span @click="change(3)" :class="{add:right==3}"></span></p>
      </div>
      <div class="spical">
        <h5>黄金VIP会员特权</h5>
        <div class="img">
          <img src="../../assets/images/money/2.png" alt="">
        </div>
      </div>
      <p>会员服务协议</p>
      <div class="end">
        <img src="../../assets/images/money/pay-logo.png" alt="">
      </div>
      <div class="fix">
        <div class="left">
          <p><span>总计：</span><span>￥178</span><span>已优惠20元</span><span>明细</span></p>
          <p>开通会员代表接受《会员服务协议》</p>
        </div>
        <div class="right">
          确认支付
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "gold",
      data(){
        return{
          vip:{},
          bgColor:false,
          right:-1
        }
      },
      methods:{
        bg(a){
          this.bgColor=!this.bgColor;
          if(this.bgColor){
            a.target.style.background="#fffaf2";
            a.target.style.border="1px solid #e6b958"
          }else{
            a.target.style.background="#fff";
            a.target.style.border="1px solid #f2f2f2"
          }
        },
        change(index){
          this.right=index;
        }
      },
      mounted() {
        this.$http.get('./data/gold.json')
          .then((response)=>{
            //success
            console.log(response.data);
            this.vip=response.data.vip;
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
  .gold .pay>p .add{
    background:url('../../assets/images/money/radio-icon.png')no-repeat -19px 0px;
    background-size: 190%;
  }
  .gold1>h5{
    font-size: 15px;
    font-weight: bold;
    padding: 10px;
    position: relative;
  }
  .gold1>h5>span:nth-of-type(1){
    font-size: 12px;
    font-weight: normal;
  }
  .gold1>h5>span:nth-of-type(2){
    font-size: 12px;
    font-weight: normal;
    color: gray;
    position: absolute;
    top: 14px;
    right: 16px;
  }
  .gold1>h5>span:nth-of-type(2)::after,.gold1>h3>span::after,.gold>p::after{
    content: '';
    display: flex;
    width: 20px;
    height: 20px;
    position: absolute;
    top: -4px;
    right: -14px;
    background: url("../../assets/images/money/right-arrow.png");
    transform: scale(0.6);
  }
  .gold .money{
    overflow: auto;
  }
  .gold .money::-webkit-scrollbar{
    display: none;
  }
  .gold1 ul{
    width: 440%;
    display: flex;
    margin-left: 20px;
  }
  .gold1 ul>li{
    width: 30vw;
    height: 28vw;
    border: 1px solid #f2f2f2;
    position: relative;
    text-align: center;
    padding-top: 20px;
    margin-right: 4px;
  }
  .gold1 li>h4{
    font-size: 18px;
    font-weight: bold;
    color: #666666;
  }
  .gold1 li>p:nth-of-type(1){
    color:#bb8b51;
  }
  .gold1 li>p:nth-of-type(1) span{
    font-weight: bold;
    font-size: 24px;
  }
  .gold1 li>p:nth-of-type(2){
    font-size: 12px;
    color: gray;
  }
  .gold1 li>span{
    color: white;
    display: flex;
    background: #e4b670;
    padding: 1px 8px;
    font-size: 12px;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 74%;
    text-align: center;
  }
  .gold1>p:nth-of-type(1){
    font-size: 12px;
    margin:10px 20px;
    color: gray;
    border-bottom: 1px solid #f2f2f2;
    padding-bottom: 10px;
  }
  .gold1>p:nth-of-type(1) span{
    font-size: 12px;
  }
  .gold1>h3{
    font-size: 16px;
    font-weight: bold;
    margin-left: 20px;
    position: relative;
  }
  .gold1>h3>span{
    font-size: 12px;
    color: gray;
    font-weight: normal;
    position: absolute;
    top: 0;
    right:20px;
  }
  .gold1{
    padding-bottom: 10px;
    border-bottom: 5px solid #f2f2f2;
  }
  .pay{
    border-bottom: 5px solid #f2f2f2;
  }
  .pay p{
    display: flex;
    align-items: center;
    margin: 10px 20px;
    font-weight: bold;
    font-size: 14px;
    position: relative;
  }
  .pay p>img{
    width: 28px;
    margin-right: 10px;
  }
  .pay p>span:nth-of-type(2){
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    width: 20px;
    height: 20px;
    background: url("../../assets/images/money/radio-icon.png")no-repeat 0px 0px;
    background-size: 190%;
  }
  .spical h5{
    font-weight: bold;
    font-size: 15px;
    padding: 10px 20px;
  }
  .spical{
    border-bottom: 5px solid #f2f2f2;
  }
  .spical .img{
    width: 100%;
  }
  .spical .img img{
    width: 100%;
    display: flex;
  }
  .gold>p{
    font-size: 14px;
    padding: 20px 20px;
    position: relative;
    border-bottom: 5px solid #f2f2f2;
  }
  .gold>p::after{
    top: 17px;
    right: 10px;
  }
  .end{
    text-align: center;
    transform: scale(0.6);
    margin-bottom: 80px;
  }
  .fix{
    background: #f2f2f2;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    height: 60px;
    width: 100%;
  }
  .fix .left{
    width: 70%;
    padding: 10px 20px;
  }
  .fix .left>p{
    position: relative;
  }
  .fix .left>p:nth-of-type(1) span:nth-of-type(2){
    color: #b27a5c;
    font-size: 16px;
    font-weight: bold;
  }
  .fix .left>p:nth-of-type(1) span:nth-of-type(3){
    margin-left: 4px;
    font-size: 12px;
    color: gray;
  }
  .fix .left>p:nth-of-type(1) span:nth-of-type(4){
    color: #b27a5c;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 14px;
  }
  .fix .left>p:nth-of-type(1) span:nth-of-type(4)::after{
    content: '';
    display: flex;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 2px;
    right: -20px;
    background: url("../../assets/images/money/arrow-gold-b27a5c.png")no-repeat;
    transform: scale(0.6);
  }
  .fix .left>p:nth-of-type(2){
    color: gray;
    font-size: 12px;
  }
  .fix .right{
    width: 30%;
    color: #5e3b20;
    background: #e6bb81;
    font-weight: bold;
    font-size: 18px;
    line-height: 60px;
    text-align: center;
  }
</style>
