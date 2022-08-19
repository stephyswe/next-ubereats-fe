import clsx from 'clsx';
import { useState } from 'react';
import Modal from 'react-modal';

import { storeModalStyles } from '@/components/pages/client/store';
import { ModalHeader } from '@/components/pages/client/store/store-modal/items';

import { useOrders } from '@/contexts/order';
import { Spacer } from '@/ui';
import { SvgFoodPlus } from '@/ui/icons';

import { FoodModal } from './store-modal';

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#__next');

type StoreListProps = {
  groupKey: string;
  groupMenu: any;
};

export const StoreList = ({ groupKey, groupMenu }: StoreListProps) => (
  <li className='mt-10 block first-of-type:mt-0'>
    <div className='text-[24px] font-bold leading-[32px] text-black'>
      {groupKey}
    </div>
    <Spacer className='h-[16px]' />
    <Spacer className='h-[24px]' />
    <ul className='grid grid-cols-2 gap-y-[40px] gap-x-[24px] xl:grid-cols-4'>
      {groupMenu[groupKey].map((item: any) => (
        <StoreItem key={item.id} item={item} />
      ))}
    </ul>
  </li>
);

export function StoreItem({ item }: any) {
  const { photo, name, price, id } = item;
  const { setOrderItem } = useOrders();
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
    setOrderItem({ dishId: id, options: [] });
  }

  function closeModal() {
    setIsOpen(false);
  }

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
              <StoreItemDetail name={name} price={price} onClick={openModal} />
              <StoreItemImage photo={photo} name={name} onClick={openModal} />
            </div>

            <FoodItemPlusQuick {...item} />
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
        <div role='dialog' className='relative m-auto bg-white'>
          <div className='relative top-0 z-40'></div>
          <div></div>
          <ModalHeader closeModal={closeModal} checkPhoto={item.photo} />
          <FoodModal {...item} closeModal={closeModal} />
        </div>
        <Spacer className='pb-20' />
      </Modal>
    </>
  );
}

function FoodItemPlusQuick({ id }: { id: string }) {
  const { setOrderItems } = useOrders();

  function onClickBuy() {
    setOrderItems((orderItems: any) => {
      const otherItems = orderItems.filter((item: any) => item.dishId !== id);
      return [{ dishId: id, options: [] }, ...otherItems];
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

const StoreItemDetail = ({ name, price, onClick }: any) => (
  <div onClick={onClick} className='flex flex-1 flex-col pb-2'>
    <div className='text-base font-medium leading-5'>
      <span>{name}</span>
    </div>
    <div className='text-sm font-normal leading-5'>
      <span>{price}&nbsp;kr</span>
    </div>
  </div>
);

const StoreItemImage = ({ photo, name, onClick }: any) => (
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

/* 
function FoodItemPlus(props: any) {
  const { id } = props;
  const { setOrderItems, setOrderItem } = useOrders();
  const [isActive, setActive] = useState(false);
  const [number, setNumber] = useState(0);
  const ref = useRef(null);
  const onClickOutside = () => {
    setActive(false);
  };
  useOnClickOutside(ref, onClickOutside);

  const onClickBuy = () => {
    setActive(true);
    setNumber(number + 1);

    setOrderItems((orderItems: any) => {
      const otherItems = orderItems.filter((item: any) => item.dishId !== id);
      return [{ id, options: [] }, ...otherItems];
    });
    setOrderItem(undefined);
  };

  const onClickRemove = () => {
    setOrderItems((current) => current.filter((dish) => dish.dishId !== id));
    setNumber(number - 1);
  };

  const onClickAdd = () => {
    setNumber(number + 1);
  };

  return (
    <div className='absolute top-2 right-2'>
      {isActive ? (
        <div ref={ref} className={styles.buy_btn_active}>
          <button
            onClick={onClickRemove}
            className={styles.buy_btn_active_switch}
          >
            <SvgBuyBin />
          </button>
          <div className={styles.buy_btn_active_middle}>{number}</div>
          <button onClick={onClickAdd} className={styles.buy_btn_active_switch}>
            +
          </button>
        </div>
      ) : (
        <button onClick={onClickBuy} className={styles.food_btn}>
          <SvgFoodPlus />
        </button>
      )}
    </div>
  );
}
 */
