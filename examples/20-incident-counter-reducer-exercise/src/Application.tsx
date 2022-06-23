import { useReducer } from 'react';
// Define our types

// Let's say the type is a counter action
// type CounterAction = {
//   type: 'INCREMENT' | 'DECREMENT' | 'SET';
//   payload?: number;
// };

// The other type is a counter state
type CounterState = {
  value: number;
};

// We can make our actions even better. By getting a
// little more nuanced with our types.
type BasicCounterAction = {
  type: 'INCREMENT' | 'DECREMENT';
};

type SetCounterAction = {
  type: 'SET';
  payload: number;
};

type CounterAction = BasicCounterAction | SetCounterAction;

// Let's get a simple version of this reducer in place.
const reducer = (state: CounterState, action: CounterAction) => {
  // Now, TypeScript will protect us from firing an
  // increment or decrement action with a payload and
  // also omitting one from the actions for setting the
  // value.
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    case 'SET':
      // We've given TypeScript more information,
      // which means we can remove that check to see
      // if action.payload is undefined in the reducer.
      return { value: action.payload };
    default:
      return state;
  }
};

const Counter = () => {
  // We can create our hooks and our action creators.
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });
  const reset = () => dispatch({ type: 'SET', payload: 0 });
  const set = (n: number) => dispatch({ type: 'SET', payload: n });

  return (
    <main className="Counter">
      <h1>Days Since Last Incident</h1>
      <p className="count">{state.value}</p>
      <section className="controls">
        {/* Let's get the basic buttons working: */}
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
      </section>
    </main>
  );
};

const Application = () => <Counter />;

export default Application;
