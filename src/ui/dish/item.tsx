import clsx from 'clsx';
import { useRef, useState } from 'react';
import Modal from 'react-modal';

import { useOnClickOutside } from '@/hooks/useOutsideDiv';
import { useWindowSizeJs } from '@/hooks/useWindowSizeJs';

import { Typography } from '@/components';
import { ButtonIcon } from '@/components/buttons/ButtonIcon';

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

export const homeModalStyles = {
  content: {
    Position: 'inherit',
    inset: 'inherit',
    overflow: 'inherit',
    border: 'inherit',
    outline: 'inherit',
    borderRadius: 'inherit',
    background: 'unset',
    minHeight: '100vh',
    justifyContent: 'flex-start',
    margin: '0 auto',
    alignItems: 'center',
    display: 'flex',
    FlexDirection: 'column',
    padding: 'inherit',
  },
};

export const DishItem = ({ data }: any) => {
  const { photo, name, price, id } = data;
  const { setOrderItem } = useOrders();
  const [modalIsOpen, setIsOpen] = useState(false);
  const { isMobile } = useWindowSizeJs();
  function openModal() {
    setIsOpen(true);
    setOrderItem({ dishId: id, price, name, options: [] });
  }

  function closeModal(type: string) {
    if (isMobile && type === 'hook') return;
    setIsOpen(false);
  }
  const ref = useRef(null);
  useOnClickOutside(ref, () => closeModal('hook'));

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

            <DishItemPlusQuick id={id} price={price} name={name} />
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
        <Spacer className='md:pt-20' />
        <div
          ref={ref}
          role='dialog'
          className='relative m-auto bg-white sm:h-full sm:w-full '
        >
          <div className='relative top-0 z-40'></div>
          <div></div>
          <ModalHeader closeModal={closeModal} checkPhoto={data.photo} />
          <DishModal {...data} closeModal={closeModal} />
        </div>
        <Spacer className='md:pb-20' />
      </Modal>
    </>
  );
};

export const DishItemPlusQuick = ({
  id,
  price,
  name,
}: {
  id: number;
  price: number;
  name: string;
}) => {
  const { setOrderItems } = useOrders();

  function onClickBuy() {
    setOrderItems((orderItems: any) => {
      const otherItems = orderItems.filter((item: any) => item.dishId !== id);
      return [{ dishId: id, price, name, options: [] }, ...otherItems];
    });
  }

  return (
    <div className='absolute top-2 right-2'>
      <ButtonIcon
        iconVariant='iconPlus'
        onClick={onClickBuy}
        svg={<SvgFoodPlus />}
      />
    </div>
  );
};

export const DishItemDetail = ({ name, price, onClick }: any) => (
  <div onClick={onClick} className='flex flex-1 flex-col pb-2'>
    <Typography as='span' weight='medium' variant='base' leading='5'>
      {name}
    </Typography>
    <Typography as='span' variant='small' leading='5'>
      {price}&nbsp;kr
    </Typography>
  </div>
);

export const DishItemImage = ({ photo, name, onClick }: any) => (
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
