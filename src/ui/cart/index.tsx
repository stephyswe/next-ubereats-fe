import clsx from 'clsx';
import router from 'next/router';
import { useState } from 'react';

import { isTest } from '@/lib/env';

import { Button } from '@/components';
import { ButtonSizeProps } from '@/components/buttons/UnStyledButton';

import { useCreateOrderMutation } from '@/__generated__/graphql';
import { useDelivery, useOrders } from '@/contexts';
import { Spacer } from '@/ui';
import { CartWindow } from '@/ui/cart/list';
import { SvgCart } from '@/ui/icons';
import { LoadingInit, LoadingRound } from '@/ui/loading/item';

export const Cart = ({ size }: { size?: ButtonSizeProps }) => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const { isComplete } = useDelivery();
  const { orderItems } = useOrders();

  const [createOrderMutation, { loading: placingOrder }] =
    useCreateOrderMutation({
      onCompleted(data: any) {
        const {
          createOrder: { orderId },
        } = data;
        if (data.createOrder.ok) {
          router.push(`/client/order/${orderId}`);
        }
      },
    });

  const triggerConfirmOrder = () => {
    if (placingOrder) {
      return;
    }
    if (orderItems.length === 0) {
      alert("Can't place empty order");
      return;
    }

    createOrderMutation({
      variables: { input: { restaurantId: 1, items: orderItems } },
    });
  };

  if (!isComplete && !isTest) {
    return (
      <LoadingInit w='300' h='48'>
        <LoadingRound w='80' />
      </LoadingInit>
    );
  }

  function onClick() {
    setShowCart(!showCart);
  }
  return (
    <>
      <div className='flex flex-grow-0 items-center justify-end'>
        <div className='relative flex max-w-[300px] opacity-100 transition-width-opacity-400'>
          <div className='flex cursor-auto flex-row items-stretch overflow-hidden whitespace-nowrap rounded-[500px] bg-black text-base font-medium leading-5'>
            <ButtonCart onClick={onClick} size={size} orderItems={orderItems} />
          </div>
        </div>
      </div>
      <CartWindow
        onClose={setShowCart}
        show={showCart}
        orderItems={orderItems}
        onBuy={triggerConfirmOrder}
      />
    </>
  );
};

function ButtonCart({
  onClick,
  size,
  orderItems,
}: {
  onClick: () => void;
  size?: ButtonSizeProps;
  orderItems: any[];
}) {
  return (
    <Button
      onClick={onClick}
      variant='btnCart'
      size={size}
      className={clsx(
        size === 'small' ? 'm-0 p-[8px_12px] md:h-[36px]' : '',
        size === 'md' ? 'px-4 py-2' : '',
        size === 'lg' ? 'px-6 py-3 text-lg font-medium leading-8' : ''
      )}
    >
      <SvgCart size={size} />
      <Spacer className='w-2' />
      <div
        className={clsx(
          'hidden md:block',
          size === 'small' ? 'text-sm' : 'text-base'
        )}
      >
        Cart • {orderItems.length}
      </div>
    </Button>
  );
}
