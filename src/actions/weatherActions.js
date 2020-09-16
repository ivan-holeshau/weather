import {
  SET_CITY,
  SET_SEARCH_CITY_IN_COUNTRY,
  SET_TIMER,
  SET_GEOMETRY,
  SET_TYPE_SERVICE_WEATHER,
  CLEAR_SEARCH_CITY_IN_COUNTRY,
} from '../constant/actions'

export function setCity (CITY) {
  return {
    type: SET_CITY,
    playload: CITY,
  }
}

export function setTimer (timer) {
  return {
    type: SET_TIMER,
    playload: timer,
  }
}

export function seacrCordinateToCity (CITY) {
  return async dispatch => {
    if (CITY.length > 0) {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${CITY}&key=4020438e497b48e894ae5d1dcd3b892b`,
      )
      dispatch(setSearchCountry(await parseJsonCityToMap(response, CITY)))
    }
  }
}

function setSearchCountry (CITYes) {
  return {
    type: SET_SEARCH_CITY_IN_COUNTRY,
    playload: CITYes,
  }
}

async function parseJsonCityToMap (response, CITY) {
  const json = await response.json()
  const map = json.results.map(item => {
    return {
      country: item.components.country,
      formatted: `${item.components.country} ${
        item.components.county ? item.components.county : ''
      }`,
      geometry: item.geometry,
    }
  })
  return map
}

export function setGeometry (geometry) {
  return {
    type: SET_GEOMETRY,
    playload: geometry,
  }
}

export function setTypeServiceWeather (service) {
  return {
    type: SET_TYPE_SERVICE_WEATHER,
    playload: service,
  }
}

export function clearSearchCityInCountry (service) {
  return {
    type: CLEAR_SEARCH_CITY_IN_COUNTRY,
    playload: service,
  }
}
