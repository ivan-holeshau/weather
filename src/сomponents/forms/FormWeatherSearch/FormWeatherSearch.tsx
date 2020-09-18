import React from 'react'
import { Dispatch, AnyAction } from 'redux'
import Box from '@material-ui/core/Box'
import Alert from '@material-ui/lab/Alert'
import SearchCityes from '../../controls/SearchCityesSelect/SearchCityesSelectContainer'
import SelectWeatherService from '../../controls/SelectWeatherService/SelectWeatherServiceContainer'
import InputSearchWeather from '../../controls/InputSearchWeather/InputSearchWeather'
import ButtonButtonSearchWeather from '../../controls/ButtonSearchWeather/ButtonSearchWeather'
import ViewWeatherCard from '../../controls/ViewWeatherCard/ViewWeatherCardContainer'

import { DivPanelSearch } from '../../styledComponents/DivPanelSearch'
import { ViewWeatherCardItem } from '../../styledComponents/ViewWeatherCardItem'
import { Div } from '../../styledComponents/styledComponents'
import { Geometry } from '../../../reduser/weatherReduser'

interface FormWeatherSearchProps {
 
aaaa1:string
  // city: string
  // timer: number
  // geometryCity: Geometry
  // isServiseActive: number
  // error: boolean
  
  //setCity: (value: string) => any
  //seacrCordinateToCitys: (value: string) => (dispatch: Dispatch<AnyAction>) => Promise<any>
  //setTimer: (value: number) => any
  // searcWeatherForMETAWEATHERServise: (
  //   geometryCity: Geometry,
  //   city: string
  // ) => (dispatch: Dispatch<AnyAction>) => void
  // searcWeatherForOPENWEATHERMAPServise: (geometryCity: Geometry, city: string) => any
  //setErrors: (value: boolean) => any
}

const FormWeatherSearch: React.FC<FormWeatherSearchProps> = ({
 aaaa1
  // //setCity,
    // city,
  //  timer,
  //  geometryCity,
  //  isServiseActive,
  //   error,
  // //seacrCordinateToCitys,
  // //setTimer,
  // // searcWeatherForMETAWEATHERServise,
  // // searcWeatherForOPENWEATHERMAPServise,
  
  //setErrors,
}) => {

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('wiii',event.target.value)
   
     // setCity(event.target.value)
      //clearTimeout(timer)
      const city = event.target.value
      // const setTime = setTimeout(() => seacrCordinateToCitys(city), 500)
      // setTimer(setTime)
    
  }

  const onClick = () => {
    // if (geometryCity && city) {
    //   isServiseActive
    //     ? searcWeatherForOPENWEATHERMAPServise(geometryCity, city)
    //     : searcWeatherForMETAWEATHERServise(geometryCity, city)
    // } else {
    //   setErrors(true)
    //   setTimeout(() => setErrors(false), 2000)
    // }
  }

  return (
     <ViewWeatherCardItem>
    {/* /*   {error ? ( */}
         {/* <Alert severity="error">Что то не так, возможно не коректно указан город</Alert>
       ) : (
         <div> </div>
       )} */}
      <h3>Weather</h3>
      <Div styleDiv="column">
        <DivPanelSearch>
          <Div styleDiv="column">
            <DivPanelSearch>
              <InputSearchWeather InputSearchWeatherHandler={onChange} city={"city"} />
              <SelectWeatherService />
            </DivPanelSearch>
            <SearchCityes />
          </Div>
          <ButtonButtonSearchWeather onClickSearchWeather={onClick} />
        </DivPanelSearch>
        <Box display="flex" justifyContent="center">
          <ViewWeatherCard />
        </Box>
      </Div>
    </ViewWeatherCardItem>
  )
}

export default FormWeatherSearch
