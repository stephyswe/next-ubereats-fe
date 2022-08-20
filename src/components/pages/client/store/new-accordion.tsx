import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';

import { useOrders } from '@/contexts';
import { Spacer } from '@/ui';
import { SvgDropdown } from '@/ui/icons';

export const AccordionNew = ({ data, dishId }: any) => {
  const { setOrderItem } = useOrders();
  const { name, choices } = data;
  const [isOpened, setOpened] = useState<boolean>(false);
  const [height, setHeight] = useState<string>('0px');
  const contentElement = useRef(null);
  const [isActive, setActive] = useState('');

  useEffect(() => {
    HandleOpening();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const HandleOpening = () => {
    setOpened(!isOpened);
    setHeight(!isOpened ? `${contentElement?.current?.scrollHeight}px` : '0px');
  };

  const handleClick = (title: any) => {
    setActive(title);

    setOrderItem((current: any) => {
      const currentOption = current.options;
      const newOption = currentOption.filter(
        (option: any) => option.name !== name
      );

      const newOrderItem = { ...current };
      newOrderItem.dishId = dishId;
      newOrderItem.options = [...newOption, { name: name, choice: title }];
      return newOrderItem;
    });
  };

  return (
    <div>
      <div className='flex flex-row items-center justify-between bg-[#f6f6f6] p-4'>
        <div className='flex flex-col'>
          <div className='text-lg font-medium leading-6'>Choose {name}</div>
          <div className='text-sm font-normal text-[#545454]'>
            <span>{name === 'Pickle' ? 'Choose up to 1' : 'Required'}</span>
          </div>
        </div>
        <div className='flex flex-row'>
          <Spacer className='w-2' />
          <button
            onClick={HandleOpening}
            className='flex h-[30px] w-[30px] items-center justify-center rounded-[50%] border-[1px] border-solid border-[#e2e2e2] bg-white'
          >
            <div className='h-6 w-6 leading-[1px]'>
              <SvgDropdown rotate={isOpened ? true : false} />
            </div>
          </button>
        </div>
      </div>

      {/* content */}
      <div
        ref={contentElement}
        style={{ height: height }}
        className={clsx(isOpened ? 'p-[24px_16px]' : 'opacity-0', '')}
      >
        <form>
          {choices &&
            choices.map((choice: any, index: any) => (
              <AccordionItemSelect
                key={index}
                title={choice.name}
                dishId={dishId}
                handleClick={handleClick}
                isActive={choice.name === isActive}
              />
            ))}
        </form>
      </div>
    </div>
  );
};

const AccordionItemSelect = ({
  type = 'radio',
  isActive,
  handleClick,
  title,
}: any) => (
  <>
    <input
      type={type}
      className='pointer-events-none absolute opacity-0 outline-none'
      value='0'
    />
    <label
      onClick={() => handleClick(title)}
      className={labelStyles(isActive, type)}
    >
      <Spacer className='w-4' />
      <div className='relative mt-[calc(3px)] flex flex-1 justify-between'>
        <div className='flex flex-1 flex-col justify-center self-start'>
          <div className='flex flex-row'>
            <div className='text-sm font-medium leading-4'>{title}</div>
            <Spacer className='w-2' />
          </div>
        </div>
      </div>
    </label>
    <Spacer className='mt-6' />
  </>
);

function labelStyles(isActive: any, type: any) {
  if (type === 'checkbox') {
    return clsx(
      'box-border flex w-full cursor-pointer flex-row justify-between overflow-hidden text-base font-medium leading-5 transition-bg-ease-100',
      `before:box-border before:flex before:h-[22px] before:w-[22px] before:cursor-pointer before:content-['']`,
      ``,

      isActive
        ? `before:border-[0px] before:bg-[url('/images/store/checkbox-active.svg')] before:content-[''] before:bg-center`
        : 'before:border-[3px] before:border-solid before:border-[#6b6b6b]'
    );
  } else {
    return clsx(
      'box-border flex w-full cursor-pointer flex-row justify-between overflow-hidden text-base font-medium leading-5 transition-bg-ease-100',
      `before:box-border before:flex before:h-[22px] before:w-[22px] before:cursor-pointer before:rounded-[50%] before:content-['']`,

      isActive
        ? 'before:border-[8px] before:border-solid before:border-[#000]'
        : 'before:border-[3px] before:border-solid before:border-[#6b6b6b]'
    );
  }
}

export const AccordionNewSingle = ({ data, dishId }: any) => {
  const { setOrderItem } = useOrders();
  const { name } = data;
  const [isOpened, setOpened] = useState<boolean>(false);
  const [height, setHeight] = useState<string>('0px');
  const contentElement = useRef(null);
  const [isActive, setActive] = useState('');

  useEffect(() => {
    HandleOpening();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const HandleOpening = () => {
    setOpened(!isOpened);
    setHeight(!isOpened ? `${contentElement?.current.scrollHeight}px` : '0px');
  };

  const handleClick = (title: any) => {
    setActive(title === isActive ? '' : title);

    setOrderItem((current: any) => {
      const currentOption = current.options;
      const newOption = currentOption.filter(
        (option: any) => option.name !== name
      );

      const newOrderItem = { ...current };
      newOrderItem.dishId = dishId;
      newOrderItem.options =
        title === isActive ? [...newOption] : [...newOption, { name }];
      return newOrderItem;
    });
  };

  return (
    <div>
      <div className='flex flex-row items-center justify-between bg-[#f6f6f6] p-4'>
        <div className='flex flex-col'>
          <div className='text-lg font-medium leading-6'>Choose {name}</div>
          <div className='text-sm font-normal text-[#545454]'>
            <span>{name === 'Pickle' ? 'Choose up to 1' : 'Required'}</span>
          </div>
        </div>
        <div className='flex flex-row'>
          <Spacer className='w-2' />
          <button
            onClick={HandleOpening}
            className='flex h-[30px] w-[30px] items-center justify-center rounded-[50%] border-[1px] border-solid border-[#e2e2e2] bg-white'
          >
            <div className='h-6 w-6 leading-[1px]'>
              <SvgDropdown rotate={isOpened ? true : false} />
            </div>
          </button>
        </div>
      </div>

      {/* content */}
      <div
        ref={contentElement}
        style={{ height: height }}
        className={clsx(isOpened ? 'p-[24px_16px]' : 'opacity-0', '')}
      >
        <form>
          <AccordionItemSelectCheckbox
            type='checkbox'
            title={name}
            handleClick={handleClick}
            isActive={name === isActive}
          />
        </form>
      </div>
    </div>
  );
};

const AccordionItemSelectCheckbox = ({
  type = 'radio',
  isActive,
  handleClick,
  title,
}: any) => (
  <>
    <input
      type={type}
      className='pointer-events-none absolute opacity-0 outline-none'
      value='0'
    />
    <label
      onClick={() => handleClick(title)}
      className={labelStyles(isActive, type)}
    >
      <Spacer className='w-4' />
      <div className='relative mt-[calc(3px)] flex flex-1 justify-between'>
        <div className='flex flex-1 flex-col justify-center self-start'>
          <div className='flex flex-row'>
            <div className='text-sm font-medium leading-4'>{title}</div>
            <Spacer className='w-2' />
          </div>
        </div>
      </div>
    </label>
    <Spacer className='mt-6' />
  </>
);
