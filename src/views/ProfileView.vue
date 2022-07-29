<template>
<div class="absolute top-12">
  <div class="card  bg-primary text-primary-content w-screen ">
    <div class="card-body items-center text-center">
      <div class="avatar online">
        <div class="w-24  mask mask-squircle">
          <img src="https://picsum.photos/192/192" />
        </div>
      </div>
      <h1 class="card-title">{{user.displayName}}</h1>
      <p>#Rank 1</p>
      <p>Tomato harvests: {{harvest}}</p>
      <div class="card-actions justify-end">
        <button class="btn">Show Leaderboard</button>
      </div>
    </div>
  </div> 
</div>
</template>

<script setup>
import getUser from '@/composables/getUser';
import { projectFirestore } from '@/firebase/config';
import {onMounted, ref} from 'vue';
const {user} = getUser();
const harvest = ref(0);
onMounted(() => {
  const {user} = getUser();
  projectFirestore.collection('harvest').doc(user.value.uid).get().then(doc => {
    if(doc.exists){
      harvest.value = doc.data().harvest;
    }
  })  
});

</script>

<style>

</style>