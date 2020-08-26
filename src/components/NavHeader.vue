<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">ホーム</a>
          <a href="javascript:;">仮１</a>
          <a href="javascript:;">仮２</a>
          <a href="javascript:;">仮３</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-if="username">マイオーダー</a>
          <a href="/#/login" v-if="!username">ログイン</a>
          <a href="javascript:;" class="my-cart"><span class="icon-cart"></span>買い物かご({{cartCount}})</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>スマホ</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in productList" :key="index">
                  <a v-bind:href="'/#/product'+item.id" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>モニター</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg">
                    </div>
                    <div class="pro-name">name</div>
                    <div class="pro-price">price</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-2.jpg">
                    </div>
                    <div class="pro-name">name</div>
                    <div class="pro-price">price</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-3.png">
                    </div>
                    <div class="pro-name">name</div>
                    <div class="pro-price">price</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-4.jpg">
                    </div>
                    <div class="pro-name">name</div>
                    <div class="pro-price">price</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-5.jpg">
                    </div>
                    <div class="pro-name">name</div>
                    <div class="pro-price">price</div>
                  </a>
                </li>
                <li class="product">
                  <a href="" target="_blank">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-6.png">
                    </div>
                    <div class="pro-name">name</div>
                    <div class="pro-price">price</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:;" class="icon-search"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'nav-header',
    data(){
      return {
        productList:[]
      }
    },
    computed:{
      /*
      username(){
        return this.$store.state.username
      },
      cartCount(){
        return this.$store.state.cartCount
      }*/
      ...mapState(['username','cartCount'])
    },
    mounted(){
      this.getProductList()
    },
    methods:{
      getProductList(){
        this.axios.get('/products',{
          params:{
            categoryId:'100012'
          }
        }).then((res) => {
          if (res.list.length >= 6) {
            this.productList = res.list
          }
        })
      }
    },
    filters:{
      currency(val){
        if(!val) return '0.00'
        return '$' + val.toFixed(2)
      }
    }
}
</script>

<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
  .header{
    .nav-topbar{
      height: 39px;
      line-height: 39px;
      .container{
        background-color: $colorB;
        color:#B0B0B0;
        display: flex;
        justify-content:space-between;
        align-items: center;
        a{
          display: inline-block;
          color: #B0B0B0;
          margin-right: 17px;
        }
        .topbar-menu{
          margin-left:17px;
        }
        .topbar-user{
          .my-cart{
            width:110px;
            text-align: center;
            background-color: $colorA;
            color: #ffffff;
            margin-right: 0;
            .icon-cart{
              width: 16px;
              height: 12px;
              display: inline-block;
              background: url('/imgs/icon-cart-checked.png') no-repeat center;
              background-size: contain;
              margin-right: 4px;
            }
          }
        }
      }
    }
    .nav-header{
      .container{
        position: relative;
        height: 112px;
        @include flex();
        .header-logo{
          display: inline-block;
          height: 55px;
          width: 55px;
          background-color: $colorA;
          a{
            display: inline-block;
            width: 110px;
            height: 55px;
            overflow: hidden;
            &:before{
              content:' ';
              @include bgImg(55px,55px,'/imgs/logo-mi.png',55px);
              transition: margin .2s;
            }
            &:after{
              content:' ';
              @include bgImg(55px,55px,'/imgs/mi-home.png',55px);
            }
            &:hover:before{
              margin-left: -55px;
              transition: margin .2s;
            }
          }

        }
        .header-menu{
          display: inline-block;
          width: 643px;
          padding-left: 209px;
          .item-menu{
            display: inline-block;
            color: $colorB;
            font-weight: bold;
            font-size: 16px;
            line-height: 112px;
            margin-right: 20px;
            span{
              cursor: pointer;
            }
            &:hover{
              color: $colorA;
              .children{
                height: 220px;
                opacity: 1;
              }
            }
            .children{
              position: absolute;
              top: 112px;
              left: 0;
              width: 1226px;
              opacity: 0;
              height: 0;
              overflow: hidden;
              border-top: 1px solid #e5e5e5;
              box-shadow: 0 1px 6px 0 rgba(0,0,0,.11);
              z-index: 10;
              transition: all .5s;
              background-color: #ffffff;
              .product{
                position: relative;
                float: left;
                width: 16.6%;
                height: 220px;
                font-size: 12px;
                line-height: 12px;
                text-align: center;
                a{
                  display: inline-block;
                }
                img{
                  width: auto;
                  height: 111px;
                  margin-top: 26px;
                }
                .pro-img{
                  height: 137px;
                }
                .pro-name{
                  font-weight: bold;
                  margin-top: 19px;
                  margin-bottom: 8px;
                  color: $colorB;
                }
                .pro-price{
                  color: $colorA;
                }
                &:before{
                  content: ' ';
                  position: absolute;
                  top: 28px;
                  right: 0;
                  border-left: 1px solid $colorF;
                  height: 100px;
                  width: 1px;
                }
                &:last-child:before{
                  display: none;
                }
              }
            }
          }
        }
        .header-search{
          width: 319px;
          .wrapper{
            height: 50px;
            border: 1px solid #e0e0e0;
            display: flex;
            align-items: center;
            input{
              width: 264px;
              height: 50px;
              border: none;
              box-sizing: border-box;
              border-right: 1px solid #e0e0ee;
              padding-left: 14px;
            }
            .icon-search{
              @include bgImg(16px,12px,'/imgs/icon-search.png');
              margin-left: 17px;
            }
          }
        }
      }
    }
  }
</style>