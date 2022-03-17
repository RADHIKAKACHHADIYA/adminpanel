import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from '...'

function* fetchpatient(action) {
   try {
      const user = yield call(Api.fetchUser, action.payload.userId);
    //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* mySaga() {
  yield takeEvery({type:  ActionType.FATCH_PATIENT }, fetchpatient);
}
