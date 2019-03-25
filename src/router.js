import Vue from "vue";
import Router from "vue-router";
import Login from "./views/login_admin/index";
import Register from "./views/register_admin.vue";
import AdminHomePage from './views/admin_homePage/index';
import AddInfo from './views/add_info/index';
import EditInfo from './views/edit_info/index';

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: '/login',
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: '/addNew',
      name: "AddInfo",
      component: AddInfo
    },
    {
      path: '/editInfo',
      name: "EditInfo",
      component: EditInfo
    },
    {
      path: "/homepage",
      name: "AdminHomePage",
      component: AdminHomePage,
      // children: [
      //   {
      //   	path: 'addNew',
      // 	  name: "AddInfo",
      // 	  component: AddInfo
      //   }
      // ]
    },
    {
      path: "/register",
      name: "Register",
      component: Register
    }
    // {
    //   path: "/login",
    //   name: "Login",
    //   component: Login
    // }
  ]
});
