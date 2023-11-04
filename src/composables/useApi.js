/* eslint-disable prettier/prettier */
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://www.scorebat.com/video-api/v3/feed/?token=[YOUR_API_TOKEN]',
})

const useApi = () => {
  return { instance }
}

export default useApi
