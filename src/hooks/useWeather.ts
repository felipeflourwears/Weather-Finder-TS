import axios from "axios"
import { SearchType } from "../types"
import { z } from 'zod'


//TYPE GUARD O ASSERTION

/* 
//import { Weather } from "../types"
function isWeatherReponse(weather : unknown) : weather is Weather{
    return(
        Boolean(weather) &&
        typeof weather === 'object' &&
        typeof (weather as Weather).name === 'string' &&
        typeof (weather as Weather).main.temp === 'number' &&
        typeof (weather as Weather).main.temp_max === 'number' &&
        typeof (weather as Weather).main.temp_min === 'number'
    )
} 

*/

//ZOD
const Weather = z.object({
    name: z.string(),
    main: z.object({
        temp: z.number(),
        temp_max: z.number(),
        temp_min: z.number()
    })
}) 
type Weather = z.infer<typeof Weather>


//Valibot
/* 
import { object, string, number, parse }from 'valibot'
const WeatherSchema = object({
    name: string(),
    main: object({
        temp: number(),
        temp_max: number(),
        temp_min: number()
    })
})

// Definir el tipo manualmente
type Weather = {
    name: string;
    main: {
        temp: number;
        temp_max: number;
        temp_min: number;
    };
}; 
*/



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
            
            //Get Current Weather
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`
            console.log(weatherUrl)


            //Castear el type
            // const { data: weatherResult } = await axios<Weather>(weatherUrl)
            // console.log(weatherResult)
            // console.log(weatherResult.main.temp)
            // console.log(weatherResult.name)


            //Type Guards
           /*  const { data: weatherResult } = await axios(weatherUrl)
            const result = isWeatherReponse(weatherResult)

            if(result){
                console.log()
            }else{
                console.log("Respuesta Mal Formado")
            } */
            
            
            //Valibot
            /* const { data: weatherResult } = await axios(weatherUrl)
            const result = parse(WeatherSchema, weatherResult)
            console.log(result) */

            //Zod
            const { data: weatherResult } = await axios(weatherUrl)
            const result = Weather.safeParse(weatherResult)
            if(result.success){
                console.log(result.data.name)
                console.log(result.data.main.temp)
            }else{
                console.log("Respuesta mal formada")
            }

        } catch (error) {
            console.log(error)
        }
    }
    return{
        fetchWeather,
    }
}

export default useWeather