/* eslint-disable @next/next/no-img-element */

import { Logo, Spacer } from '@/ui';

export const FooterMobile = () => (
  <div className='flex flex-[2_1] flex-col items-start md:justify-between'>
    <Logo />

    <div className='mt-12 flex md:mt-0'>
      <a href='placeholder'>
        <img
          alt='Ladda ner i App Store'
          src='/images/footer/appstore.svg'
          className='h-10'
        />
      </a>

      <Spacer className='w-4' />

      <a href='placeholder'>
        <img
          alt='Skaffa den på Google Play'
          src='/images/footer/googlestore.png'
          className='h-10'
        />
      </a>
    </div>
  </div>
);
