import { Link } from '@/components';

export const FooterCopyRight = () => (
  <div className='flex'>
    <div className='hidden flex-[1_0_36px] md:block'></div>
    <div className='md:flex'>
      <div className='block md:hidden'>
        <CopyRightMobile />
      </div>
      <div className='hidden md:block'>
        <CopyRightDefault />
      </div>
      <div className='spacer _40 hidden md:block'></div>
      <div
        dir='ltr'
        className='inline-flex font-uberMoveText text-sm font-normal leading-5 text-black md:inline-flex'
      >
        © 2022 Uber Technologies Inc.
      </div>
    </div>
  </div>
);

const CopyRightDefault = () => (
  <div className='font-uberMoveText text-sm font-normal leading-5 text-black'>
    Denna webbplats skyddas av reCAPTCHA. Googles{' '}
    <Link href='placeholder'>Sekretesspolicy</Link> och{' '}
    <Link variant='footerLink' href='placeholder'>
      Tjänstevillkor
    </Link>{' '}
    tillämpas.
  </div>
);

const CopyRightMobile = () => (
  <div className='mb-4 flex flex-col'>
    <div className='font-uberMoveText text-sm font-normal leading-5 text-black'>
      Denna webbplats skyddas av reCAPTCHA. Googles
    </div>
    <div>
      <Link
        href='placeholder'
        //className='inline-flex font-uberMoveText text-sm font-normal leading-5 text-black md:inline-flex'
      >
        Sekretesspolicy
      </Link>{' '}
      och{' '}
      <Link variant='footerLink' href='placeholder'>
        Tjänstevillkor
      </Link>{' '}
      tillämpas.
    </div>
  </div>
);
