import React, { useEffect } from 'react';

const User = React.memo(function User({ user, onRemove, onToggle }) {
  // 리렌더링 될 때마다 호출
  // useEffect(() => {
  //   console.log(user);
  // });

  // 마운트 됐을 때, 언마운트 됐을 때, 업데이터 될 때 작업
  useEffect(() => {
    // 마운트 되거나 업데이터 됐을 때
    console.log('user 값이 설정됨');
    console.log(user);
    // 언마운트 되거나 업데이트 되기 직전
    return () => {
      console.log('user 가 바뀌기 전..');
      console.log(user);
    };
  }, [user]);

  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black'
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      
      <span>({user.email})</span>
      {/* 화살표 함수로 나타내어야 바로 실행되지 않고 콜백 함수로 작동 */}
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
});

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {/* key로 user.id 대신 index 사용 가능 */}
      {/* {user.map((user, index) => ( */}
      {users.map(user => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default React.memo(UserList);