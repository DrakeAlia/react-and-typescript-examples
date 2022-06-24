import * as React from 'react';

import { ColorSwatch } from './ColorSwatch';
import { ColorInputs } from './ColorInputs';
import { ColorSliders } from './ColorSliders';

import { toRGB } from './utilities';
import { reducer } from './reducer';
import { ThemeContext } from './theme-context';

// Instead of passing dispatch down to each of the components 
// that need it, let's move our state management to the 
// Context API.

// We're going to do this twice, let's start with something 
// simple, like a ThemeContext that will allow us to 
// support light mode and dark mode.

const Application = () => {
  const themes = React.useContext(ThemeContext);

  const [rgb, dispatch] = React.useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0
  });

  return (
    <main
      style={{
        borderColor: toRGB(rgb),
        // We'll use the dark theme on the application for now.
        ...themes.dark
        // So, that was simple, React pretty much inferred 
        // everything we needed it to.
      }}
    >
      <ColorSwatch {...rgb} />
      <ColorInputs {...rgb} />
      <ColorSliders {...rgb} dispatch={dispatch} />
    </main>
  );
};

export default Application;
