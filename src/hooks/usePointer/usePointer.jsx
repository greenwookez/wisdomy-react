import { useState } from 'react';

const usePointer = (defaultValue = 0) => {
  const [pointer, setPointer] = useState(defaultValue);

  return [pointer, () => { setPointer(prevPointer => prevPointer + 1) }]
};

export default usePointer;
