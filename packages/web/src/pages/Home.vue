<script setup>
import OfficeOverview from '../components/OfficeOverview.vue'
import { onBeforeMount, ref } from 'vue'
import axios from 'axios'
import { StatusCodes } from 'http-status-codes';
import AddButton from '../components/AddButton.vue';

let offices = ref([])

onBeforeMount(() => {
  axios.get('http://localhost:5001/offices')
  .then(function (response) {
    if(response.status === StatusCodes.OK) {
      offices.value = response.data;
    }
    else console.log("REDIRECT TO 404 PAGE")
  })
  .catch(function (error) {
    console.log(error);
  })
})

let getNumOfMembers = (members) => {
  if(members == null || members === []) {
    return 0;
  }
  else return members.length;
}
</script>

<template>
  <div class=" p-4">
    <p class="my-4 font-medium text-2xl tracking-tight">All Offices</p>

    <div class="space-y-6">
      <OfficeOverview v-for="office in offices" 
        :key="office._id"
        :id="office._id"
        :name="office.name"
        :capacity="office.capacity"
        :noOfOccupants="getNumOfMembers(office.members)"
        :phone="office.phone"
        :email="office.email" 
        :location="office.location"
        :colour="office.colour"
        :isOffice="false"
      />
    </div>

    <router-link :to="{ name: 'NewOffice', params: { isNew: true } }">
      <AddButton />
    </router-link>
  </div>
</template>
