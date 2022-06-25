import * as React from 'react';

/**
 * We're going to try two things here.
 *
 * - We want to make it so that the CurrentUser component accepts all
 * of the properties from the UserModel *except* for `accountId`.
 *
 * - We want the Friend component to read the properties from the
 * CurrentUser component and use the same props. (I know it's contrived,
 * but see if you can do it without reusing the same type.)
 */

type UserModel = {
  accountId: string;
  displayName: string;
  isVerified: boolean;
};

const currentUser = {
  displayName: 'J Mascis',
  accountId: '123',
  isVerified: true
};

const friends: UserModel[] = [
  { displayName: 'Brontosaurus', accountId: '234', isVerified: false },
  { displayName: 'Stegasaurus', accountId: '456', isVerified: true },
  { displayName: 'Tyrannosaurus', accountId: '789', isVerified: true }
];

// We can start by making a type that omits accountId.
// Omit is take the UserModel as the first generic and
// going to remove any property called accountId
type CurrentUserProps = Omit<UserModel, 'accountId'>;
// OR, alternatively, we could do something like this:
// type AlternateUserProps = Pick<UserModel, 'displayName' | 'isVerified'>;

// Swap out UserModel with CurrentUserProps and that
// will take off accountId, thus we can get rid of
// accountId in CurrentUser
// This allows us not have to duplicate our code
const CurrentUser = ({ displayName, isVerified }: CurrentUserProps) => {
  return (
    <header className="current-user">
      <h2>
        {displayName} {isVerified && '✅'}
      </h2>
    </header>
  );
};

// We can create a type for props out of the prop type of
// another component—even if we don't have direct access
// to the type itself.
// typeof CurrentUser is getting the same property as
// displayedName and isVerified off of the CurrentUser as well
const Friend = ({
  displayName,
  isVerified
}: React.ComponentProps<typeof CurrentUser>) => {
  return (
    <li className="friend">
      {displayName} {isVerified && '✓'}
    </li>
  );
};

const Application = () => {
  return (
    <main>
      <CurrentUser {...currentUser} />
      <section>
        <h3>Friends</h3>
        <ul>
          {friends.map((friend) => (
            <Friend key={friend.accountId} {...friend} />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Application;
