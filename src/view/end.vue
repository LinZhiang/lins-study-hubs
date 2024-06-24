<template>
  <div class="main">
    <div>
      准确度：<el-progress
        :percentage="
          (
            (this.$route.query.score * 100) /
            this.$route.query.allScore
          ).toFixed(2) * 1
        "
        :text-inside="true"
        :stroke-width="32"
        status="exception"
      ></el-progress>
    </div>
    <div>
      end，分: {{ this.$route.query.score }} (总分:
      {{ this.$route.query.allScore }})
    </div>
    <div class="back" @click="back">返回</div>
  </div>
</template>

<script>
export default {
  name: "endPage",
  components: {},
  computed: {},
  methods: {
    back() {
      this.$router.replace({ name: "wel" });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main {
  padding: 30px;
  color: white;
  font-size: 24px;
  ::v-deep .el-progress-bar__innerText {
    color: white !important;
  }
}
.back {
  padding: 0 20px;
  font-size: 36px;
  width: fit-content;
  cursor: pointer;
}
.back:hover {
  background-color: rgba($color: #cfbe00, $alpha: 0.3);
}
</style>
