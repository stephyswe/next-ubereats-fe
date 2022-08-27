import { NextImage } from '@/components';

import { SvgDots, SvgHeart } from '@/ui/icons';

export const BackgroundCover = ({ image }: { image: string }) => (
  <div className='m-[0_auto] box-border min-w-[1024px] max-w-[1920px]'>
    <div className='relative m-0 flex h-40 w-full items-center justify-center bg-gray-600'>
      <figure className='absolute left-0 bottom-0 right-0 top-0 m-0 bg-gray-100 transition-[left_0.3]'>
        <div className='absolute top-0 left-0 h-full w-full overflow-hidden'>
          <NextImage
            alt=''
            role='presentation'
            src={image}
            layout='fill'
            className='block h-full w-full border-none object-cover opacity-100 transition-ease-400'
          />
        </div>
        <div className='absolute bottom-0 right-0 left-0 top-0 bg-black02'></div>
      </figure>
      <div className='absolute right-0 m-[24px_40px] flex gap-2 self-baseline'>
        <button className='pointer-events-auto relative flex cursor-pointer'>
          <div className='flex h-9 w-9 items-center justify-center rounded-[50%] bg-white box-shadow-rgb-btn'>
            <SvgHeart />
          </div>
        </button>
        <div className='relative'>
          <button className='pointer-events-auto relative flex cursor-pointer'>
            <div className='flex h-9 w-9 items-center justify-center rounded-[50%] bg-white box-shadow-rgb-btn'>
              <SvgDots />
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
);
