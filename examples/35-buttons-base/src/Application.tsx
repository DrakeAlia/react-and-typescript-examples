type ButtonProps = {
  children: string;
};

type PrimaryButtonsProps = ButtonProps & {
  primary: boolean;
  secondary?: never;
  destructive?: never;
};
type SecondaryButtonsProps = ButtonProps & {
  secondary: boolean;
  primary?: never;
  destructive?: never;
};
type DestructiveButtonsProps = ButtonProps & {
  destructive: boolean;
  secondary?: never;
  primary?: never;
};

const createClassNames = (classes: { [key: string]: boolean }): string => {
  let classNames = '';
  for (const [key, value] of Object.entries(classes)) {
    if (value) classNames += key + ' ';
  }
  return classNames.trim();
};

const Button = ({
  children,
  primary = false,
  secondary = false,
  destructive = false
}: PrimaryButtonsProps | SecondaryButtonsProps | DestructiveButtonsProps) => {
  const classNames = createClassNames({ primary, secondary, destructive });

  return <button className={classNames}>{children}</button>;
};

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
