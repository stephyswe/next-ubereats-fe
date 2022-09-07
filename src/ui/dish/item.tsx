import clsx from 'clsx';

import { Typography } from '@/components';
import { ButtonIcon } from '@/components/buttons/ButtonIcon';

import { useModal, useOrders } from '@/contexts';
import { SvgFoodPlus } from '@/ui/icons';

export const DishItem = ({ itemType, data }: any) => {
  const { photo, name, price, id } = data;
  const { setOrderItem } = useOrders();
  const { setIsOpen, setModalBody } = useModal();

  function openModal() {
    setIsOpen(true);
    setModalBody(data);
    setOrderItem({ dishId: id, price, name, options: [] });
  }

  function checkType(type: string) {
    switch (type) {
      case 'horz':
        return (
          <DishItemContent {...data} className='col-span-2'>
            <div onClick={openModal} className='flex flex-1 flex-row'>
              <DishItemDetail
                name={name}
                price={price}
                className='h-full pt-1'
              />
              <DishItemImage
                name={name}
                photo={photo}
                className='relative h-[158px] flex-[0_47%] flex-shrink-0'
              />
            </div>
          </DishItemContent>
        );

      case 'default':
        return (
          <DishItemContent {...data} className='col-span-1'>
            <div onClick={openModal}>
              <DishItemImage name={name} photo={photo} className='h-[188px]' />
              <DishItemDetail name={name} price={price} className='pb-2' />
            </div>
          </DishItemContent>
        );

      default:
        return <div>no item type</div>;
    }
  }

  return checkType(itemType);
};

const DishItemContent = ({ className, children, name, price, id }: any) => (
  <li
    className={clsx(
      'min-w-0',
      'hover:-m-2 hover:p-2 hover:transition-bs-ease-300 hover:box-shadow-rgb-store-item',
      className
    )}
  >
    <div className='flex flex-1 cursor-pointer no-underline'>
      <div className='relative flex w-full flex-col overflow-hidden'>
        {children}
        <DishItemPlusQuick id={id} price={price} name={name} />
      </div>
    </div>
  </li>
);

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

export const DishItemDetail = ({ className, name, price }: any) => (
  <div className={clsx('flex flex-1 flex-col', className)}>
    <Typography as='span' weight='medium' variant='base' leading='5'>
      {name}
    </Typography>
    <Typography as='span' variant='small' leading='5'>
      {price}&nbsp;kr
    </Typography>
  </div>
);

export const DishItemImage = ({ className, photo, name }: any) => (
  <div className={clsx('w-full overflow-hidden', className)}>
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
