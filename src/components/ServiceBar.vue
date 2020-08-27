<template>
  <div class="service">
    <div class="container">
      <ul>
        <li><span class="icon-setting"></span>修理サービス</li>
        <li><span class="icon-7day"></span>返品サービス</li>
        <li><span class="icon-15day"></span>交換サービス</li>
        <li><span class="icon-post"></span>送料サービス</li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    name:'service-bar'
  }
</script>
<style lang="scss">
  @import './../assets/scss/mixin.scss';
  .service{
    padding:33px 0;
    color:#666666;
    font-size:16px;
    li{
      display:inline-block;
      width:24.9%;
      text-align:center;
      border-right:1px solid #E5E5E5;
      span{
        display:inline-block;
        width:20px;
        height:20px;
        vertical-align: middle;
        margin-right:8px;
      }
      .icon-setting{
        @include bgImg(20px,20px,'/imgs/icon-setting.png',contain,6px);
      }
      .icon-7day{
        @include bgImg(20px,20px,'/imgs/icon-7day.png',contain,6px);
      }
      .icon-15day{
        @include bgImg(20px,20px,'/imgs/icon-15day.png',contain,6px);
      }
      .icon-post{
        @include bgImg(20px,20px,'/imgs/icon-post.png',contain,6px);
      }
    }

  }
</style>