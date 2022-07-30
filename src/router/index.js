import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {projectAuth} from '../firebase/config.js'
import Register from '../views/auth/RegisterView.vue'
import Login from '../views/auth/LoginView.vue'
import Profile from '../views/ProfileView.vue'
import Leaderboard from '../views/LeaderboardView.vue'
import Tensorflow from '../views/TensorflowView.vue'

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
    component: HomeView,
    beforeEnter: requireAuth
  },
  {
    path: '/login',
    name: 'login',
    component: Login,


  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    beforeEnter: requireAuth
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path:'/leaderboard',
    name:'leaderboard',
    component:Leaderboard,
    beforeEnter:requireAuth

  },
  {
    path: '/classification',
    name: 'classification',
    component: Tensorflow,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
