/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import React from 'react';

import { useWindowSizeJs } from '@/hooks/useWindowSizeJs';

import { NextImage, Typography } from '@/components';
import { ButtonIcon } from '@/components/buttons/ButtonIcon';
import { ImageText } from '@/components/image/ImageText';

import { SvgDots, SvgHeart } from '@/ui/icons';

type HeroProps = {
  title: string;
  background: {
    color: string;
    desktop: string | string[];
    mobile: string;
    alt?: string;
  };
  children: React.ReactNode;
};

export const HeroSmall = ({
  image,
  overlay,
}: {
  overlay: boolean;
  image: string;
}) => (
  <div className='relative m-0 flex h-40 w-full items-center justify-center bg-gray-600'>
    <figure className='absolute left-0 bottom-0 right-0 top-0 m-0 bg-gray-100 transition-[left_0.3]'>
      <NextImage
        alt=''
        role='presentation'
        src={image}
        layout='fill'
        variant='imageFill'
      />

      <HeroOverlay overlay={overlay}>
        <ImageText
          size={15}
          image='/images/store/restaurant_not_accepting.png'
          className='mt-1 text-white'
          title='Currently unavailable'
          titleProps={{ as: 'div', variant: 'small', weight: 'medium' }}
          variant='iconHero'
        />
      </HeroOverlay>
    </figure>
    <div className='absolute right-0 m-[24px_40px] flex gap-2 self-baseline'>
      <ButtonIcon iconVariant='iconHero' svg={<SvgHeart />} />
      <div className='relative'>
        <ButtonIcon iconVariant='iconHero' svg={<SvgDots />} />
      </div>
    </div>
  </div>
);

export const HeroOverlay = ({
  overlay,
  children,
}: {
  overlay: boolean;
  children: React.ReactNode;
}) => {
  if (!overlay) return <div></div>;
  return (
    <div className='absolute bottom-0 right-0 left-0 top-0 flex items-center justify-center bg-gray08'>
      {children}
    </div>
  );
};

export const Hero = ({ title, background, children }: HeroProps) => {
  const { color, desktop, mobile } = background;
  const { isMobile } = useWindowSizeJs();

  return (
    <div data-testid='ui-hero' className='relative'>
      <div
        style={{
          background: color,
        }}
        className='flex h-full overflow-hidden'
      >
        <div
          data-testid='hero-background'
          style={{
            background: `${`center / cover no-repeat
                url(${isMobile ? mobile : desktop})`}`,
          }}
          className='flex h-screen w-screen overflow-hidden'
        ></div>
      </div>
      <div className='absolute top-0 bottom-0 left-0 right-0 mt-36 flex text-black md:mt-0 md:items-center'>
        <div className='box-border w-full px-4 md:m-auto md:min-w-[1024px] md:px-10'>
          <Typography as='h2' variant='5xl'>
            {title}
          </Typography>
          {children}
        </div>
      </div>
    </div>
  );
};

export const HeroDynamic = ({ background, title, children }: HeroProps) => {
  const { color, desktop, mobile, alt } = background;
  const { isMobile } = useWindowSizeJs();
  return (
    <div
      data-testid='ui-hero-dynamic'
      className='relative box-border md:min-w-[1024px]'
    >
      <div
        style={{ background: color }}
        className='relative z-10 h-[calc(100vh-80px)] w-full'
      >
        {isMobile ? (
          <>
            <img alt={alt} src={mobile} className='absolute bottom-0' />
          </>
        ) : (
          <>
            <img alt={alt} src={desktop[0]} className='absolute h-full' />
            <img
              alt={alt}
              src={desktop[1]}
              className='absolute right-0 h-full'
            />
          </>
        )}
      </div>
      <div
        className={clsx(
          'absolute z-20 p-4 sm:top-0 sm:left-0 sm:right-0 sm:bottom-0 sm:m-auto sm:mt-[180px]',
          'md:top-1/2 md:left-1/2 md:translate-y-[-50%] md:translate-x-[-50%]'
        )}
      >
        <Typography
          data-testid='hero-dynamic-title'
          as='h2'
          variant='4xl'
          className='sm:mb-[24px] md:mb-[44px] md:text-center'
        >
          {title}
        </Typography>
        <div className='flex flex-col md:flex-row md:items-center md:justify-center'>
          {children}
        </div>
      </div>
    </div>
  );
};
