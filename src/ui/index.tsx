import { NextImage } from '@/components';

export { Container } from './container';
export { DynamicHero, Hero } from './hero';
export { Toggler } from './toggler';

/* maps */
export * from './loading';

type SpacerProps = {
  length?: number;
  index?: number;
} & React.ComponentPropsWithRef<'div'>;

export const Spacer = ({ length, index, ...rest }: SpacerProps) => {
  if (length && index) if (length === index + 1) return null;
  return <div {...rest}></div>;
};

export const NewLogo = () => (
  <NextImage
    alt='Startsida för Uber&nbsp;Eats'
    src='/images/logo.svg'
    width='146'
    height='24'
    className='block h-6 w-auto'
  />
);
