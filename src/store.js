import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reduser/index'
import createSagaMiddleware from 'redux-saga'
import { watchSearcWeatherForCityTheYahoo } from './sagas/sagas'
const sagaMiddleware = createSagaMiddleware()
const enhancer = applyMiddleware(thunk, sagaMiddleware)

export const store = createStore(rootReducer, enhancer)
sagaMiddleware.run(watchSearcWeatherForCityTheYahoo)
