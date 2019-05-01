<template>
  <div id="userPage0501">
    <v-nav></v-nav>
    <div class="us-container">
      <div class="us-section fl">
        <div class="sideNav">
          <ul>
            <li>
              <router-link to="/UserPage"><i class="_2th"></i>关注更新</router-link>
            </li>
            <li>
              <router-link to="/UserPage"><i class="_3th"></i>作品管理</router-link>
            </li>
            <li>
              <router-link to="/UserPage03"><i class="_5th"></i>我的喜欢</router-link>
            </li>
            <li>
              <router-link to="/UserPage04"><i class="_6th"></i>我的关注</router-link>
            </li>
            <li class="active">
              <router-link to="/UserPage05"><i class="_7th"></i>修改资料</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="the-works fl">
        <div class="us-title">我的头像</div>
        <img class="user-pic" src="../assets/image/head-image.png" />
        <div style="padding: 20px;">
          <input class="upload-file" type="file" name="file">
        </div>
        <router-link to="/UserPage05"><div class="back-btn">返回</div></router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import nav from "./head-nav.vue";
  import VNav from "./head-nav";
  export default {
    components: {
      VNav,
      'v-nav': nav
    }
  }
</script>

<style scoped>
  @import "../assets/css/reset.css";
  @import "../assets/css/user-page.css";
  @import "../assets/css/UserPage05.css";
</style>
