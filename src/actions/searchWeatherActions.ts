import {
  SET_WEATHER_THE_METAWEITHER,
  SET_WEATHER_THE_OPENWEATHERMAP,
  SEARCH_WEATHER_THE_OPENWEATHERMAP,
  INIT,
} from '../constant/actionsSearchWeather'
import { Actions } from './interfaceActions'
import {Geometry} from '../reduser/weatherReduser'
import { Dispatch, AnyAction } from 'redux'
export function initStore () {
  return {
    type: INIT,
  }
} 

export const searchOpenWweather:Actions =()=>{
  return{
  type:'SEARCH_WEATHER_THE_OPENWEATHERMAP'}}

export function searcWeatherForCityTheMetaweather (value:Geometry, city:string):(dispatch:Dispatch)=>void {

  if (city) {
    const { lat, lng } = value
    return async dispatch => {
      const response = await fetch(
        `http://api.weatherstack.com/current?access_key=5349f4e06fa7c90de8051147284f2cbf&query=${lat},${lng}`,
      )
      const json = await response.json()
      dispatch(setWeather(json, city))
    }
  } else {
    throw new Error()
  }

}

export const setWeatherTheOpenweathers:Actions = (value, city) =>{
  return {
    type: SET_WEATHER_THE_OPENWEATHERMAP,
    payload: value,
    city: city,
  }
}

export const searchWeatherTheOpenweathermap:Actions = (value, city) => {
  return {
    type: SEARCH_WEATHER_THE_OPENWEATHERMAP,
    payload: value,
    city: city,
  }
}

const setWeather:Actions = (value, city) =>{
  return {
    type: SET_WEATHER_THE_METAWEITHER,
    payload: value,
    city: city,
  }
}
