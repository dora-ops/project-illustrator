<template>
    <div id="userPage02">
        <v-nav></v-nav>
        <div class="us-container">
            <div class="us-section fl">
                <div class="sideNav">
                    <ul>
                        <li>
                            <router-link to="/UserPage">
                                <i class="_2th"></i>关注更新</router-link>
                        </li>
                        <li class="active">
                            <router-link to="/UserPage02">
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
                        <li>
                            <router-link to="/UserPage05">
                                <i class="_7th"></i>修改资料</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="the-works fl">
                <div class="us-title">我的作品</div>
                <ul class="se-content" v-for="item in pubList" :key="item.id">
                    <li class="se-list fl">
                        <router-link :to="'/Details/'+item.id"><img class="b-pic" :src="item.url" alt="插画" /></router-link>
                        <div class="us-cancel fr" @click="deletePub(item.id)">删除</div>
                        <div class="l-t">{{item.title}}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import nav from "./head-nav.vue";
import VNav from "./head-nav";
import { pub_content, resource } from "../sqlMap.js";
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
    this.request();
  },
  methods: {
    deletePub(id) {
      var sql = pub_content.delete.replace("?", id);
      this.$http
        .post("action", {
          sql: sql
        })
        .then(res => {
          this.pubList=[]
          this.request();
        });
    },
    request() {
      var currentUser = JSON.parse(localStorage.getItem("user"));
      var sql = pub_content.find.replace("?", currentUser.id);

      this.$http
        .post("action", {
          sql: sql
        })
        .then(res => {
          var data = res.data;
          data.forEach(async item => {
            var pub = { id: item.id, title: item.title };
            var resList = JSON.parse(item.res_id);
            var sql = resource.getOne.replace("?", resList[0]);

            var res = await this.$http.post("action", {
              sql: sql
            });
            var data = res.data[0];
            pub.url = "http://localhost:3000/" + data.fileName;
            this.pubList.push(pub);
          });
        });
    }
  }
};
</script>

<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/user-page.css";
</style>
