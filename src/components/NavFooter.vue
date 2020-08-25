<template>
  <div class="footer">
    <div class="container">
      <div class="foot-bar">
        <div class="footer-logo">
          <img src="/imgs/logo-footer.png" alt="">
          <p>vue-shop</p>
        </div>             
        <div class="footer-link">
          <a href="javascript:;" target="_blank">ホームページ</a><span>|</span>
          <a href="javascript:;" target="_blank">仮1</a><span>|</span>
          <a href="javascript:;" target="_blank">仮2</a><span>|</span>
          <a href="javascript:;" target="_blank">仮3</a>
        </div>
        <div class="copyright">Copyright ©2020 <span class="domain">vue.shop.com</span> All Rights Reserved.</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'nav-footer'
  }
</script>
<style lang="scss" scoped>
@import './../assets/scss/base.scss';
@import './../assets/scss/config.scss';
  .footer{
    .foot-bar{
      height:234px;
      border-top:4px solid $colorA;
      background-color:$colorB;
      color:#999999;
      font-size:16px;
      text-align:center;
      .footer-logo{
      margin-top:46px;
      margin-bottom:31px;
      img{
          width:53px;
          height:36px;
          margin-bottom:13px;
        }
      }
      .footer-link{
        a{
          color:#999999;
          display:inline-block;
        }
        span{
          margin:0 10px;
        }
        margin-bottom:13px;
      }
      .copyright{
        .domain{
          color:$colorA;
        }
      }
    }
  }
</style>