import {
  SET_CITY,
  SET_TIMER,
  SET_GEOMETRY,
  SET_TYPE_SERVICE_WEATHER,
  SET_SEARCH_CITY_IN_COUNTRY,
  CLEAR_TIMER,
  SET_ERROR,
} from '../constant/actions'

import {Action} from './index'
import {Map} from '../actions/interfaceActions'
export interface Geometry {
  lat:number, lng:number
}

export interface StateWeatherReducer {
  timer:number
  cityName:string
  geometry:Geometry
  searchСityInCountry:Map[]
  SelectTypeServiseWeather:number
  listServiseWeather:string[]
  error:boolean
}

const initState = {
  timer: 0,
  cityName: '',
  geometry: { lat: 0, lng: 0 },
  searchСityInCountry: [],
  SelectTypeServiseWeather: 0,
  listServiseWeather: ['metaweather', 'openweather'],
  error: false,
}

export function weatherReducer (state:StateWeatherReducer = initState, action:Action) {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.payload }
    case SET_CITY:
      return { ...state, cityName: action.playload, searchXityInCountry: [], geometry: null }
    case SET_SEARCH_CITY_IN_COUNTRY:
      return { ...state, searchСityInCountry: action.playload }
    case SET_TIMER:
      return { ...state, timer: action.playload }
    case CLEAR_TIMER:
      return { ...state, timer: action.playload }
    case SET_GEOMETRY:
      return { ...state, geometry: action.playload, searchСityInCountry: [] }
    case SET_TYPE_SERVICE_WEATHER:
      return { ...state, SelectTypeServiseWeather: action.playload }
    default:
      return state
  }
}
