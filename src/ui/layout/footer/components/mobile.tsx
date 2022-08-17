/* eslint-disable @next/next/no-img-element */

import { NextImage } from '@/components';

import { Spacer } from '@/ui';

export const FooterMobileList = () => (
  <div className='flex flex-[2_1] flex-col items-start justify-between'>
    <NextImage
      alt='Uber&nbsp;Eats'
      src='/images/logo.svg'
      width='146'
      height='24'
      className='mb-12 h-6 w-auto'
    />

    <div className='flex'>
      <a href='https://apps.apple.com/us/app/uber-eats-food-delivery/id1058959277'>
        <img
          alt='Ladda ner i App Store'
          src='/images/footer/appstore.svg'
          className='h-10'
        />
      </a>

      <Spacer className='w-4' />

      <a href='https://play.google.com/store/apps/details?id=com.ubercab.eats'>
        <img
          alt='Skaffa den på Google Play'
          src='/images/footer/googlestore.png'
          className='h-10'
        />
      </a>
    </div>
  </div>
);
