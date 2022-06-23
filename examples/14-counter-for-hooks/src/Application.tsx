import { ChangeEvent, useState } from 'react';

const incr = (count: number) => count + 1;
const decr = (count: number) => count - 1;

// A count that were keeping in a hook
// It know its a number and it expectes a number
const Counter = () => {
  const [count, setCount] = useState(0);


  const changeCount = (event: ChangeEvent<HTMLInputElement>) => {
    setCount(+event.target.value);
  };

  return (
    <main className="Counter">
      <h1>Days Since Last Incident</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={() => setCount(incr)}>Increment</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(decr)}>Decrement</button>
      </section>
      <section className="controls">
        <form onSubmit={() => {}}>
          <label htmlFor="set-to">Set Count</label>
          <input
            id="set-to"
            type="number"
            value={count}
            onChange={changeCount}
          />
          <input
            id="set-to"
            type="number"
            value={count}
            onChange={(e) => setCount(+e.target.value)}
          />
        </form>
      </section>
    </main>
  );
};

const Application = () => <Counter />;

export default Application;
