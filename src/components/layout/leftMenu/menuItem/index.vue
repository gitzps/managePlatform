<template>
  <el-submenu
    v-if="itemMenu?.children && itemMenu.children.length"
    :index="itemMenu.path"
  >
    <menu-item
      v-for="item of itemMenu.children"
      :key="item.path"
      :itemMenu="item"
    >
    </menu-item>
  </el-submenu>
  <el-menu-item v-else>{{ itemMenu.name }}</el-menu-item>
</template>

<script>
export default {
  name: "menuItem",
  props: {
    itemMenu: Object,
  },
};
</script>
