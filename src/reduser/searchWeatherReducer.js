import {
  mapCodeMetaweatherToMyWeatherCode,
  SET_WEATHER_THE_METAWEITHER,
  SET_WEATHER_THE_OPENWEATHERMAP,
  mapCodeOpenweatherToMyWeatherCode,
  INIT,
} from '../constant/actionsSearchWeather'

const initDayWeather = {
  temp: 0,
  speedWind: 0,
  cod: -1,
  curentCity: '',
}

const initState = {
  weatherForDay: initDayWeather,
}

export function searchWeatherReducer (state = initState, action) {
  switch (action.type) {
    case INIT: {
      const initDayWeather = {
        temp: 0,
        speedWind: 0,
        cod: -1,
        curentCity: '',
      }

      if (localStorage.getItem('cod')) {
        initDayWeather.temp = localStorage.getItem('temp')
        initDayWeather.speedWind = localStorage.getItem('speedWind')
        initDayWeather.cod = localStorage.getItem('cod')
        initDayWeather.curentCity = localStorage.getItem('curentCity')
      }

      return { ...state, weatherForDay: initDayWeather }
    }
    case SET_WEATHER_THE_METAWEITHER: {
      const { payload: json, city } = action
      let cod = json.current.weather_code
      mapCodeMetaweatherToMyWeatherCode.forEach((item, index) => {
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
      mapCodeOpenweatherToMyWeatherCode.forEach((item, index) => {
        if (item.includes(cod)) cod = index
      })
      const weatherForDay = {
        temp: Math.floor(json.main.temp - 273, 15),
        speedWind: json.wind.speed,
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
    default:
      return state
  }
}
