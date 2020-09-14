import { setWeatherTheOpenweathers } from '../actions/searchWeatherActions'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

export  function* watchSearcWeatherForCityTheYahoo() {
    yield takeEvery('SEARCH_WEATHER_THE_OPENWEATHERMAP', fetchWeatherAsync);
  }

  function* fetchWeatherAsync(event) {
    
     // yield put(yield put(requestDogError());());
     console.log('wiii saga',event)
     const {lat, lng} = event.payload;
      const json = yield call(() => {
         return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=54f7b3f65d502c008db7b9dbb05fc965`)
               .then(res => res.json())
        }
       );
       yield put(setWeatherTheOpenweathers(json));
       console.log('wiii saga',json)
      
  }