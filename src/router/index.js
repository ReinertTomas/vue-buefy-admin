import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: "Dashboard",
    },
    path: "/",
    name: "home",
    component: Home,
  },
  {
    meta: {
      title: "Users",
    },
    path: "/users",
    name: "users",
    component: () => import("@/views/user/UserList.vue"),
    children: [
      {
        meta: {
          title: "User Create",
        },
        path: "/create",
        name: "users-create",
        component: () => import("@/views/user/UserCreate.vue"),
      },
      {
        meta: {
          title: "User Edit",
        },
        path: "/edit/:id",
        name: "users-edit",
        component: () => import("@/views/user/UserEdit.vue"),
      },
    ],
  },
  {
    meta: {
      title: "Tables",
    },
    path: "/tables",
    name: "tables",
    component: () =>
      import(/* webpackChunkName: "tables" */ "@/views/Tables.vue"),
  },
  {
    meta: {
      title: "Forms",
    },
    path: "/forms",
    name: "forms",
    component: () =>
      import(/* webpackChunkName: "forms" */ "@/views/Forms.vue"),
  },
  {
    meta: {
      title: "Profile",
    },
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "profile" */ "@/views/Profile.vue"),
  },
  {
    meta: {
      title: "New Client",
    },
    path: "/client/new",
    name: "client.new",
    component: () =>
      import(/* webpackChunkName: "client-form" */ "@/views/ClientForm.vue"),
  },
  {
    meta: {
      title: "Edit Client",
    },
    path: "/client/:id",
    name: "client.edit",
    component: () =>
      import(/* webpackChunkName: "client-form" */ "@/views/ClientForm.vue"),
    props: true,
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
