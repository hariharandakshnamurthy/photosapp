import { configureStore } from "@reduxjs/toolkit";
import photosReducer from './slices/photosSlice'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import rootSaga from "./rootSaga";


const sagaMiddleware = createSagaMiddleware()
const logger = createLogger()

const middlewares = [sagaMiddleware, logger]

const store = configureStore({
    reducer: {
        photos: photosReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares)
})

sagaMiddleware.run(rootSaga)

export default store