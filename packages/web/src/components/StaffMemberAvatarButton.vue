<script setup> 
import { defineEmits, toRefs } from "vue";

const props = defineProps({
  selectedAvatar: String,
  componentAvatar: String
});

const { componentAvatar, selectedAvatar } = toRefs(props);
const isSelected = () => selectedAvatar.value === componentAvatar.value 
const getAvatarPath = () => `../src/assets/${componentAvatar.value}`

const emit = defineEmits(['change'])
const changeSelectedAvatar = () => emit('change', componentAvatar.value)

</script>

<template>
  <button type="button" @click="changeSelectedAvatar"
    class="rounded-full w-16"
    :class="[isSelected() ? 'border-4 border-black':'border-none']" >
    <img class="w-16" :src="getAvatarPath()" />
  </button>
</template>
