import { getUserProfileAsync, GET_USER_PROFILE } from "./actions";
import { getUserProfile, GithubProfile } from "../../api/github";
import { call, put, takeEvery } from "redux-saga/effects";

function* getUserProfileSaga(
  action: ReturnType<typeof getUserProfileAsync.request>
) {
  try {
    // call : 함수 실행 (함수, 파라미터)
    const userProfile: GithubProfile = yield call(
      getUserProfile,
      action.payload
    );
    // put : 특정 액션을 dispatch
    yield put(getUserProfileAsync.success(userProfile));
  } catch (e: any) {
    yield put(getUserProfileAsync.failure(e));
  }
}

export function* githubSaga() {
  yield takeEvery(GET_USER_PROFILE, getUserProfileSaga);
}
