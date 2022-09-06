import Modal from 'react-modal';

import { Typography } from '@/components';

import { isBrowser, isTest } from '@/constant/env';
import { Spacer } from '@/ui';

import { DishItem } from './item';

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
//if (process.env.NODE_ENV !== 'test') Modal.setAppElement('#__next');

if (isBrowser) {
  if (!isTest && document.querySelector('#root')) {
    Modal.setAppElement('#root');
  } else if (!isTest) {
    Modal.setAppElement('#__next');
  }
}

type StoreListProps = {
  groupKey: string;
  data: any;
};

export const DishList = ({ groupKey, data }: StoreListProps) => (
  <li className='mt-10 block first-of-type:mt-0'>
    <Typography as='div' variant='2xl' id={groupKey}>
      {groupKey}
    </Typography>
    <Spacer className='h-[16px]' />
    <Spacer className='h-[24px]' />
    <ul className='grid grid-cols-2 gap-y-[40px] gap-x-[24px] xl:grid-cols-4'>
      {data.map((item: any) => (
        <DishItem key={item.id} data={item} />
      ))}
    </ul>
  </li>
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
