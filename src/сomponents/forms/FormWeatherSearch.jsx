import React from 'react'
import Box from '@material-ui/core/Box'
import {
  setCity,
  seacrCordinateToCity,
  setTimer,
} from '../../actions/weatherActions'
import {
  searcWeatherForCityTheMetaweather,
  searcWeatherForCityTheYahoo,
  searchWeatherTheOpenweathermap
} from '../../actions/searchWeatherActions'
import SearchCityes from '../controls/SearchCityesSelect'
import { connect } from 'react-redux'
import SelectWeatherService from '../controls/SelectWeatherService'
import InputSearchWeather from '../controls/InputSearchWeather'
import ButtonButtonSearchWeather from '../controls/ButtonSearchWeather'
import selector from '../../selectors/index'

function City(props) {
  const {
    selectServise,
    geometryCity,
    setCity,
    city,
    timer,
    seacrCordinateToCity,
    setTimer,
    searcWeatherForOneServise,
    searcWeatherForTwoServise,
  } = props
  const onChange = (event) => {
    setCity(event.target.value)
    clearTimeout(timer)
    const city = event.target.value
    const setTime = setTimeout(() => seacrCordinateToCity(city), 500)
    setTimer(setTime)
  }
  const onClick = () => {
    searcWeatherForTwoServise(geometryCity)
    selectServise > 0 && city && selectServise
      ?searcWeatherForTwoServise(geometryCity)
      :searcWeatherForOneServise(geometryCity)
      
  }

  return (
    <Box display="flex" flexDirection="rows">
      <Box display="flex" flexDirection="column" width="100%">
        <InputSearchWeather InputSearchWeatherHandler={onChange} city={city} />
        <SearchCityes />
      </Box>
      <Box display="flex" alignItems="flex-start">
        <Box display="flex" alignItems="center">
          <SelectWeatherService />
          <ButtonButtonSearchWeather onClickSearchWeather={onClick} />
        </Box>
      </Box>
    </Box>
  )
}

function mapStateToProps(state) {
  return {
    city: selector.weather.СITY(state),
    timer: selector.weather.TIMER(state),
    geometryCity: selector.weather.GEOMETRY_СITY(state),
    selectServise: selector.weather.SELECT_SERVISE(state),
    citySearch: selector.weather.СITYES_SEARCH(state),
  }
}
function mapDispatchToProps(dispatch) {
  return {
    setCity: (text) => dispatch(setCity(text)),
    seacrCordinateToCity: (city) => dispatch(seacrCordinateToCity(city)),
    setTimer: (timer) => dispatch(setTimer(timer)),
    searcWeatherForOneServise: (geometryCity) =>
      dispatch(
        searcWeatherForCityTheMetaweather(geometryCity.lat, geometryCity.lng)
      ),
    searcWeatherForTwoServise: (geometryCity) =>
      dispatch(searchWeatherTheOpenweathermap(geometryCity)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(City)
