import { DeliveryAdsList } from '@/components/pages/client/dining/delivery/ads';
import {
  DeliveryBottomText,
  DeliveryCategoryList,
} from '@/components/pages/client/dining/delivery/category';
import { DeliveryContent } from '@/components/pages/client/dining/delivery/content';
import { DeliveryCoupon } from '@/components/pages/client/dining/delivery/coupon';
import { DeliveryFilter } from '@/components/pages/client/dining/delivery/filter';

import { deliveryData } from '@/constant/pages/client/delivery.data';
import { Container, Separator, Spacer } from '@/ui';

export default function DeliveryModePage({ coupon }: any): JSX.Element {
  const { categories, filterData } = deliveryData;

  if (!categories) return <div>no data</div>;
  return (
    <>
      <main>
        <Container>
          <Spacer className='h-6' />
          <div
            data-test='feed-desktop'
            className='grid grid-cols-3 gap-[40px_24px]'
          >
            <div className='col-span-full min-w-0'>
              <Spacer className='h-6' />
              <DeliveryCategoryList data={categories} />
              <Separator />
              <DeliveryAdsList />
            </div>
          </div>
          <Spacer className='h-6' />
          <div className='-mx-3 -mb-6 box-border flex flex-nowrap'>
            <div className='ml-0 mb-6 box-border block w-[25%] flex-none px-3'>
              <DeliveryFilter filterData={filterData} />
            </div>
            <DeliveryContent />
          </div>
          <DeliveryBottomText />
        </Container>
      </main>
      {coupon ? <DeliveryCoupon /> : null}
    </>
  );
}
