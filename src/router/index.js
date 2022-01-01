import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/ownerInfo",
    name: "ownerInfo",
    component: () =>
      import(/* webpackChunkName: "ownerInfo" */ "../views/peopleManage/ownerInfo"),
  },
  {
    path: "/residentInfo",
    name: "residentInfo",
    component: () =>
      import(/* webpackChunkName: "residentInfo" */ "../views/peopleManage/residentInfo"),
  },
  {
    path: "/parkInfo",
    name: "parkInfo",
    component: () =>
      import(/* webpackChunkName: "parkInfo" */ "../views/smartTraffic/parkInfo"),
  },
  {
    path: "/addParkInfo",
    name: "addParkInfo",
    component: () =>
      import(/* webpackChunkName: "addParkInfo" */ "../views/smartTraffic/parkInfo/addPark"),
  },
  {
    path: "/detailParkInfo",
    name: "detailParkInfo",
    component: () =>
      import(/* webpackChunkName: "detailParkInfo" */ "../views/smartTraffic/parkInfo/addPark"),
  },
  {
    path: "/accessRecord",
    name: "accessRecord",
    component: () =>
      import(/* webpackChunkName: "accessRecord" */ "../views/smartTraffic/accessRecord"),
  },
    {
    path: "/parkRecord",
    name: "parkRecord",
    component: () =>
      import(/* webpackChunkName: "parkRecord" */ "../views/smartTraffic/parkRecord"),
  },
  {
    path: "/visitorRecord",
    name: "visitorRecord",
    component: () =>
      import(/* webpackChunkName: "visitorRecord" */ "../views/smartTraffic/visitorRecord"),
  },
  {
    path: "/highRise",
    name: "highRise",
    component: () =>
      import(/* webpackChunkName: "highRise" */ "../views/highRise"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
