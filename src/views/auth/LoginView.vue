<template>
 <div class="h-screen relative flex flex-col justify-center items-center">
    <div class=" bg-cblack-100  text-white md:shadow-lg shadow-none rounded p-10 px-32" >
        <div class="flex flex-col items-center space-y-3">
            <img class="hidden lg:block h-8 w-auto"  src="../../assets/logo.png" alt="Workflow">
            <p class="text-2xl font-bold">Name</p>
            <span class="text-2xl font-semi-bold leading-normal" >Sign in</span>
        </div>
        <form class="my-8" @submit.prevent="handleLogin">
            <div class="relative mb-5">
                <input v-model="email" id="email" class="w-full rounded px-3 border text-gray-600 border-gray-300 pt-5 pb-2 focus:border-cgreen focus:ring-1 focus:ring-cgreen focus:outline-none input active:outline-none" type="text" autofocus>
                <label for="email" class="label absolute mt-2 ml-3 leading-tighter text-gray-600 text-base cursor-text">Email</label>
            </div>
            <div class="relative mb-4">
                <input v-model="password" id="password" class="w-full rounded px-3 border text-gray-600 border-gray-300 pt-5 pb-2 focus:border-cgreen focus:ring-1 focus:ring-cgreen focus:outline-none input active:outline-none" type="password" autofocus>
                <label for="password" class="label absolute mt-2 ml-3 leading-tighter text-gray-600 text-base cursor-text">Password</label>
            </div>
            <div class="space-y-9">
                <div v-if="error" class="text-red-400 w-64">
                    {{error.message}}
                </div>
                <div class="">
                    <router-link to="/register" class="text-sm font-bold text-clightgreen">Register instead?</router-link>
                </div>
                <div class="text-sm flex justify-between items-center">
                    <button class="py-2 px-6 rounded text-white btn bg-cgreen-300 hover:bg-cgreen-100 transition ease-in-out">Login</button>
                </div>
            </div>
        </form>
    </div>
</div> 
</template>

<script setup>
  import useLogin from '@/composables/useLogin';
  import { useRouter } from 'vue-router'
  import {ref} from 'vue';
  const email = ref('');
  const password = ref('');
  const error = ref('');
  const router = useRouter();
  const handleLogin = async()=>{
    const res = await useLogin(email.value, password.value);
    if(!res.error){
      router.push('/');
    }else{
      error.value = res.error;
    }
  }
</script>

<style scoped>
        .input {
            transition: border 0.2s ease-in-out;
            min-width: 280px
        }
        .input:focus+.label,
        .input:active+.label,
        .input.filled+.label {
            font-size: .75rem;
            transition: all 0.2s ease-out;
            top: -1.3rem;
            color: #2a5547;
            padding: 0 5px 0 5px;
            margin: 0 5px 0 5px;
        }
        .label {
            transition: all 0.2s ease-out;
            top: -0.3rem;
            left: 0;
        }
</style>