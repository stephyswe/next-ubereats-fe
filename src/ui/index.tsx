import clsx from 'clsx';

import { useWindowSizeJs } from '@/hooks/useWindowSizeJs';

export type { BreadCrumbItemProps } from './breadcrumb';
export { BreadCrumb } from './breadcrumb';
export { Cart } from './cart';
export { Container } from './container';
export { DynamicHero, Hero } from './hero';
export { NavItemDelivery, NavItemSearch } from './navbar';
export { Toggler } from './toggler';

/* maps */
export * from './loading';
export { HomeMap, MapButton } from './maps';

type SpacerProps = {
  length?: number;
  index?: number;
} & React.ComponentPropsWithRef<'div'>;

export const Spacer = ({ length, index, ...rest }: SpacerProps) => {
  if (length && index) if (length === index + 1) return null;
  return <div {...rest}></div>;
};

export const NewLogo = () => (
  // eslint-disable-next-line @next/next/no-img-element
  <img
    alt='Startsida för Uber&nbsp;Eats'
    src='/images/logo.svg'
    width='146'
    height='24'
    className='block h-6 max-h-[18px] w-auto max-w-[136px] md:max-h-[inherit] md:max-w-[inherit] '
  />
);

export const Separator = ({ mobileHidden, mobileHiddenSpace }: any) => {
  const { isMobile } = useWindowSizeJs();
  return (
    <hr
      className={clsx(
        'my-8 h-[1px] border-none bg-[#e2e2e2]',
        isMobile && mobileHidden ? 'hidden' : '',
        isMobile && mobileHiddenSpace ? 'my-4 bg-[transparent]' : ''
      )}
    />
  );
};
