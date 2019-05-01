<template>
    <div id="userPage04">
        <v-nav></v-nav>
        <div class="us-container">
            <div class="us-section fl">
                <div class="sideNav">
                    <ul>
                        <li>
                            <router-link to="/UserPage">
                                <i class="_2th"></i>关注更新</router-link>
                        </li>
                        <li>
                            <router-link to="/UserPage02">
                                <i class="_3th"></i>作品管理</router-link>
                        </li>
                        <li>
                            <router-link to="/UserPage03">
                                <i class="_5th"></i>我的喜欢</router-link>
                        </li>
                        <li class="active">
                            <router-link to="/UserPage04">
                                <i class="_6th"></i>我的关注</router-link>
                        </li>
                        <li>
                            <router-link to="/UserPage05">
                                <i class="_7th"></i>修改资料</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="the-works fl">
                <div class="us-title">我的关注</div>
                <ul class="se-content1">
                    <li class="se-list1 fl" v-for="item in pubList" :key="item.id">
                        <a href="#"><img class="u-pic1 fl" src="../assets/image/user-img.png" /></a>
                        <div class="fl">
                            <div class="n-t">{{item.nickname}}</div>
                            <div class="us-cancel1" @click="follow(item.id)">取消关注</div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import nav from "./head-nav.vue";
import VNav from "./head-nav";
import { user_pub, resource, users, base,user_follow } from "../sqlMap.js";
export default {
  components: {
    VNav,
    "v-nav": nav
  },
  data() {
    return {
      pubList: []
    };
  },
  created() {
      this.request()
  },
  methods: {
    follow(id) {
      var user = JSON.parse(localStorage.getItem("user"));
     
         var sql = user_follow.delete.replace("?", id).replace("?", user.id)
        this.$http
          .post("action", {
            sql: sql
          })
          .then(res => {
              this.request()
          });
    },
    request() {
      var currentUser = JSON.parse(localStorage.getItem("user"));
      var sql = user_follow.findMyFollow.replace("?", currentUser.id);
      this.$http
        .post("action", {
          sql: sql
        })
        .then(res => {
          this.pubList = res.data;
        //   var followers = JSON.parse(data.followers);
        //   if (followers.length != 0) {
        //     sql = base.getList("users", followers);
        //     this.$http
        //       .post("action", {
        //         sql: sql
        //       })
        //       .then(res => {
                
        //       });
        //   }else{
        //       this.pubList=[]
        //   }
        });
    }
  }
};
</script>

<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/user-page.css";
</style>
