import React from 'react'
import Button from '@material-ui/core/Button'

export default function ButtonButtonSearchWeather (props){
    return (
        <Button variant="contained" color="secondary" onClick={props.onClickSearchWeather}>
            Search
          </Button>
    )
}