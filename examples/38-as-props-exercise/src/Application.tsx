import * as React from 'react';

// Polymorphic Components (Exercise)

type TextOwnProps<E extends React.ElementType = React.ElementType> = {
  children: string;
  as?: E;
};

// And we want out custom component to proxy all of its props to the HTML
// Element minus our special sauce.

// We're using Omit as a helper in this case.
type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps>;

const exampleText =
  'When I was born, the name for what I was did not exist. They called me nymph, assuming I would be like my mother and aunts and thousand cousins. Least of the lesser goddesses, our powers were so modest they could scarcely ensure our eternities. We spoke to fish and nurtured flowers, coaxed drops from the clouds or salt from the waves. That word, nymph, paced out the length and breadth of our futures.';

const defaultElement = 'div';

// Finally, we'll refactor our Text component as follows:
function Text<E extends React.ElementType = typeof defaultElement>({
  children,
  as,
  ...rest
}: TextProps<E>) {
  const TagName = as || defaultElement;
  return <TagName {...rest}>{children}</TagName>;
}

const Application = () => {
  return (
    <main>
      <Text id="main" as="label" htmlFor="wow">
        {exampleText}
      </Text>
    </main>
  );
};

export default Application;
