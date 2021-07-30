import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeSignup from '../views/HomeSignup.vue'
import HomeLogin from '../views/HomeLogin.vue'


Vue.use(VueRouter);

const routes = [
  {
    path: '/signup',
    name: 'Signup',
    component: HomeSignup
  },
  {
    path: '/login',
    name: 'Login',
    component: HomeLogin
  },
  
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
