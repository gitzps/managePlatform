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
    <div></div>
    <router-view class="main-content"></router-view>
  </div>
</template>

<script>
import { mapState, mapMutation } from "vuex";
export default {
  name: "pageContent",
  computed: {
    ...mapState({ tabList: tabList }),
  },
  methods: {
    handleClose(tag) {
      this.delTab(tag.path);
    },
    ...mapMutation(["delTab"]),
  },
};
</script>

<style lang="less" scoped>
.main-content {
  height: 100%;
  width: 100%;
  display: flex;
}

.page-content {
  height: 100%;
  width: 100%;
  display: flex;
  padding: 0 20px;

  .tab-list {
    height: 30px;
    width: 100%;
  }
}
</style>
