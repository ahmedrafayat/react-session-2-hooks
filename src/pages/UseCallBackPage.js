import React from 'react';
import useRenderCounter from '../hooks/useRenderCounter';

const UseCallbackPage = () => {
  const renderCount = useRenderCounter();

  return (
    <div>
      <h2>Definition:</h2>
      <blockquote>
        <code>useCallback(callbackFunction, [dependencies])</code> is a Hook
        that allows you to memoize a function. Think of memoization as caching a
        value so that it does not need to be recalculated. The function
        reference only changes when one of the dependencies change
      </blockquote>

      <div></div>

      <div>Page Render Count: {renderCount}</div>
    </div>
  );
};

export default UseCallbackPage;
