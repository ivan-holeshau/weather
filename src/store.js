import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reduser/index'
import createSagaMiddleware from 'redux-saga'
import {watchSearcWeatherForCityTheYahoo} from './sagas/sagas'
const sagaMiddleware = createSagaMiddleware();
const enhancer = compose(
  applyMiddleware(thunk,sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)



export const store = createStore(rootReducer, enhancer)
sagaMiddleware.run(watchSearcWeatherForCityTheYahoo);