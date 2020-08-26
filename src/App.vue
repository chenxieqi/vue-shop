<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
//import storage from './storage'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
    }
  },
  mounted() {
    this.getUser()
    this.getCartCount()
  },
  methods:{
    getUser() {
      this.axios.get('/user').then((res)=>{
        //this.$store.dispatch('saveUserName',res.username)
        this.saveUserName(res.username)
      })
    },
    getCartCount() {
      this.axios.get('/carts/products/sum').then((res) => {
        //this.$store.dispatch('saveCartCount',res)
        this.saveCartCount(res)
      })
    },
    ...mapActions(['saveUserName','saveCartCount'])
  }
}
</script>

<style lang="scss">
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
@import './assets/scss/reset.scss';
</style>
