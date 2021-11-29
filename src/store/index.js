import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuActive: null,
    menuList: [],
    tabList: [],
  },
  mutations: {
    setMenuActive(state, obj) {
      state.menuActive = obj;
    },
    setMenuList(state, arr) {
      state.menuList = arr;
    },
    addTab(state, tabInfo) {
      let el = state.tabList.find((o) => {
        return o.path === tabInfo.path;
      });
      el && state.tabList.push(tabInfo);
    },
    delTab(state, path) {
      let index = state.findIndex((el) => {
        return el.path === path;
      });
      state.tabList.splice(index, 1);
    },
  },
  actions: {
    initMenu(context, { menus: [] }) {
      let menuList = [
        {
          menuName: "人员管理",
          path: "peopleManage",
          id: "1",
          children: [
            {
              menuName: "业主信息",
              path: "ownerInfo",
              id: "1-1",
              children: [],
            },
            {
              menuName: "住户信息",
              path: "residentInfo",
              id: "1-1",
              children: [],
            },
          ],
        },
        {
          menuName: "便捷通行",
          path: "easyTraffic",
          id: "1",
          children: [
            {
              menuName: "停车场信息",
              path: "parkInfo",
              id: "1-1",
              children: [],
            },
            {
              menuName: "停车记录",
              path: "parkRecord",
              id: "1-1",
              children: [],
            },
            {
              menuName: "通行记录",
              path: "parkRecord",
              id: "1-1",
              children: [],
            },
            {
              menuName: "访客记录",
              path: "visitorRecord",
              id: "1-1",
              children: [],
            },
          ],
        },
        {
          menuName: "智慧安防",
          path: "smartSecurity",
          id: "1",
          children: [
            {
              menuName: "高空抛物",
              path: "highRise",
              id: "1-1",
              children: [],
            },
          ],
        },
        {
          menuName: "智慧家居",
          path: "smartHome",
          id: "1",
          children: [
            {
              menuName: "家居设备管理",
              path: "googleHome",
              id: "1-1",
              children: [],
            },
          ],
        },
        {
          menuName: "基础管理",
          path: "basicManage",
          id: "1",
          children: [
            {
              menuName: "楼盘管理",
              path: "housesManage",
              id: "1-1",
              children: [
                {
                  menuName: "楼盘信息",
                  path: "housesInfo",
                  id: "1-1",
                  children: [],
                },
                {
                  menuName: "楼栋信息",
                  path: "banInfo",
                  id: "1-1",
                  children: [],
                },
                {
                  menuName: "房屋信息",
                  path: "roomInfo",
                  id: "1-1",
                  children: [],
                },
              ],
            },
            {
              menuName: "组织信息",
              path: "orgInfo",
              id: "1-1",
              children: [
                {
                  menuName: "组织架构",
                  path: "orgChart",
                  id: "1-1",
                  children: [],
                },
                {
                  menuName: "用户管理",
                  path: "userManage",
                  id: "1-1",
                  children: [],
                },
                {
                  menuName: "角色权限",
                  path: "userPermission",
                  id: "1-1",
                  children: [],
                },
              ],
            },
          ],
        },
      ];
      context.commit("setMenuList", menuList);
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});
