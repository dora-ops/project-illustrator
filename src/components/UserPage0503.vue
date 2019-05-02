<template>
    <div id="userPage0502">
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
                            <router-link to="/UserPage">
                                <i class="_3th"></i>作品管理</router-link>
                        </li>
                        <li>
                            <router-link to="/UserPage03">
                                <i class="_5th"></i>我的喜欢</router-link>
                        </li>
                        <li>
                            <router-link to="/UserPage04">
                                <i class="_6th"></i>我的关注</router-link>
                        </li>
                        <li class="active">
                            <router-link to="/UserPage05">
                                <i class="_7th"></i>修改资料</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="the-works fl">
                <div class="us-title">改修密码</div>
                <!-- <div class="form-group">
                    <div class="fl" style="padding-left: 20px">原密码</div>
                    <input type="password" class="input-area" value="">
                </div> -->
                <div class="form-group">
                    <div class="fl" style="padding-left: 20px">新密码</div>
                    <input type="password" v-model="bio" class="input-area" value="">
                </div>
                <!-- <div class="form-group">
                    <div class="fl" style="padding-left: 4px">确认密码</div>
                    <input type="password" class="input-area" value="">
                </div> -->
                <div class="change-btn fl" @click="updateBio">确认</div>
                <router-link to="/UserPage05">
                    <div class="back-btn1 fl">返回</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import nav from "./head-nav.vue";
import VNav from "./head-nav";
import { user_pub, resource, users } from "../sqlMap.js";
export default {
  components: {
    VNav,
    "v-nav": nav
  },
  data() {
    return {
      bio: "",
      user:{}
    };
  },
  
  methods: {
    updateBio() {
      var currentUser = JSON.parse(localStorage.getItem("user"));
      var sql = users.updatePass
        .replace("?", this.bio)
        .replace("?", currentUser.id);
      this.$http
        .post("action", {
          sql: sql
        })
        .then(res => {
          this.$router.push("/UserPage05");
        });
    }
  }
};
</script>

<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/user-page.css";
@import "../assets/css/UserPage05.css";
</style>
