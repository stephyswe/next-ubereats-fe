import clsx from 'clsx';
import React, { Fragment, useEffect, useRef, useState } from 'react';

import { Button } from '@/components';

import { useOrders } from '@/contexts';
import { Spacer, SpacerItem } from '@/ui';
import { AccordionItem } from '@/ui/accordion/item';
import { onClick } from '@/ui/accordion/utils';
import { SvgDropdown } from '@/ui/icons';

import { AccordionProps, AccordionTopProps } from './types';

export const Accordion = ({ data, dishId }: AccordionProps) => {
  const { name, choices } = data;
  const { setOrderItem } = useOrders();
  const [isOpened, setOpened] = useState<boolean>(false);
  const [height, setHeight] = useState<string>('0px');
  const contentRef = useRef<HTMLDivElement>(null);
  const [isActive, setActive] = useState<string>('');

  useEffect(() => {
    onToggle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onToggle = () => {
    setOpened(!isOpened);
    setHeight(!isOpened ? `${contentRef?.current?.['scrollHeight']}px` : '0px');
  };

  const handleClick = (title: string) => {
    onClick(title, choices, setOrderItem, setActive, isActive, dishId, name);
  };

  return (
    <div>
      <AccordionTop name={name} onToggle={onToggle} isOpened={isOpened} />
      <div
        ref={contentRef}
        style={{ height: height }}
        className={clsx(isOpened ? 'p-[24px_16px]' : 'opacity-0', '')}
      >
        <form>{checkRender(choices, dishId, handleClick, isActive, name)}</form>
      </div>
    </div>
  );
};

function checkRender(
  choices: AccordionProps['data']['choices'],
  dishId: number,
  onClick: (title: string) => void,
  isActive: string,
  name: string
) {
  if (choices) {
    return (
      <>
        {choices.map((choice: { name: string }, index: number) => (
          <Fragment key={index}>
            <AccordionItem
              title={choice.name}
              dishId={dishId}
              onClick={onClick}
              isActive={choice.name === isActive}
            />
            <SpacerItem index={index} length={choices.length}>
              <Spacer className='mt-6' />
            </SpacerItem>
          </Fragment>
        ))}
      </>
    );
  } else {
    return (
      <AccordionItem
        type='checkbox'
        title={name}
        onClick={onClick}
        isActive={name === isActive}
      />
    );
  }
}

export const AccordionTop = ({
  name,
  onToggle,
  isOpened,
}: AccordionTopProps) => (
  <div className='flex flex-row items-center justify-between bg-[#f6f6f6] p-4'>
    <div className='flex flex-col'>
      <div className='text-lg font-medium leading-6'>Choose {name}</div>
      <div className='text-sm font-normal text-[#545454]'>
        <span>{name === 'Pickle' ? 'Choose up to 1' : 'Required'}</span>
      </div>
    </div>
    <div className='flex flex-row'>
      <Spacer className='w-2' />
      <Button
        aria-label='ui-accordion-btn-close'
        onClick={onToggle}
        className='flex h-[30px] w-[30px] items-center justify-center rounded-[50%] border-[1px] border-solid border-[#e2e2e2] bg-white'
      >
        <div className='h-6 w-6 leading-[1px]'>
          <SvgDropdown rotate={isOpened ? true : false} />
        </div>
      </Button>
    </div>
  </div>
);
