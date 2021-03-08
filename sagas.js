import {put, takeEvery, all, call} from "redux-saga/effects";


export function* helloSaga() {
    console.log("Hello Sagas!")
}

export const delay = (ms) => new Promise(res => setTimeout(res, ms))


export function* incrementAsync() {
    yield call(delay, 1000)
    yield put({type: 'INCREMENT'})
}

export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}