<template>
  <div class="head-nav">
    <div class="header-nav">
      <router-link to="/"><img class="logo" src="../assets/image/logo.png" /></router-link>
      <nav style="display: none">
        <div class="container fl">
          <!--<ul>-->
            <!--<li>-->
              <!--<a href="#">作品</a>-->
              <!--&lt;!&ndash;<ul id="down">&ndash;&gt;-->
                <!--&lt;!&ndash;<li><a href="#">Category One</a></li>&ndash;&gt;-->
                <!--&lt;!&ndash;<li><a href="#">Category Two</a></li>&ndash;&gt;-->
                <!--&lt;!&ndash;<li><a href="#">Category Three</a></li>&ndash;&gt;-->
              <!--&lt;!&ndash;</ul>&ndash;&gt;-->
            <!--</li>-->
          <!--</ul>-->
        </div>
      </nav>
      <div class="search fl">
        <input class="search-in fl" v-model="text" type="text" placeholder="请输入搜索内容" id="username"/>
        <router-link :to="'/SearchDetails/'+text"><div class="search-icon fl"></div></router-link>
      </div>
      <router-link to="/Upload"><div class="publish-btn fl" v-if="!f">+  发布</div></router-link>
      <div class="user-area fr" v-if="f">
        <router-link to="/Login"><div class="login fl">登录</div></router-link>
        <router-link to="/Register"><div class="register fl">注册</div></router-link>
      </div>
      <div class="user-area1 fr" v-else>
        <div class="user-img fl"><img :src="user.photo" alt="头像"/></div>
        <router-link to="/UserPage"><div class="user-name fl">{{user.nickname}}</div></router-link>
        <div class="user-quit fl" @click="quit()">退出</div>
      </div>
    </div>
  </div>

</template>

<script>
//  import {myFun} from '../assets/js/nav.js';
import {
  pub_content,
  users,
  resource,
  commentlist,
  user_pub,
  user_follow
} from "../sqlMap.js";
  export default {
    name: 'head-nav',
    data () {
      return {
        msg: '',
        f:false,
        text:'',
        user:{}
      }
    },
    created(){
       this.f= localStorage.getItem('user')==undefined
       if (!this.f) {
         var user= JSON.parse(localStorage.getItem('user')) 
          var  sql=users.getOne.replace('?',user.id)
        this.$http
            .post("action", {
              sql: sql
            })
            .then(res => {
                this.user=res.data[0]
            })
       }
    },
    methods:{
        quit(){
            window.localStorage.removeItem('user')
            this.$router.push('/Login');
        }
    },components:{

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/css/reset.css";
  @import "../assets/css/nav.css";

</style>
