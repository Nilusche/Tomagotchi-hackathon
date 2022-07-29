<template>
<div class="absolute top-12 " style="z-index: -1;">
<!--LightFact1-->
<a id="light-fact-1" href="#lightfact1" class="btn hidden">open modal</a>
<div class="modal" id="lightfact1">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Beware of the sunlight!🍅</h3>
    <p class="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, consectetur?.</p>
    <div class="modal-action">
     <a href="#" class="btn">OK!</a>
    </div>
  </div>
</div>
<!--LightFact2-->
<a id="light-fact-2" href="#lightfact2" class="btn hidden">open modal</a>
<div class="modal" id="lightfact2">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Not enough sunlight...🍅</h3>
    <p class="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, consectetur?.</p>
    <div class="modal-action">
     <a href="#" class="btn">OK!</a>
    </div>
  </div>
</div>
<!--Nutrient Fact 1-->
<a id="nutrient-fact-1" href="#nutrientfact1" class="btn hidden">open modal</a>
<div class="modal" id="nutrientfact1">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Too many Nutrients...🍅</h3>
    <p class="py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, consectetur?.</p>
    <div class="modal-action">
     <a href="#" class="btn">OK!</a>
    </div>
  </div>
</div>

<!--Quiz -->
<a id="quiz" href="#quizmenu" class="btn hidden">open modal</a>
<div class="modal" id="quizmenu">
  <div class="modal-box">
  <h3 class="font-bold text-lg">Start Quiz</h3>
    <p class="py-4">Get ready to answer some questions</p>
    <div class="modal-action">
     <a v-if="cards.length==0" href="#noquiz" class="btn">START</a>
     <a v-else href="#quiz-0" class="btn">START</a>
    </div>
  </div>
</div>
<!-- No Questions-->
<div class="modal" id="noquiz">
  <div class="modal-box">
      <h3 class="font-bold text-lg">Good Job🍅</h3>
      <p class="py-4">There are no Question for you Today</p>
      <div class="modal-action">
      <a href="#" class="btn">OK!</a>
      </div>
  </div>
</div>

<!-- Quizquestions-->
<div  v-for="(item, index) in cards" :key="index">
  <div class="modal" :id="`quiz-${index}`">
      <div class="modal-box">
        <h3 class="font-bold text-lg">{{item.question}}</h3>
        <p class="py-4 hidden" :id="`p${index}`">{{item.answer}}</p>
        <div class="modal-action">
          {{cards.length}}
        <a href="#" class="btn btn-error">End</a>
        <span class="btn" @click="togglecard(index)">Show answer</span>
        <a :href="`#quiz-${parseInt(index)+1}`" class="btn">Next</a>
        
        </div>
    </div>
  </div>
</div>
    <div :class="`p-2 bg-cyellow-100 h-96 w-screen flex justify-center csky-${light}`">
      <span class=" text-2xl flex justify-center h-10">
        <span class="bg-primary text-white  rounded-lg p-1" >{{checkTime(h)}}:{{checkTime(m)}}</span>
      </span>
      <img :src="require(`@/assets/plants/plants-${stage}.png`)" class=" object-none absolute  top-20 hover:cursor-pointer" @click="harvest" alt="" style="z-index:20">
      <img ref="wateringcan" src="@/assets/watering.gif" alt="" class="absolute w-20  top-20 hover:cursor-pointer hidden" style="z-index:30">   
      <img ref="fertilizer" src="@/assets/fertilizer.gif" alt="" class="absolute w-20  top-20 hover:cursor-pointer hidden" style="z-index:40">   
    </div>
    <div class="p-2 h-24 bg-cbrown-100 flex justify-center ">
     
    </div>
    <div class="p-2 bg-cbrown-200 h-4">
    </div>
    <div class="mt-4 ml-4">
      <div class="flex">
        <svg class="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
        <div class="flex flex-grow flex-col mr-3">
          <input type="range" min="0" max="100" v-model="light" class="range ml-2 mt-2 mr-2 range-secondary bg-black" step="25" @change="handleLightChange"/>
          <div class="w-full flex justify-between text-md px-2 ml-2">
            <span>0%</span>
            <span>25%</span>
            <span>50%</span>
            <span>75%</span>
            <span>100%</span>
          </div>
        </div>
        
      </div>
     <div class="flex">
        <img src="../assets/fallen.png" class="object-none"/>
        <div class="flex flex-grow flex-col mr-3">
          <input type="range" min="0" max="10" v-model="water" class="range ml-2 mt-2 mr-2 bg-info" step="1" @change="handleWaterChange"/>
          <div class="w-full flex justify-center text-md px-2 ml-2">
            <span>{{water}} liter</span>
          </div>
        </div>
        
      </div>
      <div class="flex">
        <img src="../assets/nutrient.png" class="object-none"/>
        <div class="flex flex-grow flex-col mr-3">
          <input type="range" min="0" max="10" v-model="nutrient" class="range ml-2 mt-2 mr-2 bg-primary" @change="handleNutrientChange" step="1"/>
          <div class="w-full flex justify-center text-md px-2 ml-2">
            <span>{{nutrient}} nutrient</span>
          </div>
        </div>
        
      </div>
      <div class="text-center btn btn-secondary flex-grow mt-3" @click="handleQuiz">Learn Flashcards</div>
    </div>
  
 </div>
 
 
