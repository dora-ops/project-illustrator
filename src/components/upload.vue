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

                <el-upload class="upload-demo" action="http://localhost:3000/api/base/upload" :on-success="handleAvatarSuccess" :on-remove="handleRemove" :file-list="fileList" list-type="picture">
                    <el-button size="small" type="primary">点击上传</el-button>

                </el-upload>

                <div class="area-4">
                    <table class="a4-tab" cellspacing="3" cellpadding="3">
                        <tr>
                            <td width="120" align="center" valign="middle">
                                <strong>作品标题</strong>
                            </td>
                            <td height="50">
                                <input type="text" v-model="form.title" name="title" id="title" class="form-control" style="width:450px;" value="">
                            </td>
                        </tr>

                        <tr>
                            <td align="center" valign="top">
                                <strong>说点什么</strong>
                            </td>
                            <td height="50">
                                <textarea name="contents" v-model="form.description" id="contents" class="form-control" placeholder="临摹或参考作品请注明" style="width:453px; height:100px;padding: 10px; "></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td width="120" align="center" valign="middle">
                                <strong>
                                    <span style="color:red">*</span>作品属性</strong>
                            </td>
                            <td height="50">
                                <div class="form-check form-check-inline fl">
                                    <input type="radio" v-model="form.property" name="albumtype" id="inlineRadio1" value="1">
                                    <label for="inlineRadio1">原创</label>
                                </div>
                                <div class="form-check form-check-inline fl">
                                    <input type="radio" v-model="form.property" name="albumtype" id="inlineRadio2" value="2">
                                    <label for="inlineRadio2">同人</label>
                                </div>
                                <div class="form-check form-check-inline fl">
                                    <input type="radio" v-model="form.property" name="albumtype" id="inlineRadio3" value="3">
                                    <label for="inlineRadio3">练习</label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" valign="top">
                                <strong style="position:relative; top:10px;">作品标签</strong>
                            </td>
                            <el-select v-model="tag" multiple filterable allow-create default-first-option placeholder="标签">
                                <!-- <el-option >
                                </el-option> -->
                            </el-select>
                        </tr>
                    </table>
                    <table width="100%" border="0" cellspacing="3" cellpadding="3">

                        <tr>
                            <td width="120" valign="middle" align="center">
                                <strong>作品保护</strong>
                            </td>
                            <td width="579" height="25">
                                <label class="radio-inline">
                                    <input type="radio" v-model="form.flag" name="isdownloadradio" id="isdownload1" value="0" checked="checked">不添加水印
                                </label>
                                <label class="radio-inline">
                                    <input type="radio" v-model="form.flag" name="isdownloadradio" id="isdownload2" value="1"> 添加水印
                                </label>
                                <input type="hidden" id="isdownload" name="isdownload" value="" />
                                <!--<span style="color:#999999;  font-size:12px">(无法右键另存为和打开大图)</span>-->
                            </td>
                        </tr>
                    </table>
                    <div style="margin:20px">
                        <button type="button" @click="login()" name="button" id="button" class="btn btn-dark " style="width:99%">发布</button>
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
import { resource } from "../sqlMap.js";
export default {
  components: {
    VNav,
    "v-nav": nav
  },
  data() {
    return {
      fileList: [],
      form: {},
      res: [],
      tag: []
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handleAvatarSuccess(res, file) {
      var sql = resource.getOne.replace("?", res[0]);
      this.res = this.res.concat(res);
      this.$http
        .post("action", {
          sql: sql
        })
        .then(res => {
          var data = res.data[0];

          this.fileList.push({
            name: data.originalname,
            url: "http://localhost:3000/" + data.fileName
          });
        });
      //   this.fileList = this.fileList.concat(res);
    },
    login() {
      var user = JSON.parse(localStorage.getItem("user"));
      this.form.res_id = JSON.stringify(this.res);
      this.form.tag = JSON.stringify(this.tag);
      this.form.cus_id=user.id
      this.form.url=this.fileList[0].url
      //   debugger
      this.$http
        .post("insert", {
          table: "pub_content",
          data: this.form
        })
        .then(res => {
          setTimeout(() => {
            this.$router.push("/HomePage");
          }, 1000);
        });
    }
  }
};
</script>

<style>
@import "../assets/css/reset.css";
@import "../assets/css/upload.css";
</style>
