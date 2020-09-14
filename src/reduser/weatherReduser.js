import {
  SET_CITY,
  SEACR_CORDINATE_CITY,
  SET_TIMER,
  SET_GEOMETRY,
  SET_TYPE_SERVICE_WEATHER,
  CLEAR_SEARCH_CITY_IN_COUNTRY,
  SET_SEARCH_CITY_IN_COUNTRY,
  CLEAR_TIMER
} from '../constant/actions'

const initState = {
  timer: '',
  cityName: '',
  geometry: { lat: 0, lng: 0 },
  searchСityInCountry: [],
  SelectTypeServiseWeather: '',
  listServiseWeather: ['metaweather', 'openweather'],
  
}

export function weatherReducer (state = initState, action) {
  switch (action.type) {
    case SET_CITY:
        return { ...state, cityName: action.playload, searchXityInCountry: [] }
    case SET_SEARCH_CITY_IN_COUNTRY:
      return { ...state, searchСityInCountry: action.playload }
    case SET_TIMER:
      return { ...state, timer: action.playload }
    case CLEAR_TIMER:
      return { ...state, timer: action.playload }
    case SET_GEOMETRY:
      return { ...state, geometry: action.playload, searchСityInCountry:[] }
    case SET_TYPE_SERVICE_WEATHER:
      return { ...state, SelectTypeServiseWeather: action.playload }
    default:
      console.log('state', action.type)
      return state
  }
}
