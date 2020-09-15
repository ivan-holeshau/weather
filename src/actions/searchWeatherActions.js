import {
  SET_WEATHER_THE_METAWEITHER,
  SET_WEATHER_THE_OPENWEATHERMAP,
  SEARCH_WEATHER_THE_OPENWEATHERMAP,
} from '../constant/actionsSearchWeather'

export function searcWeatherForCityTheMetaweather (geometry, city) {
  const { lat, lng } = geometry
  return async dispatch => {
    const response = await fetch(
      `http://api.weatherstack.com/current?access_key=5349f4e06fa7c90de8051147284f2cbf&query=${lat},${lng}`
    )
    const json = await response.json()
    console.log('json=', json)
    dispatch(setWeather(json, city))
  }
}

export function setWeatherTheOpenweathers (json, city) {
  return {
    type: SET_WEATHER_THE_OPENWEATHERMAP,
    payload: json,
    city: city,
  }
}

export function searchWeatherTheOpenweathermap (geometry, city) {
  return {
    type: SEARCH_WEATHER_THE_OPENWEATHERMAP,
    payload: geometry,
    city: city,
  }
}

function setWeather (weather, city) {
  return {
    type: SET_WEATHER_THE_METAWEITHER,
    payload: weather,
    city: city,
  }
}
