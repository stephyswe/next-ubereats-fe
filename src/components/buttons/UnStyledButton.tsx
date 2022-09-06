import * as React from 'react';

import clsxm from '@/lib/clsxm';

export const buttonPropsVariant = [
  'btnCart', // 3
  'btnDish',
  'btnCircle1',
  'btnLg2', // 2
  'btnLg3',
  'btnNav',
  'btnSmall1',
  'btnSmall2',
] as const;

export type ButtonPropsVariantType = typeof buttonPropsVariant[number];

export type ButtonSizeProps = 'small' | 'md' | 'lg' | 'base';

type ButtonProps = {
  label?: any;
  isLoading?: boolean;
  isDarkBg?: boolean;
  variant?: ButtonPropsVariantType;
  size?: ButtonSizeProps;
  roundType?: string;
} & React.ComponentPropsWithRef<'button'>;

export const UnStyledButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      roundType,
      children,
      className,
      size = 'md',
      disabled: buttonDisabled,
      isLoading,
      variant = '',

      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        className={clsxm(
          //#region  //*=========== Round ===========
          [
            roundType === 'round1' && ['rounded-[38px]'],
            roundType === 'round2' && ['rounded-[8px]'],
          ],
          //#endregion  //*=========== Round ===========
          //#region  //*=========== Sizes ===========
          [
            size === 'lg' && ['text-lg font-medium leading-6'],
            size === 'base' && ['text-base leading-5'],
            size === 'small' && ['text-sm font-medium leading-4'],
          ],
          //#endregion  //*======== Sizes ===========
          //#region  //*=========== Variants ===========
          [
            variant === 'btnCircle1' && [
              'bg-gray-50',
              'hover:bg-[#e2e2e2]',
              'active:bg-[#e2e2e2]',
              'h-12 w-12',
              'flex items-center justify-center rounded-[50%]',
            ],
            variant === 'btnLg2' && [
              'bg-black text-white ',
              'hover:bg-[#333] disabled:bg-gray-300',
              'px-4 py-[14px]',
              'transition-colors duration-200',
            ],
            variant === 'btnLg3' && [
              'bg-black text-white',
              'hover:bg-gray-100',
              'active:bg-gray-200',
              'px-4 py-3',
              'rounded-[8px]',
              'h-14 min-h-[56px]  md:w-max',
              'box-border',
              'flex items-center justify-center',
            ],
            variant === 'btnSmall1' && [
              'bg-[#eee]',
              'py-2 px-3',
              'rounded-[500px]',
              'transition-width-easeInout-150',
              'relative whitespace-nowrap',
              'flex items-center',
            ],
            variant === 'btnSmall2' && [
              'bg-white',
              'box-shadow-rgb-button h-10',
              'whitespace-nowrap px-3 transition-all-300',
              'rounded-[500px]',
              'flex items-center justify-center',
            ],
            variant === 'btnNav' && [
              'h-9 min-h-[auto] w-9',
              'rounded-[50%]',
              'box-border flex items-center justify-center',
            ],
            variant === 'btnDish' && [
              'bg-white',
              'hover:bg-gray-50',
              'h-12 w-12',
              'rounded-[50%]',
              'absolute left-2 top-2 z-10 box-border',
              'flex items-center justify-center',
            ],
            variant === 'btnCart' && [
              'text-white',
              'hover:bg-gray-100',
              'active:bg-gray-400',
              'flex flex-row items-center',
            ],
          ],
          //#endregion  //*======== Variants ===========
          'disabled:point-events-none disabled:cursor-not-allowed',
          isLoading &&
            'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
          className
        )}
        {...rest}
      >
        {label ? label : children}
      </button>
    );
  }
);
