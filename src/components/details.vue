<template>
    <div class="details">
        <v-nav></v-nav>
        <div class="container">
            <div class="header-area">
                <div class="user-img fl"><img src="../assets/image/user-img.png" alt="用户头像" /></div>
                <div class="user-name fl">{{user.nickname}}</div>

                <div class="focus-btn fl" v-if="foll!=1" @click="follow()">{{foll==2?'取消关注':'关注'}}</div>
                <div class="illustrator-title">作品名称</div>
            </div>
            <div class="illustrator" v-for="item in images" :key="item">
                <img :src="item" alt="插画" />
                <!--<img src="../assets/image/picture02.jpg" alt="插画"/>-->
            </div>
            <div class="introduce-area">
                <ul class="in-details fl">
                    <li class="snap fr" v-if="toLike!=1" @click="like()">{{toLike==2?'不喜欢':'喜欢'}}</li>
                    <li class="in-title">作品名称</li>
                    <li class="in-list in-list1">{{detail.title}}</li>
                    <li class="in-list">{{likeCount}}喜欢&nbsp;&nbsp;&nbsp;{{comment_count}}评论</li>
                    <li class="in-list">时间：{{detail.create_time}} </li>
                    <li class="in-list">作品属性：{{detail.property=='1'?'原创':detail.property=='2'?'同人':'练习'}} </li>
                    <li class="in-list fl">标签： </li>
                    <li>
                        <ul class="fl" v-for="comment in tags" :key="comment">
                            <li class="in-mark fl">{{comment}}</li>
                        </ul>
                    </li>
                </ul>
                <div class="us-details fl">
                    <div class="us-top">
                        <div class="us-img fl"><img src="../assets/image/user-img.png" alt="用户头像" /> </div>
                        <div class="us-text fl">
                            <div class="us-name">{{user.nickname}}</div>
                            <div class="us-list">{{user.mobile}}</div>
                            <div class="us-list">{{follCount}}人气</div>
                        </div>
                    </div>
                    <div class="focus-btn" v-if="foll!=1" @click="follow()">{{foll==2?'取消关注':'关注'}}</div>
                </div>
            </div>
            <div class="comment-area">
                <p class="comment-p">评论（{{comment_count}}）</p>
                <div class="com-center">
                    <div class="com-img fl"><img src="../assets/image/head-image.png" /></div>
                    <div class="com-box fl">
                        <textarea placeholder="有什么感想，你也来说说吧" v-model="content"></textarea>
                        <div class="publish-btn fr" @click="comment()">发布</div>
                    </div>
                </div>
                <div class="content-null">暂时还没有评论！</div>
                <ul class="com-content" v-for="comment in commentList" :key="comment">
                    <li class="com-list">
                        <div class="li-img fl"><img src="../assets/image/user-img.png" alt="用户头像" /></div>
                        <div class="reply fr">回复</div>
                        <div class="li-user fl">
                            <div class="user-name">{{comment.cus_nickname}}
                                <span class="u-time">{{comment.create_time}}</span>
                            </div>
                            <div>{{comment.comment}}</div>
                        </div>
                    </li>
                    <!-- <li class="com-list">
                        <div class="li-img fl"><img src="../assets/image/head-image.png" alt="用户头像" /></div>
                        <div class="reply fr">删除</div>
                        <div class="li-user fl">
                            <div class="user-name">我自己
                                <span class="u-time">2019/4/15 22:22:00</span>
                            </div>
                            <div>很不错哦~</div>
                        </div>
                    </li> -->
                </ul>
            </div>
            <div class="more-works">
                <div class="more-title">更多作品</div>
                <ul class="more-content">
                    <li class="more-list fl" v-for="item in pubList" :key="item.id">
                        <a :href="'#/Details/'+item.id"> <img class="b-pic" :src="item.url" alt="插画" /></a>
                        <div class="m-t">{{item.title}}</div>
                        <div class="l-member fl">
                            <span>{{item.like_count}}</span>
                        </div>
                        <div class="s-member fl">
                            <span>{{item.com_count}}</span>
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
import {
  pub_content,
  users,
  resource,
  commentlist,
  user_pub,
  user_follow
} from "../sqlMap.js";
import { debuglog } from "util";
export default {
  components: {
    VNav,
    "v-nav": nav
  },
  data() {
    return {
      user: {},
      detail: {},
      images: [],
      tags: [],
      foll: 0,
      follCount: 0,
      toLike: 0,
      likeCount: 0,
      content: "",
      commentList: [],
      comment_count: 0,
      pubList: []
    };
  },

  watch: {
    $route(to, from) {
      //监听路由是否变化
    //   debugger
      if (to.params.id != from.params.id) {
         location.reload()
      }
    }
  },

  created() {
    var currentUser = JSON.parse(localStorage.getItem("user"));
    let id = this.$route.params.id;

    this.$http
      .post("action", {
        sql: commentlist.find.replace("?", id)
      })
      .then(res => {
        this.commentList = res.data;
        this.comment_count = res.data.length;
      });
    this.$http
      .post("action", {
        sql: pub_content.topN
      })
      .then(res => {
        this.pubList = res.data;
      });
    var sql = pub_content.getOne.replace("?", id);
    this.$http
      .post("action", {
        sql: sql
      })
      .then(res => {
        var data = res.data[0];
        this.tags = JSON.parse(data.tag);
        var resList = JSON.parse(data.res_id);
        resList.forEach(element => {
          var sql = resource.getOne.replace("?", element);
          this.$http
            .post("action", {
              sql: sql
            })
            .then(res => {
              var data = res.data[0];
              this.images.push("http://localhost:3000/" + data.fileName);
            });
        });
        //发布文章是否属于本人
        var flag = data.cus_id == currentUser.id;
        if (flag) {
          this.foll = 1;
          this.toLike = 1;
        }
        if (!flag) {
          sql = user_pub.findLike
            .replace("?", currentUser.id)
            .replace("?", this.$route.params.id);
          this.$http
            .post("action", {
              sql: sql
            })
            .then(res => {
              if (res.data.length != 0) {
                this.toLike = 2;
                this.likeCount = res.data.length;
              } else {
                this.toLike = 3;
              }
            });
          sql = user_follow.findFollow
            .replace("?", data.cus_id)
            .replace("?", currentUser.id);
          this.$http
            .post("action", {
              sql: sql
            })
            .then(res => {
              if (res.data.length != 0) {
                this.foll = 2;
                this.follCount = res.data.length;
              } else {
                this.foll = 3;
              }
            });
        }
        //发布人信息
        sql = users.getOne.replace("?", data.cus_id);
        this.$http
          .post("action", {
            sql: sql
          })
          .then(res => {
            this.user = res.data[0];
          });
        this.detail = data;
      });
  },
  methods: {
    contain(array, item) {
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element == item) {
          return true;
        }
      }
      return false;
    },
    follow() {
      var user = JSON.parse(localStorage.getItem("user"));
      if (this.foll == 2) {
        var sql = user_follow.delete
          .replace("?", this.detail.cus_id)
          .replace("?", user.id);
        this.$http
          .post("action", {
            sql: sql
          })
          .then(res => {
            this.foll = 3;
            sql = pub_content.des_com.replace("?", this.detail.id);
            this.$http
              .post("action", {
                sql: sql
              })
              .then(res => {});
          });
      } else if (this.foll == 3) {
        var data = { cus_id: this.detail.cus_id, cus_follow_id: user.id };
        this.$http
          .post("insert", {
            table: "user_follow",
            data: data
          })
          .then(res => {
            this.foll = 2;
            sql = pub_content.inc_com.replace("?", this.detail.id);
            this.$http
              .post("action", {
                sql: sql
              })
              .then(res => {});
          });
      }
    },
    like() {
      var user = JSON.parse(localStorage.getItem("user"));

      var sql = users.getOne.replace("?", this.user.id);
      let pub_id = parseInt(this.$route.params.id);
      if (this.toLike == 2) {
        var sql = user_pub.delete.replace("?", user.id).replace("?", pub_id);
        this.$http
          .post("action", {
            sql: sql
          })
          .then(res => {
            this.toLike = 3;
            sql = pub_content.des_like.replace("?", this.detail.id);
            this.$http
              .post("action", {
                sql: sql
              })
              .then(res => {});
          });
      } else if (this.toLike == 3) {
        var data = { cus_id: user.id, pub_id: pub_id };
        this.$http
          .post("insert", {
            table: "user_pub",
            data: data
          })
          .then(res => {
            this.toLike = 2;
            sql = pub_content.inc_like.replace("?", this.detail.id);
            this.$http
              .post("action", {
                sql: sql
              })
              .then(res => {});
          });
      }
    },
    comment() {
      var user = JSON.parse(localStorage.getItem("user"));
      let pub_id = parseInt(this.$route.params.id);
      var data = {
        pub_id: pub_id,
        cus_id: user.id,
        cus_nickname: user.nickname,
        comment: this.content
      };
      this.$http
        .post("insert", {
          table: "commentlist",
          data: data
        })
        .then(res => {
          window.location.reload();
        });
    }
  }
};
</script>

<style scoped>
@import "../assets/css/reset.css";
@import "../assets/css/details.css";
</style>
