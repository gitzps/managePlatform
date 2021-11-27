<template>
  <router-view class="main-content"></router-view>
</template>

<script>
export default {
  name: "pageContent",
};
</script>

<style lang="less" scoped>
.main-content {
  height: 100%;
  width: 100%;
  display: flex;
}
</style>
