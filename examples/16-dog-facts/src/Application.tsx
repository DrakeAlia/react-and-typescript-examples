import * as React from 'react';
import { fetchDogFacts, DogFactType } from './dog-facts';

// Let's update the props for the Form component to get
// TypeScript off of our back.
type FormProps = {
  onSubmit: (n: number) => void;
};

const Form = ({ onSubmit }: FormProps) => {
  // The form is going to need some state of its own.
  // It needs to know the following:
  const [value, setValue] = React.useState(1);

  return (
    // Then we'll call our handler when the form is
    // submitted.
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(value);
      }}
    >
      <div className="fact-input">
        <label htmlFor="number-of-facts">Number of Dog Facts</label>
        {/* That can be plugged into the form. */}
        <input
          type="number"
          value={value}
          onChange={(event) => setValue(+event.target.value)}
          min="1"
          max="10"
          id="number-of-facts"
        />
      </div>
      <input type="submit" value="Fetch Dog Facts" />
    </form>
  );
};

const Fact = ({ fact }: { fact: string }) => {
  return (
    <article className="dog-fact">
      <h3>Dog Fact</h3>
      <p>{fact}</p>
    </article>
  );
};

const Application = () => {
  // We'll also need a way to hold onto whatever facts
  // that we fetch in state. In our Application add the
  // following:
  const [facts, setFacts] = React.useState<DogFactType[]>([]);
  // It knows what to expect from our API and can allow us
  // to move forward safety. Like I keep saying,
  // TypeScript is just trying to protect us from ourselves.

  // There are a few ways that we can handle fetching the
  // dog facts from the API, but let's start with this
  // approach in Application.
  const handleSubmit = (n: number) => {
    fetchDogFacts(n).then((facts) => setFacts(facts));
  };

  return (
    <main>
      {/* We'll pass that handler into the Form component. */}
      <Form onSubmit={handleSubmit} />
      <section>
        {/* Next, let's render our facts in the Application component. */}
        {facts.map((fact) => (
          <Fact key={fact.id} fact={fact.fact} />
        ))}
      </section>
    </main>
  );
};

export default Application;

// Exercise:
// import * as React from 'react';

// const Form = () => {
//   return (
//     <form
//       onSubmit={(event) => {
//         event.preventDefault();
//       }}
//     >
//       <div className="fact-input">
//         <label htmlFor="number-of-facts">Number of Dog Facts</label>
//         <input type="number" value="3" id="number-of-facts" />
//       </div>
//       <input type="submit" value="Fetch Dog Facts" />
//     </form>
//   );
// };

// const Fact = ({ fact }: { fact: string }) => {
//   return (
//     <article className="dog-fact">
//       <h3>Dog Fact</h3>
//       <p>{fact}</p>
//     </article>
//   );
// };

// const Application = () => {
//   return (
//     <main>
//       <Form />
//       <section></section>
//     </main>
//   );
// };

// export default Application;
