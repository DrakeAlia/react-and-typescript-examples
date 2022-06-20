// Refactored in TypeScript:
type NameTagProps = {
  name: string;
};

const NameTag = (props: NameTagProps) => {
  return (
    <main>
      <header>
        <h1>Hello</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        <p>{props.name}</p>
      </section>
      <footer />
    </main>
  );
};

const Application = () => <NameTag name="Drake" />;

export default Application;


// Refactored in JS:
// import * as PropTypes from 'pro-types';

// const NameTag = ({ name }) => {
//   return (
//     <main>
//       <header>
//         <h1>Hello</h1>
//         <p>My Name Is</p>
//       </header>
//       <section className="display-name">
//         <p>{name}</p>
//       </section>
//       <footer />
//     </main>
//   );
// };

// NameTag.propTypes = {
//   name: PropTypes.string
// };

// const Application = () => <NameTag />;

// export default Application;
