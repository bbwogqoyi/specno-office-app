   <script setup>
import { ref, toRefs } from 'vue'
import EditOrDeleteButtonModal from './EditOrDeleteButtonModal.vue';

const props = defineProps({
  occupants: Array,
})

const searchText = ref('');
const selectedStaffMember = ref('');
const isModalVisible = ref(false);
const { occupants } = toRefs(props);

const getNumberOfOccupants = () => occupants.value?.length
const getAvatarPath = (member) => `../src/assets/${member.avatar}`
const closeModal = () => isModalVisible.value = false;

const emit = defineEmits([ 'editStaffMember', 'deleteStaffMember' ])

const editStaffMember = () => {
  closeModal()
  emit("editStaffMember", selectedStaffMember.value) 
}
const deleteStaffMember = () => {
  closeModal()
  emit("deleteStaffMember", selectedStaffMember.value) 
}
const initializeModal = (staffId) => {
  isModalVisible.value = true
  selectedStaffMember.value = staffId
}
</script>

<template>
  <div class="flex flex-col">
    <!-- Searchbar -->
    <div class="pt-2 mt-4 mb-8 relative text-gray-700">
      <input v-model="searchText" class="border-2 border-gray-100 bg-white w-full h-12 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="search" name="search" placeholder="Search">
      <button type="button" class="absolute right-0 top-0 mt-5 mr-4">
        <svg class="text-gray-400 h-6 w-6 fill-current" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 11a7.25 7.25 0 1 1 14.5 0 7.25 7.25 0 0 1-14.5 0ZM11 2.25a8.75 8.75 0 1 0 5.634 15.445l2.836 2.835a.75.75 0 1 0 1.06-1.06l-2.835-2.836A8.75 8.75 0 0 0 11 2.25Z"/>
        </svg>
      </button>
    </div>

    <!-- Headers -->
    <div class="flex justify-between">
      <p class="font-extrabold text-2xl tracking-tight">
        Staff Members In Office
      </p>
      <p class="font-medium text-2xl tracking-tight mr-4">
        {{getNumberOfOccupants()}}
      </p>
    </div>

    <!-- Member List -->
    <div class="w-full mt-6 py-2 tracking-tight text-[#484954]">
      <li class="flex flex-col pb-3 space-y-4 list-none" v-for="member in occupants">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-4" >
            <img class="w-12" :src="getAvatarPath(member)" />
            <p>{{member.firstName}} {{member.lastName}}</p>
          </div>
 
          <button type="button" @click="initializeModal(member._id)">
            <svg class="mr-4 cursor-pointer" width="25" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 7c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Zm0 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2Zm-2 9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2Z" fill="#22282F"/>
            </svg>
          </button>
          
        </div>
      </li>
    </div>

    <div :class="[ isModalVisible ? 'block' : 'hidden' ]">
      <EditOrDeleteButtonModal 
        @closeModal='closeModal'
        @editStaffMember='editStaffMember'
        @deleteStaffMember='deleteStaffMember'
      /> 
    </div>
  </div>
</template>