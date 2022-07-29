<template>
<div>
<div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex">
        <!-- Page content here -->

        <label for="my-drawer" class="btn btn-ghost  drawer-button swap swap-rotate">
        <!-- this hidden checkbox controls the state -->
        <input type="checkbox" />
        
        <!-- hamburger icon -->
        <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
        
        <!-- close icon -->
        <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
        </label>
        <router-view/>
    </div> 
    <div class="drawer-side">
        <label for="my-drawer" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
        <!-- Sidebar content here -->
        <li><router-link for="my-drawer" to="/" @click="handleclick">Home</router-link></li>
        <li><router-link for="my-drawer" to="/profile" @click="handleclick">Profile</router-link></li>
        <li><router-link for="my-drawer" to="/" @click="handleclick">Check your Plants!</router-link></li>   
        <li><router-link for="my-drawer" to="/" class="bg-primary text-white" @click="handleLogout">Logout</router-link></li>   
        </ul>
    </div>
</div> 
  
</div>
  
</template>
<script setup>
import useLogout from '@/composables/useLogout.js'
import getUser from '@/composables/getUser.js'

const {user} = getUser()
const handleLogout = async () => {
  const res = await useLogout()
  document.getElementById('my-drawer').click();
}
const handleclick = () => {
  document.getElementById('my-drawer').click();
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap');
*{
  font-family: Raleway;
  
}
.content, html, body {
  margin: 0;
  background:#4E9F84;
}

</style>
