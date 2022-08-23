/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';

// TODO: Fix A to Link component.
export const DeliveryCoupon = () => (
  <div className='fixed bottom-0 right-0 left-0 z-30 flex justify-center'>
    <div className='relative flex min-w-[1000px] justify-center'>
      <img
        alt=''
        role='presentation'
        src='https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/c3ee015693babf96.svg'
        className='absolute -top-6 right-0 left-0 z-30 m-auto h-12'
      />
      <div className='z-30 overflow-hidden'>
        <a
          href='placeholder'
          className='flex w-[220px] flex-col items-center p-[32px_24px_24px]'
        >
          <div className='text-center text-lg font-medium leading-6 text-white'>
            SEK 150 off
          </div>
          <div className='text-sm text-white'>See offer</div>
        </a>
      </div>
      <div className='absolute top-0 h-[1000px] w-[1000px] rounded-[50%] bg-[#048848] box-shadow-map-12-negative'></div>
      <div className='absolute top-14 left-[336px] cursor-pointer'>
        <div
          className={clsx(
            'h-5 w-5 leading-[1]',
            `after:absolute after:-right-2 after:-left-2 after:-bottom-2 after:-top-2 after:content-['']`
          )}
        >
          <svg
            width='20px'
            height='20px'
            fill='none'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            aria-label='Close'
            role='img'
            focusable='false'
          >
            <path
              d='m19.5831 6.24931-1.8333-1.83329-5.75 5.83328-5.75-5.83328-1.8333 1.83329 5.8333 5.74999-5.8333 5.75 1.8333 1.8333 5.75-5.8333 5.75 5.8333 1.8333-1.8333-5.8333-5.75z'
              fill='#FFFFFF'
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
);
