<template>
  <div class="page-wraper">
    <page-header></page-header>
    <div class="page-wraper--body">
      <left-menu :menuList="menuList"></left-menu>
      <div class="page-wraper--body_right">
        <div class="page-wraper-maincontent"><page-content></page-content></div>
        <copyright></copyright>
      </div>
    </div>
  </div>
</template>

<script>
import pageHeader from "./header";
import pageContent from "./content";
import leftMenu from "./leftMenu";
import copyright from "./copyright";
import { mapState, mapActions  } from 'vuex'
export default {
  name: "layout",
  components: { pageHeader, pageContent, leftMenu, copyright },
  props: { },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      menuList: 'menuList'
    })
  },
  created() {
    this.getMenus({menus:[]});
  },
  mounted() {},
  methods: {
    ...mapActions({
      getMenus: 'initMenu' // 获取系统菜单信息
    })
  },
};
</script>

<style lang="less" scoped>
.page-wraper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .page-wraper--body {
    height: calc(100% - 60px);
    display: flex;

    .page-wraper--body_right {
      height: 100%;
      width: calc(100% - 200px);
      display: flex;
      flex-direction: column;

      .page-wraper-maincontent {
        height: calc(100% - 30px);
        width: 100%;
      }
    }
  }
}
</style>
