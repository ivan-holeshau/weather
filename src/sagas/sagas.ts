import { setWeatherTheOpenweathers,searchOpenWweather } from '../actions/searchWeatherActions'
import { call, put, takeEvery } from 'redux-saga/effects'
import {Actions} from '../actions/interfaceActions'
import {} from 'redux-saga'


export function* watchSearcWeatherForCityTheYahoo () {
  yield takeEvery(searchOpenWweather, fetchWeatherAsync)
}


function* fetchWeatherAsync (event: { payload?: any; city?: any }) {
  const { lat, lng } = event.payload
  const { city } = event
  if (city) {
    const json = yield call(() => {
      return fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=54f7b3f65d502c008db7b9dbb05fc965`,
      ).then(res => res.json())
    })
    yield put(setWeatherTheOpenweathers(json, city))
  } else {
    throw new Error()
  }
}
