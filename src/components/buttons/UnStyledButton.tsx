import * as React from 'react';

import clsxm from '@/lib/clsxm';

export type ButtonPropsVariant =
  | 'btnBase'
  | 'btnCart'
  | 'btnDish'
  | 'btnLg1'
  | 'btnLg2'
  | 'btnLg3'
  | 'btnNav'
  | 'btnSmall1'
  | 'btnSmall2';

export type ButtonSizeProps = 'small' | 'md' | 'lg' | 'base';

type ButtonProps = {
  label?: any;
  isLoading?: boolean;
  isDarkBg?: boolean;
  variant?: ButtonPropsVariant;
  size?: ButtonSizeProps;
  round?: boolean;
} & React.ComponentPropsWithRef<'button'>;

export const UnStyledButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      round,
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
          [round ? 'rounded-500' : ''],
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
            // ** Large - 18 px **
            variant === 'btnLg1' && [
              'bg-gray-50 hover:bg-[#e2e2e2]',
              'box-border flex h-12 min-h-fit w-12 cursor-pointer items-center justify-center rounded-[50%] p-0',
            ],
            variant === 'btnLg2' && [
              'bg-black text-white hover:bg-[#333]',
              'w-full rounded-[8px] py-4',
              'transition-colors duration-200',
            ],
            variant === 'btnLg3' && [
              'text-white',
              'bg-black hover:bg-gray-100 active:bg-gray-200',
              'box-border flex h-14 min-h-[56px] cursor-pointer items-center justify-center rounded-[8px] px-4 py-3 md:w-max',
            ],
            // ** Base - 16 px **
            variant === 'btnBase' && [
              'text-white',
              'bg-black hover:bg-gray-100 disabled:bg-gray-300',
              'm-0 flex items-center rounded-[38px] border-none px-4 py-[14px] outline-none transition-btn-200',
            ],
            // ** Small - 14 px **
            variant === 'btnSmall1' && [
              'bg-[#eee]',
              'relative flex cursor-pointer items-center whitespace-nowrap rounded-[500px] py-2 px-3 transition-width-easeInout-150',
            ],
            variant === 'btnSmall2' && [
              'box-shadow-rgb-button flex h-10 cursor-pointer items-center justify-center',
              'whitespace-nowrap rounded-[500px] bg-white px-3 transition-all-300',
            ],
            variant === 'btnNav' && [
              'box-border flex h-9 min-h-[auto] w-9 items-center justify-center rounded-[50%]',
            ],
            // ** No Size **
            variant === 'btnDish' && [
              'bg-white active:bg-gray-50',
              'absolute left-2 top-2 z-10 box-border flex h-12 w-12 cursor-pointer items-center justify-center rounded-[50%]',
            ],
            variant === 'btnCart' && [
              'text-white',
              'hover:bg-gray-100 active:bg-gray-400',
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
