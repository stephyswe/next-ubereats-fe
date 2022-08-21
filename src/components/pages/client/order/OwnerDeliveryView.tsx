export const OwnerDeliveryView = ({
  data,
  role,
  orderStatus,
  OrderStatus,
  onStatus,
}: any) => {
  const ownerAllow = orderStatus === 'Pending' || orderStatus === 'Cooking';
  const userOwner = role === 'Owner' && ownerAllow;

  const deliveryAllow = orderStatus === 'Cooked' || orderStatus === 'PickedUp';
  const userDelivery = role === 'Delivery' && deliveryAllow;

  let buttonText;
  let orderState: typeof OrderStatus;

  switch (data?.findOrder.order?.status) {
    case 'Pending':
      buttonText = 'Accept Order';
      orderState = OrderStatus.Cooking;
      break;

    case 'Cooking':
      buttonText = 'Order Cooked';
      orderState = OrderStatus.Cooked;
      break;

    case 'Cooked':
      buttonText = 'Picked Up';
      orderState = OrderStatus.PickedUp;
      break;

    case 'PickedUp':
      buttonText = 'Order Delivered';
      orderState = OrderStatus.Delivered;
  }

  return (
    <>
      {userOwner && (
        <>
          <button onClick={() => onStatus(orderState)} className='border'>
            {buttonText}
          </button>
        </>
      )}
      {userDelivery && (
        <>
          <button onClick={() => onStatus(orderState)} className='btn'>
            {buttonText}
          </button>
        </>
      )}
    </>
  );
};
