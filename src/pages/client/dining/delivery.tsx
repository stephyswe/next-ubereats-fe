/* eslint-disable @next/next/no-img-element */
import { Link, Typography } from '@/components';

import { deliveryData } from '@/constant/pages/client/pickup.data';
import { Separator, Spacer } from '@/ui';

export default function DeliveryModePage(): JSX.Element {
  const { categories } = deliveryData;

  if (!categories) return <div>no data</div>;
  return (
    <main>
      <div className='m-auto box-border p-[0_40px]'>
        <Spacer className='h-6' />
        <div
          data-test='feed-desktop'
          className='grid grid-cols-3 gap-[40px_24px]'
        >
          <div className='col-span-full min-w-0'>
            <Spacer className='h-6' />
            <nav className='flex justify-center'>
              <ul className='flex items-start justify-center'>
                {categories.map(({ title, img }: any) => (
                  <>
                    <DeliveryCategoryItem key={title} title={title} img={img} />
                    <Spacer className='w-4' />
                  </>
                ))}
              </ul>
            </nav>
            <Separator />
          </div>
          <div className='col-span-full min-w-0'>
            <div>
              <div className='-mx-10 p-[24px_40px]'>
                <div className='-mx-3 -mb-6 box-border flex flex-nowrap items-center'>
                  <div className='mb-6 ml-0 box-border block flex-none px-3'>
                    <div className='flex justify-center'>
                      <div className='relative m-[0px_-12px] flex w-full items-center justify-center'>
                        <DeliveryAdsItem />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Spacer className='h-6' />
        <div className='-mx-3 -mb-6 box-border flex flex-nowrap'></div>
        <div className='flex flex-row pt-6'></div>
      </div>
    </main>
  );
}

const DeliveryAdsItem = () => (
  <div className='w-[calc(33.3333% + -16)] m-[0_12px] flex-none'>
    <Link href='placeholder' className='block w-full'>
      <div className='min-h-[136px] w-full overflow-hidden rounded-[12px] border-[1px] border-solid border-[#e2e2e2]'></div>
    </Link>
  </div>
);

const DeliveryCategoryItem = ({ title, img }: any) => (
  <li>
    <Link
      href='placeholder'
      className='group relative flex min-w-[80px] max-w-fit flex-col items-center '
    >
      <div className='relative h-[60px] w-[60px]'>
        <img
          alt={title}
          role='presentation'
          src={img}
          className='h-full w-full rounded-full group-hover:bg-[#eee]'
        />
      </div>
      <Spacer className='h-2' />
      <Typography
        as='p'
        variant='small'
        weight='medium'
        leading='4'
        className='w-full text-center'
      >
        {title}
      </Typography>
    </Link>
  </li>
);
