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
  'p1',
  'p2',
  'h2a',
  'h2b',
  'h1ModalDish',
  'spanModalDishPrice',
  'divModalDishDescription',
  'divModalDishQuantity',
  'spanModalDishAllergy',
  'spanCategories',
}

type TypographyProps<C extends React.ElementType> = {
  as?: keyof typeof TypographyAs;
  variant?: keyof typeof TypographyVariant;
} & React.ComponentPropsWithRef<C>;

export default function Typography<C extends React.ElementType>({
  as = 'h1',
  children,
  className,
  variant = '',
  ...rest
}: TypographyProps<C>) {
  const Component = as;

  return (
    <Component
      className={clsxm(
        //#region  //*=========== Element ===========
        [
          as === 'h1' && ['text-[24px] leading-7'],
          as === 'h2' && [''],
          as === 'h3' && ['font-uberMove text-[28px] font-bold leading-9'],
          as === 'h4' && [
            'mt-2 block cursor-pointer font-uberMoveText text-base font-medium leading-5 text-black underline',
          ],
        ],
        //#endregion  //*======== Element ===========
        //#region  //*=========== Variants ===========
        [
          as === 'p' && variant === 'p1' && ['text-sm leading-5 text-gray-300'],
          as === 'p' && variant === 'p2' && ['m-0 text-xs leading-5'],
          as === 'h2' &&
            variant === 'h2a' && [
              'mb-5 font-uberMove text-[45px] font-bold leading-[64px] md:mb-10 md:text-[52px]',
            ],
          as === 'h2' &&
            variant === 'h2b' && [
              'font-uberMove text-[36px] font-bold leading-[44px]',
            ],
          variant === 'h2c' && [
            'text-center font-uberMove text-[36px] font-bold leading-[44px]',
          ],
          variant === 'h1ModalDish' && [
            'font-uberMove text-4xl font-bold leading-10',
          ],
          variant === 'spanModalDishPrice' && [
            'p-0 font-uberMove text-xl font-bold leading-7 no-underline',
          ],
          variant === 'divModalDishDescription' && [
            'pt-2 font-uberMove text-sm font-normal leading-5',
          ],
          variant === 'divModalDishQuantity' && [
            'whitespace-no-wrap pl-2 pr-2 text-center text-base font-normal leading-6',
          ],
          variant === 'divRestaurantTitle' && [
            'w-full overflow-hidden text-ellipsis whitespace-nowrap py-[2px] font-uberMove text-lg font-medium leading-6',
          ],
          variant === 'divRestaurantDetail' && [
            'color-[##6b6b6b] font-uberMoveText text-sm font-normal leading-5',
          ],
          variant === 'spanModalDishAllergy' && [
            'font-uberMoveText text-xs font-normal leading-5 text-[#545454] no-underline',
          ],
          variant == 'spanCategories' && [
            'w-full text-center font-uberMoveText text-sm font-medium leading-4',
          ],
          variant == 'spanTextDot' && [
            'color-[#545454] inline-flex items-center font-uberMoveText text-sm font-normal leading-5',
          ],
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
