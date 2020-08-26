<template>
  <div class="login">
    <div class="container">
      <div class="header">
        <a href="/#/index"><img src="/imgs/login-logo.png"></a>
      </div>
      <div class="content">
        <div class="container">
          <div class="form">
            <h3><span class="form-checked">ログイン</span></h3>
            <div class="input">
              <input type="text" placeholder="アカウント" v-model="username">
            </div>
            <div class="input">
              <input type="password" placeholder="パスワード" v-model="password">
            </div>
            <div class="btn-box">
              <a href="javascript:;" class="btn btn-large" @click="login">ログイン</a>
            </div>
            <div class="tips">
              <div class="tip" @click="register">新規登録</div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
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
export default {
  data(){
    return {
      username:'',
      password:'',
      userId:''
    }
  },
  methods:{
    login(){
      let {username, password} = this
      this.axios.post('/user/login',{
        username,
        password
      }).then((res) => {
        this.$cookie.set('userId',res.id,{expires:'1M'})
        this.$store.dispatch('saveUserName',username)
        this.$router.push('/index')
      })
    },
    register(){
      this.axios.post('/user/register',{
        username:'xxx89',
        password:'xxx',
        email:'xxxx89@gmail.com'
      }).then(() => {
        alert('register sucssed')
      })

    }
  }

}
</script>

<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
.login{
  .container{
    .header{
      height: 70px;
      a{
        display: inline-block;
        margin: 10px 200px 0;
        img{
          width: auto;
          height: 60px;
        }
      }
    }
    .content{
      background:url('/imgs/login-bg.jpg') no-repeat center;
      .container{
        height: 576px;
        .form{
          box-sizing: border-box;
          padding-left: 31px;
          padding-right: 31px;
          width:410px;
          height:510px;
          background-color:#ffffff;
          position:absolute;
          bottom:29px;
          right:0;
          h3{
            line-height:23px;
            font-size:24px;
            text-align:center;
            margin:40px auto 49px;
            .form-checked{
              color: $colorA;
            }
          }
          .input{
            display:inline-block;
            width:348px;
            height:50px;
            border:1px solid #E5E5E5;
            margin-bottom:20px;
            input{
              width: 100%;
              height: 100%;
              border: none;
              padding: 18px;
            }
          }
          .btn{
            width:100%;
            line-height:50px;
            margin-top:20px;
            font-size:16px;
          }
          .tips{
            margin-top:14px;
            display:flex;
            font-size:12px;
            justify-content: flex-end;
            cursor:pointer;
            .tip{
              color:#999999;
            }
            span{
              margin: 0 7px;
            }
          }
        }
      }
    }
    .footer{
      width: 200px;
      text-align: center;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      margin:auto;
      padding-top: 100px;
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
}
</style>