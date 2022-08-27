// Combined Components: default

import clsx from 'clsx';

import { SpacerItem } from '@/ui';

//TODO: rename SpacerItem to SpacingItem.

export const LoadingHome = ({ h, num }: any) => (
  <LoadingStarter>
    <LoadingAnimation />
    <LoadingRow>
      <LoadingItemSquare h='24' w='240px' />
      <LoadingHidden />
    </LoadingRow>
    <LoadingHiddenSpace hSpace='24' />
    <LoadingRowStarter>
      {Array.from({ length: num }, (item, index) => (
        <>
          <LoadingHomeRow h={h} num={num} />
          <SpacerItem length={num} index={index}>
            <LoadingSpacing />
          </SpacerItem>
        </>
      ))}
    </LoadingRowStarter>
  </LoadingStarter>
);

// Item: Initials

export const LoadingAnimation = () => (
  <div className='loading-init loading-init-two' />
);

export const LoadingWithSpace = ({ p, children }: any) => (
  <div
    style={{
      padding: p,
    }}
    className='relative flex overflow-hidden'
  >
    <LoadingStarter>
      <LoadingAnimation />
      <LoadingRow>{children}</LoadingRow>
    </LoadingStarter>
  </div>
);

export const LoadingStarter = ({ children }: any) => (
  <div className='relative overflow-hidden'>{children}</div>
);

export const LoadingRowStarter = ({ children }: any) => (
  <div className='mx-[-12px] mb-[-24px] flex'>{children}</div>
);

// Item: Sizing

const LoadingHomeRow = ({ h, num }: any) => (
  <LoadingStarterRow num={num}>
    <div>
      <LoadingItemSquare h={h} />
      <LoadingRow>
        <div className='flex-1'>
          <LoadingHiddenSpace hSpace='16' />
          <LoadingRow>
            <LoadingItemSquare h='12' w='65%' />
            <LoadingHidden />
          </LoadingRow>
          <LoadingHiddenSpace hSpace='14' />
          <LoadingRow>
            <LoadingItemSquare h='12' w='40%' />
            <LoadingHidden />
          </LoadingRow>
          <LoadingHiddenSpace hSpace='16' />
        </div>
        <LoadingCol>
          <LoadingHiddenSpace hSpace='12' />
          <LoadingCircle area='28' />
          <LoadingHidden />
        </LoadingCol>
      </LoadingRow>
    </div>
  </LoadingStarterRow>
);

// Item: Partials

export const LoadingStarterRow = ({ num, children }: any) => {
  return (
    <div
      style={{
        width: 100 / num + '%',
      }}
      className='mb-6 px-3'
    >
      {children}
    </div>
  );
};

export const LoadingSpacing = () => (
  <div
    className={`relative before:absolute before:top-0 before:bottom-0 before:left-[-12px] before:right-[-12px] before:bg-[#fff] before:content-['']`}
  />
);

export const LoadingRow = ({ children }: any) => (
  <div className='flex'>{children}</div>
);

export const LoadingCol = ({ children }: any) => (
  <div className='flex flex-col'>{children}</div>
);

export const LoadingItemSquare = ({ h, w }: any) => (
  <div
    style={{
      height: h + 'px',
      width: w,
    }}
  />
);

export const LoadingHiddenSpace = ({ hSpace, wSpace }: any) => (
  <div
    style={{ height: hSpace + 'px', width: wSpace + 'px' }}
    className='bg-white'
  />
);

export const LoadingHidden = () => <div className='flex-grow bg-white' />;

export function LoadingInit({ children, w, h }: any) {
  return (
    <div
      style={{ maxWidth: w + 'px' }}
      className='cart_transition relative flex opacity-100'
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

export const LoadingCircle = ({ area }: any) => (
  <div
    style={{
      height: area + 'px',
      width: area + 'px',
    }}
    className='loading-restaurant-item'
  />
);

export const LoadingRoundSmall = ({ w }: any) => (
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

export const LoadingRound = ({ w }: any) => (
  <div className='flex flex-row items-center'>
    <div className='w-6 loading-item-round'></div>
    <div style={{ width: w + 'px' }} className='flex-shrink-0 bg-white'></div>
    <div className='w-6 loading-item-round-finish'></div>
  </div>
);

// above to header.

export const LoadingSquare = ({ w, h }: { w: number; h: number }) => (
  <div
    style={{
      width: w + 'px',
      height: h + 'px',
      backgroundSize: '100vw ' + h + 'px',
    }}
    className='loading-init loading-init-one'
  ></div>
);

// TODO: - NA Loading - Pickup Page - Map Item
/*
export const LoadingPickupMap = () => (
  <div className='relative flex-1'>
    <div className='h-full'></div>
    <div className='absolute right-4 top-4'>
      <MapButton svg={<SvgMapArrow />} />
      <div className='h-3'></div>
      <div className='flex flex-col'>
        <MapButtonSizePlus />

        <hr className='loading_map_btn_hr' />
        <MapButtonSizeMinus />
      </div>
    </div>
    <div className='map_middle'></div>
    <div className='absolute top-4 left-4'>
      <MapButton text='Visa hela kartan' svg={<SvgMapLeftArrow />} />
    </div>
  </div>
); */
