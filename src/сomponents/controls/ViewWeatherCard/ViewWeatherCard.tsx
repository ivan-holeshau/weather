import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import {ViewWeatherCardItem } from '../../styledComponents/ViewWeatherCardItem'
import {Div,Picture} from '../../styledComponents/styledComponents'

interface ViewWeatherCardPropsPrivate {
  city: string 
  temp: string
  speedWind: string
  codWeather: string
  
}

export const ViewWeatherCard: React.FC<ViewWeatherCardPropsPrivate> = ({
  city,
  temp,
  speedWind,
  codWeather,
}) => {
   if ((Number.parseInt(codWeather)) > -1) {
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
                  {/* <Picture code={codWeather} /> */}
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

