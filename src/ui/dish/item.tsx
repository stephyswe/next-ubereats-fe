import clsx from 'clsx';

import { Typography } from '@/components';
import { ButtonIcon } from '@/components/buttons/ButtonIcon';

import { useModal, useOrders } from '@/contexts';
import { SvgFoodPlus } from '@/ui/icons';

export const DishItem = ({ itemType, data }: any) => {
  const { name, price, id } = data;
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
          <DishItemWrapper
            data={data}
            openModal={openModal}
            className='col-span-2'
            imageClassName='relative flex-[0_37%] flex-shrink-0 md:h-[158px] md:flex-[0_47%]'
          />
        );

      case 'default':
        return (
          <DishItemWrapper
            data={data}
            openModal={openModal}
            className='col-span-1'
            innerClassName='flex-col-reverse'
            detailClassName='order-1'
            imageClassName='md:h-[188px] order-2'
          />
        );

      default:
        return <div>no item type</div>;
    }
  }

  return checkType(itemType);
};

export const DishItemWrapper = ({
  className,
  detailClassName,
  imageClassName,
  innerClassName,
  data: { photo, price, name, id },
  openModal,
}: any) => {
  return (
    <DishItemContent
      name={name}
      price={price}
      id={id}
      className={clsx('', className)}
    >
      <div onClick={openModal} className={clsx('flex', innerClassName)}>
        <DishItemDetail
          name={name}
          price={price}
          className={clsx('h-full pt-1 md:pb-2', detailClassName)}
        />
        <DishItemImage
          name={name}
          photo={photo}
          className={clsx('', imageClassName)}
        />
      </div>
    </DishItemContent>
  );
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
              'w-full flex-shrink-0 scale-100 object-cover opacity-100 transition-transform-easeInout-500 md:h-[188px]',
              'hover:scale-110 hover:transition-transform-easeInout-500'
            )}
          />
        </picture>
      ) : null}
    </div>
  </div>
);
