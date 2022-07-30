<template>
  <div class="absolute top-12 mt-4" style="z-index: -1;">
    <div class="overflow-x-auto w-screen">
    <table class="table w-full">
        <!-- head -->
        <thead>
        <tr>
            <th>Name</th>
            <th>Tomato-Harvests</th>
        </tr>
        </thead>
        <tbody>
        <!-- row 1 -->
        <tr  v-for="user in users" :key="user.email">
            <td>
            <div class="flex items-center space-x-3">
                <div class="avatar">
                <div class="mask mask-squircle w-12 h-12">
                    <img src="@/assets/profile.jpg" alt="Avatar Tailwind CSS Component" />
                </div>
                </div>
                <div>
                <div class="font-bold">{{user.name}}</div>
                </div>
            </div>
            </td>
            <td>{{user.harvest}}</td>
        </tr>
        </tbody>
    </table>
    </div>
  </div>
</template>

<script setup>
import getUser from '@/composables/getUser';
import { projectFirestore } from '@/firebase/config';
import {onMounted, ref} from 'vue';

const users = ref([]);
const harvests = ref([]);
onMounted(async () => {
  users.value = await projectFirestore.collection('users').orderBy('harvest', 'desc').get();
  users.value = users.value.docs.map(doc => doc.data());
});
</script>

<style>

</style>