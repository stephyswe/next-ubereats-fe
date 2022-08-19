/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import { useState } from 'react';

import styles from './styles.module.css';

import { Button, NextImage, Typography } from '@/components';
import { ButtonIcon } from '@/components/buttons/ButtonIcon';

import { useOrders } from '@/contexts/order';
import { Spacer } from '@/ui';
import { SvgBuyMinus, SvgBuyPlus, SvgModalClose } from '@/ui/icons';
export function ModalHeader({ closeModal, checkPhoto }: any) {
  return (
    <div
      className={clsx('sticky top-0 z-30 w-full', checkPhoto ? 'h-0' : 'h-12')}
    >
      <div
        className={clsx(
          'absolute flex h-[64px] w-full items-center bg-white opacity-0 transition-height-opacity-300',
          `before:flex-[1_0_48px] before:content-[''] `,
          `after:flex-[1_0_0px] after:content-['']`
        )}
      >
        <div className='whitespace-no-wrap flex-1 overflow-hidden text-ellipsis p-3 text-center text-lg font-medium leading-6 text-black'>
          Cheese Triangles
        </div>
      </div>
      <Button variant='modalDishClose' onClick={closeModal}>
        <div className=' h-[24px] w-[24px]'>
          <SvgModalClose />
        </div>
      </Button>
    </div>
  );
}

export const ModalImage = ({ photo, name }: any) => (
  <div className='relative flex items-center justify-center'>
    <div className='relative flex w-full items-center'>
      <div className='m-0 w-[calc(100%+0px)] flex-none'>
        <div className='relative h-[400px] w-full border-none leading-[0]'>
          <NextImage
            alt={name}
            role='presentation'
            src={photo}
            className='h-full w-full object-cover'
            layout='fill'
          />
        </div>
      </div>
    </div>
  </div>
);

export const ModalAllergy = () => (
  <div className='flex flex-col'>
    <hr className='m-0 h-[2px] border-none bg-[#eee]' />
    <div className='mx-4 mt-6 mb-0 flex flex-col'>
      <Typography as='span' variant='spanModalDishAllergy'>
        För matallergier eller speciella kostbehov, vänligen kontakta
        restaurangen innan du beställer.
      </Typography>

      <Spacer className='h-[24px]' />
    </div>
  </div>
);

export const ModalDetail = ({
  price,
  name,
}: {
  price: number;
  name: string;
}) => (
  <div className='pt-4 pb-6 pl-4 pr-4'>
    <Typography variant='h1ModalDish'>{name}</Typography>
    <Typography as='span' variant='spanModalDishPrice'>
      SEK {price.toFixed(2)}
    </Typography>
    <Typography as='div' variant='divModalDishDescription'>
      6 st krispiga, smakfulla trianglar fyllda med smält ost
    </Typography>
  </div>
);

export function ModalBuy({ closeModal }: any) {
  const { orderItem, setOrderItem, setOrderItems } = useOrders();
  const [buyLoading, setBuyLoading] = useState(false);

  const onClickBuy = () => {
    setBuyLoading(true);
    // activate spinner.
    setTimeout(() => {
      closeModal();
      setOrderItem(undefined);
    }, 2000);

    setOrderItems((orderItems: any) => {
      const otherItems = orderItems.filter(
        (item: any) => item.dishId !== orderItem?.dishId
      );
      return [orderItem, ...otherItems];
    });
  };
  return (
    <div className='sticky bottom-0 flex flex-row items-center justify-between bg-white p-6'>
      <div className='flex flex-col justify-between'>
        <div className='flex items-center justify-center'>
          <ButtonIcon svg={<SvgBuyMinus />} variant='modalDishQuantity' />
          <Typography as='div' variant='divModalDishQuantity'>
            1
          </Typography>
          <ButtonIcon svg={<SvgBuyPlus />} variant='modalDishQuantity' />
        </div>
      </div>
      <Spacer className='w-6' />
      <Button
        variant='modalDishBuy'
        onClick={onClickBuy}
        className={`${buyLoading ? styles.modal_buy_btn__loading : null}`}
      >
        <span className={`${buyLoading ? 'invisible opacity-0' : null}`}>
          Lägg till 1 i beställningen * 115,00 kr
        </span>
      </Button>
    </div>
  );
}
