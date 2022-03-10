import * as actions from "./actions";
import { ActionType } from "typesafe-actions";
import { GithubProfile } from "../../api/github";
import { AsyncState } from "../../lib/reducerUtils";

export type GithubAction = ActionType<typeof actions>;

// --- reducerUtils 의 AsyncState 를 활용한 리팩토링 ---
export type GithubState = {
  userProfile: AsyncState<GithubProfile, Error>;
};

// --- 리팩토링 이전 코드 ---
/*
export type GithubState = {
  userProfile: {
    loading: boolean;
    error: Error | null;
    data: GithubProfile | null;
  };
};
*/
