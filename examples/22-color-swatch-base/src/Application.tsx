import * as React from 'react';

import { ColorSwatch } from './ColorSwatch';
import { ColorInputs } from './ColorInputs';
import { ColorSliders } from './ColorSliders';

import { toRGB } from './utilities';
import { reducer } from './reducer';

// Before we dive into the Context API, let's wire this up
// so that we can update the state.
// If you look at Application.tsx, it almost looks like we
// have no TypeScript at all.

const Application = () => {
  const [rgb, dispatch] = React.useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0
  });

  return (
    <main style={{ borderColor: toRGB(rgb) }}>
      <ColorSwatch {...rgb} />
      <ColorInputs {...rgb} />
      <ColorSliders {...rgb} dispatch={dispatch} />
    </main>
  );
};

export default Application;
