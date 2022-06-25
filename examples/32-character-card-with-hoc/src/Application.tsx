import * as React from 'react';
import { CharacterInformation } from './CharacterInformation';
import { CharacterType, fetchCharacter } from './characters';
import { Loading } from './Loading';

// We'll start at a super high level with just a
// component that wraps another component and does
// nothing to it.

// Okay, so what does our HOC pass in? Well, in this case,
// it passes in character. Right on. Let's get clear
// about that.
type WithCharacterProps = {
  character: CharacterType;
};

function withCharacter<T extends WithCharacterProps>(
  Component: React.ComponentType<T>
) {
  // Now, we'll tell our HOC, that cool—set the generic,
  // T to the type of the component that we pass in,
  // but that component must have a character prop that
  // is of the type CharacterType.
  return (props: Omit<T, keyof WithCharacterProps>) => {
    const [character, setCharacter] = React.useState<CharacterType | null>(
      null
    );
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      fetchCharacter().then((c) => {
        setCharacter(c);
        setLoading(false);
      });
    }, []);

    // We still have the issue with the fact that it will
    // take any props, however.
    // What we want is for our higher order component to
    // take any of the props the component it wraps takes,
    // except the ones we plan on passing in.
    if (loading) return <Loading />;
    return character && <Component {...(props as T)} character={character} />;
  };
}

const Application = () => {
  // In the Application component, we can use our pointless HOC.
  // Just simulating that is the combination of our character information and 
  // component with character higher-order component as well 
  const CharacterInformationWithCharacter = withCharacter(CharacterInformation);

  return (
    <main>
      <CharacterInformationWithCharacter />
    </main>
  );
};

export default Application;
