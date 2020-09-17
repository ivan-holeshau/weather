import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { Div, ViewWeatherCardItem, Picture } from '../../../theme'

interface ViewWeatherCardPropsPrivate {
  city: string
  temp: number
  speedWind: number
  codWeather: number
}

const ViewWeatherCard: React.FC<ViewWeatherCardPropsPrivate> = ({
  city,
  temp,
  speedWind,
  codWeather,
}) => {
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

export default ViewWeatherCard
