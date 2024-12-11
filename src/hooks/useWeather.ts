import axios from "axios"
import { SearchType } from "../types"

const useWeather = () => {
    const fetchWeather = async (search : SearchType) =>{
        
        const appId = import.meta.env.VITE_API_KEY
        try {
            console.log("Consultando...")

            //Get Latitude and Longitude to use on the next API
            const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${search.city},${search.country}&appid=${appId}`
            console.log(geoUrl)

            const { data } = await axios(geoUrl)
            console.log(data)

            const lat = data[0].lat
            const lon = data[0].lon

            console.log("Latitude: ", lat, " ", "Longitude: ", lon)

            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
            console.log(weatherUrl)

            const { data: weatherResult } = await axios(weatherUrl)
            console.log(weatherResult)

            //Get Current Weather

        } catch (error) {
            console.log(error)
        }
    }
    return{
        fetchWeather,
    }
}

export default useWeather