import { Button } from '@/components';
import {
  CategoryRestaurantItem,
  restaurantData,
} from '@/components/pages/client/category/restaurant-list';
import Typography from '@/components/typography';

import { Headline, HeadlineNavigate, Spacer } from '@/ui';

/**
 * Top-level - Content Component
 * @returns The content of the page
 * @constructor
 * @param {Object} props - The props passed to the component
 */
export const DeliveryContentList = () => (
  <div className='ml-0 mb-6 box-border block w-[75%] flex-none px-3'>
    <div>
      <Spacer className='h-12' />
      <div data-test='feed-desktop' className='grid grid-cols-3 gap-6'>
        <DeliveryContentItem
          title='In a rush?'
          subtitle='Here’s the fastest delivery for you'
        />
        <DeliveryContentItem title='Only on Uber Eats' />
        <DeliveryContentSection
          content={
            <>
              <Typography as='h2' variant='4xl'>
                Pick it up for free
              </Typography>
              <Typography as='div' variant='small' className='text-[#545454]'>
                Skip the fees when you order pickup
              </Typography>
              <Spacer className='h-4' />
              <Button variant='btnCart' size='small' round>
                See map
              </Button>
            </>
          }
          image='https://d4p17acsd5wyj.cloudfront.net/eatsfeed/pickup-homefeed-carousel/pickupcarousel_desktopweb.svg'
        />
        <DeliveryContentItem title='Popular near you' />
        <DeliveryContentItem
          title='New on Uber Eats'
          subtitle='Be one of the first to support them'
        />
        <DeliveryContentSection
          content={
            <>
              <Typography as='h2' variant='4xl'>
                Free nationwide shipping
              </Typography>
              <Typography as='div' variant='small' className='text-[#545454]'>
                Gourmet eats, shipped free
              </Typography>
            </>
          }
          image='https://d4p17acsd5wyj.cloudfront.net/eatsfeed/shipment/shipment_carousel_background_image_desktop_web.svg'
        />
        {restaurantData.map(({ coverImg, category }, index) => (
          <div key={index} className='min-w-0'>
            <CategoryRestaurantItem coverImg={coverImg} category={category} />
          </div>
        ))}
      </div>
      <Button
        variant='btnCart'
        className='m-[40px_auto] min-h-[56px] rounded-[8px] p-[12px_16px] text-lg font-medium leading-6'
      >
        Show more
      </Button>
    </div>
  </div>
);

const DeliveryContentItem = ({ title, subtitle }: any) => (
  <div className='col-span-full min-w-0'>
    <div>
      <section>
        <Headline title={title} subtitle={subtitle} />
        <div
          style={{ scrollSnapType: 'x mandatory' }}
          className='scrollbar-none flex overflow-x-scroll'
        >
          <DeliveryRestaurantList />
          <DeliveryRestaurantList />
        </div>
      </section>
    </div>
  </div>
);

const DeliveryRestaurantList = () => (
  <div
    style={{ scrollSnapAlign: 'start' }}
    className='mr-6 flex w-full flex-shrink-0 flex-grow-0 basis-full'
  >
    {restaurantData.map(({ coverImg, category }: any, index: number) => (
      <li key={index} className='mr-6 block w-[calc(25%+-18px)] flex-none'>
        <CategoryRestaurantItem coverImg={coverImg} category={category} />
      </li>
    ))}
  </div>
);

export const DeliveryContentSection = ({ content, image }: any) => (
  <div className='col-span-full min-w-0'>
    <div>
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className='flex min-h-[326px] items-center justify-between'
      >
        <div className='ml-8 flex flex-col items-start'>
          <Spacer className='h-12' />
          {content}
        </div>
        <div className='mr-10 w-full max-w-[668px]'>
          <section>
            <div className='relative mb-6 flex items-center justify-between'>
              <div></div>
              <HeadlineNavigate />
            </div>
            <div
              style={{ scrollSnapType: 'x mandatory' }}
              className='scrollbar-none flex cursor-pointer overflow-x-scroll'
            >
              {restaurantData
                .slice(0, 3)
                .map(({ coverImg, category }: any, index: number) => (
                  <DeliverySectionList
                    key={index}
                    coverImg={coverImg}
                    category={category}
                  />
                ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
);

const DeliverySectionList = ({ coverImg, category }: any) => (
  <div
    style={{ scrollSnapAlign: 'start' }}
    className='mr-6 flex w-full flex-shrink-0 flex-grow-0 basis-full'
  >
    <DeliverySectionItem coverImg={coverImg} category={category} />
    <DeliverySectionItem coverImg={coverImg} category={category} />
  </div>
);

const DeliverySectionItem = ({ coverImg, category }: any) => (
  <li className='mr-6 block w-[calc(50%+-12px)] flex-none'>
    <div className='max-w-[326px] bg-white p-1 box-shadow-rgb-secondary'>
      <CategoryRestaurantItem coverImg={coverImg} category={category} inner />
    </div>
  </li>
);
