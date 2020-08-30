<template>
  <div class="order-pay">
    <order-header :title="オーダー支払い"></order-header>
    <div class="wrapper">
      <div class="container">
        <div class="order-wrap">
          <div class="item-order">
            <div class="icon-succ"></div>
            <div class="order-info">
              <h2>支払いへGoーだ！</h2>
              <p><span>30分</span>以内に支払ってください</p>
              <p>配送先：{{addressInfo}}</p>
            </div>
            <div class="order-total">
              <p>商品金額：<span>＄{{payment}}</span></p>
              <p>オーダー詳細<em class="icon-down" :class="{'up':showDetail}" @click="showDetail=!showDetail"></em></p>
            </div>
          </div>
          <div class="item-detail" v-if="showDetail">
            <div class="item">
              <div class="detail-title">オーダー番号：</div>
              <div class="detail-info theme-color">{{orderId}}</div>
            </div>
            <div class="item">
              <div class="detail-title">配送先：</div>
              <div class="detail-info">{{addressInfo}}</div>
            </div>
            <div class="item good">
              <div class="detail-title">商品名：</div>
              <div class="detail-info">
                <ul>
                  <li v-for="(item,index) in orderDetail" :key="index">
                    <img v-lazy="item.productImage"/>{{item.productName}}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="item-pay">
          <h3>支払い方法を選んでください</h3>
          <div class="pay-way">
            <p>電子マネー</p>
            <div class="pay pay-ali checked" @click="paySubmit"></div>
          </div>
        </div>
      </div>
    </div>
    <modal
      title="支払い確認"
      btnType="3"
      :showModal="showPayModal"
      sureText="オーダー確認"
      cancelText="未完成"
      @cancel="showPayModal=false"
      @submit="goOrderList"
    >
      <template v-slot:body>
        <p>支払いを完了しましたか？</p>
      </template>
    </modal>
  </div>
</template>
<script>
import OrderHeader from './../components/OrderHeader'
import Modal from './../components/modal'
export default{
  name:'order-pay',
  data(){
    return {
      orderId:this.$route.query.orderNo,
      addressInfo:'',//配送先
      orderDetail:[],//オーダー詳細
      showDetail:false,//オーダー詳細表示
      payment:0,//商品金額
      showPayModal:false,//オーダー支払い確認表示
      T:''//タイマー
    }
  },
  components:{
    Modal,
    OrderHeader
  },
  mounted(){
    this.getOrderDetail();
  },
  methods:{
    //ゲットオーダー詳細
    getOrderDetail(){
      this.axios.get(`/orders/${this.orderId}`).then((res)=>{
        let item = res.shippingVo;
        this.addressInfo = `${item.receiverName} ${item.receiverMobile} ${item.receiverProvince} ${item.receiverCity} ${item.receiverDistrict} ${item.receiverAddress}`;
        this.orderDetail = res.orderItemVoList;
        this.payment = res.payment;
      })
    },
    //支払い確認へ
    paySubmit(){
        window.open('/#/order/alipay?orderId='+this.orderId,'_blank');
        this.showPayModal = true
        this.loopPaymentStatus()
    },
    //オーダーリストへ
    goOrderList(){
      this.$router.push('/order/list');
      clearInterval(this.T)
    },
    //支払い状況確認
    loopPaymentStatus(){
      this.T = setInterval(() => {
        this.axios.get(`/orders/${this.orderId}`).then((res) => {
          if (res.status == 10) {
            clearInterval(this.T)
            this.goOrderList()
          }
        })
      },1000)
    }
  }
}
</script>
<style lang="scss">
  .order-pay{
    .wrapper{
      background-color:#F5F5F5;
      padding-top:30px;
      padding-bottom:61px;
      .order-wrap{
        padding: 62px 50px;
        background-color: #fff;
        font-size:14px;
        margin-bottom:30px;
        .item-order{
          display: flex;
          align-items: center;
          .icon-succ{
            width: 90px;
            height: 90px;
            border-radius: 50%;
            background:url('/imgs/icon-gou.png') #80c58a no-repeat center;
            background-size:60px;
            margin-right:40px;
          }
          .order-info{
            margin-right: 248px;
            h2{
              font-size:24px;
              color:#333333;
              margin-bottom:20px;
            }
            p{
              color:#666666;
              span{
                color:#FF6700;
              }
            }
          }
          .order-total{
            &>p:first-child{
              margin-bottom:30px;
            }
            span{
              font-size:28px;
              color:#FF6700;
            }
            .icon-down{
              display:inline-block;
              width:14px;
              height:10px;
              background:url('/imgs/icon-down.png') no-repeat center;
              background-size:contain;
              margin-left:9px;
              transition:all .5s;
              cursor:pointer;
              &.up{
                transform: rotate(180deg);
              }
            }
            .icon-up{
              transform: rotate(180deg);
            }
          }
        }
        .item-detail{
          border-top: 1px solid #D7D7D7;
          padding-top: 47px;
          padding-left: 130px;
          font-size: 14px;
          margin-top: 45px;
          .item{
            margin-bottom:19px;
            .detail-title{
              float:left;
              width:100px;
            }
            .detail-info{
              display:inline-block;
              img{
                width: 30px;
                vertical-align: middle;
              }
            }
          }
        }
      }
      .item-pay{
        padding:26px 50px 72px;
        background-color:#ffffff;
        color: #333333;
        h3{
          font-size: 20px;
          font-weight: 200;
          color: #333333;
          padding-bottom: 24px;
          border-bottom: 1px solid #D7D7D7;
          margin-bottom: 26px;
        }
        .pay-way{
          font-size:18px;
          .pay{
            display:inline-block;
            width:188px;
            height:64px;
            border:1px solid #D7D7D7;
            cursor:pointer;
            &:last-child{
              margin-left:20px;
            }
            &.checked{
              border:1px solid #FF6700;
            }
          }
          .pay-ali{
            background:url('/imgs/pay/icon-ali.png') no-repeat center;
            background-size:103px 38px;
            margin-top:19px;
          }
        }
      }
    }
  }
</style>