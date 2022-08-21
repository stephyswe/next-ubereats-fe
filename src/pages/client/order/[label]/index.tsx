import { useEffect } from 'react';

import { Typography } from '@/components';
import { OwnerDeliveryView } from '@/components/pages/client/order/OwnerDeliveryView';

import {
  OrderStatus,
  useFindOrderQuery,
  useMeQuery,
  useUpdateOrderMutation,
} from '@/__generated__/graphql';
import { ORDER_SUBSCRIPTION } from '@/gql/subscription/update-order';

export async function getServerSideProps(context: any) {
  return { props: { id: parseInt(context.query.label) } };
}

export default function OrderPage({ id }: any) {
  const { data: userData } = useMeQuery();
  const [editOrderMutation] = useUpdateOrderMutation();
  const { data, subscribeToMore } = useFindOrderQuery({
    variables: { input: { id } },
  });

  const orderStatus = data?.findOrder.order?.status;

  useEffect(() => {
    if (data?.findOrder.ok) {
      subscribeToMore({
        document: ORDER_SUBSCRIPTION,
        variables: { input: { id: id } },
        updateQuery: (
          prev: { findOrder: any },
          { subscriptionData: { data } }: { subscriptionData: { data: any } }
        ) => {
          if (!data) return prev;
          return {
            findOrder: { ...prev.findOrder, order: { ...data.orderUpdates } },
          };
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const onStatus = (newStatus: OrderStatus) => {
    editOrderMutation({
      variables: { input: { id: id, status: newStatus } },
    });
  };

  const OrderComplete = () => (
    <>
      {orderStatus === OrderStatus.Delivered && (
        <span>Thank you for using Nuber Eats</span>
      )}
    </>
  );

  if (!data?.findOrder?.order) return <div>loading</div>;
  const { total, restaurant, customer, driver } = data.findOrder.order;

  return (
    <div className='flex'>
      <div className='mt-10 ml-10 border border-solid'>
        <Typography className='bg-gray-800 text-center text-white'>
          Order #{id}
        </Typography>
        <Typography className='text-center'>total: ${total}</Typography>
        <div className='grid p-3 text-xl'>
          <Typography as='span'>Prepared By: {restaurant?.name}</Typography>
          <Typography as='span'>Deliver To: {customer?.email}</Typography>
          <Typography as='span'>
            Driver: {driver?.email || 'Not yet.'}
          </Typography>
          <Typography as='span'>Status: {orderStatus}</Typography>

          <OwnerDeliveryView
            role={userData?.me.role}
            data={data}
            orderStatus={orderStatus}
            OrderStatus={OrderStatus}
            onStatus={onStatus}
          />

          <OrderComplete />
        </div>
      </div>
    </div>
  );
}
