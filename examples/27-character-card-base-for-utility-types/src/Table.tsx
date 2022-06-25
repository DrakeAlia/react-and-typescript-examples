import * as React from 'react';
import { CharacterType } from './characters';

// We can do a quick refactor make our TableRow components 
// better.

// We could handle this a few different ways:
// 1.Capitalize the heading with JavaScript.
// 2.Capitalize the heading with CSS.
// 3.Fix the typing.


// It would be cool if I could enforce that the heading 
// be property that is actually on a character.

type TableProps = { children: React.ReactNode };
// We can even dynamically type the value to be any
// reasonable type found in the values of CharacterType.
type TableRowProps = {
  heading: Capitalize<keyof CharacterType>;
  value: CharacterType[keyof CharacterType];
};

export const Table = ({ children }: TableProps) => {
  return (
    <table>
      <tbody>{children}</tbody>
    </table>
  );
};

export const TableRow = ({ heading, value }: TableRowProps) => {
  return (
    <tr>
      <th>{heading}</th>
      <td>{value}</td>
    </tr>
  );
};


// Yes. I could hardcode in the values, but I don't love 
// that.

// type TableRowProps = {
//   heading:
//     | 'Name'
//     | 'Alignment'
//     | 'Intelligence'
//     | 'Strength'
//     | 'Speed'
//     | 'Durability'
//     | 'Power'
//     | 'Combat'
//     | 'Total';
//   value: string | number;
// };
