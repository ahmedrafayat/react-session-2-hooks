import React, { useReducer, useRef } from "react";
import useRenderCounter from '../hooks/useRenderCounter';

const reducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD':
            const newState = [...state]
            newState.push({ value: action.value })
            return newState
        case 'REMOVE':
            const index = state.findIndex((item) => item.value === action.value)
            if (index > -1) {
                const newState = [...state]
                newState.splice(index, 1)
                return newState
            }
            return state
        default:
            throw new Error('Incorrect action type')
    }
}

const UseReducerPage = () => {
    const [list, dispatcher] = useReducer(reducer, [])
    const inputElement = useRef()
    const renderCount = useRenderCounter()

    return (
        <div>
            <h2>Definition:</h2>
            <blockquote><code>useReducer(reducerFunction, initialArg)</code> is a Hook that can manage react state, just like <code>useState</code>. It returns an array where first item is the current state, and second item is a <code>dispatcher</code> function.
                Dispatcher function is guaranteed to not change over rerenders, so it can be easily passed down to child elements multiple levels deep. The syntax is a bit more complex, but powerful at the same time.</blockquote>
            <blockquote>
                When I use useReducer over useState:
                <ul>
                    <li>When I need to pass a state updating function to a child multiple layers deep</li>
                    <li>Useful when a state is being read in a useEffect</li>
                    <li>Sometimes, the complexity or nature of a state is best fit for useReducer. Code is cleaner rather than complex for those state.</li>
                </ul>
                useReducer is awesome once you get the hang of it, but dont go around using it everywhere even for small local states. By local state, I mean state
                that does not need to be passed down to child components and is only used in the component it is declared in.
            </blockquote>


            <div>
                There are {list.length} item(s) in the list

                <ol>
                    {
                        list.map((item) => <li>{item.value}</li>)
                    }
                </ol>

                <div>
                    <input type="text" ref={inputElement} />
                    <button onClick={() => dispatcher({ type: 'ADD', value: inputElement.current.value })}>Add</button>
                    <button onClick={() => dispatcher({ type: 'REMOVE', value: inputElement.current.value })}>Remove</button>
                </div>
            </div>

            <div>
                Page Render Count: {renderCount}
            </div>
        </div>
    )
}

export default UseReducerPage