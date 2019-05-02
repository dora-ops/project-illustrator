<template>
    <div id="userPage0501">
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
                <div class="us-title">我的头像</div>

                <img class="user-pic" :src="src" />

                <el-upload class="upload-demo" action="http://localhost:3000/api/base/upload" :on-success="handleAvatarSuccess"  :file-list="fileList">
                    <el-button size="small" type="primary">点击上传</el-button>

                </el-upload>
                <router-link to="/UserPage05">
                    <div class="back-btn">返回</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import nav from "./head-nav.vue";
import VNav from "./head-nav";
import { resource, users } from "../sqlMap.js";
// import { url } from "inspector";
export default {
  components: {
    VNav,
    "v-nav": nav
  },
  data() {
    return {
      fileList: [],
      form: {},
      user: {},
      tag: [],
      src: ""
    };
  },
  created() {
    var currentUser = JSON.parse(localStorage.getItem("user"));
     var sql = users.getOne
        .replace("?", currentUser.id)
        
      this.$http
        .post("action", {
          sql: sql
        })
        .then(res => {
            
            this.user=res.data[0]
            this.src=res.data[0].photo
        });
  },
  methods: {
    handleAvatarSuccess(res, file) {
      var sql = resource.getOne.replace("?", res[0]);
    //   this.res = this.res.concat(res);
      this.$http
        .post("action", {
          sql: sql
        })
        .then(res => {
          var data = res.data[0];
          this.src = "http://localhost:3000/" + data.fileName;
          sql = users.updatePhoto
            .replace("?", this.src)
            .replace("?", this.user.id);
          this.$http
            .post("action", {
              sql: sql
            })
            .then(res => {});
        });
      //   this.fileList = this.fileList.concat(res);
    }
  }
};
</script>

<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/user-page.css";
@import "../assets/css/UserPage05.css";
</style>
