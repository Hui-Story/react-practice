import { useCallback, useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        [action.name]: action.value
      };
    case 'RESET':
      return Object.keys(state).reduce((acc, current) => {
        // key 에 해당하는 값을 '' 로 초기화한 객체 생성
        acc[current] = '';
        return acc;
      }, {});
    default:
      return state;
  }
}

function useInputs(initialForm) {
  // 최초에 form 을 initialForm 에 따라 할당
  const [form, dispatch] = useReducer(reducer, initialForm);
  // change (할당된 form 을 change, initialForm 은 그대로)
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    dispatch({ type: 'CHANGE', name, value});
  }, []);
  // reset (초기의 initialForm 으로 form 을 change)
  const reset = useCallback(() => dispatch({ type: 'RESET' }), []);
  return [form, onChange, reset];
}

export default useInputs;