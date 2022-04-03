import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { deleteUserRequest, fetchuserRequest } from '../../common/Apis/user_api';
import { deletedUser, RetriedUser } from '../action/user.action';
import * as ActionType from '../ActionType';

function* fetchUser(action) {
   try {
      const user = yield call(fetchuserRequest);
      yield put(RetriedUser(action.payload));
   } catch (e) {
      // yield put({type: "USER_FETCH_FAILED", message: e.message});
      console.log(e)
   }
}

function* deleteUser(action) {
    try {
       const user = yield call(deleteUserRequest, action.payload)
       yield put(deletedUser(action.payload))
    } catch (e) {
       console.log(e)
    }
 }

export function* userSaga() {
  yield takeEvery(ActionType.FATCH_USER , fetchUser);
  yield takeEvery(ActionType.DELETE_USER, deleteUser);

}
