import clsx from 'clsx';
import { Fragment, useState } from 'react';

import clsxm from '@/lib/clsxm';

import { Button } from '@/components';
import {
  SvgDynamic,
  SvgMedal,
  SvgTag,
} from '@/components/pages/client/dining/delivery/icon';

import { Spacer } from '@/ui';
import { SvgDownArrow } from '@/ui/icons';

/**
 * Top Level - Filter Component
 * @returns {JSX.Element}
 * @constructor
 *
 */
export const DeliveryFilter = ({ filterData }: any) => {
  return (
    <div className='sticky top-0 flex max-h-full overflow-y-auto'>
      <div className='max-w-[280px] flex-1'>
        <Spacer className='h-6' />
        <div>
          <Spacer className='h-6' />
          <DeliveryFilterList filterData={filterData} />
        </div>
        <Spacer className='h-6' />
      </div>
      <Spacer className='w-2' />
    </div>
  );
};

export const DeliveryFilterList = ({ filterData }: any) => (
  <div>
    <DeliveryFilterItem title='Sortera' data={filterData.sort} type='radio' />
    <Spacer className='h-4' />
    <DeliveryFilterItem
      title='Från Uber Eats'
      data={filterData.fromUber}
      type='checkbox'
    />
    <Spacer className='h-4' />
    <DeliveryFilterItem
      title='Price Range'
      data={filterData.price}
      type='price'
    />
    <Spacer className='h-4' />
    <DeliveryFilterItemFee
      title='Max Delivery Fee'
      data={filterData.fee}
      type='fee'
    />
    <Spacer className='h-4' />
    <DeliveryFilterItem
      title='Dietary'
      data={filterData.dietary}
      type='price'
    />
  </div>
);

