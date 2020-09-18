import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Box from '@material-ui/core/Box'

interface SelectWeatherServiceProps {
  selectServise:number
  listServise:string[]
  handleChangeDispatch:(value:string)=>any
}

const SelectWeatherService:React.FC<SelectWeatherServiceProps> = ({selectServise,listServise,handleChangeDispatch}) => {
  
  const handleChange = (event:React.ChangeEvent<any>) => {
    handleChangeDispatch(event.target.value)
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
            <MenuItem key={index} value={index}  >
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectWeatherService
