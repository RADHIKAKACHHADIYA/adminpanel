import { all } from 'redux-saga/effects';
import { patientsSaga } from './patient.saga';

export default function* rootSaga() {
    yield all([
      patientsSaga()
    ])
}