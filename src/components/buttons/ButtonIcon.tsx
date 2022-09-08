import clsxm from '@/lib/clsxm';

import { ButtonPropsVariantType, UnStyledButton } from './UnStyledButton';

export const iconPropsVariant = ['iconHero', 'iconPlus'] as const;

export type IconPropsVariantType = typeof iconPropsVariant[number];

type ButtonProps<C extends React.ElementType> = {
  iconVariant: IconPropsVariantType;
  variant?: ButtonPropsVariantType;
  svg: JSX.Element;
} & React.ComponentProps<C>;

export const ButtonIcon = <C extends React.ElementType>({
  variant,
  svg,
  iconVariant,
  ...rest
}: ButtonProps<C>) => {
  return (
    <UnStyledButton variant={variant} {...rest}>
      <div
        className={clsxm(
          //#region  //*=========== Variants ===========
          [
            iconVariant === 'iconHero' && [
              'bg-white',
              'h-9 w-9',
              'rounded-[50%]',
              'flex items-center justify-center box-shadow-rgb-btn',
            ],
            iconVariant === 'iconPlus' && [
              'bg-black',
              'h-9 min-h-0 w-full min-w-[36px]',
              'rounded-[500px]',
              'box-border flex items-center justify-center',
              'box-shadow-rgb-btn',
              'border-[1px] border-solid border-[#fff]',
              'hover:bg-gray-100',
            ],
          ],
          //#endregion  //*======== Variants ===========
          'contents'
        )}
      >
        {svg}
      </div>
    </UnStyledButton>
  );
};
