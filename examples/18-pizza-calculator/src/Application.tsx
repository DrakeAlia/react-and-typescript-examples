import { Dispatch, useReducer } from 'react';

type PizzaData = {
  numberOfPeople: number;
  slicesPerPerson: number;
  slicesPerPie: number;
};

type PizzaState = PizzaData & { pizzasNeeded: number };

const calculatePizzasNeeded = ({
  numberOfPeople,
  slicesPerPerson,
  slicesPerPie
}: PizzaData): number => {
  return Math.ceil((numberOfPeople * slicesPerPerson) / slicesPerPie);
};

const addPizzasNeededToPizzaData = (data: PizzaData): PizzaState => {
  return { ...data, pizzasNeeded: calculatePizzasNeeded(data) };
};

const initialState: PizzaState = {
  numberOfPeople: 8,
  slicesPerPerson: 2,
  slicesPerPie: 8,
  pizzasNeeded: 2
};

// We do need to figure out what we're going to do with the
// actions though, right? Luckily, they mostly conform to
// the same shape.
type PizzaAction = {
  type:
    | 'UPDATE_NUMBER_OF_PEOPLE'
    | 'UPDATE_SLICES_PER_PERSON'
    | 'UPDATE_SLICES_PER_PIE';
  payload: number;
};

// Well, we know the shape of the pizza state, right?
// Update the state and action for pizza
const reducer = (state: PizzaState, action: PizzaAction) => {
  // (You've got that union type making sure that we only allow for a certain set of actions.)
  // (This saves us from accidentally misspelling an action type and wondering why nothing works.)
  if (action.type === 'UPDATE_NUMBER_OF_PEOPLE') {
    return addPizzasNeededToPizzaData({
      ...state,
      numberOfPeople: action.payload
    });
  }

  if (action.type === 'UPDATE_SLICES_PER_PERSON') {
    return addPizzasNeededToPizzaData({
      ...state,
      slicesPerPerson: action.payload
    });
  }

  if (action.type === 'UPDATE_SLICES_PER_PIE') {
    return addPizzasNeededToPizzaData({
      ...state,
      slicesPerPie: action.payload
    });
  }

  return state;
};

const Calculation = ({ count }: { count: number }) => {
  return (
    <section className="calculation">
      <p className="count">{count}</p>
      <p className="caption">Pizzas Needed</p>
    </section>
  );
};

// Now, we can update the Calculator component.
// One of my least favorite things about the web is that
// inputs—even if they have type of "number"—will return
// strings and TypeScript is well aware of that.
const Calculator = ({
  dispatch,
  state
}: {
  state: PizzaState;
  dispatch: Dispatch<PizzaAction>;
}) => {
  return (
    <form onSubmit={() => {}}>
      <label htmlFor="number-of-people">Number of People</label>
      <input
        id="number-of-people"
        type="number"
        value={state.numberOfPeople}
        onChange={(event) =>
          dispatch({
            type: 'UPDATE_NUMBER_OF_PEOPLE',
            // We need to convert the output to numbers.(+)
            payload: +event.target.value
          })
        }
      />
      <label htmlFor="slices-per-person">Slices Per Person</label>
      <input
        id="slices-per-person"
        type="number"
        value={state.slicesPerPerson}
        onChange={(event) =>
          dispatch({
            type: 'UPDATE_SLICES_PER_PERSON',
            // We need to convert the output to numbers.(+)
            payload: +event.target.value
          })
        }
      />
      <label htmlFor="slices-per-Pie">Slices Per Pie</label>
      <input
        id="slices-per-Pie"
        type="number"
        value={state.slicesPerPie}
        onChange={(event) =>
          dispatch({
            type: 'UPDATE_SLICES_PER_PIE',
            // We need to convert the output to numbers.(+)
            payload: +event.target.value
          })
        }
      />
    </form>
  );
};

const Application = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <main className="calculator">
      <header>
        <h1>Pizza Calculator</h1>
      </header>
      <Calculation count={state.pizzasNeeded} />
      <Calculator state={state} dispatch={dispatch} />
    </main>
  );
};

export default Application;
