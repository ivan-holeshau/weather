import { setWeatherTheOpenweathers } from '../actions/searchWeatherActions'
import { call, put, takeEvery } from 'redux-saga/effects'

export function* watchSearcWeatherForCityTheYahoo () {
  yield takeEvery('SEARCH_WEATHER_THE_OPENWEATHERMAP', fetchWeatherAsync)
}

function* fetchWeatherAsync (event) {
  const { lat, lng } = event.payload
  const { city } = event
  const json = yield call(() => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=54f7b3f65d502c008db7b9dbb05fc965`
    ).then(res => res.json())
  })

  console.log('json', json)
  console.log('city saga', event)
  yield put(setWeatherTheOpenweathers(json, city))
}
