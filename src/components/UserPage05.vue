<template>
    <div id="userPage05">
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
                <div class="us-title">我的资料</div>
                <div class="my-box">
                    <div class="my-left fl">
                        <img src="../assets/image/head-image.png" />
                        <router-link to="/UserPage0501">
                            <div class="modify">修改头像</div>
                        </router-link>
                    </div>
                    <div class="my-right fl">
                        <div class="my-name">梦栖
                            <router-link to="/UserPage0502">
                                <span class="modify1">修改</span>
                            </router-link>
                            <router-link to="/UserPage0503">
                                <span class="modify2">修改密码</span>
                            </router-link>
                        </div>
                        <div class="signature fl">签名</div>
                        <div class="si-content fl">
                            <textarea v-model="bio" placeholder="填写签名"></textarea>
                        </div>
                        <div class="save-btn" @click="updateBio()">保存</div>
                    </div>
                </div>
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
      bio: ""
    };
  },
  created() {},
  methods: {
    updateBio() {
      var currentUser = JSON.parse(localStorage.getItem("user"));
      var sql = users.updateBio
        .replace("?", this.bio)
        .replace("?", currentUser.id);
      this.$http
        .post("action", {
          sql: sql
        })
        .then(res => {
          // var data = res.data;
          // this.pubList = data;
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
