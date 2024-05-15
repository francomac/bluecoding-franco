<script setup>
import giphyList from './components/giphyList.vue'
import modal from './components/modal.vue'
import { ref } from 'vue'

const showModal = ref(false)
const giphySelected = ref({})
const isGetNext = ref(false)
const isGetPrev = ref(false)
const toggleModal = (giphy) => {
  giphySelected.value = giphy
  showModal.value = !showModal.value
}
const getPrevGiphy = () => {
  console.log('prev')
  isGetPrev.value = true
}
const getNextGiphy = () => {
  console.log('prev')
  isGetNext.value = true
}

const setNewGiphy = (giphy) => {
  giphySelected.value = giphy
}
</script>

<template>
  <div>
    <div id="layout" v-if="showModal" @click="toggleModal">
      <modal
        :giphy="giphySelected"
        @onCloseModal="toggleModal"
        @onPrev="getPrevGiphy"
        @onNext="getNextGiphy"
      ></modal>
    </div>

    <Suspense>
      <template #fallback>
        <div>Loading...</div>
      </template>
      <template #default>
        <giphyList
          @onShowModal="toggleModal"
          :onGetPrev="isGetprev"
          :onGetNext="isGetNext"
          @onShowNext="setNewGiphy"
          @onShowPrev="setNewGiphy"
        />
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
#layout {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
}
#layout > div {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 80%;
  max-width: 800px;
}
</style>

