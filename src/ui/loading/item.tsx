import clsx from 'clsx';

import {
  LoadingCircleProps,
  LoadingHiddenSpaceProps,
  LoadingInitProps,
  LoadingRoundSmallProps,
  LoadingRowStarterProps,
  PropsLoadingWidthAndHeightBoth,
} from './types';

export const LoadingRow = ({ children }: LoadingRowStarterProps) => (
  <div className='flex'>{children}</div>
);

export const LoadingCol = ({ children }: LoadingRowStarterProps) => (
  <div className='flex flex-col'>{children}</div>
);

export const LoadingItemSquare = ({ h, w }: PropsLoadingWidthAndHeightBoth) => (
  <div
    style={{
      height: h + 'px',
      width: w,
    }}
  />
);

export const LoadingHiddenSpace = ({
  hSpace,
  wSpace,
}: LoadingHiddenSpaceProps) => (
  <div
    style={{ height: hSpace + 'px', width: wSpace + 'px' }}
    className='bg-white'
  />
);

export const LoadingHidden = () => <div className='flex-grow bg-white' />;

export function LoadingInit({ children, w, h }: LoadingInitProps) {
  return (
    <div
      style={{ maxWidth: w + 'px' }}
      className='relative flex opacity-100 transition-width-opacity-400'
    >
      <div
        style={{ height: h + 'px' }}
        className={clsx(
          'relative m-0 flex cursor-pointer flex-row items-stretch overflow-hidden',
          'whitespace-nowrap rounded-[500px] text-base font-medium',
          'leading-5 loading-init loading-bg-full'
        )}
      >
        {children}
      </div>
    </div>
  );
}

export const LoadingCircle = ({ area }: LoadingCircleProps) => (
  <div
    style={{
      height: area + 'px',
      width: area + 'px',
    }}
    className='loading-restaurant-item'
  />
);

export const LoadingRoundSmall = ({ w }: LoadingRoundSmallProps) => (
  <div style={{ width: w + 'px' }} className='relative h-10 overflow-hidden'>
    <div
      style={{ width: w + 'px' }}
      className={clsx(
        'absolute left-[-20px] top-[-20px] h-10 rounded-[40px]',
        'border-[20px] border-solid border-white loading-border'
      )}
    ></div>
  </div>
);

export const LoadingRound = ({ w }: LoadingRoundSmallProps) => (
  <div className='flex flex-row items-center'>
    <div className='w-6 loading-item-round'></div>
    <div style={{ width: w + 'px' }} className='flex-shrink-0 bg-white'></div>
    <div className='w-6 loading-item-round-finish'></div>
  </div>
);

// above to header.

export const LoadingSquare = ({ w, h }: LoadingWidthAndHeightProps) => (
  <div
    style={{
      width: w + 'px',
      height: h + 'px',
      backgroundSize: '100vw ' + h + 'px',
    }}
    className='loading-init loading-init-one'
  ></div>
);
