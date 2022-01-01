<template>
  <el-submenu
    v-if="itemMenu.children && itemMenu.children.length"
    :index="itemMenu.path"
  >
    <template slot="title">
      <i class="el-icon-location"></i>
      {{ itemMenu.menuName }}
    </template>
    <menu-item
      v-for="(item,index) of itemMenu.children"
      :key="index"
      :itemMenu="item"
    >
    </menu-item>
  </el-submenu>
  <el-menu-item v-else :index="itemMenu.path">{{ itemMenu.menuName }}</el-menu-item>
</template>

<script>
export default {
  name: "menuItem",
  props: {
    itemMenu: Object,
  },
};
</script>
