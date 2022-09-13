import { useMemo, useState } from 'react';
import ChildComponent from './ChildComponent';

const expensiveComputation = (num) => {
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

const ParentComponent = () => {
  const [state, setState] = useState({ value1: 0, value2: 0 });

  const computedValue2 = useMemo(() => {
    // Very expensive task to be done with value2
    return expensiveComputation(state.value2);
  }, [state.value2]);

  //   const computedValue2 = expensiveComputation(state.value2);

  return (
    <div>
      <button onClick={() => setState({ ...state, value1: state.value1 + 1 })}>
        Increment value 1
      </button>
      <button onClick={() => setState({ ...state, value2: state.value2 + 1 })}>
        Increment value 2
      </button>
      <ChildComponent name="value1" value={state.value1} />
      <ChildComponent name="value2" value={computedValue2} />
    </div>
  );
};

export default ParentComponent;
