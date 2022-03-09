<script setup> 
import { ref, toRefs } from "vue";
import OfficeColourButton from "./OfficeColourButton.vue";

const props = defineProps({
  isNew: Boolean,
  currentInfo: Object
});

const { currentInfo } = toRefs(props);
const office = currentInfo.value;

let name = ref(office.name)
let mobile = ref(office.mobile)
let email = ref(office.email)
let capacity = ref(office.capacity)
let location = ref(office.location)
let colour = ref(office.colour)

let swapColour = 
  (newColour) => colour.value = newColour

const colourOptionsRow1 = [
  '#FFBE0B', '#FF9B71', '#FB5607', '#97512C', '#DBBADD', '#FF006E'
]

const colourOptionsRow2 = [
  '#A9F0D1', '#00B402', '#489DDA', '#0072E8', '#8338EC'
]

</script>

<template>
  <div class="bg-white p-4 ">
    <!-- header -->
    <div class="w-full flex items-center justify-between my-4">
      <svg class="cursor-pointer" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.57 5.93 3.5 12l6.07 6.07M20.5 12H3.67" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>

      <div>
        <p class="text-2xl tracking-tight" :class="[isNew ? 'block':'hidden']">New Office</p>
        <p class="text-2xl tracking-tight" :class="[isNew ? 'hidden':'block']">Edit Office</p>
      </div>

      <div>&nbsp;</div>
    </div>

    <!-- fields -->
    <div class="flex flex-col space-y-5 mt-8 mb-8 font-medium text-gray-500">
      <input 
        class="border-2 border-gray-100 bg-white w-full h-12 px-5 rounded-lg text-sm focus:border-indigo-500" 
        type="text" name="name" placeholder="Office Name" v-model="name">

      <input 
        class="border-2 border-gray-100 bg-white w-full h-12 px-5 rounded-lg text-sm " 
        type="text" name="address" placeholder="Physical Address" v-model="location">

      <input 
        class="border-2 border-gray-100 bg-white w-full h-12 px-5 rounded-lg text-sm " 
        type="email" name="email" placeholder="Email Address" v-model="email">

      <input 
        class="border-2 border-gray-100 bg-white w-full h-12 px-5 rounded-lg text-sm focus:border-indigo-500" 
        type="text" name="mobile" placeholder="Phone Number" v-model="mobile">

      <input 
        class="border-2 border-gray-100 bg-white w-full h-12 px-5 rounded-lg text-sm focus:border-indigo-500" 
        type="number" name="capacity" placeholder="Maximum Capacity" v-model="capacity">
    </div>

    <p class="text-2xl tracking-tight mb-5">Office Colour</p>

    <div class="mb-12 space-y-6">
      <!-- Colour Row 1 -->
      <div class="flex justify-between">
        <OfficeColourButton v-for="colourCode in colourOptionsRow1" 
          :key="colourCode"
          :componentColour="colourCode"
          :selectedColour=colour
          @changeSelectedColour="swapColour"
        />
      </div>

      <!-- Colour Row 2 -->
      <div class="flex justify-between px-9">
        <OfficeColourButton v-for="colourCode in colourOptionsRow2" 
          :key="colourCode"
          :componentColour="colourCode"
          :selectedColour=colour
          @changeSelectedColour="swapColour"
        />
      </div>
    </div>

    <div class="space-y-3">
      <div class="w-full flex justify-center" :class="[isNew ? 'block':'hidden']">
        <button type="button" class="rounded-full w-56 h-12 bg-[#489DDA]">
          <span class="text-base font-medium text-white">
            ADD OFFICE
          </span>
        </button>
      </div>

      <div class="w-full flex justify-center" :class="[isNew ? 'hidden':'block']">
        <button type="button" class="rounded-full w-56 h-12 bg-[#489DDA]">
          <span class="text-base font-medium text-white">
            UPDATE OFFICE
          </span>
        </button>
      </div>

      <div class="w-full flex justify-center" :class="[isNew ? 'hidden':'block']">
        <button type="button" class="rounded-full w-56 h-12 bg-[#d83a3a]">
          <span class="text-base font-medium text-white">
            DELETE OFFICE
          </span>
        </button>
      </div>
    </div>

   
  </div>
</template>
