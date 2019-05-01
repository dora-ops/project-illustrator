<template>
  <div class="details1">
    <v-nav></v-nav>
    <div class="container">
      <div class="header-area">
        <div class="user-img fl"><img src="../assets/image/head-image.png" alt="用户头像"/></div>
        <div class="user-name fl">梦栖</div>
        <div class="illustrator-title">作品名称</div>
      </div>
      <div class="illustrator">
        <img src="../assets/image/picture01.png" alt="插画"/>
        <!--<img src="../assets/image/picture02.jpg" alt="插画"/>-->
      </div>
      <div class="introduce-area">
        <ul class="in-details fl">
          <li class="snap1 fr">删除</li>
          <li class="in-title">作品名称</li>
          <li class="in-list in-list1">找不到出口 也找不到来路 在汹涌的人潮 被蒸发的街道 闭上眼睛想象丛林的树影 远离钢筋水泥的石头森林 远离熙攘而隔绝的人群 这城市再喧嚣 我依旧处身孤岛</li>
          <li class="in-list">34喜欢&nbsp;&nbsp;&nbsp;2评论</li>
          <li class="in-list">时间：2019/4/14 15:15:00 </li>
          <li class="in-list">来自：PC网络 </li>
          <li class="in-list fl">标签： </li>
          <li>
            <ul class="fl">
              <li class="in-mark fl">概念设计</li>
              <li class="in-mark fl">游戏场景</li>
              <li class="in-mark fl">原话</li>
            </ul>
          </li>
        </ul>
        <div class="us-details fl">
          <div class="us-top">
            <div class="us-img fl"><img src="../assets/image/head-image.png" alt="用户头像"/> </div>
            <div class="us-text fl">
              <div class="us-name">梦栖</div>
              <div class="us-list">女</div>
              <div class="us-list">566人气</div>
            </div>
          </div>
        </div>
      </div>
      <div class="comment-area">
        <p class="comment-p">评论（2）</p>
        <div class="com-center">
          <div class="com-img fl"><img src="../assets/image/head-image.png"/></div>
          <div class="com-box fl">
            <textarea placeholder="有什么感想，你也来说说吧"></textarea>
            <div class="publish-btn fr">发布</div>
          </div>
        </div>
        <div class="content-null">暂时还没有评论！</div>
        <ul class="com-content">
          <li class="com-list">
            <div class="li-img fl"><img src="../assets/image/user-img.png" alt="用户头像"/></div>
            <div class="reply fr">回复</div>
            <div class="li-user fl">
              <div class="user-name">用户名<span class="u-time">2019/4/15 22:22:00</span></div>
              <div >很不错哦~</div>
            </div>
          </li>
          <li class="com-list">
            <div class="li-img fl"><img src="../assets/image/head-image.png" alt="用户头像"/></div>
            <div class="reply fr">删除</div>
            <div class="li-user fl">
              <div class="user-name">我自己<span class="u-time">2019/4/15 22:22:00</span></div>
              <div >很不错哦~</div>
            </div>
          </li>
        </ul>
      </div>
      <!--<div class="more-works">-->
        <!--<div class="more-title">更多作品</div>-->
        <!--<ul class="more-content">-->
          <!--<li class="more-list fl">-->
            <!--<router-link to="/Details"><img class="b-pic" src="../assets/image/latest1.png" alt="插画"/></router-link>-->
            <!--<div class="m-t">场景</div>-->
            <!--<div class="l-member fl"><span>15</span></div>-->
            <!--<div class="s-member fl"><span>45</span></div>-->
          <!--</li>-->
        <!--</ul>-->
      <!--</div>-->
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
  @import "../assets/css/details.css";
</style>
