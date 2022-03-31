import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { fetchAllpatientsRequest } from '../../common/Apis/patient.api';
import { patientRetried } from '../action/patient.action';
import * as ActionType from '../ActionType';

function* fetchpatient(action) {
   try {
      const user = yield call(fetchAllpatientsRequest);
      console.log(user)
      yield put(patientRetried(user.data.data));
   } catch (e) {
      // yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

export function* patientsSaga() {
  yield takeEvery(ActionType.FATCH_PATIENT , fetchpatient);
}
