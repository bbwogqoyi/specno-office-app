<script setup> 
import { onBeforeMount, defineEmits, ref, toRefs } from "vue";
import StaffMemberAvatarButton from "./StaffMemberAvatarButton.vue";

const props = defineProps({
  member: Object,
  isNew: Boolean
});

const staffMember = ref({})
const pageIndex = ref(1)
const { isNew, member } = toRefs(props)

const avatarOptionsRow1 = [
  '01.png', '02.png', '03.png', '04.png'
]

const avatarOptionsRow2 = [
  '05.png', '06.png', '07.png'
]

const isNewRecord = () => "true" === `${isNew.value}`
const getTitle = () => isNewRecord() ? "New Staff Member" : "Edit Staff Member"

const pickAvatar = (avatar) => {
  staffMember.value.avatar = avatar
}

const resetModalState = () => {
  staffMember.value = {}
  pageIndex.value = 1
}

const emit = defineEmits(['close', 'addStaffMember', 'updateStaffMember'])
let closeModal = () => {
  resetModalState()
  emit("close", null) 
}

const getUpdatedMember = () => {
  return {
    firstName: staffMember.value.firstName,
    lastName: staffMember.value.lastName,
    avatar: staffMember.value.avatar
  }
}

const addNewStaffMemberRecord = () => {
  emit("addStaffMember", getUpdatedMember()) 
  resetModalState()
}

const updateStaffMemberRecord = () => {
  emit("updateStaffMember", getUpdatedMember()) 
  resetModalState()
}


onBeforeMount(() => {
  if( !isNewRecord() && member.value !== null ) {
    staffMember.value = { 
      firstName: member.value.firstName, 
      lastName: member.value.lastName,
      avatar: member.value.avatar
    }
  }
})
</script>
<template>
  <!-- Backdrop -->
  <div class="flex flex-col space-y-4 px-4 min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-gray-900 bg-opacity-80">
    <!-- centered modal - Page 1 -->
    <div :class="[ pageIndex == 1 ? 'block' : 'hidden' ]" class="flex flex-col w-full md:w-1/2 p-6 bg-[#F8FAFC] shadow-md hover:shodow-lg rounded-lg">
      <!-- header and close button -->
      <div class="flex items-center justify-between">
        <p class="text-2xl font-extrabold tracking-tight">{{ getTitle() }}</p>

        <button type="button" @click="closeModal()">
          <svg width="24" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22.5c5.5 0 10-4.5 10-10s-4.5-10-10-10S2 7 2 12.5s4.5 10 10 10ZM9.17 15.33l5.66-5.66M14.83 15.33 9.17 9.67" stroke="#0D4477" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>

      <!-- fields -->
      <div class="flex flex-col space-y-5 mt-8 mb-8 font-medium text-gray-500">
        <input 
          class="border-2 border-gray-100 bg-white w-full h-12 px-5 rounded-lg text-sm focus:border-indigo-500" 
          type="text" name="firstName" placeholder="First Name" v-model="staffMember.firstName" >

        <input 
          class="border-2 border-gray-100 bg-white w-full h-12 px-5 rounded-lg text-sm " 
          type="text" name="lastName" placeholder="Last Name" v-model="staffMember.lastName">
      </div>

      <div class="flex justify-center space-x-1 mb-8">
        <div class="bg-[#489DDA] border-2 border-[#489DDA] w-2 h-2 rounded-full"></div>
        <div class="bg-white border-2 border-[#489DDA] w-2 h-2 rounded-full"></div>
      </div>

      <!-- Buttons -->
      <div @click="pageIndex=2" class="w-full flex justify-center mb-4" >
        <button type="button" class="rounded-full w-56 h-12 bg-[#489DDA]">
          <span class="text-base font-medium text-white">
            NEXT
          </span>
        </button>
      </div>


  		
  		<!-- <button  class="flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full">Delete</button> -->
    </div>

    <!-- centered modal - Page 2 -->
    <div :class="[ pageIndex == 2 ? 'block' : 'hidden' ]" class="flex flex-col w-full md:w-1/2 p-6 bg-[#F8FAFC] shadow-md hover:shodow-lg rounded-lg">
      <!-- header and close button -->
      <div class="flex items-center justify-between">
        <svg @click="pageIndex=1" class="cursor-pointer" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.57 5.93 3.5 12l6.07 6.07M20.5 12H3.67" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <p class="text-2xl font-extrabold tracking-tight">{{ getTitle() }}</p>

        <button type="button" @click="closeModal()">
          <svg width="24" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22.5c5.5 0 10-4.5 10-10s-4.5-10-10-10S2 7 2 12.5s4.5 10 10 10ZM9.17 15.33l5.66-5.66M14.83 15.33 9.17 9.67" stroke="#0D4477" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>

      <!-- Avatar Options -->
      <p class="text-2xl font-semibold tracking-tight my-5">Avatar</p>
      <div class="mb-12 space-y-6">
        <!-- Avatar Row 1 -->
        <div class="flex justify-between">
          <StaffMemberAvatarButton v-for="avatar in avatarOptionsRow1" 
            :key="avatar"
            :componentAvatar="avatar"
            :selectedAvatar="staffMember.avatar"
            @change="pickAvatar"
          />
        </div>

        <!-- Avatar Row 2 -->
        <div class="flex justify-between px-9">
          <StaffMemberAvatarButton v-for="avatar in avatarOptionsRow2" 
            :key="avatar"
            :componentAvatar="avatar"
            :selectedAvatar="staffMember.avatar"
            @change="pickAvatar"
          />
        </div>
      </div>

      <div class="flex justify-center space-x-1 mb-8">
        <div class="bg-white border-2 border-[#489DDA] w-2 h-2 rounded-full"></div>
        <div class="bg-[#489DDA] border-2 border-[#489DDA] w-2 h-2 rounded-full"></div>
      </div>

      <!-- Buttons -->
      <div class="w-full flex justify-center mb-4" :class="[ isNewRecord() ? 'block' : 'hidden' ]">
        <button @click="addNewStaffMemberRecord()" type="button" class="rounded-full w-56 h-12 bg-[#489DDA]">
          <span class="text-base font-medium text-white uppercase">
            Add Staff Member
          </span>
        </button>
      </div>

      <div class="w-full flex justify-center mb-4" :class="[ !isNewRecord() ? 'block' : 'hidden' ]">
        <button @click="updateStaffMemberRecord()" type="button" class="rounded-full w-56 h-12 bg-[#489DDA]">
          <span class="text-base font-medium text-white uppercase">
            Update Staff Member
          </span>
        </button>
      </div>
    </div>
  </div>
</template>
