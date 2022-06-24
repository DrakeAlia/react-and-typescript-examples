import { useContext } from 'react';
import { RGBContext } from './context';

export const ColorSwatch = () => {
  const { red, green, blue } = useContext(RGBContext)
  // const value = useContext(RGBContext);

  return (
    <div
      className="color-swatch"
      style={{
        // backgroundColor: `rgb(${value?.red}, ${value?.green}, ${value?.blue})`
         backgroundColor: `rgb(${red}, ${green}, ${blue})`
      }}
    ></div>
  );
};

// (value?.blue)
// If value exits, then pull the blue property out of it
