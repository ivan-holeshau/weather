import { mapCodeMetaweatherToMyWeatherCode,SET_WEATHER_THE_METAWEITHER,SET_WEATHER_THE_OPENWEATHERMAP,mapCodeOpenweatherToMyWeatherCode } from '../constant/actionsSearchWeather'

const initDayWeather = {
  temp: 0,
  speedWind: 0,
  cod: -1,
}
const initState = {
  weatherForDay: initDayWeather,
}

export  function searchWeatherReducer(state = initState, action) {
  switch (action.type) {
    case SET_WEATHER_THE_METAWEITHER: {
      const json = action.payload;
      console.log('SET_WEATHER')
      let cod = json.current.weather_code
      mapCodeMetaweatherToMyWeatherCode.forEach((item, index) => {
        if (item.includes(cod)) cod = index
      })
      const weatherForDay = {
        temp: json.current.temperature,
        speedWind: json.current.wind_speed,
        cod: cod,
      }
      console.log('end')
      return {
        ...state,
        weatherForDay: weatherForDay,
      }
    }
    case SET_WEATHER_THE_OPENWEATHERMAP:
      const json = action.payload;
      console.log('saga',json)
      let cod = json.weather[0].id
      mapCodeOpenweatherToMyWeatherCode.forEach((item, index) => {
        if (item.includes(cod)) cod = index
      })
      const weatherForDay = {
        temp: Math.floor(json.main.temp-273,15),
        speedWind: json.wind.speed,
        cod: cod,
      }
      console.log('end')
      return {
        ...state,
        weatherForDay: weatherForDay,
      }
    default:
      return state
  }
}
