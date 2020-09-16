import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Box from '@material-ui/core/Box'
import { useDispatch, useSelector } from 'react-redux'
import { setTypeServiceWeather } from '../../actions/weatherActions'
function SelectWeatherService (props) {
  const selectServise = useSelector(state => state.weatherReducer.SelectTypeServiseWeather)
  const listServise = useSelector(state => state.weatherReducer.listServiseWeather)
  const dispatch = useDispatch()
  const handleChange = event => {
    dispatch(setTypeServiceWeather(event.target.value))
  }
  return (
    <Box width="120px">
      <FormControl variant="standard" fullWidth>
        <InputLabel id="select-service">servise</InputLabel>
        <Select
          labelId="select-service"
          id="select"
          value={selectServise || 0}
          onChange={handleChange}
        >
          {listServise.map((item, index) => (
            <MenuItem key={index} value={index} native="true" name={index}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectWeatherService
