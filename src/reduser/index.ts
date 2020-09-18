import { combineReducers } from 'redux'
import { weatherReducer,StateWeatherReducer } from './weatherReduser'
import { searchWeatherReducer,StateSearchWeatherReducer } from './searchWeatherReducer'
export interface Action {
  [key:string] :string|number|any
}

export interface State {
  weatherReducer:StateWeatherReducer
  searchWeatherReducer:StateSearchWeatherReducer
}
export default combineReducers({
  weatherReducer,
  searchWeatherReducer,
})
