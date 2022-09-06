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
  Breadcrumb,
  BreadcrumbItemProps,
  Container,
  HeroSmall,
  StoreDetail,
} from '@/ui';
import { DishList } from '@/ui/dish';

export { getServerSideProps } from '@/constant/server/store.server';

type StorePageProps = {
  breadcrumb: BreadcrumbItemProps[];
};

export default function StorePage({ breadcrumb }: StorePageProps) {
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
      <div>
        <Container>
          <Breadcrumb data={breadcrumb} />
        </Container>
        <Container>
          <HeroSmall image={image} overlay={false} />
        </Container>
        <Container>
          <StoreDetail data={detail} />
        </Container>
        <Container>
          <div className='flex'>
            <AsideList data={dishData} />
            <div className='w-full'>
              <Orders
                confirm={triggerConfirmOrder}
                cancel={triggerCancelOrder}
              />
              <ul className='m-0 mt-[24px] block p-0'>
                {Object.entries(dishData).map(([key, value]) => (
                  <DishList key={key} groupKey={key} data={value} />
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}

function Orders({ confirm, cancel }: { confirm: any; cancel: any }) {
  return (
    <div className='flex items-center'>
      <button onClick={confirm} className='mr-3 border bg-green-500'>
        Confirm Order
      </button>
      <button onClick={cancel} className='border bg-red-200'>
        Cancel Order
      </button>
    </div>
  );
}
