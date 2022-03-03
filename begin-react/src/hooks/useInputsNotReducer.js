import { useState, useCallback } from 'react';

function useInputs(initialForm) {
  // 최초에 form 을 initialForm 에 따라 할당
  const [form, setForm] = useState(initialForm);
  // change (할당된 form 을 change, initialForm 은 그대로)
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setForm(form => ({ ...form, [name]: value }));
  }, []);
  // reset (초기의 initialForm 으로 form 을 change)
  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  return [form, onChange, reset];
}

export default useInputs;