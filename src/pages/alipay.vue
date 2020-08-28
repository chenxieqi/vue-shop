<template>
  <div class="alipay">
    <loading></loading>
    <div class="form" v-html="content"></div>
  </div>
</template>

<script>
import Loading from './../components/Loading'
export default {
  data() {
    return {
      content:'',
      orderId:this.$route.query.orderId
    }
  },
  components:{
    Loading
  },
  mounted() {
    this.paySubmit()
  },
  methods:{
    paySubmit() {
      this.axios.post('/pay',{
          orderId:this.orderId,
          orderName:'Vue-shop-test',
          amount:0.01,
          payType:1
        }).then((res) => {
          this.content = res.content
          setTimeout(() => {
            document.forms[0].submit()
          },100)
        })
    }
  }

}
</script>

<style>

</style>