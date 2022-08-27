import clsx from 'clsx';
import * as React from 'react';

import { UnstyledInput } from './UnstyledInput';

enum InputVariant {
  'input1',
  'input2',
}

type InputProps<C extends React.ElementType> = {
  variant?: keyof typeof InputVariant;
  svg: JSX.Element;
} & React.ComponentProps<C>;

export const ButtonInput = <C extends React.ElementType>({
  placeholder,
  innerClassName,
  svg,
  ...rest
}: InputProps<C>) => {
  return (
    <div
      className={clsx(
        'px-4 py-2 text-center text-base font-normal leading-6 text-black',
        'relative box-border flex min-w-full border-none bg-white ',
        'transition-bs-ease-300 box-shadow-inset-eee focus-within:box-shadow-rgb-0',
        innerClassName
      )}
    >
      <div className='flex h-6 w-6 flex-shrink-0 items-center py-2 leading-[1]'>
        {svg}
      </div>
      <div className='w-4'></div>
      <UnstyledInput
        variant='input2'
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        register={() => {}}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};
