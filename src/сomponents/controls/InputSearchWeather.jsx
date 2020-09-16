import React from 'react'
import TextField from '@material-ui/core/TextField'

export default function InputSearchWeather (props) {
  const { sity, InputSearchWeatherHandler } = props
  return (
    <TextField
      id="standard-basic"
      label="Search"
      fullWidth
      value={sity}
      onChange={InputSearchWeatherHandler}
    />
  )
}
