import { connect } from 'react-redux'
import ViewWeatherCard from './ViewWeatherCard'
import selector from '../../../selectors/index'

function mapStateFromProps (state) {
  return {
    city: selector.CURENT_СITY(state),
    temp: selector.GetTemp(state),
    speedWind: selector.GetSpeedWind(state),
    codWeather: selector.GetCodeWeather(state),
  }
}

export default connect(mapStateFromProps, null)(ViewWeatherCard)
