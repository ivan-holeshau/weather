import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { State } from '../../../reduser/index'
import { Geometry } from '../../../reduser/weatherReduser'
import {
  searcWeatherForCityTheMetaweather,
  searchWeatherTheOpenweathermap,
} from '../../../actions/searchWeatherActions'
import { setCity, seacrCordinateToCity, setTimer, setError } from '../../../actions/weatherActions'
import {
  СITY,
  TIMER,
  GEOMETRY_СITY,
  SELECT_SERVISE,
  СITYES_SEARCH,
  GET_ERROR,
} from '../../../selectors/index'
import ThunkDispatchиз from 'redux-saga'

import FormWeatherSearch from './FormWeatherSearch'

function mapStateToProps(state: State) {
  return {
    aaaa1: СITY(state),
    timer: TIMER(state),
    geometryCity: GEOMETRY_СITY(state),
    isServiseActive: SELECT_SERVISE(state),
    //citySearch: СITYES_SEARCH(state),
    error: GET_ERROR(state),
  }
}

async function mapDispatchToProps(dispatch: Dispatch) {
  return {
    setCity: (value: string) => dispatch(setCity(value)),
    setErrors: (value: boolean) => dispatch(setError(value)),
    //seacrCordinateToCitys: (value: string) => (seacrCordinateToCity(value)),

    setTimer: (value: number) => dispatch(setTimer(value)),
    // searcWeatherForMETAWEATHERServise: (geometryCity: Geometry, city: string) =>
    //   searcWeatherForCityTheMetaweather(geometryCity, city),
    // searcWeatherForOPENWEATHERMAPServise: (geometryCity: Geometry, city: string) =>
    //   dispatch(searchWeatherTheOpenweathermap(geometryCity, city)),
  }
}

export default connect(mapStateToProps, null)(FormWeatherSearch)
