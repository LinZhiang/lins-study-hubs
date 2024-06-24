<template>
  <div class="main">
    <div class="top">
      {{ type }} · 【{{ num }}】{{ subject[num - 1].question }}
      <div class="back" @click="back">返回</div>
    </div>
    <div class="bottom">
      <div>
        题目: {{ num }} / {{ length }}
        <span v-show="type != '学习'"
          >，本题分值: {{ subject[num - 1].score }}，总分: {{ score }} /
          {{ allScore }}</span
        >
      </div>
      <div>
        总进度：<el-progress
          :percentage="((num * 100) / length).toFixed(2) * 1"
          :text-inside="true"
          :stroke-width="32"
        ></el-progress>
      </div>
      <div v-show="type != '学习'">
        准确度：<el-progress
          :percentage="((score * 100) / allScore).toFixed(2) * 1"
          :text-inside="true"
          :stroke-width="32"
          status="exception"
        ></el-progress>
      </div>
      <div v-show="type != '学习'">请输入答案</div>
      <el-input
        type="textarea"
        v-show="type != '学习'"
        :rows="9"
        placeholder="请输入内容"
        maxlength="800"
        v-model="aa"
      >
      </el-input>
      <div
        class="checkanswer"
        v-show="type != '学习'"
        @click="
          checked = true;
          evaluate = true;
        "
      >
        查看答案
      </div>
      <el-input
        v-show="evaluate"
        type="textarea"
        :rows="9"
        placeholder="请输入内容"
        readonly
        :value="subject[num - 1].answer"
      >
      </el-input>
      <div class="btns">
        <div v-show="subject[num - 1].img && (type === '学习' || (evaluate && type != '学习'))" class="scorebtn" @click="imgShow(subject[num - 1].img)">
          看图
        </div>
        <div
          v-show="evaluate && type != '学习'"
          v-for="i of subject[num - 1].score + 1"
          :key="i"
          class="scorebtn"
          @click="next(i - 1)"
        >
          {{ i - 1 }}
        </div>
        <div v-show="type === '学习' && num > 1" @click="pre" class="scorebtn">
          上一题
        </div>
        <div v-show="type === '学习'" @click="next" class="scorebtn">
          下一题
        </div>
      </div>
    </div>
    <el-dialog
      title="图片展示"
      :visible.sync="dialogVisible"
      width="80vw">
      <img :src="imgSrc" style="height: 60vh;" />
    </el-dialog>
    <!-- {{ this.$route.params.type }} {{ this.$route.params.index }} -->
  </div>
</template>

<script>
import { list } from "./tests";
export default {
  name: "testPage",
  components: {},
  computed: {},
  data() {
    return {
      num: 1,
      list,
      type: "",
      index: 0,
      subject: [],
      length: 1,
      checked: false,
      evaluate: false,
      score: 0,
      allScore: 1,
      aa:"",
      dialogVisible: false,
      imgSrc:"",
    };
  },
  created() {
    this.type = this.$route.query.type;
    this.index = this.$route.query.index;
    console.log(this.type, this.index);
    this.subject = this.list[this.index].subject;
    this.length = this.subject.length;
    console.log("read", this.type, this.index, this.subject);
    this.checked = this.type != "测试";
    this.evaluate = this.checked;
    this.allScore = this.subject.reduce((pre, cur) => {
      console.log(pre, cur);
      return pre + cur.score;
    }, 0);
  },
  methods: {
    back() {
      this.$router.back();
    },
    pre() {
      this.num--;
    },
    next(val) {
      this.aa = "";
      if (val) {
        this.score += val;
      }
      this.evaluate = this.type != "测试";
      if (this.num === this.length) {
        let that = this;
        if (this.type != "测试") {
          this.$router.replace({ name: "wel" });
        } else {
          this.$router.replace({
            name: "end",
            query: { score: that.score, allScore: that.allScore },
          });
        }
      } else {
        this.num++;
      }
    },
    imgShow(img) {
      this.imgSrc = '/img/' + img;
      this.dialogVisible = true;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main {
  padding: 20px;
  margin: 20px auto;
  border: 5px solid black;
  width: 70vw;
  border-radius: 10px;
  background-color: rgba($color: #cfbe00, $alpha: 0.2);
  max-height: 88vh;
  overflow-y:auto;
}
.top {
  padding: 6px 12px;
  padding-right: 0;
  font-size: 25px;
  color: white;
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid white;
  white-space: pre-wrap;
  .back {
    padding: 0 20px;
    border-left: 3px solid white;
    cursor: pointer;
  }
  .back:hover {
    background-color: rgba($color: #cfbe00, $alpha: 0.3);
  }
}

.bottom {
  padding-top: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  // 某些预处理器（例如Sass）可能无法>>>正确解析。
  // 在这些情况下，可以用/deep/
  // 如果/deep/报错，可以使用::v-deep
  // 组合器-两者都是它们的别名，>>> 并且工作原理完全相同。
  ::v-deep .el-progress-bar__innerText {
    color: white !important;
  }
}
.checkanswer {
  cursor: pointer;
  width: fit-content;
  border: 1px solid black;
  border-radius: 5px;
  padding: 3px 8px;
  background-color: rgba($color: #e65d6e, $alpha: 0.2);
}
// .checkanswer::after {
//   content: "";
//   clear: both;
//   display: block;
// }
.checkanswer:hover {
  color: yellow;
  background-color: rgba($color: #e65d6e, $alpha: 0.5);
}
.scorebtn {
  cursor: pointer;
  width: fit-content;
  padding: 3px 15px;
  margin-right: 6px;
  background-color: rgba($color: skyblue, $alpha: 0.2);
}
.scorebtn:hover {
  background-color: rgba($color: skyblue, $alpha: 0.5);
}
.btns {
  display: flex;
  justify-content: flex-end;
}
::v-deep .el-dialog__body {
  text-align: center;
}
</style>
