// Combined Components: default

import { Fragment } from 'react';

import { SpacerItem } from '@/ui';

import {
  LoadingCircle,
  LoadingCol,
  LoadingHidden,
  LoadingHiddenSpace,
  LoadingItemSquare,
  LoadingRow,
} from './item';
import {
  LoadingHomeProps,
  LoadingRowStarterProps,
  LoadingStarterRowProps,
  LoadingWithSpaceProps,
} from './types';

//TODO: rename SpacerItem to SpacingItem.

export const LoadingHome = ({ h, num }: LoadingHomeProps) => (
  <LoadingStarter>
    <LoadingAnimation />
    <LoadingRow>
      <LoadingItemSquare h='24' w='240px' />
      <LoadingHidden />
    </LoadingRow>
    <LoadingHiddenSpace hSpace='24' />
    <LoadingRowStarter>
      {Array.from({ length: num }, (item, index) => (
        <Fragment key={index}>
          <LoadingHomeRow h={h} num={num} />
          <SpacerItem length={num} index={index}>
            <LoadingSpacing />
          </SpacerItem>
        </Fragment>
      ))}
    </LoadingRowStarter>
  </LoadingStarter>
);

// Item: Initials

export const LoadingAnimation = () => (
  <div className='loading-init loading-init-two' />
);

export const LoadingWithSpace = ({ p, children }: LoadingWithSpaceProps) => (
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

export const LoadingStarter = ({ children }: LoadingRowStarterProps) => (
  <div className='relative overflow-hidden'>{children}</div>
);

export const LoadingRowStarter = ({ children }: LoadingRowStarterProps) => (
  <div className='mx-[-12px] mb-[-24px] flex'>{children}</div>
);

// Item: Sizing

const LoadingHomeRow = ({ h, num }: LoadingHomeProps) => (
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

export const LoadingStarterRow = ({
  num,
  children,
}: LoadingStarterRowProps) => {
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
