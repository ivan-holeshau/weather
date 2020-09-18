import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Sita from './сomponents/forms/FormWeatherSearch/FormWeatherSearchConatiner'
 
// import Weather from './сomponents/View/WeatherDay'
const App: React.FC = () => {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Box display="flex" flexDirection="column">
          <Sita />
          {/* <Weather /> */}
        </Box>
      </Container>
    </div>
  )
}

export default App
