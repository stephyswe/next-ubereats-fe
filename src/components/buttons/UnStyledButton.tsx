import * as React from 'react';
import { ImSpinner2 } from 'react-icons/im';

import clsxm from '@/lib/clsxm';

export enum ButtonVariant {
  'btnCart',
  'btnDish',
  'btnLg1',
  'btnLg2',
  'btnLg3,',
  'btnBase1',
  'btnBase2',
  'btnSmall1',
  'btnSmall2',
}

type ButtonProps = {
  isLoading?: boolean;
  isDarkBg?: boolean;
  variant?: keyof typeof ButtonVariant;
  size?: 'small' | 'md' | 'lg' | 'base';
} & React.ComponentPropsWithRef<'button'>;

export const UnStyledButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
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
          //#region  //*=========== Sizes ===========
          // navCart -- TODO FIX THIS
          [
            variant === 'btnCart' &&
              size === 'small' && ['m-0 p-[8px_12px] md:h-[36px]'],
            variant === 'btnCart' &&
              size === 'lg' && [
                'px-6 py-3',
                'text-lg',
                'font-medium',
                'leading-8',
              ],
            variant !== 'btnCart' &&
              size === 'lg' && ['text-lg font-medium leading-6'],
            size === 'base' && ['text-base leading-5'],
            variant !== 'btnCart' &&
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
              'text-white hover:bg-[#333]',
              'w-full bg-black pt-4 pb-4 ',
              'transition-colors duration-200',
            ],
            variant === 'btnLg3' && [
              'text-white',
              'bg-black hover:bg-gray-100 active:bg-gray-200',
              'box-border flex h-14 min-h-[56px] cursor-pointer items-center justify-center rounded-[8px] px-4 py-3 md:w-max',
            ],
            // ** Base - 16 px **
            variant === 'btnBase1' && [
              'text-white',
              'bg-black hover:bg-gray-100 disabled:bg-gray-300',
              'm-0 flex items-center rounded-[38px] border-none px-4 py-[14px] outline-none transition-btn-200',
            ],
            variant === 'btnBase2' && [
              'font-medium',
              'whitespace-no-wrap mb-6 overflow-hidden text-ellipsis text-center',
            ],
            // ** Small - 14 px **
            variant === 'btnSmall1' && [
              'bg-[#eee]',
              'relative flex cursor-pointer items-center whitespace-nowrap rounded-[500px] py-2 px-3 transition-width-easeInout-150',
            ],
            variant === 'btnSmall2' && [
              'box-shadow-rgb-button flex h-10 cursor-pointer items-center justify-center whitespace-nowrap rounded-[500px] bg-white px-3 transition-all-300',
            ],
            // ** No Size **
            variant === 'btnDish' && [
              'bg-white active:bg-gray-50',
              'absolute left-2 top-2 z-10 box-border flex h-12 w-12 cursor-pointer items-center justify-center rounded-[50%]',
            ],
            variant === 'btnCart' && [
              'text-white',
              'bg-black hover:bg-gray-100 active:bg-gray-400',
              'flex flex-row items-center px-4 py-2 ',
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
