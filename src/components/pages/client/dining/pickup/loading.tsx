import { LoadingAni, LoadingSpacer, MapButton } from '@/ui';
import { SvgMapArrow, SvgMapLeftArrow } from '@/ui/icons';
import {
  MapButtonSizeMinus,
  MapButtonSizePlus,
} from '@/ui/maps/pickup/elements';

export const LoadingDeliveryCategories = () => (
  <>
    <div>
      <LoadingResRow />
      <div className='h-[80px]'></div>
      <LoadingResRow />
      <div className='h-[80px]'></div>
      <LoadingResRow />
    </div>
  </>
);

export const LoadingDeliveryMap = () => (
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
);

export const LoadingResRow = () => (
  <div className='relative overflow-hidden'>
    <LoadingAni />
    <div className='flex'>
      <LoadingLine />
    </div>
    <LoadingSpacer />
    <div className='mb-[-24px] ml-[-12px] mr-[-12px] box-border flex'>
      <LoadingResItem />
      <div
        className={`relative before:absolute before:top-0 before:bottom-0 before:left-[-12px] before:right-[-12px] before:bg-[#fff] before:content-[''] after:content-['']`}
      ></div>
      <LoadingResItem />
    </div>
  </div>
);

const LoadingLine = () => (
  <>
    <div className='w-[240px]'></div>
    <div className='h-6 flex-shrink-0 flex-grow bg-white '></div>
  </>
);

const LoadingResItem = () => (
  <div className='ml-[0%] mb-6 box-border block w-1/2 flex-none px-3'>
    <div>
      <div className='h-[128px]'></div>
      <div className='item-stretch flex justify-between'>
        <div className='flex-1'>
          <div className='h-4 flex-shrink-0 bg-white'></div>
          <div className='flex'>
            <div className='h-3 w-[65%]'></div>
            <div className='flex-shrink-0 flex-grow bg-white'></div>
          </div>
          <div className='h-[14px] flex-shrink-0 bg-white'></div>
          <div className='flex'>
            <div className='h-3 w-[40%]'></div>
            <div className='flex-shrink-0 flex-grow bg-white'></div>
          </div>
          <div className='h-4 flex-shrink-0 bg-white'></div>
        </div>
        <div className='flex flex-none flex-col'>
          <div className='h-3 flex-shrink-0 bg-white'></div>
          <div className='h-7 w-7 loading-restaurant-item'></div>
          <div className='flex-shrink-0 flex-grow bg-white'></div>
        </div>
      </div>
    </div>
  </div>
);
