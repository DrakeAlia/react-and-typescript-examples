// Your Mission:
// Create a WithCurrentUser higher-order component.
// It should pass in the basic user information.
// It should still accept a salutation prop which is
// passed in manually.

import React from 'react';

type UserModel = {
  accountId: string;
  displayName: string;
  isVerified: boolean;
};

type NameTagProps = {
  salutation: string;
  user: UserModel;
};

const currentUser = {
  displayName: 'J Mascis',
  accountId: '123',
  isVerified: true
};

type WithUserProps = {
  user: UserModel;
};

// Will only take components that orginally took a user prop
function withCurrentUser<T extends WithUserProps>(
  Component: React.ComponentType<T>
) {
  return (props: Omit<T, keyof WithUserProps>) => {
    return <Component {...(props as T)} user={currentUser} />;
  };
}

const NameTag = ({ user, salutation }: NameTagProps) => {
  return (
    <main>
      <header>
        <h1>{salutation}</h1>
        <p>My Name Is</p>
      </header>
      <section className="display-name">
        <p>{user.displayName}</p>
      </section>
      <footer />
    </main>
  );
};

const NameTagWithCurrentUser = withCurrentUser(NameTag);

const Application = () => <NameTagWithCurrentUser salutation="Howdy" />;

export default Application;
