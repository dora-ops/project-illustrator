<template>
  <div id="upload">
    <v-nav></v-nav>
    <div class="up-container">
      <div class="con-left fl">
        <div class="area-1">
          <b>提示：</b>
          <div style="color: #888">
            <p>一组作品最多能上传20张图 </p>
            <p>单张图片宽度:大于100px小于6000px, 文件大小:大于30KB小于12M</p>
          </div>
        </div>
        <div class="area-2">
          <div class="upload-drag" id="test1">
            <i class="up-icon"><img src="../assets/image/up-icon.png" alt="上传图标"/> </i>
            <!--<p>点击上传，或将文件拖拽到此处</p>-->
            <input class="upload-file" type="file" name="file">
          </div>
        </div>
        <div class="area-3">
          <div id="iimages">
            <input name="picidList" type="hidden" id="picidList" value="">
            <div class="null-img">
              <img src="../assets/image/info.png" alt="感叹号图标"/>
              <div class="null-word">请上传图像</div>
            </div>
            <div class="photo-area">
              <img src="../assets/image/latest1.png" class="img">
              <p class="fr"><a href="javascript:" >删除</a></p>
            </div>
            <div class="photo-area">
              <img src="../assets/image/latest1.png"  class="img">
              <p class="fr"><a href="javascript:" >删除</a></p>
            </div>
          </div>
        </div>
        <div class="area-4">
          <table class="a4-tab" cellspacing="3" cellpadding="3">
            <tr>
              <td width="120" align="center" valign="middle"><strong>作品标题</strong></td>
              <td height="50">
                <input type="text" name="title" id="title" class="form-control" style="width:450px;" value="">
              </td>
            </tr>

            <tr>
              <td align="center" valign="top"><strong>说点什么</strong></td>
              <td height="50"><textarea name="contents" id="contents"  class="form-control"  placeholder="临摹或参考作品请注明" style="width:453px; height:100px;padding: 10px; "></textarea></td>
            </tr>
            <tr>
              <td width="120" align="center" valign="middle"><strong><span style="color:red">*</span>作品属性</strong></td>
              <td height="50">
                <div class="form-check form-check-inline fl">
                  <input type="radio" name="albumtype" id="inlineRadio1"  value="1">
                  <label for="inlineRadio1">原创</label>
                </div>
                <div class="form-check form-check-inline fl">
                  <input  type="radio" name="albumtype" id="inlineRadio2"  value="2">
                  <label for="inlineRadio2">同人</label>
                </div>
                <div class="form-check form-check-inline fl">
                  <input  type="radio" name="albumtype" id="inlineRadio3"  value="3">
                  <label for="inlineRadio3">练习</label>
                </div>
              </td>
            </tr>
            <tr>
              <td align="center" valign="top"><strong style="position:relative; top:10px;">作品标签</strong></td>
              <td height="">

                <!--<input id="tags_1" name="tags_1" type="text" class="tags yahei" value="" />-->
                <div id="tags_1_tagsinput" class="tagsinput" style="width: 450px; height: 100%;"><div id="tags_1_addTag"><input id="tags_1_tag" value="" data-default="添加标签" style="color: rgb(102, 102, 102); width: 68px;"></div><div class="tags_clear"></div></div>
                <span style="color: #888; font-size: 14px;">添加标签,更容易找到同好。tips:按回车就可以添加多个标签哦~</span>
              </td>
            </tr>
          </table>
          <table width="100%" border="0" cellspacing="3" cellpadding="3">

            <tr>
              <td width="120" valign="middle" align="center"><strong>作品保护</strong></td>
              <td width="579" height="25">
                <label class="radio-inline">
                  <input type="radio" name="isdownloadradio" id="isdownload1" value="0" checked="checked" >不添加水印
                </label>
                <label class="radio-inline">
                  <input type="radio" name="isdownloadradio" id="isdownload2" value="1"  > 添加水印
                </label>
                <input type="hidden" id="isdownload" name="isdownload" value="" />
                <!--<span style="color:#999999;  font-size:12px">(无法右键另存为和打开大图)</span>-->
              </td>
            </tr>
          </table>
          <div style="margin:20px">
            <button type="button" name="button"   id="button"  class="btn btn-dark " style="width:99%">发布</button>
          </div>
        </div>
      </div>
      <div class="con-right fr">
        <p style="text-align: center;padding: 20px;font-size: 16px;">作品发布规则</p>
        <div style="padding: 0 20px;">
          <p>允许：</p>
          <p>手绘/软件绘制的绘画作品</p>
          <p>原创绘画作品</p>
          <p>同人或临摹作品</p>
          <p>绘画作画过程</p>
          <br>
          <p>禁止：</p>
          <p>转载他人的画作</p>
          <p>展示与绘画无关的照片</p>
          <p>违反国家法规的色情血腥暴力等图片</p>
          <p>水印严重影响画面的画作</p>
          <p>作品中带有二维码</p>
          <br>
          <p style="margin-top:10px;font-size:14px">提示：不符合规则的作品将无法通过审核，维护原创平台的好环境需大家共同努力！</p>
        </div>
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

<style>
  @import "../assets/css/reset.css";
  @import "../assets/css/upload.css";
</style>
