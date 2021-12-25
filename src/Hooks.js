//what is a Hook?
// Hooks are functions that let you “hook into” React state and lifecycle features from function components.
// Hooks don’t work inside classes — they let you use React without classes

// When would I use a Hook? 
// If you write a function component and realize you need to add some state to it, 
// previously you had to convert it to a class. 
// Now you can use a Hook inside the existing function component.

// What does calling useState do? 
// It declares a “state variable”. Our variable is called count but we could call it anything else, 
// like banana. This is a way to “preserve” some values between the function calls — useState is a new way to use the exact same capabilities that this.state provides in a class. 
// Normally, variables “disappear” when the function exits but state variables are preserved by React.

// What do we pass to useState as an argument? 
// The only argument to the useState() Hook is the initial state. 
// Unlike with classes, the state doesn’t have to be an object. 
// We can keep a number or a string if that’s all we need. In our example, we just want a number for how many times the user clicked, so pass 0 as initial state for our variable.
//  (If we wanted to store two different values in state, we would call useState() twice.)

// What does useState return? 
// It returns a pair of values: the current state and a function that updates it. 
// This is why we write const [count, setCount] = useState().
// This is similar to this.state.count and this.setState in a class, except you get them in a pair.


// import React, { useState } from 'react';
//  2:
//  3:  function Example() {
//  4:    const [count, setCount] = useState(0);
//  5:
//  6:    return (
//  7:      <div>
//  8:        <p>You clicked {count} times</p>
//  9:        <button onClick={() => setCount(count + 1)}>
// 10:         Click me
// 11:        </button>
// 12:      </div>
// 13:    );
// 14:  }

//Line 1: We import the useState Hook from React. It lets us keep local state in a function component.

// Line 4: Inside the Example component, we declare a new state variable by calling the useState Hook. 
// It returns a pair of values, to which we give names. We’re calling our variable count because it holds the number of button clicks. We initialize it to zero by passing 0 as the only useState argument. The second returned item is itself a function. 
// It lets us update the count so we’ll name it setCount.

// Line 9: When the user clicks, we call setCount with a new value. 
// React will then re-render the Example component, passing the new count value to it.


/////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Effect Hook

//Data fetching, setting up a subscription, 
//and manually changing the DOM in React components are all examples of side effects

//There are two common kinds of side effects in React components: those that don’t require cleanup,
//and those that do. 

//Effects Without Cleanup
// Sometimes, we want to run some additional code after React has updated the DOM. Network requests, 
// manual DOM mutations, and logging are common examples of effects that don’t require a cleanup


import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


// What does useEffect do? 
// By using this Hook, you tell React that your component needs to do something after render. 
// React will remember the function you passed,
// and call it later after performing the DOM updates. 

// Why is useEffect called inside a component? 
// Placing useEffect inside the component lets us access the count state 
// variable (or any props) right from the effect.

// Does useEffect run after every render?
// Yes! By default, it runs both after the first render and after every update


//Effects with Cleanup

//Example Using Hooks

import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    // Specify how to clean up after this effect:
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}


// Why did we return a function from our effect? 
// This is the optional cleanup mechanism for effects. 
// Every effect may return a function that cleans up after it. 
// This lets us keep the logic for adding and removing subscriptions close to each other. 
// They’re part of the same effect!

// When exactly does React clean up an effect? 
// React performs the cleanup when the component unmounts. 
// However, as we learned earlier, effects run for every render and not just once. 
// This is why React also cleans up effects from the previous render before running the effects next time.

// If you pass an empty array ([]), 
// the props and state inside the effect will always have their initial values. 
// While passing [] as the second argument is closer to the familiar 
// componentDidMount and componentWillUnmount mental model,
// there are usually better solutions to avoid re-running effects too often

//Rules of Hooks

//Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.
//Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions.

// Basic Hooks
// useState
// useEffect
// useContext

// Additional Hooks
// useReducer
// useCallback
// useMemo
// useRef
// useImperativeHandle
// useLayoutEffect
// useDebugValue



// 1. useState

const [state, setState] = useState(initialState);

//Returns a stateful value, and a function to update it.

//During the initial render, the returned state (state) is the same as the value passed as the 
//first argument (initialState).

//The setState function is used to update the state. 
//It accepts a new state value and enqueues a re-render of the component.

setState(newState);

//During subsequent re-renders, the first value returned by useState will always be the most 
//recent state after applying updates.


// 2. useEffect

useEffect(didUpdate);

//Accepts a function that contains imperative, possibly effectful code.

//Mutations, subscriptions, timers, logging, and other side effects are not allowed inside
//the main body of a function component (referred to as React’s render phase). 
//Doing so will lead to confusing bugs and inconsistencies in the UI.

//Instead, use useEffect. The function passed to useEffect will run after the render is 
//committed to the screen. Think of effects as an escape hatch from React’s purely functional 
//world into the imperative world.

//Instead, use useEffect. The function passed to useEffect will run after the render is committed 
//to the screen. Think of effects as an escape hatch from React’s purely functional world into
//the imperative world.


//3. useContext

const value = useContext(MyContext);

//Accepts a context object (the value returned from React.createContext) and r
//eturns the current context value for that context.

Correct: useContext(MyContext)
Incorrect: useContext(MyContext.Consumer)
Incorrect: useContext(MyContext.Provider)

//A component calling useContext will always re-render when the context value changes.

//useContext(MyContext) only lets you read the context and subscribe to its changes. 
//You still need a <MyContext.Provider> above in the tree to provide the value for this context.


//4. useReducer

const [state, dispatch] = useReducer(reducer, initialArg, init);

//An alternative to useState. Accepts a reducer of type (state, action) => newState, 
//and returns the current state paired with a dispatch method

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </>
    );
}


//useMemo

const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

// Pass a “create” function and an array of dependencies. 
// useMemo will only recompute the memoized value when one of the dependencies has changed. 
// This optimization helps to avoid expensive calculations on every render.


//useRef
const refContainer = useRef(initialValue);


