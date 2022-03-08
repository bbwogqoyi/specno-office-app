<script setup> 
import { defineProps, defineEmits, toRefs } from "vue";

const props = defineProps({
  selectedColour: String,
  componentColour: String
});

const emit = defineEmits(['changeSelectedColour'])

const { componentColour, selectedColour } = toRefs(props);

let isSelected = () => selectedColour.value === componentColour.value 

let changeSelectedColour = () => emit('changeSelectedColour', componentColour.value)

</script>

<template>
  <button type="button" 
    class="rounded-full w-9 h-9"
    :style="{ 'background-color': componentColour }"
    @click="changeSelectedColour"
    :class="[isSelected() ? 'border-4 border-black':'border-none']" ></button>
</template>
