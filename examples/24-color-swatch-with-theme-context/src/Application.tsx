import * as React from 'react';

import { ColorSwatch } from './ColorSwatch';
import { ColorInput } from './ColorInput';
import { ColorSlider } from './ColorSlider';
import { ThemeContext } from './theme-context';
import { ColorAdjustment } from './ColorAdjustment';

const Application = () => {
  const themes = React.useContext(ThemeContext);

  return (
    <main
      style={{
        ...themes.dark
      }}
    >
      <ColorSwatch />
      {/* <ColorInputs {...rgb} /> */}
      <ColorAdjustment Adjustment={ColorSlider} />
      <ColorAdjustment Adjustment={ColorInput} />
    </main>
  );
};

export default Application;
