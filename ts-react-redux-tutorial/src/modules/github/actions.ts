import { createAsyncAction } from "typesafe-actions"; // createAsyncAction 유틸함수 사용
import { GithubProfile } from "../../api/github";
import { AxiosError } from "axios";

export const GET_USER_PROFILE = "github/GET_USER_PROFILE";
export const GET_USER_PROFILE_SUCCESS = "github/GET_USER_PROFILE_SUCCESS";
export const GET_USER_PROFILE_ERROR = "github/GET_USER_PROFILE_ERROR";

export const getUserProfileAsync = createAsyncAction(
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERROR
)<string, GithubProfile, AxiosError>(); // redux-saga 사용할 때
// )<any, GithubProfile, AxiosError>(); // redux-thunk 사용할 때
