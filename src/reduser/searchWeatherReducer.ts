import {
  MAP_CODE_METAWEATHER_TO_MY_WEATHER_CODE,
  SET_WEATHER_THE_METAWEITHER,
  SET_WEATHER_THE_OPENWEATHERMAP,
  MAP_CODE_OPENWEATHER_TO_MY_WEATHER_CODE,
  INIT,
} from '../constant/actionsSearchWeather'

import { Action } from './index'

const initDayWeather = {
  temp: '0',
  speedWind: '0',
  cod: '-1',
  curentCity: ' ',
}

const initState = {
  weatherForDay: initDayWeather,
}

interface DayWeather {
  temp: string 
  speedWind: string 
  cod: string 
  curentCity: string 
}

export interface StateSearchWeatherReducer {
  weatherForDay: DayWeather
}

export function searchWeatherReducer(state: StateSearchWeatherReducer = initState, action: Action) {
  switch (action.type) {
    case INIT: {
      const initDayWeather:DayWeather = {
        temp: '0',
        speedWind: '0',
        cod: '-1',
        curentCity: '',
      }

      if (localStorage.getItem('cod')) {
        
        initDayWeather.temp = localStorage.getItem('temp') || ''
        initDayWeather.speedWind = localStorage.getItem('speedWind') || ''
        initDayWeather.cod = localStorage.getItem('cod')||''
        initDayWeather.curentCity = localStorage.getItem('curentCity')||''
      }

      return { ...state, weatherForDay: initDayWeather }
    }
    case SET_WEATHER_THE_METAWEITHER: {
      const { payload: json, city } = action
      
      let cod = json.current.weather_code
      MAP_CODE_METAWEATHER_TO_MY_WEATHER_CODE.forEach((item, index) => {
        if (item.includes(cod)) cod = index
      })
      const weatherForDay = {
        temp: json.current.temperature,
        speedWind: json.current.wind_speed,
        cod: cod,
        curentCity: city,
      }
      localStorage.setItem('temp', weatherForDay.temp)
      localStorage.setItem('speedWind', weatherForDay.speedWind)
      localStorage.setItem('cod', weatherForDay.cod)
      localStorage.setItem('curentCity', weatherForDay.curentCity)
      return {
        ...state,
        weatherForDay: weatherForDay,
      }
    }
    case SET_WEATHER_THE_OPENWEATHERMAP: {
      const { payload: json, city } = action
      let cod = json.weather[0].id
      MAP_CODE_OPENWEATHER_TO_MY_WEATHER_CODE.forEach((item, index) => {
        if (item.includes(cod)) cod = index
      })
      const weatherForDay = {
        temp: Math.floor(json.main.temp - 273),
        speedWind: json.wind.speed,
        cod: cod,
        curentCity: city,
      }
      localStorage.setItem('temp', weatherForDay.temp.toString())
      localStorage.setItem('speedWind', weatherForDay.speedWind.toString())
      localStorage.setItem('cod', weatherForDay.cod.toString())
      localStorage.setItem('curentCity', weatherForDay.curentCity.toString())
      return {
        ...state,
        weatherForDay: weatherForDay,
      }
    }
    default:
      return state
  }
}
