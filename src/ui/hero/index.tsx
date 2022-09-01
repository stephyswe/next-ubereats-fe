/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';

import { useWindowSizeJs } from '@/hooks/useWindowSizeJs';

import { Typography } from '@/components';

type HeroProps = {
  title: string;
  background: {
    color: string;
    desktop: string | string[];
    mobile: string;
  };
  children: React.ReactNode;
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
  const { color, desktop, mobile } = background;
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
            <img
              alt="Hungry? You're in the right place"
              src={mobile}
              className='absolute bottom-0'
            />
          </>
        ) : (
          <>
            <img
              alt="Hungry? You're in the right place"
              src={desktop[0]}
              className='absolute h-full'
            />
            <img
              alt="Hungry? You're in the right place"
              src={desktop[1]}
              className='absolute right-0 h-full'
            />
          </>
        )}
      </div>
      <div
        className={clsx(
          'absolute z-20 p-4 sm:top-0 sm:left-0 sm:right-0 sm:bottom-0 sm:m-auto sm:mt-72',
          'md:top-1/2 md:left-1/2 md:translate-y-[-50%] md:translate-x-[-50%]'
        )}
      >
        <Typography
          as='h2'
          variant='5xl'
          className='font-medium sm:mb-[24px] md:mb-[44px] md:text-center'
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
