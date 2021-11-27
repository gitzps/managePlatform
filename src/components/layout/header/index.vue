<template>
  <div class="page-header">
    <div class="page-header--left"></div>
    <div class="page-header--right"></div>
  </div>
</template>

<script>
export default {
  name: "pageHeader",
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.page-header {
  height: 60px;
  background: #545c64;
  display: flex;

  .page-header--left {
    width: 250px;
    height: inherit;
  }

  .page-header--right {
    flex: 1;
  }
}
</style>
