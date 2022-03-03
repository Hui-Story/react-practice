import React, { useCallback, useMemo, useRef, useState } from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는중...');
  return users.filter(user => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
  const { username, email } = inputs;
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setInputs(inputs => ({
      ...inputs,
      [name]: value
    }));
  }, []);
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    }
  ]);

  const nextId = useRef(4);
  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    // 1. spread 연산자 사용
    // setUsers([...users, user]);
    // 2. concat 사용 : 기존의 배열을 수정하지 않고, 새로운 원소가 추가된 새로운 배열 생성
    setUsers(users => users.concat(user));
    // 함수형 업데이트 -> 콜백함수의 파라미터에서 최신 users 참조 가능
    // deps 에 user 를 넣지 않아도 되어서 함수 생성 최적화 가능

    setInputs({
      username: '',
      email: ''
    })
    nextId.current += 1;
  }, [username, email]);

  const onRemove = useCallback(id => {
    // filter 사용 : user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 생성
    // = user.id 가 id 인 것을 제거
    setUsers(users => users.filter(user => user.id !== id));
  }, []);

  const onToggle = useCallback(id => {
    setUsers(users =>
      users.map(user =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    // div 태그 없이 바로 묶어줄 수 있음
    <>
      <Wrapper>
        <Hello name="react" color="red" isSpecial />
        <Hello color="pink"/>
      </Wrapper>
      <Counter />
      <InputSample />
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 : {count}</div>
    </>
  );
}

export default App;