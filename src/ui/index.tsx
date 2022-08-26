import clsx from 'clsx';

import { useWindowSizeJs } from '@/hooks/useWindowSizeJs';

export type { BreadCrumbItemProps } from './breadcrumb';
export { BreadCrumb } from './breadcrumb';
export { Cart } from './cart';
export { Container } from './container';
export { Headline, HeadlineNavigate } from './headline';
export { DynamicHero, Hero } from './hero';
export { Toggler } from './toggler';

/* maps */
export * from './loading';
export { HomeMap, MapButton } from './maps';

type SpacerProps = {
  length?: number;
  index?: number;
} & React.ComponentPropsWithRef<'div'>;

export const Spacer = ({ length, index, className, ...rest }: SpacerProps) => {
  if (length && index) if (length === index + 1) return null;
  return (
    <div
      className={clsx(
        'm-0 flex-shrink-0 p-0',
        className && className.charAt(0) !== 'h' ? 'h-[1px]' : '',
        className
      )}
      {...rest}
    ></div>
  );
};

export const SpacerItem = ({ length, index, children }: SpacerProps) => {
  if (length && index) if (length === index + 1) return null;
  return <>{children}</>;
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

export const Separator = ({
  topOnly,
  mobileHidden,
  mobileHiddenSpace,
}: any) => {
  const { isMobile } = useWindowSizeJs();
  return (
    <hr
      className={clsx(
        'h-[1px] border-none bg-[#e2e2e2]',
        isMobile && mobileHidden ? 'hidden' : '',
        isMobile && mobileHiddenSpace ? 'my-4 bg-[transparent]' : '',
        topOnly ? 'm-[32px_0_0]' : 'my-8'
      )}
    />
  );
};
