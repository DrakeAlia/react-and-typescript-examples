// So far, we've mostly looked at examples of components using hooks for state management
// Can we use TypeScript with those components? Absolutely.
import { ChangeEvent, Component } from 'react';

// We're passing in two types into React.Component: the type of the
// props we expect the component to receive and another type that dictates the shape of its state

// We want it to take a string that dictates what kind of incident we're coutning up from as a prop 
// and then keep track of the number of days as a number in state.
type CounterProps = {
  incident: string;
};

type CounterState = {
  count: number;
};

// One thing that you'll notice is that we called out CounterState twice. Once in the type parameter 
// and again in the instance property.
class Counter extends Component<CounterProps, CounterState> {
  state: CounterState = {
    count: 0
  };
  
  // Different elements trigger different events in the browser. Those events have different properties. 
  // This means that TypeScript needs some help from us to let it know roughly what kind of event we're 
  // expecting so that it can help us avoid any mistakes.
  increment = () => {
    this.setState(({ count }) => ({ count: count + 1 }));
  };

  decrement = () => {
    this.setState(({ count }) => ({ count: count - 1 }));
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  changeCount = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ count: +event.target.value });
  };

  render() {
    const { incident } = this.props;
    const { count } = this.state;

    return (
      <main className="Counter">
        <h1>Days Since Last Incident {incident}</h1>
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.reset}>Reset</button>
          <button onClick={this.decrement}>Decrement</button>
        </section>
        <section className="controls">
          <form onSubmit={() => {}}>
            <label htmlFor="set-to">Set Count</label>
            <input
              id="set-to"
              type="number"
              onChange={this.changeCount}
              value={count}
            />
            <input type="submit" />
          </form>
        </section>
      </main>
    );
  }
}

class Application extends Component {
  render() {
    return <Counter incident="Coffee Spill" />;
  }
}

export default Application;
