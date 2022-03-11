<script setup>
import OfficeOverview from '../components/OfficeOverview.vue'
import OfficeOccupants from '../components/OfficeOccupants.vue';
import { useRouter, useRoute } from 'vue-router'
import { onBeforeMount, ref } from 'vue'
import axios from 'axios'
import { StatusCodes } from 'http-status-codes';
import AddButton from '../components/AddButton.vue';
import NewOrEditStaffMemberModal from '../components/NewOrEditStaffMemberModal.vue';

const router = useRouter()
const route = useRoute()

let office = ref({})
let selectedStaffMember = ref({})
let isNewStaffModelVisible = ref(false)
let isEditStaffModelVisible = ref(false)

onBeforeMount(() => {
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
})

const getNumOfMembers = (members) => {
  if(members == null || members === []) {
    return 0;
  }
  else return members.length;
}

const closeModal = () => {
  isNewStaffModelVisible.value = false;
  isEditStaffModelVisible.value = false;
}

const routeToOfficePage = () => {
  router.push({ name: 'Office', params: { id: route.params.id } })
}

const getOfficeDetails = () => {
  return {
    name: office.value.name,
    location: office.value.location,
    email: office.value.email,
    phone: office.value.phone,
    colour: office.value.colour,
    capacity: office.value.capacity
  }
}

const commitOfficeChange = (updatedOffice) => {
  const id = route.params.id
  axios.put(`http://localhost:5001/offices/${id}`, updatedOffice)
  .then(function (response) {
    if(response.status === StatusCodes.OK) {
      office.value = response.data
    }
    else console.log("REDIRECT TO 404 PAGE")
  })
  .catch(function (error) {
    console.log(error);
  })
}

const addNewStaffMemberToOffice = (staffMember) => {
  closeModal();
  const updatedStaffMembers = 
    ( office.value.members !== null ) ? [ ...(office.value.members)] : []

  updatedStaffMembers.push(staffMember)
  const updatedOffice = {
    ...(getOfficeDetails()),
    members: updatedStaffMembers,
  }
  commitOfficeChange(updatedOffice)
}

const updateStaffMemberDetails = (staffMember) => {
  closeModal();
  let unchangedMembers = 
    office.value?.members?.filter((item) => item._id !== selectedStaffMember.value._id)

  unchangedMembers.push(staffMember)
  const updatedOffice = {
    ...(getOfficeDetails()),
    members: unchangedMembers,
  }

  commitOfficeChange(updatedOffice)
}

const deleteStaffMember = (id) => {
  closeModal();
  let unchangedMembers = 
    office.value?.members?.filter((item) => item._id !== id)

  const updatedOffice = {
    ...(getOfficeDetails()),
    members: unchangedMembers,
  }
  commitOfficeChange(updatedOffice)
}


const editStaffMember = (staffMemberId) => {
  closeModal();
  selectedStaffMember.value = 
    office.value?.members?.find((item) => item._id === staffMemberId)

  isEditStaffModelVisible.value = true
}
</script>

<template>
  <div class="bg-white p-4">
    <div class="flex justify-between my-4">
      <svg @click="router.push('/')" class=" cursor-pointer" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.57 5.93 3.5 12l6.07 6.07M20.5 12H3.67" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>

      <p class="text-2xl tracking-tight">Office</p>

      <div>&nbsp;</div>
    </div>

    <OfficeOverview 
      :id='route.params.id'
      :capacity='office.capacity'
      :noOfOccupants='getNumOfMembers(office.members)'
      :name='office.name'
      :phone='office.phone' 
      :email='office.email'
      :location='office.location'
      :colour='office.colour'
      :isOffice='true'
    />

    <OfficeOccupants
      @editStaffMember='editStaffMember'
      @deleteStaffMember='deleteStaffMember'
      :occupants='office.members' 
    />
  </div>

  <button type="button" @click="isNewStaffModelVisible = true">
    <AddButton />
  </button>

  <div :class="[ isNewStaffModelVisible ? 'block' : 'hidden' ]">
    <NewOrEditStaffMemberModal 
      @addStaffMember='addNewStaffMemberToOffice'
      @close='closeModal'
      :isNew='true'
    />
  </div>

  <div :class="[ isEditStaffModelVisible ? 'block' : 'hidden' ]">
    <NewOrEditStaffMemberModal
      :key='selectedStaffMember._id'
      @updateStaffMember='updateStaffMemberDetails'
      @close='closeModal'
      :isNew='false'
      :member=selectedStaffMember
    />
  </div>

  
</template>

