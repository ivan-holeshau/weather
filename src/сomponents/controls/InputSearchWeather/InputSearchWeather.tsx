import React from 'react'
import TextField from '@material-ui/core/TextField'

interface InputSearchWeatherProps {
  city:string
  InputSearchWeatherHandler:(event:React.ChangeEvent<HTMLInputElement>)=>void
  // InputSearchWeatherHandler
}

 const InputSearchWeather:React.FC<InputSearchWeatherProps> =({city,InputSearchWeatherHandler }) => {
  return (
    <TextField
      id="standard-basic"
      label="Search"
      fullWidth
      value={city}
      onChange={InputSearchWeatherHandler}
    />
  )
}

export default InputSearchWeather