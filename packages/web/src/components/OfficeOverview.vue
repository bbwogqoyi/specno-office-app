<script setup>
import { ref, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const props = defineProps({
  id: String,
  name: String,
  noOfOccupants: Number,
  phone: String,
  email: String,
  capacity: Number,
  location: String,
  colour: String,
  isOffice: Boolean
})
const showMoreInfo = ref(true);
const { id } = toRefs(props);

const routeToOfficePage = () => {
  router.push({ name: 'Office', params: { id: id.value } })
}

const routeToOfficeEditPage = () => {
  router.push({ name: 'EditOffice', params: { id: id.value, isNew: false }})
}

</script>

<template>
  <div class="flex bg-white rounded-r-lg border border-solid border-[#E8F3FC]">
    <!-- Side Ribbon -->
    <div class="w-3 flex flex-col rounded-l-lg" :style="{ 'background-color': colour }">
      <div class="h-3/5">
        <div class="h-1/2">&nbsp;</div>
        <div class="h-1/2 bg-white opacity-20">&nbsp;</div>
      </div>
      <div class="h-2/5 bg-white opacity-50">&nbsp;</div>
    </div>

    <!-- Main Content -->
    <div class="w-full py-2 px-4 tracking-tight text-[#484954]">
      <div class="flex flex-row items-center justify-between my-2">
        <button type="button" @click="routeToOfficePage()" :class="[isOffice ? 'hidden': 'block']">
          <p :title="id" class="font-extrabold text-2xl tracking-tight cursor-pointer">{{name}}</p>
        </button>
        <p :title="id" class="font-extrabold text-2xl tracking-tight" :class="[isOffice ? 'block': 'hidden']">
          {{name}}
        </p>
        
        <svg @click="routeToOfficeEditPage()" class="mx-4 right-0 cursor-pointer" width="18" height="19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M14.158 2.333a1.25 1.25 0 0 1 1.684 0c.023.02.052.05.156.157.1.102.128.13.147.153a1.25 1.25 0 0 1 0 1.644c-.02.023-.047.051-.147.153l-.84.861a1.904 1.904 0 0 1-1.942-2.007l.786-.804a4.63 4.63 0 0 1 .156-.157Zm-2.204.107-8.96 9.168-.072.073c-.692.708-1.139 1.165-1.45 1.724-.31.56-.461 1.18-.696 2.142l-.024.1-.48 1.966a.75.75 0 0 0 .914.904l1.828-.467.102-.027c.981-.25 1.615-.412 2.182-.74.567-.327 1.024-.795 1.732-1.52l.073-.075 9.968-10.2.014-.014a2.75 2.75 0 0 0 .19-3.817c-.05-.059-.111-.12-.19-.2l-.014-.016-.015-.015c-.082-.084-.144-.148-.204-.202a2.75 2.75 0 0 0-3.704 0c-.06.054-.122.118-.204.202l-.015.015-.956.979a.816.816 0 0 0-.02.02Zm-.021 2.167a3.429 3.429 0 0 0 1.973 1.974L6.031 14.64c-.807.825-1.117 1.133-1.483 1.345-.367.211-.788.325-1.906.611l-.617.158.184-.751c.268-1.096.375-1.508.575-1.87.201-.362.495-.67 1.283-1.477l7.866-8.05Z" fill="#0D4477"/>
        </svg>
      </div>

      <div class="flex flex-row items-center my-4 pb-3 space-x-4 border-b border-solid border-[#0D4477] border-opacity-40">
        <svg class="w-6" width="24" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity=".4" d="M17.998 7.44a.605.605 0 0 0-.19 0 2.573 2.573 0 0 1-2.48-2.581c0-1.43 1.15-2.58 2.58-2.58a2.58 2.58 0 0 1 2.58 2.58 2.589 2.589 0 0 1-2.49 2.58ZM16.968 14.72c1.37.23 2.88-.01 3.94-.72 1.41-.94 1.41-2.48 0-3.42-1.07-.71-2.6-.95-3.97-.71M5.968 7.44c.06-.01.13-.01.19 0a2.573 2.573 0 0 0 2.48-2.581c0-1.43-1.15-2.58-2.58-2.58a2.58 2.58 0 0 0-2.58 2.58c.01 1.4 1.11 2.53 2.49 2.58ZM6.997 14.72c-1.37.23-2.88-.01-3.94-.72-1.41-.94-1.41-2.48 0-3.42 1.07-.71 2.6-.95 3.97-.71" stroke="#484954" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 14.909a.605.605 0 0 0-.19 0 2.573 2.573 0 0 1-2.48-2.58c0-1.43 1.15-2.58 2.58-2.58a2.58 2.58 0 0 1 2.58 2.58c-.01 1.4-1.11 2.54-2.49 2.58ZM9.09 18.059c-1.41.94-1.41 2.48 0 3.42 1.6 1.07 4.22 1.07 5.82 0 1.41-.94 1.41-2.48 0-3.42-1.59-1.06-4.22-1.06-5.82 0Z" stroke="#484954" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <p>
          <span class="font-bold mr-1">{{noOfOccupants}}</span>
          Staff Members in Office
        </p>
      </div>

      <div class="flex flex-row items-center justify-center mt-2 mb-6 space-x-4 cursor-pointer group" @click="showMoreInfo = !showMoreInfo">
        <p>More Info</p>
        <svg :class="[ showMoreInfo ? 'block' : 'hidden' ]" class="group-hover:animate-bounce delay-500" width="24" height="25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m19.92 9.46-6.52 6.672c-.77.788-2.03.788-2.8 0L4.08 9.46" stroke="#0D4477" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>

        <svg :class="[ showMoreInfo ? 'hidden' : 'block' ]" class="group-hover:animate-bounce delay-500" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9201 15.7023L13.4001 9.0307C12.6301 8.2428 11.3701 8.2428 10.6001 9.0307L4.08008 15.7023" stroke="#0D4477" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>

      <!-- More Info Section -->
      <div :class="[ showMoreInfo ? 'hidden' : 'block' ]">
        <div class="flex flex-row items-center my-2 pb-3 space-x-4">
          <svg class="w-6" width="20" height="21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.462.964h.125c.332 0 .59 0 .83.042A2.75 2.75 0 0 1 6.45 2.594c.099.221.161.472.241.794l.015.058.414 1.655.009.036c.14.56.259 1.036.316 1.439.06.429.063.838-.074 1.259-.137.42-.38.75-.682 1.062-.283.291-.66.606-1.102.976l-.029.024-1.612 1.348a13.897 13.897 0 0 0 5.523 5.523l1.348-1.612.024-.029c.37-.443.685-.819.977-1.102.31-.302.64-.545 1.061-.681.42-.137.83-.136 1.26-.075.402.057.878.176 1.438.316l.036.01 1.655.413.058.015c.322.08.573.143.794.241a2.75 2.75 0 0 1 1.588 2.034c.042.239.042.497.042.83v.125c0 .383 0 .685-.066.983-.242 1.084-1.246 1.994-2.348 2.13-.302.037-.562.011-.885-.02l-.047-.005c-2.64-.257-5.016-.917-7.085-1.957-3.074-1.544-5.445-3.915-6.99-6.989C1.29 9.325.632 6.95.374 4.311a88.75 88.75 0 0 0-.005-.047C.337 3.94.311 3.68.348 3.378c.136-1.102 1.046-2.105 2.13-2.348.298-.066.6-.066.984-.066Zm7.396 16.482c1.68.72 3.582 1.196 5.691 1.402.387.038.483.044.604.029.472-.058.963-.503 1.067-.968.026-.116.03-.243.03-.722 0-.42-.003-.536-.02-.628a1.25 1.25 0 0 0-.72-.925c-.086-.038-.198-.069-.606-.17l-1.655-.414c-.606-.152-1.005-.25-1.321-.296-.3-.042-.458-.025-.584.016-.127.04-.265.121-.482.331-.229.223-.493.538-.894 1.017l-1.11 1.328Zm-7.59-7.59 1.328-1.11c.48-.4.795-.665 1.017-.894.21-.217.29-.355.331-.481.041-.126.058-.286.016-.584-.045-.317-.144-.716-.296-1.322L5.251 3.81c-.102-.408-.133-.52-.171-.605a1.25 1.25 0 0 0-.924-.722c-.092-.016-.208-.019-.63-.019-.478 0-.604.004-.72.03-.465.104-.91.595-.969 1.068-.015.12-.009.216.029.603.206 2.11.682 4.011 1.402 5.692Z" fill="#0D4477"/>
          </svg>
          <p>{{phone}}</p>
        </div>

        <div class="flex flex-row items-center my-2 pb-3 space-x-4">
          <svg width="22" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9 .393h-.056c-1.838 0-3.294 0-4.433.153-1.172.158-2.121.49-2.87 1.238-.748.748-1.08 1.697-1.238 2.87C.25 5.794.25 7.249.25 9.086V9.2c0 1.838 0 3.294.153 4.433.158 1.172.49 2.121 1.238 2.87.749.748 1.698 1.08 2.87 1.238 1.14.153 2.595.153 4.433.153h4.112c1.838 0 3.294 0 4.433-.153 1.172-.158 2.121-.49 2.87-1.238.748-.749 1.08-1.698 1.238-2.87.153-1.14.153-2.595.153-4.433v-.113c0-1.837 0-3.293-.153-4.432-.158-1.173-.49-2.122-1.238-2.87-.749-.748-1.698-1.08-2.87-1.238-1.14-.153-2.595-.153-4.433-.153H9ZM2.702 2.845c.423-.423 1.003-.677 2.009-.812 1.028-.139 2.382-.14 4.289-.14h4c1.907 0 3.262.001 4.29.14 1.005.135 1.585.389 2.008.812.423.423.677 1.003.812 2.009.138 1.027.14 2.382.14 4.289 0 1.907-.002 3.261-.14 4.289-.135 1.006-.389 1.586-.812 2.009-.423.423-1.003.677-2.009.812-1.027.138-2.382.14-4.289.14H9c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812-.423-.423-.677-1.003-.812-2.009-.138-1.028-.14-2.382-.14-4.29 0-1.906.002-3.26.14-4.288.135-1.006.389-1.586.812-2.01Zm2.714 1.674a.75.75 0 1 0-.832 1.248l6 4a.75.75 0 0 0 .832 0l6-4a.75.75 0 1 0-.832-1.248L11 8.242 5.416 4.519Z" fill="#0D4477"/>
          </svg>
          <p>{{email}}</p>
        </div>

        <div class="flex flex-row items-center my-2 pb-3 space-x-4">
          <svg class="w-6" width="24" height="25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 8.017a.605.605 0 0 0-.19 0 2.573 2.573 0 0 1-2.48-2.58c0-1.43 1.15-2.58 2.58-2.58a2.58 2.58 0 0 1 2.58 2.58A2.589 2.589 0 0 1 18 8.017ZM16.97 15.297c1.37.23 2.88-.01 3.94-.72 1.41-.94 1.41-2.48 0-3.42-1.07-.71-2.6-.95-3.97-.71M5.97 8.017c.06-.01.13-.01.19 0a2.573 2.573 0 0 0 2.48-2.58c0-1.43-1.15-2.58-2.58-2.58a2.58 2.58 0 0 0-2.58 2.58c.01 1.4 1.11 2.53 2.49 2.58ZM7 15.297c-1.37.23-2.88-.01-3.94-.72-1.41-.94-1.41-2.48 0-3.42 1.07-.71 2.6-.95 3.97-.71M12 15.487a.605.605 0 0 0-.19 0 2.573 2.573 0 0 1-2.48-2.58c0-1.43 1.15-2.58 2.58-2.58a2.58 2.58 0 0 1 2.58 2.58c-.01 1.4-1.11 2.54-2.49 2.58ZM14.91 18.637c-1.59-1.06-4.22-1.06-5.82 0-1.41.94-1.41 2.48 0 3.42 1.6 1.07 4.22 1.07 5.82 0" stroke="#0D4477" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p>Office Capacity: {{capacity}}</p>
        </div>
        
        <div class="flex flex-row items-center my-2 pb-3 space-x-4">
          <svg class="w-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M11.9999 13.43C13.723 13.43 15.1199 12.0331 15.1199 10.31C15.1199 8.58687 13.723 7.19 11.9999 7.19C10.2768 7.19 8.87988 8.58687 8.87988 10.31C8.87988 12.0331 10.2768 13.43 11.9999 13.43Z" stroke="#0D4477" stroke-width="1.5"/><path d="M3.61995 8.49C5.58995 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.38995 20.54C5.62995 17.88 2.46995 13.57 3.61995 8.49Z" stroke="#0D4477" stroke-width="1.5"/>
          </svg>
          <p>{{location}}</p>
        </div>
      </div>
    </div>
  </div>
</template>