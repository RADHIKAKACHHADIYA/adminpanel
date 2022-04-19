import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { deleteUserRequest, fetchuserRequest } from '../../common/Apis/user_api';
import { deletedUser, RetriedUser } from '../action/user.action';
import * as ActionType from '../ActionType';

function* fetchUser1(action) {
   try {
      const user = yield call(fetchuserRequest);
      console.log(user.data);
      yield put(RetriedUser(user.data));
   } catch (e) {
      // yield put({type: "USER_FETCH_FAILED", message: e.message});
      console.log(e)
   }
}

function* deleteUser1(id) {
    try {
       const user = yield call(deleteUserRequest)
       yield put(deletedUser(user.data , id))
    } catch (e) {
       console.log(e)
    }
 }

export function* userSaga() {
  yield takeEvery(ActionType.FATCH_USER , fetchUser1);
  yield takeEvery(ActionType.DELETE_USER, deleteUser1);

}
