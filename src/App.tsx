import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Sity from './сomponents/forms/FormWeatherSearch'

// import Weather from './сomponents/View/WeatherDay'
const App: React.FC = () => {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Box display="flex" flexDirection="column">
          <Sity />
          {/* <Weather /> */}
        </Box>
      </Container>
    </div>
  )
}

export default App