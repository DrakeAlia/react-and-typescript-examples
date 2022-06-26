// Now that we know a little bit more about generics, we
// can make an abstraction for solving for what to do if
// our context value isn't set yet.

// Make a new file called create-context.tsx:

import * as React from 'react';

export function createContext<T extends {} | null>() {
  const context = React.createContext<T | undefined>(undefined);

  const useContext = () => {
    const c = React.useContext(context);
    if (c === undefined)
      throw new Error(
        'You must have a defined context as a value for a Provider'
      );
    return c;
  };
  return [useContext, context.Provider] as const;
}

// This is more correct than using as to tell TypeScript that we know what we're doing.

// That said, I'm not sure it's worth all of the extra overhead. You're going to have a
// specific useContext hook for every context.
