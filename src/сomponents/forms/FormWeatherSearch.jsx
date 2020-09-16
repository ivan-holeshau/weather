import React, { Fragment } from 'react'
import Box from '@material-ui/core/Box'
import { setCity, seacrCordinateToCity, setTimer } from '../../actions/weatherActions'
import {
  searcWeatherForCityTheMetaweather,
  searchWeatherTheOpenweathermap,
} from '../../actions/searchWeatherActions'
import SearchCityes from '../controls/SearchCityesSelect'
import { connect } from 'react-redux'
import SelectWeatherService from '../controls/SelectWeatherService'
import InputSearchWeather from '../controls/InputSearchWeather'
import ButtonButtonSearchWeather from '../controls/ButtonSearchWeather'
import selector from '../../selectors/index'
import ViewWeatherCard from '../controls/ViewWeatherCard'
import { Div, ViewWeatherCardItem, DivPanelSearch } from '../../theme'
import _ from 'lodash'
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
    citySearch,
  } = props
  const onChange = event => {
    setCity(event.target.value)
    clearTimeout(timer)
    const city = event.target.value
    const setTime = setTimeout(() => seacrCordinateToCity(city), 500)
    setTimer(setTime)
  }
  //7200000
  const onClick = () => {
    var debounced = _.debounce(() => searcWeatherForTwoServise(geometryCity, city), 5000, {
      leading: true,
    })
    debounced()
    // if (geometryCity) {
    //   city && selectServise
    //     ? debounced()
    //     : _.throttle(() => searcWeatherForOneServise(geometryCity, city), 7200000)
    // // } else throw Error()
  }
  return (
    <ViewWeatherCardItem>
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

function mapStateToProps(state) {
  return {
    city: selector.СITY(state),
    timer: selector.TIMER(state),
    geometryCity: selector.GEOMETRY_СITY(state),
    selectServise: selector.SELECT_SERVISE(state),
    citySearch: selector.СITYES_SEARCH(state),
  }
}
function mapDispatchToProps(dispatch) {
  return {
    setCity: text => dispatch(setCity(text)),
    seacrCordinateToCity: city => dispatch(seacrCordinateToCity(city)),
    setTimer: timer => dispatch(setTimer(timer)),
    searcWeatherForOneServise: (geometryCity, city) =>
      dispatch(searcWeatherForCityTheMetaweather(geometryCity, city)),
    searcWeatherForTwoServise: (geometryCity, city) =>
      dispatch(searchWeatherTheOpenweathermap(geometryCity, city)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(City)

// // <Box display="flex" flexDirection="column" justifyContent="center">

//       {/* <Box display="flex" flexDirection="column"> */}
//         {/* <Box display="flex" flexDirection="column" width="100%"> */}
//         <Div styleDiv='column'>
//         <Div styleDiv='rows'>
//           <InputSearchWeather InputSearchWeatherHandler={onChange} city={city} />
//           <SelectWeatherService />
//         </Div>
//         <SearchCityes />
//         </Div>
//         <ButtonButtonSearchWeather onClickSearchWeather={onClick}/>

//         border-bottom-left-radius: 20px; */}
//         {/* </Box> */}
//         <Box display="flex" alignItems="flex-start">

//         </Box>
//         <Box display="flex" alignItems="center">
//             {/* <SelectWeatherService /> */}
//             {/* <ButtonButtonSearchWeather onClickSearchWeather={onClick}  /> */}
//           </Box>
//       {/* </Box>
//       </Div>

//       <ViewWeatherCard />
//     // </Box>
