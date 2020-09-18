import { connect } from 'react-redux'
import { Dispatch } from 'redux';
import SelectWeatherService from './SelectWeatherService'
import {SELECT_SERVISE,LIST_SERVICE} from '../../../selectors/index'
import {State} from '../../../reduser/index'
import { Geometry } from '../../../reduser/weatherReduser'
import { setTypeServiceWeather } from '../../../actions/weatherActions'

function mapStateToProps(state:State) {
    return {
        selectServise: SELECT_SERVISE(state ),
        listServise: LIST_SERVICE(state)
    }
  }
  
  function mapDispatchToProps(dispatch:Dispatch) {
    return {
      handleChangeDispatch: (value:string) => dispatch(setTypeServiceWeather(value)),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(SelectWeatherService)