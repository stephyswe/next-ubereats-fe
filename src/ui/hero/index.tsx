/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';

import { useWindowSize } from '@/hooks/useWindowSize';
import { useWindowSizeJs } from '@/hooks/useWindowSizeJs';

import { Typography } from '@/components';

type HeroProps = {
  title: string;
  image: string;
  children: React.ReactNode;
};

export const Hero = ({ title, image, children }: HeroProps) => {
  const size = useWindowSize();
  const isMobile = size.width && size.width < 768;
  return (
    <div className='relative'>
      <div className='flex h-full overflow-hidden bg-[#f2ca2f]'>
        <div
          style={{
            background: `${
              isMobile
                ? `center / cover no-repeat
                url('images/home/hero-mobile.png')`
                : `center / cover no-repeat
              url(${image})`
            }`,
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

type DynamicHeroProps = {
  background: Array<string>;
  backgroundColor?: string;
  title: string;
  children: React.ReactNode;
};

export const DynamicHero = ({
  backgroundColor,
  background,
  title,
  children,
}: DynamicHeroProps) => {
  const { isMobile } = useWindowSizeJs();
  return (
    <div className='relative box-border md:min-w-[1024px]'>
      <div
        style={{ background: backgroundColor }}
        className='relative z-10 h-[calc(100vh-80px)] w-full bg-[#fa9269]'
      >
        {isMobile ? (
          <>
            {/*  <img
              alt="Hungry? You're in the right place"
              src='/images/city/hero-mobile.svg'
              className='absolute h-full'
            /> */}
          </>
        ) : (
          <>
            <img
              alt="Hungry? You're in the right place"
              src={background[0]}
              className='absolute h-full'
            />
            <img
              alt="Hungry? You're in the right place"
              src={background[1]}
              className='absolute right-0 h-full'
            />
          </>
        )}
      </div>
      <div
        className={clsx(
          'absolute z-20 p-4 sm:top-0 sm:left-0 sm:right-0 sm:bottom-0 sm:m-auto sm:mt-40',
          'md:top-1/2 md:left-1/2 md:translate-y-[-50%] md:translate-x-[-50%]'
        )}
      >
        <Typography
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
