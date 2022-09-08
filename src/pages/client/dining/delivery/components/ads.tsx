/* eslint-disable @next/next/no-img-element */

import clsx from 'clsx';

import { Button, Link } from '@/components';

import { Spacer } from '@/ui';
import { SvgCategoryArrow } from '@/ui/icons';

/**
 * Top Level - Ads Component
 * @returns
 * @constructor
 * @param {Object} props - The props passed to the component
 */
export const DeliveryAdsList = () => (
  <div className='col-span-full min-w-0'>
    <div>
      <div className='-mx-10 p-[24px_40px]'>
        <div className='-mx-3 -mb-6 box-border flex flex-nowrap items-center'>
          <div className='mb-6 ml-0 box-border block w-full flex-none px-3'>
            <div className='relative flex w-full items-center justify-center'>
              <Button className='box-border flex h-9 w-9 items-center justify-center rounded-[50%] bg-[#eee] p-0 text-lg font-medium leading-6 hover:bg-[#e2e2e2] '>
                <SvgCategoryArrow />
              </Button>
              <Spacer className='w-1' />
              <div className='w-full overflow-hidden'>
                <ol className='relative m-[0px_-12px] flex w-full'>
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
                </ol>
              </div>
              <Spacer className='w-1' />
              <Button className='box-border flex h-9 w-9 items-center justify-center rounded-[50%] bg-[#eee] p-0 text-lg font-medium leading-6 hover:bg-[#e2e2e2]'>
                <SvgCategoryArrow rotate />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

interface CommonProps {
  title: string;
  subtitle: string;
  link: string;
  color?: string;
  split?: boolean;
}

type DeliveryAdsItemProps = CommonProps & ConditionalProps;

type ConditionalProps =
  | {
      subImage?: string;
      image?: never;
    }
  | {
      subImage?: never;
      image?: string;
    };

const DeliveryAdsItem = ({
  title,
  subtitle,
  image,
  subImage,
  link,
  color,
  split,
}: DeliveryAdsItemProps) => (
  <li className='m-[0_12px] w-[calc(33.3333%+-16px)] flex-none cursor-pointer'>
    <Link href='placeholder' className='block w-full cursor-pointer'>
      <div
        className={clsx(
          'relative min-h-[136px] w-full cursor-pointer overflow-hidden rounded-[12px] border-[1px] border-solid border-[#e2e2e2]',
          `before:block before:w-full before:pt-[42.5%] before:content-['']`
        )}
      >
        <div
          style={{
            backgroundImage: image ? `url(${image})` : undefined,
          }}
          className={clsx(
            'absolute bottom-0 left-0 top-0 right-0 cursor-pointer bg-cover',
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
  </li>
);

type DeliveryAdsItemSplitProps = Omit<
  DeliveryAdsItemProps,
  'subImage' | 'split'
>;

const DeliveryAdsItemSplit = ({
  title,
  subtitle,
  image,
  link,
  color,
}: DeliveryAdsItemSplitProps) => (
  <div className='absolute bottom-0 left-0 top-0 right-0 flex cursor-pointer bg-[#142328] bg-cover'>
    <div className='box-border flex h-full flex-[1_1_0px] flex-col items-start justify-between p-[12px_16px_16px]'>
      <DeliveryAdsItemText
        title={title}
        subtitle={subtitle}
        color={color}
        link={link}
      />
    </div>
    <div className='relative flex w-[35%] flex-none cursor-pointer justify-center'>
      <img
        alt=''
        role='presentation'
        src={image}
        className='w-full object-cover'
      />
    </div>
  </div>
);

type DeliveryAdsItemTextProps = Omit<DeliveryAdsItemProps, 'image'>;

const DeliveryAdsItemText = ({
  link,
  title,
  subtitle,
  color,
}: DeliveryAdsItemTextProps) => (
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
        'mt-[2px] inline-flex rounded-[500px] font-medium leading-4 md:p-[8px_12px]',
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

const DeliveryBox = ({
  title,
  color,
  small,
}: Omit<DeliveryAdsItemTextProps, 'subtitle' | 'link'> & {
  small?: boolean;
}) => (
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
