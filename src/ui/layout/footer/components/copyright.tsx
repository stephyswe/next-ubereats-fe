import { Link } from '@/components';

import { Spacer } from '@/ui';

export const FooterCopyright = () => (
  <div className='flex'>
    <div className='hidden flex-[1_0_36px] md:block'></div>
    <div className='md:flex'>
      <div className='block md:hidden'>
        <CopyrightMobile />
      </div>
      <div className='hidden md:block'>
        <CopyrightDefault />
      </div>
      <Spacer className='hidden w-10 md:block' />
      <div
        dir='ltr'
        className='inline-flex text-sm font-normal leading-5 text-black md:inline-flex'
      >
        © 2022 Uber Technologies Inc.
      </div>
    </div>
  </div>
);

const CopyrightDefault = () => (
  <div className='text-sm font-normal leading-5 text-black'>
    This site is protected by reCAPTCHA and the Google{' '}
    <Link href='placeholder'>Privacy Policy</Link> and{' '}
    <Link variant='linkSmall1' href='placeholder'>
      Terms of Service
    </Link>{' '}
    apply.
  </div>
);

const CopyrightMobile = () => (
  <div className='mb-4 flex flex-col'>
    <div className='text-sm font-normal leading-5 text-black'>
      This site is protected by reCAPTCHA and the Google
    </div>
    <div>
      <Link href='placeholder'>Privacy Policy</Link> and{' '}
      <Link variant='linkSmall1' href='placeholder'>
        Terms of Service
      </Link>{' '}
      apply.
    </div>
  </div>
);
