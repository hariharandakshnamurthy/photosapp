import { all } from "redux-saga/effects";
import photosSaga from './sagas/photosSaga'


export default function* rootSaga() {
    yield all([
        photosSaga()
    ])
}