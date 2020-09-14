import { combineReducers } from 'redux'
import { weatherReducer } from './weatherReduser'
import { searchWeatherReducer } from './searchWeatherReducer'

export default combineReducers({
  weatherReducer,
  searchWeatherReducer,
})
