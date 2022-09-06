/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import styles from './styles.module.css';

import { Button, NextImage, Typography } from '@/components';
import { ButtonIcon } from '@/components/buttons/ButtonIcon';

import { useOrders } from '@/contexts/order';
import { Spacer } from '@/ui';
import { SvgBuyMinus, SvgBuyPlus } from '@/ui/icons';

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
      <Typography as='span' variant='xs' className='text-gray-400'>
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
    <Typography variant='4xl' className='leading-10'>
      {name}
    </Typography>
    <Typography as='span' variant='xl'>
      SEK {price.toFixed(2)}
    </Typography>
    <Typography as='p' variant='small' font='secondary' className='pt-2'>
      6 st krispiga, smakfulla trianglar fyllda med smält ost
    </Typography>
  </div>
);

export function ModalBuy({ closeModal }: any) {
  const { orderItem, setOrderItem, setOrderItems } = useOrders();
  const [isLoading, setLoading] = useState(false);

  const onClick = () => {
    setLoading(true);
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
      <ModalBuyQuantity />
      <Spacer className='w-6' />
      <ModalBuyButton onClick={onClick} isLoading={isLoading} />
    </div>
  );
}

export const ModalBuyButton = ({ onClick, isLoading }: any) => (
  <Button
    variant='btnLg2'
    size='lg'
    onClick={onClick}
    className={`${isLoading ? styles.modal_buy_btn__loading : null}`}
  >
    <span className={`${isLoading ? 'invisible opacity-0' : null}`}>
      Lägg till 1 i beställningen * 115,00 kr
    </span>
  </Button>
);

export const ModalBuyQuantity = () => {
  return (
    <div className='flex flex-col justify-between'>
      <div className='flex items-center justify-center'>
        <ButtonIcon svg={<SvgBuyMinus />} variant='btnCircle1' />
        <Typography
          as='div'
          variant='base'
          leading='6'
          className='whitespace-no-wrap pl-2 pr-2 text-center'
        >
          1
        </Typography>
        <ButtonIcon svg={<SvgBuyPlus />} variant='btnCircle1' />
      </div>
    </div>
  );
};
