<template>
<div>
  <order-header :title="title"></order-header>
  <router-view></router-view>
  <service-bar></service-bar>
  <nav-footer></nav-footer>
</div>
</template>

<script>
import OrderHeader from './../components/OrderHeader'
import ServiceBar from './../components/ServiceBar'
import NavFooter from './../components/NavFooter'
export default {
  name:'Order-home',
  components:{
    OrderHeader,
    ServiceBar,
    NavFooter
  },
  data(){
    return {
      title:''
    }
  },
  mounted(){
    if(this.$route.path === '/order/confirm'){
      this.title = 'オーダー確認'
    }else if(this.$route.path === '/order/list'){
      this.title = 'オーダーリスト'
    }else if(this.$route.path === '/order/pay'){
      this.title = 'オーダー支払い'
    }
  }

}
</script>

<style>

</style>