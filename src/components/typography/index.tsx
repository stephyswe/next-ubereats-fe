import React from 'react';

import clsxm from '@/lib/clsxm';

enum TypographyAs {
  'h1',
  'h2',
  'h3',
  'h4',
  'span',
  'p',
  'div',
}

enum TypographyVariant {
  '4xl',
  '3xl',
  '5xl',
  'xl',
  'large',
  'base',
  'small',
  'xs',
}

type TypographyProps<C extends React.ElementType> = {
  as?: keyof typeof TypographyAs;
  variant?: keyof typeof TypographyVariant;
  weight?: 'bold' | 'medium';
  font?: 'secondary';
  leading?: '4' | '5' | '6';
} & React.ComponentPropsWithRef<C>;

export default function Typography<C extends React.ElementType>({
  as = 'h1',
  children,
  className,
  variant = '',
  weight,
  font,
  leading,
  ...rest
}: TypographyProps<C>) {
  const Component = as;

  return (
    <Component
      className={clsxm(
        //#region  //*=========== Leading ===========
        [
          leading === '4' && 'leading-4',
          leading === '5' && 'leading-5',
          leading === '6' && 'leading-6',
        ],
        //#endregion  //*======== Leading ===========
        //#region  //*=========== Font-Family ===========
        [font === 'secondary' && 'font-uberMove'],
        //#endregion  //*======== Font-Family ===========
        //#region  //*=========== Weight ===========
        [
          weight === 'bold' && 'font-bold',
          weight === 'medium' && 'font-medium',
        ],
        //#endregion  //*======== Weight ===========
        //#region  //*=========== Variants =========== (Sorted by size)
        [
          // ** XL - Extra Large

          // ** 5XL - 48 (change to 45) px **
          variant === '5xl' && [
            'font-uberMove text-4xl md:text-[52px] md:leading-[64px]',
            'font-bold',
            'mb-10',
          ],
          // ** 4XL - 36 px **
          variant === '4xl' && [
            'font-uberMove text-2xl md:text-4xl md:leading-[44px]',
            'font-bold',
          ],
          variant === '4xl-normal' && [
            'font-uberMove text-4xl font-medium leading-[44px]',
          ],
          // ** 3XL - 30 px (change to 28px) **
          variant === '3xl' && [
            'font-uberMove text-2xl md:text-[28px] md:leading-9',
          ],
          // ** 2XL - 24 px **
          // ** XL - 20 px **
          variant === 'xl' && [
            'font-uberMove text-xl leading-7',
            'font-bold',
            'p-0 ',
          ],
          // ** LG - 18 px **
          variant === 'large' && ['text-lg leading-6', 'font-medium'],
          // ** BASE - 16px **
          variant === 'base' && ['text-base'],
          // ** SMALL - 14px **
          variant === 'small' && ['text-sm'],
          // ** EXTRA-SMALL - 12px **
          variant === 'xs' && ['text-xs leading-5'],
        ],
        //#endregion  //*======== Variants ===========

        className
      )}
      {...rest}
    >
      {children}
    </Component>
  );
}
