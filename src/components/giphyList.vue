
<script setup>
import useAxios from '../composable/useAxios'
import { onMounted, ref, defineEmits, defineProps, watch } from 'vue'

const gifsList = ref([])
const searchGiphy = ref('')
const searchGiphyQuantity = ref(50)
const { fetchGifs } = useAxios()
const emits = defineEmits(['onShowModal', 'onShowPrev', 'onShowNext'])
const props = defineProps(['onGetPrev', 'onGetNext'])

const loadGifs = async () => {
  const response = await fetchGifs()

  gifsList.value = response
}

onMounted(() => {
  loadGifs()
})

watch(() => {
  if (props.onGetPrev) {
    console.log('prev')
    const prevGif = gifsList.value.find((gif) => gif.id === gif.id - 1)

    emits('onShowPrev', prevGif)
  }
  if (props.onGetNext) {
    console.log('next')
    const prevGif = gifsList.value.find((gif) => gif.id === gif.id + 1)

    emits('onShowNext', prevGif)
  }
})

const searchNewGiphy = async (event) => {
  if (event.key === 'Enter') {
    const response = await fetchGifs(searchGiphy.value, searchGiphyQuantity.value)
    gifsList.value = response
  }
}

const emitGiphy = (gif) => {
  emits('onShowModal', gif)
}
</script>

<template>
  <div>
    <h1>Giphy List</h1>
    <input type="text" placeholder="Search" v-model="searchGiphy" @keypress="searchNewGiphy" />

    <ul class="giphysContainer">
      <li v-for="gif in gifsList" :key="gif.id" class="thumbnail" @click="emitGiphy(gif)">
        <img :src="gif.images.original.url" :alt="gif.title" />
      </li>
    </ul>
  </div>
</template>
<style scoped>
.giphysContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  flex-direction: row;
  max-height: 800px;
  overflow: auto;
  width: 100vw;
}
.thumbnail {
  flex-basis: 100px;
  margin: 15px;
  border: 1px solid #ccc;
  cursor: pointer;
}
</style>