<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import OfficeOverview from './components/OfficeOverview.vue'
import OfficeOccupants from './components/OfficeOccupants.vue';

import { ref } from 'vue'
let members = ref([
  { 
    id: 1,
    image: "/src/assets/01.png",
    name: "Nkosinathi Nkomo"
  },
  { 
    id: 2,
    image: "/src/assets/02.png",
    name: "Jane Doe"
  },
  { 
    id: 3,
    image: "/src/assets/03.png",
    name: "Bonani Wogqoyi"
  },
  { 
    id: 4,
    image: "/src/assets/03.png",
    name: "Joe Doe"
  },
  { 
    id: 5,
    image: "/src/assets/05.png",
    name: "Bafana Ngubulana"
  },

])
</script>

<template>
  <!-- <div class="bg-indigo-50 flex flex-col items-center h-screen justify-center">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite" />
  </div> -->

  <div class="h-screen flex items-center bg-[#F8FAFC] ">
    <div class="w-1/2 mx-auto ">
      <!-- <OfficeOverview 
        name="Specno"
        capacity=25
        noOfOccupants=5
        mobile="082&nbsp;364&nbsp;9864" 
        email="info@specno.com" 
        location="10 Willie Van Schoor Dr, Bo Oakdale, Cape Town, 7530"
        ribbonColour="#97512C"
      /> -->

      <OfficeOccupants
        :occupants=members
      />
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
