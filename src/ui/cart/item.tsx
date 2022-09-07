import clsx from 'clsx';

import { Button, Link, Typography } from '@/components';
import { LinkIcon } from '@/components/links/LinkIcon';

import { Spacer } from '@/ui';
import { SvgDownArrow, SvgPersonAdd } from '@/ui/icons';
import { SvgIcon } from '@/ui/icons/icons-new';

type CartWindowsItemsProps = {
  orderItems: any;
  onBuy: () => void;
};

export const CartWindowsItems = ({
  orderItems,
  onBuy,
}: CartWindowsItemsProps) => (
  <div className='p-[0px_24px]'>
    <Spacer className='h-6' />
    <Typography as='div' variant='4xl-normal'>
      McDonalds Avenyn
    </Typography>
    <div className='flex pt-4'>
      <Spacer className='h-6' />
      <LinkIcon
        size='small'
        svg={<SvgPersonAdd />}
        href='placeholder'
        title='Gruppbeställning'
      />
    </div>
    <Spacer className='h-9' />
    <ul>
      {orderItems.map((item: any, index: number) => (
        <CartItem key={index} data={item} />
      ))}
    </ul>
    <Spacer className='h-4' />
    <Spacer className='h-[104px]' />
    <div className='absolute bottom-0 right-0 left-0 p-6 bg-gradient-rgba-cart'>
      <Button variant='btnLg2' size='lg' onClick={onBuy}>
        <span>Gå till kassan</span>
        <span>&nbsp;•&nbsp;</span>
        <span aria-label='Delsumma'>62,00&nbsp;kr</span>
      </Button>
    </div>
  </div>
);

export const CartWindowEmpty = () => (
  <div
    className={clsx(
      'flex flex-col items-center justify-center p-16',
      `before:flex-[1_0_48px] before:content-['']`,
      `after:flex-[1_0_48px] after:content-['']`
    )}
  >
    <SvgIcon size='lg' color='#afafaf' type='cart-window' />
    <div className='mt-4 text-center text-base leading-6'>
      Lägg till objekt från en restaurang eller butik för att öppna en ny
      varukorg
    </div>
  </div>
);

export const CartItem = ({ data }: any) => {
  const { name, price, options } = data;
  return (
    <li className={clsx('cart_li_item flex flex-row')}>
      <div>
        <CartItemSelect />
      </div>
      <Spacer className='w-4' />
      <Link
        href='placeholder'
        className='pointer-events-auto mt-1 flex flex-1 flex-row'
      >
        <div className='grow self-center'>
          <div className='flex flex-row justify-between'>
            <div className='text-base font-medium leading-5'>{name}</div>
            <Spacer className='w-2' />
            <div className='flex-grow-0 text-base font-bold'>
              {price}&nbsp;kr
            </div>
          </div>
          <div className='m-[8px_0px_4px_] text-sm font-bold'>
            Välj alternativ
          </div>

          <ul>
            {options.length > 0 &&
              options.map((option: any, index: any) => (
                <li key={index} className='text-sm font-bold text-[#545454]'>
                  QP Cheese
                </li>
              ))}
          </ul>
        </div>
      </Link>
    </li>
  );
};

const CartItemSelect = () => (
  <div className='relative flex w-full flex-row'>
    <select
      className={clsx(
        'h-9 w-[55px] cursor-pointer appearance-none whitespace-nowrap rounded-[500px] border-none',
        'bg-[#eee] p-[0px_12px_0px_16px] text-sm leading-4 outline-none',
        'font-medium'
      )}
    >
      <option value='1' className='bg-[#eee]'>
        1
      </option>
      <option value='2' className='bg-[#eee]'>
        2
      </option>
    </select>
    <div className='pointer-events-none absolute top-[calc(50%-12px)] right-[8px]'>
      <div className='h-6 w-6 leading-[1px]'>
        <SvgDownArrow />
      </div>
    </div>
  </div>
);
