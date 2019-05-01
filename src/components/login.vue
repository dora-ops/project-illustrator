<template>
  <div id="login">
    <router-link to="/"><div class="r-logo"><img class="i-logo" src="../assets/image/logo.png" /></div></router-link>
    <div class="login-banner">
      <div class="login-bg fl"><img src="../assets/image/login-bg.jpg" alt="背景图片"/></div>
      <div class="login-form fl">
        <div class="login-tab">账号登录</div>
        <div class="form">
          <form action="" id="formlogin" method="post" onSubmit="return false;">
            <div class="item item-fore1 item-error">
              <label for="loginname" class="login-label name-label"></label>
              <input type="text" name="loginname" id="loginname" class="itxt" tabindex="1" autocomplete="off" placeholder="邮箱/用户名/已验证手机">
            </div>
            <!-- 密码输入框fore2 -->
            <div id="entry" class="item item-fore2" style="visibility: visible">
              <label class="login-label pwd-label" for="nloginpwd"></label>
              <input type="password" id="nloginpwd" name="nloginpwd" class="itxt itxt-error" tabindex="2" autocomplete="off" placeholder="密码">
              <span class="clear-btn" style="display: inline;"></span>
              <span class="capslock" style="display: none;">
  			  					<b></b>
  			  					大小写锁定已打开
  			  				</span>
            </div>
            <!-- 图片验证码开始 fore3-->
            <div id="o-authcode" class="item item-vcode item-fore3 hide ">
              <input type="text"  id="authcode" class="itxt itxt02" name="authcode" tabindex="3">
              <input type = "button" id="code"  class="verify-code" value="2E5H">
              <a href="#">看不清换一张</a>
            </div>
            <!-- 自动登录开始fore4 -->
            <div class="item item-fore4">
              <div class="safe">
                        		<span>
                        			<input type="checkbox" name="chkRememberMe" id="autologin" tabindex="3">
                        			<label for>自动登录</label>
                        		</span>
                <!--<span class="forget-pw-safe">-->
                        			<!--<a href="">忘记密码</a>-->
                        		<!--</span>-->
              </div>
            </div>
            <div class="item item-fore5">
              <div class="login-btn">
                <div class="btn-img btn-entry" id="loginsubmit" tabindex="6" >登&nbsp;&nbsp;&nbsp;&nbsp;录</div>
              </div>
            </div>
          </form>
        </div>
        <div class="coagent" id="kbCoagent">
          <router-link to="/Register">
              <div class="regist-link">
                <b></b>立即注册
              </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {_validate} from '../assets/js/checkcode.js';
  export default {
    methods:{

    }
  }
</script>

<style>
  @import "../assets/css/reset.css";
  @import "../assets/css/login.css";
</style>
