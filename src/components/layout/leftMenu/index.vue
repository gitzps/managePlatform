<template>
  <el-menu
    class="manage-menu-vertical"
    background-color="#014889"
    text-color="#fff"
    active-text-color="#017bca"
    :default-active="menuActive"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    @select="menuHander"
  >
    <menu-item
      v-for="item of menuList"
      :key="item.path"
      :itemMenu="item"
    ></menu-item>
  </el-menu>
</template>

<script>
import menuItem from "./menuItem/index.vue";
export default {
  name: "leftMenu",
  components: { menuItem },
  props: {
    menuList: Array,
  },
  data() {
    return {
      menuActive: null,
      isCollapse: false,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    menuHander(key, keyPath) {
      this.$router.push(key);
    },
  },
};
</script>

<style lang="less" scoped>
.manage-menu-vertical:not(.el-menu--collapse) {
  width: 250px;
}
</style>
>
