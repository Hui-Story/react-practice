import React, { useMemo, useReducer } from "react";
import UserList from "./UserList";
import Counter from "./Counter";
import CreateUser from "./CreateUser";
/*
  -- immer 라이브러리 --
  $ yarn add immer 후 사용
  immer 라이브러리의 경우 미미하게 속도가 저하됨 (특히, 구형 브라우저 및 react-native)
  간단한 javascript 코드는 오히려 immer 로 인해 복잡해질 수 있음
  -> 선택적으로 사용할 것
*/
import produce from "immer";

function countActiveUsers(users) {
  console.log("활성 사용자 수를 세는중...");
  return users.filter((user) => user.active).length;
}

const initialState = {
  // ---- useInputs.js (커스텀 hooks) 로 대체 ----
  // inputs: {
  //   username: '',
  //   email: ''
  // },
  // ---------------------------------------------
  users: [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_USER":
      return produce(state, (draft) => {
        draft.users.push(action.user);
      });
    case "TOGGLE_USER":
      return produce(state, (draft) => {
        const user = draft.users.find((user) => user.id === action.id);
        user.active = !user.active;
      });
    case "REMOVE_USER":
      return produce(state, (draft) => {
        const index = draft.users.findIndex((user) => user.id === action.id);
        draft.users.splice(index, 1);
      });
    default:
      return state;
    // ---- useInputs.js (커스텀 hooks) 로 대체 ----
    // case 'CHANGE_INPUT':
    //   return {
    //     ...state,
    //     inputs: {
    //       ...state.inputs,
    //       [action.name]: action.value
    //     }
    //   };
    // ---------------------------------------------
    // ---- Immer 라이브러리 (produce) 활용하여 state 변경으로 대체 ----
    // case 'CREATE_USER':
    //   return {
    //     users: state.users.concat(action.user)
    //   };
    // case 'TOGGLE_USER':
    //   return {
    //     ...state,
    //     users: state.users.map(user =>
    //       user.id === action.id ? { ...user, active: !user.active } : user
    //     )
    //   };
    // case 'REMOVE_USER':
    //   return {
    //     ...state,
    //     users: state.users.filter(user => user.id !== action.id)
    //   };
    // -----------------------------------------------------------------
  }
}

// UserDispatch 라는 이름으로 내보내줌
export const UserDispatch = React.createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { users } = state;

  // ---- useInputs.js (커스텀 hooks) 로 대체 ----
  // const { username, email } = state.inputs;

  // const onChange = useCallback(e => {
  //   const { name, value } = e.target;
  //   dispatch({
  //     type: 'CHANGE_INPUT',
  //     name,
  //     value
  //   });
  // }, []);
  // ---------------------------------------------

  // ---- Context API 활용, 컴포넌트에서 조회 ----
  // const onCreate = useCallback(() => {
  //   dispatch({
  //     type: 'CREATE_USER',
  //     user: {
  //       id: nextId.current,
  //       username,
  //       email
  //     }
  //   });
  //   reset()
  //   nextId.current += 1;
  // }, [username, email, reset]);

  // const onToggle = useCallback(id => {
  //   dispatch({
  //     type: 'TOGGLE_USER',
  //     id
  //   });
  // }, []);

  // const onRemove = useCallback(id => {
  //   dispatch({
  //     type: 'REMOVE_USER',
  //     id
  //   });
  // }, []);
  // ---------------------------------------------

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    // div 태그 없이 바로 묶어줄 수 있음
    <UserDispatch.Provider value={dispatch}>
      <Counter />
      <CreateUser />
      <UserList users={users} />
      <div>활성 사용자 수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
