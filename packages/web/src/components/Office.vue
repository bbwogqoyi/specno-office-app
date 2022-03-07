<script setup>
import OfficeOverview from './OfficeOverview.vue'
import OfficeOccupants from './OfficeOccupants.vue';

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
  <div class="bg-white p-4">
    <div class="flex justify-between my-4">
      <svg class=" cursor-pointer" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.57 5.93 3.5 12l6.07 6.07M20.5 12H3.67" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>

      <p class="text-2xl tracking-tight">Office</p>

      <div>&nbsp;</div>
    </div>

    <OfficeOverview 
      name="Specno"
      capacity=25
      noOfOccupants=5
      mobile="082&nbsp;364&nbsp;9864" 
      email="info@specno.com" 
      location="10 Willie Van Schoor Dr, Bo Oakdale, Cape Town, 7530"
      ribbonColour="#97512C"
    />

    <OfficeOccupants :occupants='members' />
  </div>
</template>

