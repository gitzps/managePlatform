<template>
  <div class="page-content">
    <div class="tab-list">
      <el-tag
        :key="tag"
        v-for="tag in tabList"
        closable
        @close="handleClose(tag)"
      >
        {{ tag.menuName }}
      </el-tag>
    </div>
    <div class="tag-name">{{ "xxxx" }}</div>
    <router-view class="main-content"></router-view>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "pageContent",
  computed: {
    ...mapState({ tabList: "tabList" }),
  },
  methods: {
    handleClose(tag) {
      this.delTab(tag.path);
    },
    ...mapMutations(["delTab"]),
  },
};
</script>

<style lang="less" scoped>
.page-content {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #f4f5fa;

  .tab-list {
    height: 30px;
    width: 100%;
    background: #fff;
  }

  .tag-name {
    height: 35px;
    width: 100%;
    text-align: left;
    padding-left: 20px;
    line-height: 35px;
  }

  .main-content {
    height: calc(100% - 65px);
    width: calc(100% - 40px);
    display: flex;
    padding: 0 20px;
    margin: 0 auto;
    background: #fff;
  }
}
</style>
