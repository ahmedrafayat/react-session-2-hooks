import React, { useState } from 'react';
import PokemonCountCard from '../components/PokemonCountCard';
import useRenderCounter from '../hooks/useRenderCounter';

const UseEffectPage = () => {
  const [shouldShowCard, setShouldShowCard] = useState(false);
  const renderCount = useRenderCounter();

  const toggleCard = () => {
    setShouldShowCard(!shouldShowCard);
  };

  // Uncomment these lines to understand how useEffect always runs AFTER the render cycle.
  // Another Note: useEffect without dep array is essentially saying: Run this side-effect after each render cycle.
  // Comparing this with doing something in the function body, both will for every render. But function body runs before the render cycle, useEffect runs after
  // useEffect(() => {
  //     console.log("Runs anytime react rerenders the component: from useEffect")
  // })
  // console.log("Runs anytime react rerenders the component: from function body")

  return (
    <div>
      <h2>Definition:</h2>
      <blockquote>
        <code>useEffect(callback, [dependencies])</code> is the hook that
        manages the side-effects in functional components. <code>callback</code>{' '}
        argument is a function to put the side-effect logic.{' '}
        <code>dependencies</code> is a list of dependencies of your side-effect:
        being props or state values.
      </blockquote>
      <blockquote>
        If you’re familiar with React class lifecycle methods, you can think of{' '}
        <code>useEffect</code> Hook as <code>componentDidMount</code>,{' '}
        <code>componentDidUpdate</code>, and <code>componentWillUnmount</code>{' '}
        combined.
      </blockquote>

      <div>
        <button onClick={toggleCard}>Show/Hide PokemonCountCard</button>

        {shouldShowCard && <PokemonCountCard />}
      </div>

      <div>Page Render Count: {renderCount}</div>
    </div>
  );
};

export default UseEffectPage;
