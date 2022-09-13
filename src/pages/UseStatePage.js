import React, { useState } from 'react';
import useRenderCounter from '../hooks/useRenderCounter';

const DEFAULT_COUNT_STATE = 10;

const UseStatePage = () => {
  const [count, setCount] = useState(DEFAULT_COUNT_STATE);
  const renderCount = useRenderCounter();

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleIncrementWithCallback = () => {
    // Reasons to use setState with callback:
    // 1. React state is asynchronous and I have experienced significant delay in updating state in very large applications with components
    //    having multiple states and effects. Only at the time, and only if needed, we might use this callback
    // 2. Sometimes, we want to update state in a useEffect and we need the current state. At those times, this callback proves to be useful
    //    Example:
    //    useEffect(() => {
    //      // Do something... say an API call
    //      setCount(count + 1)
    //    }, [count])
    //
    //   The example above would result in an infinite loop, since count is in the dependency array. You might argue that we can remove the count dependency altogether
    //   But that is an anti-pattern in react. Any state, function, etc. used in a useeffect should be included in the dependency array
    //   There is a useful eslint plugin that automatically warns when you have failed to include something in the dependency array. See: https://reactjs.org/docs/hooks-rules.html#eslint-plugin
    setCount((prevCount) => prevCount + 1);
  };

  // useEffect(() => {
  //     // Do something... say an API call
  //     setCount(count + 1)
  // }, [count])

  return (
    <div>
      <h2>Definition:</h2>
      <blockquote>
        <code>useState</code> is a Hook that allows you to have state variables
        in functional components. You pass the initial state to this function
        and it returns a variable with the current state value (not necessarily
        the initial state) and another function to update this value.
      </blockquote>

      <div>
        Here is a counter, with a button to increase the count
        <div>
          <div>{count}</div>
          <div>
            <button onClick={handleIncrement}>Increment</button>
          </div>
          <div>
            <button onClick={handleIncrementWithCallback}>
              Increment (With Callback)
            </button>
          </div>
        </div>
      </div>

      <div>Page Render Count: {renderCount}</div>
    </div>
  );
};

export default UseStatePage;
