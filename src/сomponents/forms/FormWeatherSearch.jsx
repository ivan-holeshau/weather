import React from 'react'
import Box from '@material-ui/core/Box'
import Alert from '@material-ui/lab/Alert'
import { setCity, seacrCordinateToCity, setTimer, setError } from '../../actions/weatherActions'
import {
  searcWeatherForCityTheMetaweather,
  searchWeatherTheOpenweathermap,
} from '../../actions/searchWeatherActions'
import SearchCityes from '../controls/SearchCityesSelect'
import { connect } from 'react-redux'
import SelectWeatherService from '../controls/SelectWeatherService'
import InputSearchWeather from '../controls/InputSearchWeather'
import ButtonButtonSearchWeather from '../controls/ButtonSearchWeather.jsx'
import selector from '../../selectors/index'
import ViewWeatherCard from '../controls/ViewWeatherCard/ViewWeatherCardContainer'
import { Div, ViewWeatherCardItem, DivPanelSearch } from '../../theme'
function City (props) {
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
    error,
    setErrors,
  } = props
  const onChange = event => {
    setCity(event.target.value)
    clearTimeout(timer)
    const city = event.target.value
    const setTime = setTimeout(() => seacrCordinateToCity(city), 500)
    setTimer(setTime)
  }
  const onClick = () => {
    if (geometryCity && city) {
      selectServise
        ? searcWeatherForTwoServise(geometryCity, city)
        : searcWeatherForOneServise(geometryCity, city)
    } else {
      setErrors(true)
      setTimeout(() => setErrors(false), 2000)
    }
  }

  return (
    <ViewWeatherCardItem>
      {error ? (
        <Alert severity="error">Что то не так, возможно не коректно указан город</Alert>
      ) : (
        <div> </div>
      )}
      <h3>Weather</h3>
      <Div styleDiv="column">
        <DivPanelSearch styleDiv="rows">
          <Div styleDiv="column">
            <DivPanelSearch styleDiv="rows">
              <InputSearchWeather InputSearchWeatherHandler={onChange} city={city} />
              <SelectWeatherService />
            </DivPanelSearch>
            <SearchCityes />
          </Div>
          <ButtonButtonSearchWeather onClickSearchWeather={onClick} />
        </DivPanelSearch>
        <Box display="flex" justifyContent="center">
          <ViewWeatherCard />
        </Box>
      </Div>
    </ViewWeatherCardItem>
  )
}

function mapStateToProps (state) {
  return {
    city: selector.СITY(state),
    timer: selector.TIMER(state),
    geometryCity: selector.GEOMETRY_СITY(state),
    selectServise: selector.SELECT_SERVISE(state),
    citySearch: selector.СITYES_SEARCH(state),
    error: selector.GET_ERROR(state),
  }
}
function mapDispatchToProps (dispatch) {
  return {
    setCity: text => dispatch(setCity(text)),
    setErrors: value => dispatch(setError(value)),
    seacrCordinateToCity: city => dispatch(seacrCordinateToCity(city)),
    setTimer: timer => dispatch(setTimer(timer)),
    searcWeatherForOneServise: (geometryCity, city) =>
      dispatch(searcWeatherForCityTheMetaweather(geometryCity, city)),
    searcWeatherForTwoServise: (geometryCity, city) =>
      dispatch(searchWeatherTheOpenweathermap(geometryCity, city)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(City)
