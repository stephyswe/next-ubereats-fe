import { useRouter } from 'next/router';

import {
  useCreateOrderMutation,
  useFindRestaurantQuery,
} from '@/__generated__/graphql';
import { storeData } from '@/constant/pages/client/store.data';
import { useDelivery, useOrders } from '@/contexts';
import { dishData } from '@/pages/client/store/[label]/data';
import {
  AsideList,
  Container,
  DishList,
  HeroSmall,
  Spacer,
  StoreDetail,
  StoreToggler,
} from '@/ui';

export { getServerSideProps } from '@/constant/server/store.server';

export default function StorePage() {
  const { image, detail } = storeData;
  const { setComplete } = useDelivery();
  const { orderItems, setOrderItems } = useOrders();
  const router = useRouter();
  const { loading } = useFindRestaurantQuery({
    variables: { input: { restaurantId: 1 } },
    onCompleted: () => {
      setComplete(true);
    },
  });

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

  const triggerCancelOrder = () => setOrderItems([]);

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

  if (loading) return <div>Loading</div>;

  //const newData = groupBy(data?.findRestaurant.results?.menu, 'type');

  return (
    <main className='block'>
      <Container wide>
        <HeroSmall image={image} overlay={false} />
      </Container>
      <Container>
        <div className='pt-3 md:pt-6'>
          <StoreDetail data={detail} />
          <div className='relative ml-auto hidden h-[48px] w-[438px] md:block'>
            <StoreToggler />
          </div>
        </div>
      </Container>
      <Container>
        <div className='flex'>
          <AsideList data={dishData} />
          <Spacer className='md:w-10' />
          <div className='w-full'>
            <Orders confirm={triggerConfirmOrder} cancel={triggerCancelOrder} />
            <ul className='m-0 mt-[24px] block p-0'>
              {Object.entries(dishData).map(([key, value]) => (
                <DishList key={key} groupKey={key} data={value} />
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </main>
  );
}

function Orders({ confirm, cancel }: { confirm: any; cancel: any }) {
  return (
    <div className='hidden items-center md:flex'>
      <button onClick={confirm} className='mr-3 border bg-green-500'>
        Confirm Order
      </button>
      <button onClick={cancel} className='border bg-red-200'>
        Cancel Order
      </button>
    </div>
  );
}
