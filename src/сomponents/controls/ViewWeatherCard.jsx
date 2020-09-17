import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { connect } from 'react-redux'
import selector from '../../selectors/index'
import { Div, ViewWeatherCardItem, Picture } from '../../theme'

function ViewWeatherCard (props) {
  const { city, temp, speedWind, codWeather } = props
  if (codWeather > -1) {
    return (
      <ViewWeatherCardItem>
        <Div styleDiv="column">
          <Card className="1">
            <CardContent>
              <Box display="flex" flexDirection="rows" justifyContent="space-between">
                <Box display="flex" justifyContent="center" flexDirection="column">
                  <Typography color="textSecondary" gutterBottom>
                    Weather in {city}
                  </Typography>
                  <p>Wind: {speedWind} kmph</p>
                  <p>Temperature: {temp}°c</p>
                </Box>
                <div style={{ margin: '30px' }}>
                  {/* <div className={'picture' + 2} /> */}
                  <Picture code={codWeather} />
                </div>
              </Box>
            </CardContent>
          </Card>
        </Div>
      </ViewWeatherCardItem>
    )
  } else {
    return <h3>no found weather</h3>
  }
}

function mapStateFromProps (state) {
  return {
    city: selector.CURENT_СITY(state),
    temp: selector.GetTemp(state),
    speedWind: selector.GetSpeedWind(state),
    codWeather: selector.GetCodeWeather(state),
  }
}

export default connect(mapStateFromProps, null)(ViewWeatherCard)
