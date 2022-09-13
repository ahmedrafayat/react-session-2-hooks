import React, { useRef } from "react";
import ForwardRefExample from "../components/ForwardRefExample";
import useRenderCounter from '../hooks/useRenderCounter';

const UseRefPage = () => {
    const inputElement = useRef()
    const forwardRefElement = useRef()
    const renderCount = useRenderCounter()


    return (
        <div>
            <h2>Definition:</h2>
            <blockquote><code>useRef</code> allows you to persist values between renders.</blockquote>
            <blockquote>
                It is used to:

                <ol>
                    <li>Store a mutable value that does not cause a re-render when updated</li>
                    <li>Can be used to access a DOM element directly</li>
                </ol>
            </blockquote>


            <div>
                Here is a counter, with a button to increase the count

                <div>
                    <input ref={inputElement} />
                    <button onClick={() => inputElement.current.focus()}>Focus on input</button>
                </div>
                <div>
                    <ForwardRefExample ref={forwardRefElement} />
                    <button onClick={() => forwardRefElement.current.focus()}>Focus on input</button>
                </div>
            </div>

            <div>
                Page Render Count: {renderCount}
            </div>
        </div>
    )
}

export default UseRefPage