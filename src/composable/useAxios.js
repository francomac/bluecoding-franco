import axios from 'axios'

const useAxios = () => {
  const fetchGifs = async (searchCriteria = 'funny', searchGiphyQuantity = 25) => {
    try {
      const domain = 'https://api.giphy.com/v1/gifs/search'
      const key = 'pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa'
      const url = `${domain}?api_key=${key}&limit=${searchGiphyQuantity}&rating=g&q=${searchCriteria}`
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json'
        }
      })

      return response.data.data
    } catch (error) {
      console.error(error)
    }
  }

  return { fetchGifs }
}
export default useAxios
