import React from 'react';
import ParentComponent from '../components/ParentComponent';
import useRenderCounter from '../hooks/useRenderCounter';

const UseMemoPage = () => {
  const renderCount = useRenderCounter();

  return (
    <div>
      <h2>Definition:</h2>
      <blockquote>
        <code>useCallback(callbackFunction, [dependencies])</code> is a Hook
        that allows you to memoize a function. Think of memoization as caching a
        value so that it does not need to be recalculated. The function
        reference only changes when one of the dependencies change.
      </blockquote>
      <blockquote>
        Even though it might seem really useful to memoize every function, keep
        in mind that memoization itself is costly and does not come free.
        Optimization should only be done on demand and through proper
        benchmarking. Do not use it unless absolutely necessarily for
        performance.
      </blockquote>
      <blockquote>
        Some tips for useCallback and useMemo:
        <ol>
          <li>
            useCallback and useMemo are hooks that are useful only for
            consecutive renders (i.e. re-renders), for the initial render they
            are actually harmful
          </li>
          <li>
            useCallback and useMemo for props don’t prevent re-renders by
            themselves. Only when every single prop and the component itself are
            memoized, then re-renders can be prevented. One single mistake and
            it all falls apart and makes those hooks useless. Remove them if you
            find them.
          </li>
        </ol>
      </blockquote>

      <ParentComponent />

      <div>Page Render Count: {renderCount}</div>
    </div>
  );
};

export default UseMemoPage;
