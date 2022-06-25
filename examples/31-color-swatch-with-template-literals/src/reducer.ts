import { RGBColorType } from './types';

// Type Template Literals: Refactoring Our Color Adjustment Actions
const colors = ['red', 'green', 'blue'] as const;

// We can even take it one step further and
// use values that we seek to use in our code to
// inform our types.
type Colors = Uppercase<typeof colors[number]>;
type ActionTypes = `ADJUST_${Colors}`;

export type AdjustmentAction = {
  type: `ADJUST_${Colors}`;
  payload: number;
};

export const reducer = (
  state: RGBColorType,
  action: AdjustmentAction
): RGBColorType => {
  for (const color of colors) {
    if (action.type === `ADJUST_${color.toUpperCase()}`) {
      return { ...state, [color]: action.payload };
    }
  }

  return state;
};
