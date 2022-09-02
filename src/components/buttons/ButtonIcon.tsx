import { ButtonPropsVariant, UnStyledButton } from './UnStyledButton';

type ButtonProps<C extends React.ElementType> = {
  variant?: ButtonPropsVariant;
  svg: JSX.Element;
} & React.ComponentProps<C>;

export const ButtonIcon = <C extends React.ElementType>({
  variant,
  svg,
  ...rest
}: ButtonProps<C>) => {
  return (
    <UnStyledButton variant={variant} {...rest}>
      {svg}
    </UnStyledButton>
  );
};
