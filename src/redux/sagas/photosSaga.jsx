import api from "../../services/axiosclient";
import { call, put, takeLatest } from "redux-saga/effects";
import {
    getPhotos,
    getPhotosSuccess,
    getPhotosFailure,
    searchPhotosSuccess,
    searchPhotosFailure,
    searchPhotosRequest
} from "../slices/photosSlice";

function* getPhotosRequest() {
    try {
        const response = yield call(() => api.get("/photos"));
        yield put(getPhotosSuccess(response.data));
    } catch (e) {
        yield put(getPhotosFailure(e.message));
    }
}

function* searchPhotosWorker(action) {
    const searchText = action.payload
    console.log(searchText)
    try {
        console.log("search text", searchText)
        const response = yield call(() => api.get(`/search/photos?query=${searchText}`))

        yield put(searchPhotosSuccess(response.data.results))
    } catch (e) {
        yield put(searchPhotosFailure(e))
    }
}

export default function* photosSaga() {
    yield takeLatest(getPhotos.type, getPhotosRequest);
    yield takeLatest(searchPhotosRequest.type, searchPhotosWorker)
}