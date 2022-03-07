<script setup>
import OfficeOverview from './OfficeOverview.vue'
import { ref } from 'vue'

let offices = ref([
  { 
    id: 1,
    name: "Specno",
    capacity: 25,
    noOfOccupants: 5,
    mobile: "082&nbsp;364&nbsp;9864",
    email: "info@specno.com",
    location: "10 Willie Van Schoor Dr, Bo Oakdale, Cape Town, 7530",
    ribbonColour: "#FFBE0B",
  },
  { 
    id: 2,
    name: "Specno",
    capacity: 25,
    noOfOccupants: 5,
    mobile: "082&nbsp;364&nbsp;9864",
    email: "info@specno.com",
    location: "10 Willie Van Schoor Dr, Bo Oakdale, Cape Town, 7530",
    ribbonColour: "#0072E8",
  },
  { 
    id: 3,
    name: "Specno",
    capacity: 25,
    noOfOccupants: 5,
    mobile: "082&nbsp;364&nbsp;9864",
    email: "info@specno.com",
    location: "10 Willie Van Schoor Dr, Bo Oakdale, Cape Town, 7530",
    ribbonColour: "#97512C",
  },
  { 
    id: 4,
    name: "Specno",
    capacity: 25,
    noOfOccupants: 5,
    mobile: "082&nbsp;364&nbsp;9864",
    email: "info@specno.com",
    location: "10 Willie Van Schoor Dr, Bo Oakdale, Cape Town, 7530",
    ribbonColour: "#00B402",
  },
])
</script>

<template>
  <div class="bg-white p-4">
    <p class="my-4 font-medium text-2xl tracking-tight">All Offices</p>

    <div class="space-y-6">
      <OfficeOverview  v-for="office in offices" 
        :key="office.id"
        :name="office.name"
        :capacity="office.capacity"
        :noOfOccupants="office.noOfOccupants"
        :mobile="office.mobile"
        :email="office.email" 
        :location="office.location"
        :ribbonColour="office.ribbonColour"
      />
    </div>
    
  </div>
</template>
