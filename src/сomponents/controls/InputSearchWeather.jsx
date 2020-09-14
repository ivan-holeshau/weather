import React from 'react'
import TextField from '@material-ui/core/TextField'

export default function InputSearchWeather(props) {
  return (
    <TextField
      id="standard-basic"
      label="Search"
      fullWidth={true}
      value={props.sity}
      onChange={props.InputSearchWeatherHandler}
    />
  )
}
