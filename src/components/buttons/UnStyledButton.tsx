import * as React from 'react';
import { ImSpinner2 } from 'react-icons/im';

import clsxm from '@/lib/clsxm';

enum ButtonVariant {
  'primary',
  'outline',
  'ghost',
  'light',
  'dark',
  'black',
  'blackHome',
  'modalDishBuy',
  'modalDishQuantity',
  'modalDishClose',
  'filter',
  'round',
}

type ButtonProps = {
  isLoading?: boolean;
  isDarkBg?: boolean;
  variant?: keyof typeof ButtonVariant;
} & React.ComponentPropsWithRef<'button'>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = '',
      isDarkBg = false,
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
          //#region  //*=========== Variants ===========
          [
            variant === 'primary' && [
              'bg-primary-500 text-white',
              'border border-primary-600',
              'hover:bg-primary-600 hover:text-white',
              'active:bg-primary-500',
              'disabled:bg-primary-400 disabled:hover:bg-primary-400',
            ],
            variant === 'outline' && [
              'text-primary-500',
              'border border-primary-500',
              'hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100',
              isDarkBg &&
                'hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800',
            ],
            variant === 'ghost' && [
              'text-primary-500',
              'shadow-none',
              'hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100',
              isDarkBg &&
                'hover:bg-gray-900 active:bg-gray-800 disabled:bg-gray-800',
            ],
            variant === 'light' && [
              'bg-white text-dark ',
              'border border-gray-300',
              'hover:bg-gray-100 hover:text-dark',
              'active:bg-white/80 disabled:bg-gray-200',
            ],
            variant === 'black' && [
              'm-0 flex items-center rounded-[38px] border-none px-4 py-[14px] text-base leading-5 text-white outline-none transition-btn-200',
              'bg-black hover:bg-gray-100',
              'disabled:point-events-none disabled:cursor-not-allowed disabled:bg-gray-300',
            ],
            variant === 'blackHome' && [
              'box-border flex h-14 min-h-[56px] cursor-pointer items-center justify-center font-uberMoveText',
              'bg-black px-4 py-3 text-lg font-medium leading-6 text-white md:w-max',
              'rounded-[8px] hover:bg-gray-100 active:bg-gray-200',
            ],
            variant === 'modalDishQuantity' && [
              'box-border flex h-12 min-h-fit w-12 cursor-pointer items-center justify-center rounded-[50%]',
              'bg-gray-50 p-0 font-uberMoveText text-lg font-medium leading-6 text-black hover:bg-[#e2e2e2]',
            ],
            variant === 'modalDishBuy' && [
              'w-full bg-black pt-4 pb-4 text-lg',
              'font-medium leading-6 text-white transition-colors duration-200 hover:bg-[#333]',
            ],
            variant === 'modalDishClose' && [
              'absolute left-2 top-2 z-10 box-border flex h-12 w-12 cursor-pointer items-center justify-center rounded-[50%] bg-white active:bg-gray-50',
            ],
            variant === 'filter' && [
              'relative flex cursor-pointer items-center whitespace-nowrap rounded-[500px] bg-[#eee] py-2 px-3 font-uberMoveText text-sm font-medium leading-4 text-black transition-width-easeInout-150',
            ],
            variant === 'round' && [
              'ox-shadow-rgb-button flex h-10 cursor-pointer items-center justify-center whitespace-nowrap rounded-[500px] bg-white px-3 font-uberMoveText text-sm font-medium leading-4 text-black transition-all-300',
            ],
          ],
          //#endregion  //*======== Variants ===========
          'disabled:cursor-not-allowed',
          isLoading &&
            'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait',
          className
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={clsxm(
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
              {
                'text-white': ['primary', 'dark'].includes(variant),
                'text-black': ['light'].includes(variant),
                'text-primary-500': ['outline', 'ghost'].includes(variant),
              }
            )}
          >
            <ImSpinner2 className='animate-spin' />
          </div>
        )}
        {children}
      </button>
    );
  }
);
