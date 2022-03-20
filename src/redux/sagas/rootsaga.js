import { all } from 'redux-saga/effects'
import { patientsSaga } from "./patients.saga";

export default function* rootSaga() {
    yield all([
      patientsSaga()
    ])
}