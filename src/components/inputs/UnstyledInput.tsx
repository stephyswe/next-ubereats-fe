import * as React from 'react';

import clsxm from '@/lib/clsxm';

enum InputVariant {
  'input1',
  'input2',
  'input3',
}

type InputProps<C extends React.ElementType> = {
  variant?: keyof typeof InputVariant;
  name: string;
  register?: (ref: HTMLInputElement) => void;
} & React.ComponentProps<C>;

const getKeyValue =
  <U extends keyof T, T extends object>(key: U) =>
  (obj: T) =>
    obj[key];

interface InputPattern {
  email: string;
}

const inputPattern: { email: string } = {
  email:
    '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/',
};

const getPattern = getKeyValue<keyof InputPattern, InputPattern>('email')(
  inputPattern
);

export const UnstyledInput = <C extends React.ElementType>({
  variant = '',
  children,
  register,
  className,
  placeholder,
  type,
  name,
  ...rest
}: InputProps<C>) => {
  return (
    <input
      type={type}
      {...register(name, {
        required: `${placeholder} is required`,
        pattern: getPattern,
      })}
      required
      placeholder={placeholder}
      {...rest}
      className={clsxm(
        'outline-none focus:ring-0',
        //#region  //*=========== Variants ===========
        [
          variant === 'input1' && [
            'm-0 border-none bg-gray-50 p-0 text-[16px]',
          ],
          variant === 'input2' && ['placeholder-style flex-1'],
          variant === 'input3' && [
            'flex-1 appearance-none bg-[#eeeeee] placeholder:font-medium placeholder:text-[#a7a7a6]',
          ],
        ],
        //#endregion  //*=========== Variants ===========
        className
      )}
    >
      {children}
    </input>
  );
};
