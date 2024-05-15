<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps(['giphy'])
const emits = defineEmits(['onCloseModal', 'onPrev', 'onNext'])

const closeModal = () => {
  emits('onCloseModal')
}
const onPrev = () => {
  console.log('prev')
  emits('onPrev')
}
const onNext = () => {
  console.log('prev')
  emits('onNext')
}
</script>


<template>
  <div class="modal-container">
    <button class="close-button" @click="closeModal">X</button>
    <h1 class="title">{{ props.giphy.title }}</h1>
    <button @click="onPrev">Prev</button>
    <img :src="props.giphy.images.original.url" :alt="props.giphy.title" />
    <button @click="onNext">Next</button>
  </div>
</template>

<style scoped>
.modal-container {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 80%;
  max-width: 800px;
}
.modal-container img {
  width: 100%;
}
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
</style>
