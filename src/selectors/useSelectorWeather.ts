import {StateWeatherReducer} from '../reduser/weatherReduser'
import {State} from '../reduser/index'
import {Map} from '../actions/interfaceActions'

export const СITYES_SEARCH = (state:State):Map[] => state.weatherReducer.searchСityInCountry
export const СITY = (state:State) => state.weatherReducer.cityName
export const TIMER = (state:State) => state.weatherReducer.timer
export const GEOMETRY_СITY = (state:State) => state.weatherReducer.geometry
export const SELECT_SERVISE = (state:State):number => state.weatherReducer.SelectTypeServiseWeather
export const GetTemp = (state:State) => state.searchWeatherReducer.weatherForDay.temp
export const GetSpeedWind = (state:State) => state.searchWeatherReducer.weatherForDay.speedWind
export const GetCodeWeather = (state:State) => state.searchWeatherReducer.weatherForDay.cod
export const CURENT_СITY = (state:State) => state.searchWeatherReducer.weatherForDay.curentCity
export const GET_ERROR = (state:State) => state.weatherReducer.error
export const LIST_SERVICE= (state:State) => state.weatherReducer.listServiseWeather
