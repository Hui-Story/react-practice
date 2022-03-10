import { createAction, ActionType, createReducer } from "typesafe-actions";

// --- deprecated 의 crateAction, createStandardAction 사용 방법 (추천 X) ---
// import { deprecated } from "typesafe-actions";
// const { createStandardAction } = deprecated;

// 액션 type 선언
// --- handleAction 을 활용하면 액션 type 을 바로 생성함수에 작성해도 됨 ---
// const INCREASE = "counter/INCREASE";
// const DECREASE = "counter/DECREASE";
// const INCREASE_BY = "counter/INCREASE_BY";

// 액션 생성함수를 선언합니다
// export const increase = createStandardAction(INCREASE)();
export const increase = createAction("counter/INCREASE")();
export const decrease = createAction("counter/DECREASE")();
export const increaseBy = createAction("counter/INCREASE_BY")<number>(); // payload 타입을 Generics 로 설정해주세요.

// 액션 객체 타입 준비
const actions = { increase, decrease, increaseBy }; // 모든 액션 생성함수들을 actions 객체에 넣습니다
type CounterAction = ActionType<typeof actions>; // ActionType 를 사용하여 모든 액션 객체들의 타입을 준비해줄 수 있습니다

// 이 리덕스 모듈에서 관리 할 상태의 타입을 선언합니다
type CounterState = {
  count: number;
};

// 초기상태를 선언합니다.
const initialState: CounterState = {
  count: 0,
};

// 리듀서를 만듭니다
// 상태의 타입은 initialState 를 참조하여 바로 유추 할 수 있고,
const counter = createReducer<CounterState, CounterAction>(initialState)
  .handleAction(increase, (state) => ({ count: state.count + 1 }))
  .handleAction(decrease, (state) => ({ count: state.count - 1 }))
  .handleAction(increaseBy, (state, action) => ({
    count: state.count + action.payload,
  }));

export default counter;
