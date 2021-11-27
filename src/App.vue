<template>
  <div id="app">
    <component :is="currentComponent" componentParams="params"></component>
  </div>
</template>

<script>
import login from "./views/Login";
import home from "./views/Home";
export default {
  name: "app",
  components: { login, home },
  provide() {
    return { rootInstace: this };
  },
  data() {
    return {
      currentComponent: "login",
      params: {},
    };
  },
};
</script>

<style lang="less">
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;

  #app {
    width: 100%;
    height: 100%;
  }
}
</style>
