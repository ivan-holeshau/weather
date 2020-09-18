import {
  SET_CITY,
  SET_SEARCH_CITY_IN_COUNTRY,
  SET_TIMER,
  SET_GEOMETRY,
  SET_TYPE_SERVICE_WEATHER,
  CLEAR_SEARCH_CITY_IN_COUNTRY,
} from '../constant/actions'
import { Actions, Map } from './interfaceActions'
import { Geometry } from '../reduser/weatherReduser'
import {Action, ActionCreator, Dispatch} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
export const setCity: Actions = value => {
  return {
    type: SET_CITY,
    playload: value,
  }
}

export const setTimer: Actions = value => {
  return {
    type: SET_TIMER,
    playload: value,
  }
}

export const setError: Actions = value => {
  return {
    type: 'SET_ERROR',
    payload: value,
  }
}


 async function fetchToServise(value:string,dispatch:Dispatch) {
      try {
        if (value!.length > 0) {
          const response = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${value}&key=4020438e497b48e894ae5d1dcd3b892b`
          )
          return setSearchCountry(await parseJsonCityToMap(response, value))
        }
      } catch {
         return setError(true)
      }
     

     
}


export function seacrCordinateToCity(value: string): (dispatch: Dispatch) => Promise<any> {
  return  dispatch => fetchToServise(value,dispatch)
  
}

const setSearchCountry: Actions = value => {
  return {
    type: SET_SEARCH_CITY_IN_COUNTRY,
    playload: value,
  }
}

async function parseJsonCityToMap(response: any, city: string) {
  const json = await response.json()
  const map: Map[] = json.results.map(
    (item: { components: { country: any; county: any }; geometry: any }) => {
      return {
        country: item.components.country,
        formatted: `${item.components.country} ${
          item.components.county ? item.components.county : ''
        }`,
        geometry: item.geometry,
      }
    }
  )
  return map
}

export const setGeometry: Actions = value => {
  return {
    type: SET_GEOMETRY,
    playload: value,
  }
}

export const setTypeServiceWeather: Actions = value => {
  return {
    type: SET_TYPE_SERVICE_WEATHER,
    playload: value,
  }
}

export const clearSearchCityInCountry: Actions = value => {
  return {
    type: CLEAR_SEARCH_CITY_IN_COUNTRY,
    playload: value,
  }
}
