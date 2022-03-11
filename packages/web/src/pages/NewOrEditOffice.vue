<script setup> 
import { onBeforeMount, ref, toRefs } from "vue";
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
import { StatusCodes } from 'http-status-codes';
import OfficeColourButton from "../components/OfficeColourButton.vue";

const router = useRouter()
const route = useRoute()

const props = defineProps({
  isNew: Boolean
});
const { isNew } = toRefs(props)
const office = ref({})

const colourOptionsRow1 = [
  '#FFBE0B', '#FF9B71', '#FB5607', '#97512C', '#DBBADD', '#FF006E'
]

const colourOptionsRow2 = [
  '#A9F0D1', '#00B402', '#489DDA', '#0072E8', '#8338EC'
]

const swapColour = (newColour) => {
  office.value.colour = newColour
}

const isNewRecord = () => "true" === `${isNew.value}`
const getTitle = () => isNewRecord() ? "New Office" : "Edit Office"

const routeToOfficePage = () => {
  router.push({ name: 'Office', params: { id: route.params.id } })
}

const routeToHomePage = () => {
  router.push({ name: 'Home' })
}

const addNewOfficeRecord = () => {
  const newOffice = {
    name: office.value.name,
    location: office.value.location,
    email: office.value.email,
    phone: office.value.phone,
    colour: office.value.colour,
    capacity: office.value.capacity,
    members: [],
  }
  axios.post(`http://localhost:5001/offices`, newOffice)
  .then(function (response) {
    if(response.status === StatusCodes.CREATED) {
      office.value = {}
      routeToHomePage()
    }
    else console.log("REDIRECT TO 404 PAGE")
  })
  .catch(function (error) {
    console.log(error);
  })
}

const updateOfficeRecord = () => {
  const updatedoffice = {
    name: office.value.name,
    location: office.value.location,
    email: office.value.email,
    phone: office.value.phone,
    colour: office.value.colour,
    capacity: office.value.capacity,
    members: office.value.members,
  }

  axios.put(`http://localhost:5001/offices/${office.value._id}`, updatedoffice)
  .then(function (response) {
    if(response.status === StatusCodes.OK) {
      office.value = {}
      routeToOfficePage()
    }
    else console.log("REDIRECT TO 404 PAGE")
  })
  .catch(function (error) {
    console.log(error);
  })
}

const deleteOfficeRecord = () => {
  const id = route.params.id
  axios.delete(`http://localhost:5001/offices/${id}`)
  .then(function (response) {
    if(response.status === StatusCodes.OK) {
      routeToHomePage()
    }
    else console.log("REDIRECT TO 404 PAGE")
  })
  .catch(function (error) {
    console.log(error);
  })
}

onBeforeMount(() => {
  if( !isNewRecord() ) {
    const id = route.params.id
    axios.get(`http://localhost:5001/offices/${id}`)
    .then(function (response) {
      if(response.status === StatusCodes.OK) {
        office.value = response.data;
      }
      else console.log("REDIRECT TO 404 PAGE")
    })
    .catch(function (error) {
      console.log(error);
    })
  }
})

</script>

<template>
  <div class="bg-white p-4 ">
    <!-- header -->
    <div class="w-full flex items-center justify-between my-4">
      <svg @click="router.go(-1)" class="cursor-pointer" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.57 5.93 3.5 12l6.07 6.07M20.5 12H3.67" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>

      <div>
        <p class="text-2xl tracking-tight">{{ getTitle() }}</p>
      </div>

      <div>&nbsp;</div>
    </div>

    <!-- fields -->
    <div class="flex flex-col space-y-5 mt-8 mb-8 font-medium text-gray-500">
      <input 
        class="border-2 border-gray-100 bg-white w-full h-12 px-5 rounded-lg text-sm focus:border-indigo-500" 
        type="text" name="name" placeholder="Office Name" v-model="office.name">

      <input 
        class="border-2 border-gray-100 bg-white w-full h-12 px-5 rounded-lg text-sm " 
        type="text" name="address" placeholder="Physical Address" v-model="office.location">

      <input 
        class="border-2 border-gray-100 bg-white w-full h-12 px-5 rounded-lg text-sm " 
        type="email" name="email" placeholder="Email Address" v-model="office.email">

      <input 
        class="border-2 border-gray-100 bg-white w-full h-12 px-5 rounded-lg text-sm focus:border-indigo-500" 
        type="text" name="mobile" placeholder="Phone Number" v-model="office.phone">

      <input 
        class="border-2 border-gray-100 bg-white w-full h-12 px-5 rounded-lg text-sm focus:border-indigo-500" 
        type="number" name="capacity" placeholder="Maximum Capacity" v-model="office.capacity">
    </div>

    <!-- Office Colours -->
    <p class="text-2xl tracking-tight mb-5">Office Colour</p>
    <div class="mb-12 space-y-6">
      <!-- Colour Row 1 -->
      <div class="flex justify-between">
        <OfficeColourButton v-for="colourCode in colourOptionsRow1" 
          :key="colourCode"
          :componentColour="colourCode"
          :selectedColour="office.colour"
          @changeSelectedColour="swapColour"
        />
      </div>

      <!-- Colour Row 2 -->
      <div class="flex justify-between px-9">
        <OfficeColourButton v-for="colourCode in colourOptionsRow2" 
          :key="colourCode"
          :componentColour="colourCode"
          :selectedColour="office.colour"
          @changeSelectedColour="swapColour"
        />
      </div>
    </div>

    <!-- Buttons -->
    <div class="w-full flex justify-center" :class="[ isNewRecord() ? 'block':'hidden' ]">
      <button @click="addNewOfficeRecord()" type="button" class="rounded-full w-56 h-12 bg-[#489DDA]">
        <span class="text-base font-medium text-white">
          ADD OFFICE
        </span>
      </button>
    </div>

    <div class="w-full flex flex-col justify-center items-center space-y-4" 
      :class="[ !isNewRecord() ? 'block':'hidden' ]">
      <button @click="updateOfficeRecord()" type="button" class="rounded-full w-56 h-12 bg-[#489DDA]">
        <span class="text-base font-medium text-white">
          UPDATE OFFICE
        </span>
      </button>

      <button @click="deleteOfficeRecord()" type="button" class="rounded-full w-56 h-12 bg-[#d83a3a]">
        <span class="text-base font-medium text-white">
          DELETE OFFICE
        </span>
      </button>
    </div>


   
  </div>
</template>
