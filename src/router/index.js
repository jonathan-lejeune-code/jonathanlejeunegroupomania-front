import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue'
import HomeSignup from '../views/HomeSignup.vue'
import HomeLogin from '../views/HomeLogin.vue'
import profil from '../views/Profil.vue'
import Message from '../views/Message.vue'
import createMessage from '../views/createMessage.vue'
Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: Home
  },

  {
    path: '/signup',
    name: 'Signup',
    component: HomeSignup
  },

  {
    path: '/profil',
    name: 'Profil',
    component: profil
  },

  {
    path: '/login',
    name: 'Login',
    component: HomeLogin
  },
  {
    path: '/message',
    name: 'Message',
    component: Message
  },
  { path: '/createMessage',
    name: 'createMessage',
    component: createMessage
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;