import {
  LinkPropsVariant,
  UnstyledLink,
} from '@/components/links/UnstyledLink';

type LinkProps<C extends React.ElementType> = {
  variant?: LinkPropsVariant;
  svg: JSX.Element;
} & React.ComponentProps<C>;

export const LinkIcon = <C extends React.ElementType>({
  variant,
  svg,
  href,
  title,
  ...rest
}: LinkProps<C>) => {
  return (
    <UnstyledLink
      href={href}
      variant={variant ? variant : 'linkSmall3'}
      {...rest}
    >
      {svg}
      <div className='w-2'></div>
      {title}
    </UnstyledLink>
  );
};
