import clsx from 'clsx';
import { useRef, useState } from 'react';
import Modal from 'react-modal';

import { useOnClickOutside } from '@/hooks/useOutsideDiv';

import { useOrders } from '@/contexts';
import { Spacer } from '@/ui';
import { SvgFoodPlus } from '@/ui/icons';
import { ModalHeader } from '@/ui/modals';
import { DishModal } from '@/ui/modals/dish';

export const storeModalStyles = {
  content: {
    minHeight: '100vh',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: '0 auto',
    display: 'flex',
    inset: 'inherit',
    overflow: 'inherit',
    border: 'inherit',
    outline: 'inherit',
    borderRadius: 'inherit',
    background: 'unset',
    padding: 'inherit',
  },
};

export const DishItem = ({ item }: any) => {
  const { photo, name, price, id } = item;
  const { setOrderItem } = useOrders();
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
    setOrderItem({ dishId: id, price, name, options: [] });
  }

  function closeModal() {
    setIsOpen(false);
  }
  const ref = useRef(null);
  useOnClickOutside(ref, closeModal);

  return (
    <>
      <li
        className={clsx(
          'col-span-2 min-w-0',
          'hover:-m-2 hover:p-2 hover:transition-bs-ease-300 hover:box-shadow-rgb-store-item'
        )}
      >
        <div className='flex flex-1 cursor-pointer no-underline '>
          <div className='relative flex w-full flex-col flex-nowrap overflow-hidden'>
            <div className='flex flex-1 flex-row'>
              <DishItemDetail name={name} price={price} onClick={openModal} />
              <DishItemImage photo={photo} name={name} onClick={openModal} />
            </div>

            <DishItemPlusQuick {...item} />
          </div>
        </div>
      </li>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={storeModalStyles}
        contentLabel='Example Modal'
        shouldCloseOnOverlayClick={true}
      >
        <Spacer className='pt-20' />
        <div ref={ref} role='dialog' className='relative m-auto bg-white'>
          <div className='relative top-0 z-40'></div>
          <div></div>
          <ModalHeader closeModal={closeModal} checkPhoto={item.photo} />
          <DishModal {...item} closeModal={closeModal} />
        </div>
        <Spacer className='pb-20' />
      </Modal>
    </>
  );
};

function DishItemPlusQuick({
  id,
  price,
  name,
}: {
  id: string;
  price: number;
  name: string;
}) {
  const { setOrderItems } = useOrders();

  function onClickBuy() {
    setOrderItems((orderItems: any) => {
      const otherItems = orderItems.filter((item: any) => item.dishId !== id);
      return [{ dishId: id, price, name, options: [] }, ...otherItems];
    });
  }

  return (
    <div className='absolute top-2 right-2'>
      <button
        onClick={onClickBuy}
        className={clsx(
          'box-border flex h-9 min-h-0 w-full min-w-[36px] cursor-pointer items-center justify-center rounded-[500px] border-[1px] border-solid',
          'border-[#fff] bg-black p-[2px_4px] text-lg font-medium leading-6 text-white box-shadow-rgb-btn',
          'hover:bg-gray-100'
        )}
      >
        <SvgFoodPlus />
      </button>
    </div>
  );
}

const DishItemDetail = ({ name, price, onClick }: any) => (
  <div onClick={onClick} className='flex flex-1 flex-col pb-2'>
    <div className='text-base font-medium leading-5'>
      <span>{name}</span>
    </div>
    <div className='text-sm font-normal leading-5'>
      <span>{price}&nbsp;kr</span>
    </div>
  </div>
);

const DishItemImage = ({ photo, name, onClick }: any) => (
  <div
    onClick={onClick}
    className='relative h-[158px] w-full flex-[0_1_47%] overflow-hidden'
  >
    <div className='relative'>
      {photo ? (
        <picture>
          <img
            alt={name}
            src={photo}
            aria-hidden='true'
            className={clsx(
              'h-[188px] w-full flex-shrink-0 scale-100 object-cover opacity-100 transition-transform-easeInout-500',
              'hover:scale-110 hover:transition-transform-easeInout-500'
            )}
          />
        </picture>
      ) : null}
    </div>
  </div>
);
