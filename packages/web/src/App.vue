<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import Office from './components/Office.vue'
import LandingPage from './components/LandingPage.vue';
</script>

<template>
  <!-- <div class="bg-indigo-50 flex flex-col items-center h-screen justify-center">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + Vite" />
  </div> -->

  <div class="h-screen flex items-center bg-[#F8FAFC] ">
    <div class="w-1/2 mx-auto ">
      <Office class="hidden" />
      <LandingPage />
    </div>
  </div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