</template>

<script>
// @ is an alias to /src
import { projectFirestore } from '@/firebase/config';
import getUser from '@/composables/getUser';
import tomatoquiz from '@/assets/questions.json';
import { useToast } from "vue-toastification";
export default {
  name: 'HomeView',
  setup() {
      // Get toast interface
      const toast = useToast();
      return { toast }
  },
  data(){
    return {
      stage : 1,
      time:null,
      h: 0,
      m: 0,
      light:50,
      water: 2,
      nutrient:0,
      cards: [],
    }
  },
  methods:{
    startTime() {
        const today = new Date();
        this.m +=1;
        if(this.m>=60){
          this.m=0;
          this.h+=1;
          this.stage +=1
          if(this.stage>=5){
            this.stage=5;
          }
        }
        if(this.h>=24){
          this.h=0;
          
        }

        setTimeout(this.startTime, 700);
    },
    togglecard(index){
      document.getElementById(`p${index}`).classList.toggle('hidden');
    },
    checkTime(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;
    },
    toggleLightFact(id){
        document.getElementById(id).click();
    },
    handleLightChange(){
      if(this.light==100){
        this.toggleLightFact('light-fact-1');
      }else if(this.light==0){
        this.toggleLightFact('light-fact-2');
      }
    },
    handleWaterChange(){
      setTimeout(()=>{
        this.$refs.wateringcan.classList.toggle('hidden');
      },2500);
      this.$refs.wateringcan.classList.toggle('hidden');
    },
    handleNutrientChange(){
      if(this.nutrient>=8){
        this.toggleLightFact('nutrient-fact-1');
      }else{
        setTimeout(()=>{
          this.$refs.fertilizer.classList.toggle('hidden');
        },2500);
        this.$refs.fertilizer.classList.toggle('hidden');
      }
    },
    async handleQuiz(){
      console.log(this.cards)
      this.toggleLightFact('quiz')
    },
    async harvest(){
      if(this.stage != 5){
        this.toast.error("Harvest is not available yet");
        return;
      }
      this.stage = 1;
      this.toast.success("Congrats! You harvested your crops");
      let harvest = 0;
      await projectFirestore.collection('harvest').doc(getUser().user.value.uid).get().then(doc => {
        if(doc.exists){
           projectFirestore.collection('harvest').doc(getUser().user.value.uid).update({
            harvest: doc.data().harvest+1
          });
        }else{
          projectFirestore.collection('harvest').doc(getUser().user.value.uid).set({
            harvest:1
          })
        }
      });
      await projectFirestore.collection('user_plant').doc(getUser().user.value.uid).get().then(doc => {
        if(doc.exists){
          projectFirestore.collection('user_plant').doc(getUser().user.value.uid).update({
            stage: 1,
          })
        }
      });
    }
  },
  async mounted(){
    let user = getUser();
    await projectFirestore.collection('user_plant').doc(user.user.value.uid).get().then(doc => {
      if(doc.exists){
        this.light = doc.data().plantdata.light;
        this.water = doc.data().plantdata.water;
        this.nutrient = doc.data().plantdata.nutrient;
        this.h = doc.data().timedata.h;
        this.m = doc.data().timedata.m;
        this.stage = doc.data().plantdata.stage;
      }else{
        this.light = 50;
        this.water = 2;
        this.nutrient = 0;
        this.h = 0;
        this.m = 0;
        this.stage = 0;
      }
    })
    this.startTime();

    var items= tomatoquiz.tomatoquiz;
      const today = new Date().getTime();

      await items.forEach((item)=>{
        item.time=today;
      });
      

      let docnotexist = await projectFirestore.collection('tomatoquiz').doc(getUser().user.value.uid).get().then(doc => {
        if(!doc.exists){
           return true
        }
        return false
      })

      if(docnotexist){
        await projectFirestore.collection('tomatoquiz').doc(getUser().user.value.uid).set({...items,date:today});
      }

      

      this.cards= await projectFirestore.collection('tomatoquiz').doc(getUser().user.value.uid).get().then(doc => {
        return doc.data();
      })
  },
  async unmounted(){
    let user = getUser();
    let plantdata = {
      light: this.light,
      water: this.water,
      nutrient: this.nutrient,
      stage: this.stage
    }
    let timedata= {
      h: this.h,
      m: this.m
    }


   let  user_plant = {
      user: user.user.value.uid,
      plantdata: plantdata,
      timedata: timedata
    }
    await projectFirestore.collection('user_plant').doc(user.user.value.uid).set(user_plant);

  }

}
</script>

<style>
  .csky-0{
    filter: brightness(0.50);
  }
  .csky-25{
    filter: brightness(0.75);
  }
  .csky-50{
    filter: brightness(1);
  }
  .csky-75{
    filter: brightness(1.25);
  }
  .csky-100{
    filter: brightness(1.5);
  }
</style>
