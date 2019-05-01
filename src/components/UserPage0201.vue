<template>
  <div id="userPage0201">
    <v-nav></v-nav>
    <div class="us-container">
      <div class="us-section fl">
        <div class="sideNav">
          <ul>
            <li>
              <router-link to="/UserPage"><i class="_2th"></i>关注更新</router-link>
            </li>
            <li class="active">
              <router-link to="/UserPage02"><i class="_3th"></i>作品管理</router-link>
            </li>
            <li>
              <router-link to="/UserPage03"><i class="_5th"></i>我的喜欢</router-link>
            </li>
            <li>
              <router-link to="/UserPage04"><i class="_6th"></i>我的关注</router-link>
            </li>
            <li>
              <router-link to="/UserPage05"><i class="_7th"></i>修改资料</router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="the-works fl">
        <div class="us-title">我的作品</div>
        <ul class="se-content">
          <li class="se-list fl">
            <router-link to="/Details1"><img class="b-pic" src="../assets/image/latest1.png" alt="插画"/></router-link>
            <div class="us-cancel fr">删除</div>
            <div class="l-t">作品名称</div>
            <div class="l-member fl"><span>125</span></div>
            <div class="s-member fl"><span>45</span></div>
          </li>
          <li class="se-list fl">
            <router-link to="/Details1"><img class="b-pic" src="../assets/image/latest1.png" alt="插画"/></router-link>
            <div class="us-cancel fr">删除</div>
            <div class="l-t">作品名称</div>
            <div class="l-member fl"><span>125</span></div>
            <div class="s-member fl"><span>45</span></div>
          </li>
          <li class="se-list fl">
            <router-link to="/Details1"><img class="b-pic" src="../assets/image/latest1.png" alt="插画"/></router-link>
            <div class="us-cancel fr">删除</div>
            <div class="l-t">作品名称</div>
            <div class="l-member fl"><span>125</span></div>
            <div class="s-member fl"><span>45</span></div>
          </li>
          <li class="se-list fl">
            <router-link to="/Details1"><img class="b-pic" src="../assets/image/latest1.png" alt="插画"/></router-link>
            <div class="us-cancel fr">删除</div>
            <div class="l-t">作品名称</div>
            <div class="l-member fl"><span>125</span></div>
            <div class="s-member fl"><span>45</span></div>
          </li>
          <li class="se-list fl">
            <router-link to="/Details1"><img class="b-pic" src="../assets/image/latest1.png" alt="插画"/></router-link>
            <div class="us-cancel fr">删除</div>
            <div class="l-t">作品名称</div>
            <div class="l-member fl"><span>125</span></div>
            <div class="s-member fl"><span>45</span></div>
          </li>
          <li class="se-list fl">
            <router-link to="/Details1"><img class="b-pic" src="../assets/image/latest1.png" alt="插画"/></router-link>
            <div class="us-cancel fr">删除</div>
            <div class="l-t">作品名称</div>
            <div class="l-member fl"><span>125</span></div>
            <div class="s-member fl"><span>45</span></div>
          </li>
          <li class="se-list fl">
            <router-link to="/Details1"><img class="b-pic" src="../assets/image/latest1.png" alt="插画"/></router-link>
            <div class="us-cancel fr">删除</div>
            <div class="l-t">作品名称</div>
            <div class="l-member fl"><span>125</span></div>
            <div class="s-member fl"><span>45</span></div>
          </li>

        </ul>
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
</style>
