/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import { Fragment } from 'react';

import { Button, Link, Typography } from '@/components';
import {
  CategoryRestaurantItem,
  restaurantData,
} from '@/components/pages/client/category/restaurant-list';
import {
  CityExplore,
  CityExploreNavigator,
} from '@/components/pages/client/city/categories';

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
            <DeliveryCategoryList data={categories} />
            <Separator />
            <DeliveryAdsList />
          </div>
        </div>
        <Spacer className='h-6' />
        <div className='-mx-3 -mb-6 box-border flex flex-nowrap'>
          <div className='ml-0 mb-6 box-border block w-[25%] flex-none px-3'>
            A
          </div>
          <div className='ml-0 mb-6 box-border block w-[75%] flex-none px-3'>
            <div>
              <Spacer className='h-12' />
              <div data-test='feed-desktop' className='grid grid-cols-3 gap-6'>
                <DeliveryPageContent
                  title='In a rush?'
                  subtitle='Here’s the fastest delivery for you'
                />
                <DeliveryPageContent title='Only on Uber Eats' />
                <DeliveryPageContentSecondary />
              </div>
            </div>
          </div>
        </div>
        <DeliveryBottomText />
      </div>
    </main>
  );
}

const DeliveryPageContentSecondary = () => (
  <div className='col-span-full min-w-0'>
    <div>
      <div
        style={{
          backgroundImage:
            'url(https://d4p17acsd5wyj.cloudfront.net/eatsfeed/pickup-homefeed-carousel/pickupcarousel_desktopweb.svg)',
        }}
        className='flex min-h-[326px] items-center justify-between'
      >
        <div className='ml-8 flex flex-col items-start'>
          <Spacer className='h-12' />
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
        </div>
        <div className='mr-10 w-full max-w-[668px]'>
          <section>
            <div className='relative mb-6 flex items-center justify-between'>
              <div></div>
              <CityExploreNavigator />
            </div>
            <div
              style={{ scrollSnapType: 'x mandatory' }}
              className='scrollbar-none flex cursor-pointer overflow-x-scroll'
            >
              {restaurantData
                .slice(0, 3)
                .map(({ coverImg, category }: any, index: number) => (
                  <DeliverySecondaryItem
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

const DeliverySecondaryItem = ({ coverImg, category }: any) => (
  <div
    style={{ scrollSnapAlign: 'start' }}
    className='mr-6 flex w-full flex-shrink-0 flex-grow-0 basis-full'
  >
    <DeliverySecondaryInnerItem coverImg={coverImg} category={category} />
    <DeliverySecondaryInnerItem coverImg={coverImg} category={category} />
  </div>
);

const DeliverySecondaryInnerItem = ({ coverImg, category }: any) => (
  <li className='mr-6 block w-[calc(50%+-12px)] flex-none'>
    <div className='max-w-[326px] bg-white p-1 box-shadow-rgb-secondary'>
      <CategoryRestaurantItem coverImg={coverImg} category={category} inner />
    </div>
  </li>
);

const DeliveryBottomText = () => (
  <div className='flex flex-row pt-6'>
    <Link href='placeholder'>
      <span className='text-base'>
        Learn how Uber Eats references and ranks partners offers.{' '}
        <span className='underline'>Learn more</span>
      </span>
    </Link>
  </div>
);

const DeliveryCategoryList = ({ data }: any) => (
  <nav className='flex justify-center'>
    <ul className='flex items-start justify-center'>
      {data.map(({ title, img }: any) => (
        <Fragment key={title}>
          <DeliveryCategoryItem key={title} title={title} img={img} />
          <Spacer className='w-4' />
        </Fragment>
      ))}
    </ul>
  </nav>
);

const DeliveryAdsList = () => (
  <div className='col-span-full min-w-0'>
    <div>
      <div className='-mx-10 p-[24px_40px]'>
        <div className='-mx-3 -mb-6 box-border flex flex-nowrap items-center'>
          <div className='mb-6 ml-0 box-border block w-full flex-none px-3'>
            <div className='flex justify-center'>
              <div className='relative m-[0px_-12px] flex w-full items-center justify-center'>
                <DeliveryAdsItem
                  title='Uberbra erbjudande'
                  subtitle='Hitta dagens bästa besparnning.'
                  link='Beställ nu'
                  image='https://d1g1f25tn8m2e6.cloudfront.net/0242940a-1e66-47a2-882b-b472680a428a.png'
                  color='black'
                />
                <DeliveryAdsItem
                  title='Favoriterna'
                  subtitle='Högsta betyg & alltid grym service.'
                  link='Beställ nu'
                  image='https://d1g1f25tn8m2e6.cloudfront.net/0f2e1076-cc12-4e06-814a-ba110ea6fd9f.png'
                />
                <DeliveryAdsItem
                  split
                  title='Pressbyrån'
                  subtitle='Din vän på vägen.'
                  link='Fri leverans'
                  subImage='https://d1g1f25tn8m2e6.cloudfront.net/87bb13af-943a-4ec4-967f-3ce1b6412374.jpg'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DeliveryPageContent = ({ title, subtitle }: any) => (
  <div className='col-span-full min-w-0'>
    <div>
      <section>
        <CityExplore title={title} subtitle={subtitle} />
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

const DeliveryAdsItem = ({
  title,
  subtitle,
  image,
  subImage,
  link,
  color,
  split,
}: any) => (
  <div className='m-[0_12px] w-[calc(33.3333%+-16px)] flex-none'>
    <Link href='placeholder' className='block w-full'>
      <div
        className={clsx(
          'relative min-h-[136px] w-full overflow-hidden rounded-[12px] border-[1px] border-solid border-[#e2e2e2]',
          `before:block before:w-full before:pt-[42.5%] before:content-['']`
        )}
      >
        <div
          style={{
            backgroundImage: image ? `url(${image})` : undefined,
          }}
          className={clsx(
            'absolute bottom-0 left-0 top-0 right-0 bg-cover',
            !split ? 'bg-[#e2e2e2]' : ''
          )}
        >
          {split ? (
            <DeliveryAdsItemSplit
              title={title}
              subtitle={subtitle}
              color={color}
              link={link}
              image={subImage}
            />
          ) : (
            <div className='absolute box-border flex h-full w-full flex-col items-start justify-between p-3'>
              <DeliveryAdsItemText
                title={title}
                subtitle={subtitle}
                color={color}
                link={link}
              />
            </div>
          )}
        </div>
      </div>
    </Link>
  </div>
);

const DeliveryAdsItemSplit = ({ title, subtitle, image, link, color }: any) => (
  <div className='absolute bottom-0 left-0 top-0 right-0 flex bg-[#142328] bg-cover'>
    <div className='box-border flex h-full flex-[1_1_0px] flex-col items-start justify-between p-[12px_16px_16px]'>
      <DeliveryAdsItemText
        title={title}
        subtitle={subtitle}
        color={color}
        link={link}
      />
    </div>
    <div className='relative flex w-[35%] flex-none justify-center'>
      <img
        alt=''
        role='presentation'
        src={image}
        className='w-full object-cover'
      />
    </div>
  </div>
);

const DeliveryAdsItemText = ({ link, title, subtitle, color }: any) => (
  <>
    <div className='w-[85%]'>
      <div className='font-uberMove text-[calc(36.48px)] leading-[1.3] md:text-[calc(19.456px)]'>
        <DeliveryBox title={title} color={color} />
      </div>
      <div className='mt-[2px] text-xs font-normal leading-5'>
        <DeliveryBox title={subtitle} color={color} small />
      </div>
    </div>
    <div
      className={clsx(
        'mt-[2px] inline-flex rounded-[500px] text-xs font-medium leading-4 md:p-[4px_8px]',
        'p-[8px_12px] text-sm',
        'box-border items-center bg-[#fff]'
      )}
    >
      <span>{link}</span>
      <Spacer className='w-1' />
      <span>→</span>
    </div>
  </>
);

const DeliveryBox = ({ title, color, small }: any) => (
  <div
    style={{
      WebkitLineClamp: 3,
      //webkitBoxOrient: 'vertical',
      display: '-webkit-box',
    }}
    className={clsx(
      'overflow-hidden text-sm font-normal leading-5 ',
      color === 'black' ? 'text-black' : 'text-white',
      small
        ? 'text-sm font-normal leading-5'
        : 'font-uberMove text-[calc(36.68px)] font-bold leading-[1.3] md:text-[1.9vw]'
    )}
  >
    {title}
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
