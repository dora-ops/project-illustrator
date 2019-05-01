<template>
  <div id="search-details">
    <v-nav></v-nav>
    <div class="se-container">
      <div class="se-title">关键字：3d</div>
      <div class="se-subtitle">23条记录</div>
    </div>
    <ul class="se-content">
    <li class="se-list fl">
      <router-link to="/Details"><img class="b-pic" src="../assets/image/latest1.png" alt="插画"/></router-link>
      <div class="l-t">作品名称</div>
      <a href="#"><img class="u-pic fl" src="../assets/image/user-img.png"/></a>
      <div class="l-member fl"><span>125</span></div>
      <div class="s-member fl"><span>45</span></div>
    </li>
      <li class="se-list fl">
        <router-link to="/Details"><img class="b-pic" src="../assets/image/latest1.png" alt="插画"/></router-link>
        <div class="l-t">作品名称</div>
        <a href="#"><img class="u-pic fl" src="../assets/image/user-img.png"/></a>
        <div class="l-member fl"><span>125</span></div>
        <div class="s-member fl"><span>45</span></div>
      </li>
      <li class="se-list fl">
        <router-link to="/Details"><img class="b-pic" src="../assets/image/latest1.png" alt="插画"/></router-link>
        <div class="l-t">作品名称</div>
        <a href="#"><img class="u-pic fl" src="../assets/image/user-img.png"/></a>
        <div class="l-member fl"><span>125</span></div>
        <div class="s-member fl"><span>45</span></div>
      </li>
      <li class="se-list fl">
        <router-link to="/Details"><img class="b-pic" src="../assets/image/latest1.png" alt="插画"/></router-link>
        <div class="l-t">作品名称</div>
        <a href="#"><img class="u-pic fl" src="../assets/image/user-img.png"/></a>
        <div class="l-member fl"><span>125</span></div>
        <div class="s-member fl"><span>45</span></div>
      </li>
      <li class="se-list fl">
        <router-link to="/Details"><img class="b-pic" src="../assets/image/latest1.png" alt="插画"/></router-link>
        <div class="l-t">作品名称</div>
        <a href="#"><img class="u-pic fl" src="../assets/image/user-img.png"/></a>
        <div class="l-member fl"><span>125</span></div>
        <div class="s-member fl"><span>45</span></div>
      </li> <li class="se-list fl">
      <router-link to="/Details"><img class="b-pic" src="../assets/image/latest1.png" alt="插画"/></router-link>
      <div class="l-t">作品名称</div>
      <a href="#"><img class="u-pic fl" src="../assets/image/user-img.png"/></a>
      <div class="l-member fl"><span>125</span></div>
      <div class="s-member fl"><span>45</span></div>
    </li> <li class="se-list fl">
      <router-link to="/Details"><img class="b-pic" src="../assets/image/latest1.png" alt="插画"/></router-link>
      <div class="l-t">作品名称</div>
      <a href="#"><img class="u-pic fl" src="../assets/image/user-img.png"/></a>
      <div class="l-member fl"><span>125</span></div>
      <div class="s-member fl"><span>45</span></div>
    </li>
      <li class="se-list fl">
        <router-link to="/Details"><img class="b-pic" src="../assets/image/latest1.png" alt="插画"/></router-link>
        <div class="l-t">作品名称</div>
        <a href="#"><img class="u-pic fl" src="../assets/image/user-img.png"/></a>
        <div class="l-member fl"><span>125</span></div>
        <div class="s-member fl"><span>45</span></div>
      </li>
      <li class="se-list fl">
        <router-link to="/Details"><img class="b-pic" src="../assets/image/latest1.png" alt="插画"/></router-link>
        <div class="l-t">作品名称</div>
        <a href="#"><img class="u-pic fl" src="../assets/image/user-img.png"/></a>
        <div class="l-member fl"><span>125</span></div>
        <div class="s-member fl"><span>45</span></div>
      </li>
    </ul>
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
  @import "../assets/css/search-details.css";
</style>
