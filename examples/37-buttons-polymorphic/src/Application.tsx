// Polymorphic Components with TypeScript
import * as React from 'react';

// Augment the props with the fact that
// it could take an element. We're also going to move
// ButtonProps into ButtonOwnProps so that we
// can combine it later.

type ButtonOwnProps<E extends React.ElementType = React.ElementType> = {
  children: string;
  primary?: boolean;
  secondary?: boolean;
  destructive?: boolean;
  as?: E;
};

type ButtonProps<E extends React.ElementType> = ButtonOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof ButtonOwnProps>;

const createClassNames = (classes: { [key: string]: boolean }): string => {
  let classNames = '';
  for (const [key, value] of Object.entries(classes)) {
    if (value) classNames += key + ' ';
  }
  return classNames.trim();
};

// What's happening here?

// We have a generic, E.
// We placed a constraint on E that it must be something 
// that conforms to an HTML element.
// Take our ButtonOwnProps that we just made.
// Make a new type of whatever props that HTML element takes, 
// but let us override it.

const defaultElement = 'button';

function Button<E extends React.ElementType = typeof defaultElement>({
  children,
  primary = false,
  secondary = false,
  destructive = false,
  as
}: ButtonProps<E>) {
  const classNames = createClassNames({ primary, secondary, destructive });

  const TagName = as || defaultElement;

  return <TagName className={classNames}>{children}</TagName>;
}

const Application = () => {
  return (
    <main>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
      <Button destructive>Destructive</Button>
    </main>
  );
};

export default Application;
