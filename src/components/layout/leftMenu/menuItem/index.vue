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
      v-for="item of itemMenu.children"
      :key="item.path"
      :itemMenu="item"
    >
    </menu-item>
  </el-submenu>
  <el-menu-item v-else>{{ itemMenu.menuName }}</el-menu-item>
</template>

<script>
export default {
  name: "menuItem",
  props: {
    itemMenu: Object,
  },
};
</script>
