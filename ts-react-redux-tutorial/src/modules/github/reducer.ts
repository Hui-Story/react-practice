import { createReducer } from "typesafe-actions";
import { GithubState, GithubAction } from "./types";
// import {
//   GET_USER_PROFILE,
//   GET_USER_PROFILE_SUCCESS,
//   GET_USER_PROFILE_ERROR,
// } from "./actions";
import { getUserProfileAsync } from "./actions";
import {
  asyncState,
  createAsyncReducer,
  transformToArray,
} from "../../lib/reducerUtils";

// --- recerUtils 의 asyncState 를 활용한 리팩토링 ---
const initialState: GithubState = {
  userProfile: asyncState.initial(),
};

// --- 리팩토링 이전 코드 (initialState) ---
/*
const initialState: GithubState = {
  userProfile: {
    loading: false,
    error: null,
    data: null,
  },
};
*/

// --- reducerUtils 의 asyncState, createAsyncReducer, transformToArray 를 활용한 리팩토링 ---
const github = createReducer<GithubState, GithubAction>(
  initialState
).handleAction(
  transformToArray(getUserProfileAsync),
  createAsyncReducer(getUserProfileAsync, "userProfile")
);

// --- 리팩토링 이전 코드 ver.3 (reducerUtils 의 asyncState, createAsyncReducer 를 활용한 리팩토링) ---
/*
const github = createReducer<GithubState, GithubAction>(
  initialState
).handleAction(
  [
    getUserProfileAsync.request,
    getUserProfileAsync.success,
    getUserProfileAsync.failure,
  ],
  createAsyncReducer(getUserProfileAsync, "userProfile")
);
*/

// --- 리팩토링 이전 코드 ver.2 (reducerUtils 의 asyncState 를 활용한 리팩토링) ---
/*
const github = createReducer<GithubState, GithubAction>(initialState, {
  [GET_USER_PROFILE]: (state) => ({
    ...state,
    userProfile: asyncState.load(),
  }),
  [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
    ...state,
    userProfile: asyncState.success(action.payload),
  }),
  [GET_USER_PROFILE_ERROR]: (state, action) => ({
    ...state,
    userProfile: asyncState.error(action.payload),
  }),
});
*/

// --- 리팩토링 이전 코드 ver.1 ---
/*
const github = createReducer<GithubState, GithubAction>(initialState, {
  [GET_USER_PROFILE]: (state) => ({
    ...state,
    userProfile: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
    ...state,
    userProfile: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [GET_USER_PROFILE_ERROR]: (state, action) => ({
    ...state,
    userProfile: {
      loading: false,
      error: action.payload,
      data: null,
    },
  }),
});
*/

export default github;
