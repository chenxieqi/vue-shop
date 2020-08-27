<template>
  <div class="product">
    <product-param :title="product.name">
      <template v-slot:buy>
        <div class="btn" @click="buy">buy now !</div>
      </template>
    </product-param>
    <div class="content">
      <div class="item-bg">
        <h2>{{product.name}}</h2>
        <div class="price">
          <span>￥<em>{{product.price}}</em></span>
        </div>
      </div>
      <div class="item-bg-2"></div>
      <div class="item-bg-3"></div>
      <div class="item-swiper">
        <swiper :options="swiperOption">
            <swiper-slide><img src="/imgs/product/gallery-2.png" alt=""></swiper-slide>
            <swiper-slide><img src="/imgs/product/gallery-3.png" alt=""></swiper-slide>
            <swiper-slide><img src="/imgs/product/gallery-4.png" alt=""></swiper-slide>
            <swiper-slide><img src="/imgs/product/gallery-5.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="/imgs/product/gallery-6.jpg" alt=""></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
        <p class="desc">abcdefg</p>
      </div>
      <div class="item-video">
        <h2>60<br/>cvcghc</h2>
        <p>knjkb<br/>kjnkjb</p>
        <div class="video-bg" @click="showVideo=true"></div>
        <div class="video-box" v-if="showVideo">
          <div class="overlay"></div>
          <div class="show-video" :class="{'slide':showVideo}">
            <span class="icon-close" @click="showVideo=false"></span>
            <video src="/imgs/product/video.mp4" muted autoplay controls="controls"></video>
          </div>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import ProductParam from './../components/ProductParam'
export default {
  components: {
    swiper,
    swiperSlide,
    ProductParam
  },
  data() {
    return {
      showVideo:false,
      product:{},
      swiperOption:{
        autoplay:true,
        slidesPerView:3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable :true,
        }
      }
    }
  },
  mounted(){
    this.getProduct()
  },
  methods:{
    getProduct() {
      const id = this.$route.params.id
      this.axios.get(`/products/${id}`).then((res)=>{
        this.product = res
      })
    },
    buy() {
      const id = this.$route.params.id
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>

<style lang="scss">
@import './../assets/scss/mixin.scss';
.product{
  .content{
    .item-bg{
      background:url('/imgs/product/product-bg-1.png') no-repeat center;
      height:718px;
      text-align:center;
      h2{
        font-size:80px;
        padding-top:55px;
      }
      h3{
        font-size:24px;
        letter-spacing: 10px;
      }
      p{
        margin-top:21px;
        margin-bottom:40px;
        a{
          font-size:16px;
          color:#333333;
        }
        span{
          margin:0 15px;
        }
      }
      .price{
        font-size:30px;
        color:#333333;
        em{
          font-style:normal;
          font-size:38px;
        }
      }
    }
    .item-bg-2{
      background:url(/imgs/product/product-bg-2.png) no-repeat center;
      height:480px;
      background-size:1226px 397px;
    }
    .item-bg-3{
      background:url(/imgs/product/product-bg-3.png) no-repeat center;
      height:638px;
      background-size:cover;
    }
    .item-swiper{
      margin:36px auto 52px;
      .desc{
        font-size:18px;
        color:#333333;
        text-align:center;
      }
      img{
        width:100%;
      }
    }
    .item-video{
      height:1044px;
      background-color:#070708;
      margin-bottom:76px;
      color:#FFFFFF;
      text-align:center;
      h2{
        font-size:60px;
        padding-top:82px;
        margin-bottom:47px;
      }
      p{
        font-size:24px;
        margin-bottom:58px;
      }
      .video-bg{
        background:url('/imgs/product/gallery-1.png') no-repeat center;
        background-size:cover;
        width:1226px;
        height:540px;
        margin:0 auto 120px;
        cursor:pointer;
      }
      .video-box{
        .overlay{
          @include position(fixed);
          background-color:#333333;
          opacity:.4;
          z-index:10;
        }
        .show-video{
          position:fixed;
          top:-50%;
          left:50%;
          transform:translate(-50%,-50%);
          z-index:10;
          width:820px;
          height:472px;
          opacity: 0;
          transition: all .6s;
          &.slide{
            top: 50%;
            opacity: 1;
          }
          .icon-close{
            position:absolute;
            top:20px;
            right:20px;
            @include bgImg(20px,20px,'/imgs/icon-close.png');
            cursor:pointer;
            z-index:11;
          }
          video{
            width:100%;
            height:100%;
            object-fit:cover;
            outline:none;
          }
        }
      }
    }
  }
  button{
    margin-left:10px;
  }
}
</style>