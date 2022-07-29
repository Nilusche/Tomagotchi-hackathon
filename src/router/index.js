import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {projectAuth} from '../firebase/config.js'
import Register from '../views/auth/RegisterView.vue'
import Login from '../views/auth/LoginView.vue'
const requireAuth = (to, from , next) => {
    let user = projectAuth.currentUser;
    if(!user){
        next('/login');
    }else{
        next();
    }
}

const requireNoAuth = (to, from , next) => {  
    let user = projectAuth.currentUser;
    if(user){
        next('/');
    }else{  
        next();
    }
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: Login,


  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
