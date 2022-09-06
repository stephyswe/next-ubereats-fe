import clsxm from '@/lib/clsxm';

import Typography from '@/components/typography';

import { NextImage } from './';

export const iconPropsVariant = ['iconHero'] as const;

export type IconPropsVariantType = typeof iconPropsVariant[number];

type ImageTextProps<C extends React.ElementType> = {
  variant?: IconPropsVariantType;
  className?: string;
  image?: string;
  title?: string;
  size?: Record<number, unknown>;
  titleProps?: string;
} & React.ComponentProps<C>;

export const ImageText = <C extends React.ElementType>({
  titleProps,
  variant,
  title,
  image,
  size,
  ...rest
}: ImageTextProps<C>) => {
  return (
    <div
      className={clsxm(
        //#region  //*=========== Variants ===========
        [
          variant === 'iconHero' && [
            'absolute flex flex-col items-center justify-center',
          ],
        ]
        //#endregion  //*======== Variants ===========
      )}
    >
      <NextImage
        alt=''
        role='presentation'
        src={image}
        width={calcSize(size, 'w')}
        height={calcSize(size, 'h')}
      />
      {title ? (
        <Typography {...titleProps} {...rest}>
          {title}
        </Typography>
      ) : null}
    </div>
  );
};

export function calcSize(size: any, type: string) {
  if (typeof size[0] === 'undefined') return size;
  else if (type === 'w') size = size[0];
  else size = size[1];
  return size;
}
