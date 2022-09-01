import Link, { LinkProps } from 'next/link';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

export enum LinkVariant {
  'linkLarge',
  'linkBase1',
  'linkBase2',
  'linkSmall1',
  'linkSmall2',
  'linkSmall3',
}

export type LinkPropSize = 'small' | 'normal' | 'lg';

export type UnstyledLinkProps = {
  variant?: keyof typeof LinkVariant;
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
  size?: LinkPropSize;
  weight?: 'bold' | 'medium';
  nextLinkProps?: Omit<LinkProps, 'href'>;
} & React.ComponentPropsWithRef<'a'>;

export const UnstyledLink = React.forwardRef<
  HTMLAnchorElement,
  UnstyledLinkProps
>(
  (
    {
      size = 'normal',
      weight,
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
      //#region  //*=========== Weight ===========
      [weight === 'bold' && 'font-bold', weight === 'medium' && 'font-medium'],
      //#endregion  //*======== Weight ===========
      //#region  //*=========== Sizes ===========
      [
        variant === 'linkBase1' &&
          size === 'small' &&
          'p-[6px_10px] md:p-[12px_16px] md:h-[36px] text-sm',
        variant === 'linkBase1' &&
          size === 'normal' &&
          'p-[12px_16px] md:p-[12px_16px] md:min-h-[48px] text-base',
      ],
      //#endregion  //*=========== Sizes ===========
      //#region  //*=========== Variants ===========
      [
        // ** Large - 18 px **
        variant === 'linkLarge' && [
          'leading-6 text-lg',
          'min-h-[56px] rounded-[8px] p-[12px_16px]',
          'box-border flex w-auto flex-shrink-0 ',
          'items-center justify-center',
        ],

        // ** Base - 16 px **
        variant === 'linkBase1' && [
          'text-base leading-5',
          'font-medium rounded-[500px]',
          'box-border flex w-auto items-center justify-center whitespace-nowrap ',
        ],
        variant === 'linkBase2' && [
          'text-base leading-5',
          'font-medium',
          'invisible underline md:visible',
        ],
        // ** Small - 14 px **
        variant === 'linkSmall1' && ['text-sm leading-5', 'font-normal'],
        variant === 'linkSmall2' && [
          'text-sm leading-4',
          'font-medium',
          'bg-gray-50',
          'rounded-[500px] p-3',
          'flex items-center ',
        ],
        variant === 'linkSmall3' && [
          'text-sm leading-4',
          'font-medium',
          'bg-gray-50 hover:bg-gray-500',
          'min-h-[24px] p-[8px_16px] rounded-[500px]',
          'z-[inherit] items-center whitespace-nowrap flex-row flex relative',
        ],
        variant === 'linkSmall3' &&
          size === 'small' && ['w-fit h-9 p-[0px_12px]'],
      ],
      //#endregion  //*=========== Variants ===========
      className
    );

    if (!isNewTab) {
      return (
        <Link href={href} {...nextLinkProps}>
          <a
            data-testid='component-link'
            ref={ref}
            {...rest}
            className={customClassName}
          >
            {children}
          </a>
        </Link>
      );
    }

    return (
      <a
        data-testid='component-link'
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
