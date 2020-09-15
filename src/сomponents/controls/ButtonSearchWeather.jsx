import React from 'react'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import Box from '@material-ui/core/Box'
export default function ButtonButtonSearchWeather(props) {
  const ButtonNew = styled(Button)`
    margin-left: ${(props) => props.someRandom}px;
  `
  return (
    <Box maxHeight='36px' margin='10px'>
      <ButtonNew
        variant="contained"
        color="secondary"
        someRandom="10"
        onClick={props.onClickSearchWeather}
      >
        Search
      </ButtonNew>
    </Box>
  )
}
