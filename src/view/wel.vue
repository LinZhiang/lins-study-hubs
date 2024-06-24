<template>
  <div class="wel">
    <!-- <img class="wel2" src="/img/捕获2.png"> -->
    <h1>首页</h1>
    <div class="content">
      <div
        v-for="(item, index) in list"
        :key="item.name"
        class="list"
        @click="tolearn(item, index)"
        @mouseenter="item.visible = true"
        @mouseleave="item.visible = false"
        :title="item.test"
      >
        {{ item.name }} 【{{ item.subject.length }}】
        <!-- <div class="tip" v-show="item.visible">{{ item.test }}</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { list, luanxu } from "./tests";
export default {
  name: "welPage",
  data() {
    return {
      list,
      a: 0,
    };
  },
  created() {
    console.log(this.list);
  },
  methods: {
    tolearn(item, index) {
      this.$confirm("学习还是测试?", "提示", {
        confirmButtonText: "学习",
        cancelButtonText: "测试",
        type: "warning",
      })
        .then(() => {
          console.log(index);
          this.$message({
            type: "info",
            message: "开始学习",
          });
          this.$router.push({
            name: "test",
            query: { type: "学习", index },
          });
        })
        .catch(() => {
          // console.log(index);
          this.$message({
            type: "info",
            message: "开始测试",
          });
          this.$confirm("是否乱序?", "提示", {
            confirmButtonText: "乱序",
            cancelButtonText: "不乱序",
            type: "warning",
          })
            .then(() => {
              luanxu(index);
              // console.log('乱序',this.list[this.index].subject);
              this.$router.push({
                name: "test",
                query: { type: "测试", index },
              });
            })
            .catch(() => {
              this.$router.push({
                name: "test",
                query: { type: "测试", index },
              });
            });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  margin: 0;
}
.wel {
  padding: 10px 20px;
  .content {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(6,1fr);
    gap: 15px;
    .list {
      padding: 10px 20px;
      background-color: whitesmoke;
      border: 2px solid #666;
      cursor: pointer;
      position: relative;
    }
    .list:hover {
      opacity: 0.8;
    }
    .tip {
      position: absolute;
      right: 10px;
      max-width: 300px;
      bottom: -40px;
      padding: 5px 10px;
      background-color: skyblue;
      z-index: 999;
    }
    // .list::after:hover {}
  }
}
</style>
