import { ChangeEvent, Dispatch } from 'react';
import { ColorSlider } from './ColorSlider';
import { AdjustmentAction } from './reducer';
import { RGBColorType } from './types';

// We want to use the current type that we pulled from
// RGBColorType but we also want to extend it to support our
// dispatch.
// I purposely used an interface instead of a type this time
// so that I could demonstrate the difference in how you
// extend each of them.
interface ColorSidersProps extends RGBColorType {
  dispatch: Dispatch<AdjustmentAction>;
  // Now we can pass in dispatch to our ColorSliders
  // component in Application.tsx;
}

// In ColorSliders.tsx, we can wire up the ability to
// dispatch actions
export const ColorSliders = ({
  red,
  green,
  blue,
  dispatch
}: ColorSidersProps) => {
  const adjustRed = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'ADJUST_RED', payload: +event.target.value });
  };

  const adjustGreen = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'ADJUST_GREEN', payload: +event.target.value });
  };

  const adjustBlue = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'ADJUST_BLUE', payload: +event.target.value });
  };

  return (
    <section className="color-sliders">
      {/* We'd ideally like to pass these in as onChange 
      props. They've got everything they need. */}
      <ColorSlider
        id="red-slider"
        label="Red"
        value={red}
        onChange={adjustRed}
      />
      <ColorSlider
        id="green-slider"
        label="Green"
        value={green}
        onChange={adjustGreen}
      />
      <ColorSlider
        id="blue-slider"
        label="Blue"
        value={blue}
        onChange={adjustBlue}
      />
    </section>
  );
};
