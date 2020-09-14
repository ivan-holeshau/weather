import { SET_WEATHER_THE_METAWEITHER,SET_WEATHER_THE_OPENWEATHERMAP,SEARCH_WEATHER_THE_OPENWEATHERMAP } from '../constant/actionsSearchWeather'
import  YaBoss from 'yaboss';

export function searcWeatherForCityTheMetaweather (latt, lng) {
  return async dispatch => {
    const response = await fetch(
      `http://api.weatherstack.com/current?access_key=5349f4e06fa7c90de8051147284f2cbf&query=${latt},${lng}`,
    )
    const json = await response.json()
    console.log('start')
    // const json = await response.json()
    // let cod = json.current.weather_code
    // mapCodeMetaweatherToMyWeatherCode.forEach((item, index) => {
    //   if (item.includes(cod)) cod = index
    // })
    // const weatherForDay = {
    //   temp: json.current.temperature,
    //   speedWind: json.current.wind_speed,   
    //   cod: cod,
    // }
    // console.log(weatherForDay)
    dispatch(setWeather(json))
  }
}

export function setWeatherTheOpenweathers (json) {
  return{
    type:SET_WEATHER_THE_OPENWEATHERMAP,
    payload:json
  }
  
}


 export function searchWeatherTheOpenweathermap(geometry){
   return {
    type:SEARCH_WEATHER_THE_OPENWEATHERMAP, payload:geometry
   }
 }

 function setWeather (weather) {
  return {
    type: SET_WEATHER_THE_METAWEITHER,
    payload: weather,
  }
}
