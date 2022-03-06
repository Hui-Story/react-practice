import React, { useState } from "react";
import axios from "axios";
// import useAsync from "./useAsync";
import { useAsync } from "react-async";
import User from "./User";

// useAsync 에서는 Promise 의 결과를 바로 data 에 담기 때문에,
// 요청을 한 이후 response 에서 data 추출하여 반환하는 함수를 따로 만들었습니다.
async function getUsers() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
}

function Users() {
  const [userId, setUserId] = useState(null);
  // const [state, refetch] = useAsync(getUsers, [], true);
  // const { loading, data: users, error } = state; // state.data 를 users 키워드로 조회
  const {
    data: users,
    error,
    isLoading,
    run, // 사용자의 인터랙션에 따라서만 API 호출
    // reload,
  } = useAsync({
    deferFn: getUsers, // 사용자의 인터랙션에 따라서만 API 호출
    // promiseFn: getUsers,
  });

  // if (loading) return <div>로딩중..</div>;
  if (isLoading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  // if (!users) return <button onClick={refetch}>불러오기</button>;
  if (!users) return <button onClick={run}>불러오기</button>;
  return (
    <>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => setUserId(user.id)}
            style={{ cursor: "pointer" }}
          >
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      {/* <button onClick={refetch}>다시 불러오기</button> */}
      <button onClick={run}>다시 불러오기</button>
      {userId && <User id={userId} />}
    </>
  );
}

export default Users;
