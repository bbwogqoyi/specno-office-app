<script setup> 
import { defineEmits, ref } from "vue";

const pageIndex = ref(1)
const resetModalState = () => pageIndex.value = 1

const emit = defineEmits([ 'closeModal', 'editStaffMember', 'deleteStaffMember' ])

const closeModal = () => {
  resetModalState()
  emit("closeModal", null) 
}

const editStaffMember = () => {
  resetModalState()
  emit("editStaffMember", null) 
}

const deleteStaffMember = () => {
  resetModalState()
  emit("deleteStaffMember", null) 
}

</script>
<template>
  <!-- Backdrop -->
  <div class="flex flex-col space-y-4 px-4 min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-gray-900 bg-opacity-80">
    <!-- centered modal - Page 1 -->
    <div :class="[ pageIndex == 1 ? 'block' : 'hidden' ]" class="flex flex-col w-full md:w-1/2 p-6 bg-[#F8FAFC] shadow-md hover:shodow-lg rounded-lg">
      <!-- Buttons -->
      <div @click="editStaffMember()" class="w-full flex justify-center my-4" >
        <button type="button" class="rounded-full w-72 h-12 bg-[#489DDA]">
          <span class="text-base font-light text-white uppercase">
            Edit Staff Member
          </span>
        </button>
      </div>

      <div @click="pageIndex=2" class="w-full flex justify-center mb-4" >
        <button type="button" class="rounded-full w-72 h-12 bg-[#d83a3a]">
          <span class="text-base font-light text-white uppercase">
            Delete Staff Member
          </span>
        </button>
      </div>
    </div>

    <!-- centered modal - Page 2 -->
    <div :class="[ pageIndex == 2 ? 'block' : 'hidden' ]" class="flex flex-col w-full md:w-1/2 p-6 bg-[#F8FAFC] shadow-md hover:shodow-lg rounded-lg">
      <!-- header and close button -->
      <div class="flex items-center justify-between space-x-8 mb-6">
        <svg @click="pageIndex=1" class="cursor-pointer" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.57 5.93 3.5 12l6.07 6.07M20.5 12H3.67" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <p class="text-lg font-extrabold tracking-tight text-center">
          Are You Sure You Want To Delete Staff Member?
        </p>

        <span>&nbsp;</span>
      </div>

      <!-- Buttons -->
      <div @click="deleteStaffMember()" class="w-full flex justify-center my-4" >
        <button type="button" class="rounded-full w-72 h-12 bg-[#d83a3a]">
          <span class="text-base font-medium text-white uppercase">
            Delete Staff Member
          </span>
        </button>
      </div>

      <div @click="closeModal()" class="w-full flex justify-center mb-4" >
        <button type="button" class="rounded-full w-72 h-12 bg-[#489DDA]">
          <span class="text-base font-medium text-white uppercase">
            Keep Staff Member
          </span>
        </button>
      </div>

    </div>
  </div>
</template>
