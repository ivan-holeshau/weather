import React from 'react'
import Box from '@material-ui/core/Box'
import { ButtonStyled } from './ButtonStyled'

interface Props {
  onClickSearchWeather:()=>void
}

const ButtonButtonSearchWeather: React.FC<Props> = ({ onClickSearchWeather }) => {
  return (
    <Box maxHeight="36px" margin="10px">
      <ButtonStyled
        variant="contained"
        someRandom="10"
        onClick={onClickSearchWeather}
      >
        Search
      </ButtonStyled>
    </Box>
  )
}

export default ButtonButtonSearchWeather
