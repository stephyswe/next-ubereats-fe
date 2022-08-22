/* eslint-disable @next/next/no-img-element */
import { Typography } from '@/components';

type HeroProps = {
  title: string;
  image: string;
  children: React.ReactNode;
};

export const Hero = ({ title, image, children }: HeroProps) => (
  <div className='relative'>
    <div className='flex h-full overflow-hidden bg-[#f2ca2f]'>
      <div
        style={{
          background: `center / cover no-repeat
        url(${image})`,
        }}
        className='flex h-screen w-screen overflow-hidden'
      ></div>
    </div>
    <div className='absolute top-0 bottom-0 left-0 right-0 flex items-center text-black'>
      <div className='m-auto box-border w-full px-4 md:min-w-[1024px] md:px-10'>
        <Typography as='h2' variant='5xl'>
          {title}
        </Typography>
        {children}
      </div>
    </div>
  </div>
);

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
}: DynamicHeroProps) => (
  <div className='relative box-border min-w-[1024px]'>
    <div
      style={{ background: backgroundColor }}
      className='relative z-10 h-[calc(100vh-80px)] bg-[#fa9269]'
    >
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
    </div>
    <div className='absolute top-1/2 left-1/2 z-20 translate-y-[-50%] translate-x-[-50%]'>
      <Typography as='h2' variant='4xl' className='mb-[44px] text-center'>
        {title}
      </Typography>
      <div className='flex items-center justify-center'>{children}</div>
    </div>
  </div>
);
