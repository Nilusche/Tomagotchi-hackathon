<template>
  <div class="absolute top-12 mt-4 flex">
    test
  </div>
</template>

<script setup>
import * as tf from '@tensorflow/tfjs';
import {onMounted} from 'vue';

onMounted(async () => {

    const model = await tf.loadLayersModel("../assets/model/model.json"); 
    console.log(model)
});

</script>

<style>

</style>