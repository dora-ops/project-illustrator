<template>
    <div id="search-details">
        <v-nav></v-nav>
        <div class="se-container">
            <div class="se-title">关键字：3d</div>
            <div class="se-subtitle">{{count}}条记录</div>
        </div>
        <ul class="se-content">
            <li class="se-list fl" v-for="item in pubList" :key="item.id">
                <router-link :to="'/Details/'+item.id"><img class="b-pic" :src="item.url" alt="插画" /></router-link>
                <div class="l-t">{{item.title}}</div>
                <a href="#"><img class="u-pic fl" :src="item.url" /></a>
                <div class="l-member fl">
                    <span>{{item.like_count}}</span>
                </div>
                <div class="s-member fl">
                    <span>{{item.com_count}}</span>
                </div>
            </li>

        </ul>
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
      pubList: [],
      count:0
    };
  },
  created() {
    let id = this.$route.params.id;
    var sql = pub_content.findByTitle.replace("?", id);

    this.$http
      .post("action", {
        sql: sql
      })
      .then(res => {
        var data = res.data;
        this.pubList = data
        this.count=data.length
      });
    // debugger;
  }
};
</script>

<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/search-details.css";
</style>
