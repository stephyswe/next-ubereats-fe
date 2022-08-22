import Link, { LinkProps } from 'next/link';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

enum LinkVariant {
  'large',
  'base1',
  'base2',
  'small1',
  'small2',
  'small3',
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
        // ** Large - 18 px **
        variant === 'large' && [
          'leading-6 text-lg',
          'font-medium',
          'box-border flex min-h-[56px] w-auto flex-shrink-0 cursor-pointer items-center justify-center rounded-[8px] px-4 py-3',
        ],

        // ** Base - 16 px **
        variant === 'base1' && [
          'text-base leading-5',
          'font-medium',
          'box-border flex w-auto cursor-pointer items-center justify-center whitespace-nowrap rounded-[500px]',
        ],
        variant === 'base2' && [
          'text-base leading-5',
          'font-medium',
          'invisible cursor-pointer underline md:visible',
        ],
        // ** Small - 14 px **
        variant === 'small1' && ['text-sm leading-5', 'font-normal'],
        variant === 'small2' && [
          'text-sm leading-4',
          'font-medium',
          'flex items-center rounded-[500px] bg-gray-50 p-3',
        ],
        variant === 'small3' && [
          'text-sm leading-4',
          'font-medium',
          'min-h-[24px] z-[inherit] p-[12px_16px] bg-gray-50 rounded-[500px] cursor-pointer items-center whitespace-nowrap flex-row flex relative :hover:bg-gray-500',
        ],
      ],
      //#endregion  //*=========== Variants ===========
      //#region  //*=========== Sizes ===========
      [
        variant === 'base1' &&
          size === 'small' &&
          'md:px-3 md:py-3 md:h-[36px] text-sm',
        variant === 'base1' &&
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
