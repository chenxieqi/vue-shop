<template>
  <transition name="slide">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span>title</span>
          <a href="javascript:;" class="icon-close"  v-on:click="$emit('cancel')"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <a href="javascript:;" class="btn" v-if="btnType==1" v-on:click="$emit('submit')">{{this.sureText}}</a>
          <a href="javascript:;" class="btn" v-if="btnType==2" v-on:click="$emit('cancel')">{{this.cancelText}}</a>
          <div class="btn-group" v-if="btnType==3" >
            <a href="javascript:;" class="btn" v-on:click="$emit('submit')">{{this.sureText}}</a>
            <a href="javascript:;" class="btn btn-default" v-on:click="$emit('cancel')">{{this.cancelText}}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name:'modal',
  props:{
    // modal size type :small/middle/large/form
    modalType:{
      type:String,
      default:'form'
    },
    // modal title
    title:String,
    // modal button type:1:ok/2:cancel/3:ok+cancel
    btnType:String,
    sureText:{
      type:String,
      default:'OK'
    },
    cancelText:{
      type:String,
      default:'Cancel'
    },
    // modal show control
    showModal:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/modal.scss';
</style>