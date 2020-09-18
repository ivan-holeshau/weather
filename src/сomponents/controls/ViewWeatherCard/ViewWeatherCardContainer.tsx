import { connect } from 'react-redux'
import {ViewWeatherCard} from './ViewWeatherCard'
import {CURENT_СITY,GetTemp,GetSpeedWind,GetCodeWeather} from '../../../selectors/index'
import {State} from '../../../reduser/index'

function mapStateFromProps (state:State) {
  return {
    city: CURENT_СITY(state),
    temp: GetTemp(state),
    speedWind: GetSpeedWind(state),
    codWeather: GetCodeWeather(state),
  }
}

export default connect(mapStateFromProps)(ViewWeatherCard)