const DeliveryFilterItemFee = ({ title, data, type }: any) => {
  const [IsOpen, setOpen] = useState(true);

  function showContent() {
    if (!IsOpen) return;
    return (
      <div className='p-[12px_0px]'>
        <div className='relative flex h-[66px] w-[calc(100%-8px)] items-stretch justify-center webkit-color-transparent'>
          <DeliveryFilterFee data={data} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <DeliverFilterButton
        title={title}
        type={type}
        onClick={() => setOpen(!IsOpen)}
        IsOpen={IsOpen}
      />
      {showContent()}
    </div>
  );
};

export const DeliveryFilterItem = ({ title, data, type }: any) => {
  const [IsOpen, setOpen] = useState(true);

  function checkItemSelector(item: any, type: any, index: any) {
    if (type === 'checkbox') {
      return <DeliveryFilterCheckbox data={item} />;
    } else if (type === 'radio') {
      return <DeliveryFilterRadio data={item} index={index} />;
    } else if (type === 'price') {
      return <DeliveryFilterPrice data={item} />;
    }
  }

  function checkStyles(type: any) {
    let style = '';
    if (type === 'price') style = '-mx-[6px] -mb-3 flex flex-row flex-wrap';
    else style = 'flex flex-col flex-wrap items-start';
    return clsxm(style);
  }

  function showContent() {
    if (!IsOpen) return;
    return (
      <div className='p-[12px_0px]'>
        <div
          role={type === 'radio' ? 'radiogroup' : undefined}
          className={checkStyles(type) + ' webkit-color-transparent'}
        >
          {data.map((item: any, index: number) => (
            <Fragment key={index}>
              {checkItemSelector(item, type, index)}

              {type === 'checkbox' && <Spacer className='h-[18px]' />}
            </Fragment>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <DeliverFilterButton
        title={title}
        type={type}
        IsOpen={IsOpen}
        onClick={() => setOpen(!IsOpen)}
      />
      {showContent()}
    </div>
  );
};

const DeliveryFilterPrice = ({ data }: any) => (
  <button
    className={clsx(
      'mx-[6px] mb-[12px] rounded-t-[30px] rounded-b-[30px] py-[10px] duration-200 transition-timing-cubic',
      'mt-0 appearance-none justify-center px-3 shadow-none outline-none transition-background',
      'inline-flex cursor-pointer flex-row items-center text-sm font-medium leading-4',
      'bg-[#eee]',
      'hover:bg-[#e2e2e2]'
    )}
  >
    <div className='flex items-center justify-center text-sm font-medium leading-4'>
      {data.icon ? (
        <>
          <SvgDynamic icon={data.icon} />
          <Spacer className='w-2' />
        </>
      ) : null}
      {data.title}
    </div>
  </button>
);

const DeliveryFilterCheckbox = ({ data: { title, icon } }: any) => (
  <label
    data-baseweb='checkbox'
    className='flex w-full cursor-pointer select-none flex-row items-center justify-between'
  >
    <div className='pr-2 align-middle text-base font-medium leading-6'>
      <div className='flex items-center text-sm font-medium leading-4'>
        {icon === 'tag' ? <SvgTag /> : <SvgMedal />}
        <Spacer className='w-4' />
        <span>{title}</span>
      </div>
    </div>
    <div
      className={clsx(
        'mr-1 ml-[6px] mb-[4px] mt-[6px] flex h-[14px] w-10 ',
        'group items-center rounded-t-[7px] rounded-b-[7px] bg-[#e2e2e2]'
      )}
    >
      <div
        className={clsx(
          'h-5 w-5 rounded-t-[50%] rounded-b-[50%] bg-white outline-none',
          'transition-transform-ease-200 box-shadow-checkbox-default',
          'group-hover:box-shadow-checkbox-hover'
        )}
      ></div>
    </div>
    <input
      type='checkbox'
      className='absolute h-0 w-0 overflow-hidden opacity-0'
    />
  </label>
);

const DeliveryFilterRadio = ({ data: { title }, index }: any) => (
  <label
    data-baseweb='radio'
    className='mb-[6px] mt-[6px] flex cursor-pointer flex-row items-center'
  >
    <DeliveryFilterCircle index={index} />
    <input type='radio' className='absolute m-0 h-0 w-0 p-0 clip-rect' />
    <div className='pl-2 align-middle text-base font-medium leading-5'>
      <span className='text-sm font-medium leading-4'>{title}</span>
    </div>
  </label>
);

const DeliverFilterButton = ({ title, type, onClick, IsOpen }: any) => {
  function checkType(typeArt: any) {
    if (typeArt === 'price') {
      return (
        <>
          <div className='flex h-6 w-6 items-center justify-center rounded-[50%] bg-black text-xs font-medium leading-4 text-white'>
            1
          </div>
          <Spacer className='w-2' />
        </>
      );
    }
  }

  return (
    <Button
      className='w-full cursor-pointer text-lg font-medium leading-6'
      onClick={onClick}
    >
      <div className='flex justify-between'>
        <span>{title}</span>
        <div className='flex-1'></div>
        {checkType(type)}
        <div></div>
        <Spacer className='w-2' />
        <div className='h-6 w-6 leading-[1]'>
          <SvgDownArrow rotate={IsOpen ? true : false} />
        </div>
      </div>
    </Button>
  );
};

export const DeliveryFilterFee = ({ data }: any) => (
  <div className='relative flex w-full items-center justify-center'>
    <div
      className={clsx(
        'absolute bottom-0 right-0 left-0 top-0 m-[auto_0px]',
        'flex h-[66px] flex-row items-stretch justify-between'
      )}
    >
      {data.map((item: any, index: number) => (
        <DeliveryFilterFeeItem key={index} item={item} />
      ))}
    </div>
    <input
      type='range'
      max='3'
      className='m-0 flex-grow-[1] appearance-none bg-transparent p-[0px_12px]'
    />
  </div>
);

const DeliveryFilterFeeItem = ({ item }: any) => (
  <div
    className={clsx(
      'flex cursor-pointer flex-col items-center text-sm font-medium leading-4',
      `before:h-[34px] before:flex-grow-[1] before:bg-transparent before:content-['']`,
      'before:box-border before:block before:w-[2px]'
    )}
  >
    {item}
  </div>
);

export const DeliveryFilterCircle = ({ index }: any) => (
  <div
    className={clsx(
      'm-[2px] flex h-5 w-5 flex-shrink-0 align-middle duration-200 ease-[cubic-bezier(0.2,0.8,0.4,1)]',
      'items-center justify-center rounded-t-[50%] rounded-b-[50%] bg-black shadow-none'
    )}
  >
    <div
      className={clsx(
        ' rounded-t-[50%] rounded-b-[50%] bg-white duration-200 ease-[cubic-bezier(0.2,0.8,0.4,1)]',
        index === 0 ? 'h-[6px] w-[6px]' : 'h-[14px] w-[14px]'
      )}
    ></div>
  </div>
);
