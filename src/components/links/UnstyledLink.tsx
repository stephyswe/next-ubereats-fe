import Link, { LinkProps } from 'next/link';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

enum LinkVariant {
  'authLink',
  'countryLink',
  'sidebarLink',
  'sidebarDevice',
  'navLink',
  'footerLink',
  'cityTitle',
  'restaurantBtnLink',
}

type UnstyledLinkProps = {
  variant?: keyof typeof LinkVariant;
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
  size?: 'small' | 'normal' | 'lg';
  nextLinkProps?: Omit<LinkProps, 'href'>;
} & React.ComponentPropsWithRef<'a'>;

export const UnstyledLink = React.forwardRef<
  HTMLAnchorElement,
  UnstyledLinkProps
>(
  (
    {
      size = 'normal',
      children,
      href,
      openNewTab,
      className,
      nextLinkProps,
      variant = '',
      ...rest
    },
    ref
  ) => {
    const isNewTab =
      openNewTab !== undefined
        ? openNewTab
        : href && !href.startsWith('/') && !href.startsWith('#');

    const customClassName = clsxm(
      //#region  //*=========== Variants ===========
      [
        variant === 'authLink' && 'text-gray-400',

        variant === 'countryLink' && [
          'invisible cursor-pointer text-base font-medium',
          'leading-5 text-black underline md:visible',
        ],
        variant === 'sidebarLink' && [
          'box-border flex min-h-[56px] w-auto flex-shrink-0 cursor-pointer items-center justify-center',
          'rounded-[8px] px-4 py-3 text-lg font-medium leading-6',
        ],
        variant === 'navLink' && [
          'box-border flex w-auto',
          'cursor-pointer items-center justify-center whitespace-nowrap rounded-[500px]',
          'text-base font-medium leading-5',
        ],
        variant === 'footerLink' && [
          'text-sm font-normal leading-5 text-black',
        ],
        variant === 'sidebarDevice' && [
          'flex items-center rounded-[500px] bg-gray-50 p-3  text-sm font-medium leading-4 text-black',
        ],
        variant === 'cityTitle' && [
          'invisible cursor-pointer text-base font-medium leading-5 text-black underline md:visible',
        ],
        variant === 'restaurantBtnLink' && [
          'min-h-[24px] z-[inherit] p-[12px_16px] bg-gray-50 rounded-[500px] leading-4 font-medium text-sm cursor-pointer',
          'items-center whitespace-nowrap text-black flex-row flex relative :hover:bg-gray-500',
        ],
      ],
      //#endregion  //*=========== Variants ===========
      //#region  //*=========== Sizes ===========
      [
        variant === 'navLink' &&
          size === 'small' &&
          'md:px-3 md:py-3 md:h-[36px] text-sm',
        variant === 'navLink' &&
          size === 'normal' &&
          'px-4 py-3 md:py-3 md:px-4 md:min-h-[48px] text-base ',
      ],
      //#endregion  //*=========== Sizes ===========
      className
    );

    if (!isNewTab) {
      return (
        <Link href={href} {...nextLinkProps}>
          <a ref={ref} {...rest} className={customClassName}>
            {children}
          </a>
        </Link>
      );
    }

    return (
      <a
        ref={ref}
        target='_blank'
        rel='noopener noreferrer'
        href={href}
        {...rest}
        className={customClassName}
      >
        {children}
      </a>
    );
  }
);
