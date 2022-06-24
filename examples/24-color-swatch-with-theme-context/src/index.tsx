import { render } from 'react-dom';

import Application from './Application';

import { RGBContextProvider } from './context';
import { ThemeProvider } from './theme-context';

import './style.scss';

const rootElement = document.getElementById('root');
render(
  <ThemeProvider>
    <RGBContextProvider>
      <Application />
    </RGBContextProvider>
  </ThemeProvider>,
  rootElement
);
