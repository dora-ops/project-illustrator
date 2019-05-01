<template>
    <div class="home-page">
        <v-nav></v-nav>
        <div class="container">
            <div class="scroll-area">
                <ul class="scroll-img">
                    <li class="wheel wheel1"><img src="../assets/image/wheel2.png" alt="轮播图" /></li>
                    <li class="wheel"><img src="../assets/image/wheel1.png" alt="轮播图" /></li>
                    <!--<li class="wheel"><img src="" alt="轮播图"/></li>-->
                </ul>
                <!--<ul class="pagination_index">-->
                <!--<li class="pagination_member pagination_active"></li>-->
                <!--<li class="pagination_member"></li>-->
                <!--<li class="pagination_member"></li>-->
                <!--</ul>-->
            </div>
            <div class="content-title">欢迎来到插画世界</div>
            <div class="latest">
                <div class="latest-title">最新作品推荐
                    <span class="change fr">换一批</span>
                </div>
                <ul class="latest-content" v-for="itemList in pubList">
                    <li class="latest-list fl" v-for="item in itemList" :key="item.id">
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
            <!-- <div class="hottest">
                <div class="hottest-title">近期热门作品推荐
                    <span class="change fr">换一批</span>
                </div>
                <ul class="hottest-content">
                    <li class="hottest-list fl">
                        <router-link to="/Details"><img class="b-pic" src="../assets/image/latest1.png" alt="插画" /></router-link>
                        <div class="l-t">场景</div>
                        <a href="#"><img class="u-pic fl" src="../assets/image/user-img.png" /></a>
                        <div class="l-member fl">
                            <span>15</span>
                        </div>
                        <div class="s-member fl">
                            <span>45</span>
                        </div>
                    </li>
                  
                </ul>
            </div> -->
        </div>
    </div>
</template>

<script>
import nav from "./head-nav.vue";
import VNav from "./head-nav.vue";
import { pub_content, resource } from "../sqlMap.js";
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
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
    var sql = pub_content.getAll;

    this.$http
      .post("action", {
        sql: sql
      })
      .then(res => {
        var data = res.data;
        var li = [], j = 0;
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
        //   debugger
          if ((4 * j + i) < data.length) {
            li.push(element);
          } else {
            this.pubList[j] =li;
            // this.pubList[j].push(li);
            j++;
            li = [];
          }
        }
        this.pubList[j] =li;
        console.log(this.pubList)
        this.$forceUpdate()
      });
    // debugger;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/head-page.css";
</style>
