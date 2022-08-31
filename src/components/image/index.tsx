import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

import clsxm from '@/lib/clsxm';

type NextImageProps = {
  useSkeleton?: boolean;
  blurClassName?: string;
  alt: string;
  width?: string | number;
} & (
  | { width: string | number; height: string | number }
  | { layout?: 'fill'; width?: string | number; height?: string | number }
) &
  ImageProps;

/**
 *
 * @description Must set width using `w-` className
 * @param useSkeleton add background with pulse animation, don't use it if image is transparent
 */
export const NextImage = ({
  useSkeleton = false,
  alt = 'NextImageAltText',
  className,
  blurClassName,
  ...rest
}: NextImageProps) => {
  const [status, setStatus] = useState(useSkeleton ? 'loading' : 'complete');

  return (
    <Image
      className={clsxm(
        className,
        status === 'loading' && clsxm('animate-pulse', blurClassName)
      )}
      alt={alt}
      onLoadingComplete={() => setStatus('complete')}
      {...rest}
    />
  );
};
