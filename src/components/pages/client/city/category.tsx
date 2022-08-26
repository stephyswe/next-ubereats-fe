/* eslint-disable @next/next/no-img-element */

import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useRef } from 'react';

import { useWindowSizeJs } from '@/hooks/useWindowSizeJs';

import { Link, Typography } from '@/components';

import { secondTempCategoriesData } from '@/constant/pages/client/city.data';
import { SvgHorizontalArrow } from '@/ui/icons';

type CategoriesProps = CategoryItemProps[] | null | undefined;

type CategoryItemProps = {
  __typename?: 'Category' | undefined;
  id: number;
  name: string;
  coverImg?: string | null | undefined;
  slug: string;
  countRestaurants: number;
};

type CategorySecondItemProps = {
  id: number;
  name: string;
  coverImg: string;
  slug: string;
  countRestaurants: number;
};

type ExploreProps = {
  onNextClick?: () => void;
  inputRef?: any;
  title: string;
  subtitle?: string;
  link?: boolean;
};

export function CityCategories({
  data,
  title,
}: {
  data: CategoriesProps;
  title: string;
}) {
  const inputRef = useRef<HTMLDivElement>();
  function onNextClick() {
    if (inputRef) {
      inputRef.current?.dispatchEvent(
        new KeyboardEvent('keypress', {
          key: 'Enter',
        })
      );
    }
  }

  return (
    <>
      <CityExplore
        onNextClick={onNextClick}
        inputRef={inputRef}
        title={title}
        link
      />
      <div
        style={{ scrollSnapType: 'x mandatory' }}
        className='scrollbar-none flex overflow-y-hidden overflow-x-scroll'
      >
        <CategoryOne data={data} />
        <CategoryTwo data={secondTempCategoriesData} />
      </div>
    </>
  );
}

const CategoryOne = ({ data }: { data: CategoriesProps }) => {
  const { isMobile } = useWindowSizeJs();
  return (
    <div
      style={{ scrollSnapAlign: 'start' }}
      className='mr-6 block w-full flex-shrink-0 flex-grow-0 basis-full'
    >
      <div className='-mx-3 -mb-6 box-border flex flex-wrap'>
        {data?.slice(0, isMobile ? 4 : 12).map((item: CategoryItemProps) => (
          <CityCategoryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

const CategoryTwo = ({ data }: { data: CategorySecondItemProps[] }) => (
  <div
    style={{ scrollSnapAlign: 'start' }}
    className='mr-6 block w-full flex-shrink-0 flex-grow-0 basis-full'
  >
    <div className='-mx-3 -mb-6 box-border flex flex-wrap'>
      {data.slice(0, 6).map((item: CategoryItemProps) => (
        <CityCategoryItem key={item.id} {...item} />
      ))}
    </div>
  </div>
);

export const CityExplore = ({
  inputRef,
  title,
  subtitle,
  link,
}: ExploreProps) => (
  <div className='mb-6 flex items-center justify-between'>
    <div>
      <Typography as='h2' variant='4xl'>
        {title}
      </Typography>
      <Typography as='div' variant='small' className='text-[#545454]'>
        {subtitle}
      </Typography>
    </div>

    <div className='flex items-center '>
      {link ? (
        <Link
          ref={inputRef}
          className='cursor-pointer text-base font-medium leading-5 text-black underline'
          href='/category/atlanta-ga'
        >
          {subtitle ? 'See all' : 'View all'}
        </Link>
      ) : null}
      <div className='w-10'></div>
      <CityExploreNavigator />
    </div>
  </div>
);

export const CityExploreNavigator = ({ onNextClick }: any) => (
  <div className='flex'>
    <button
      aria-label='Previous'
      className={clsx(
        'box-border flex h-9 min-h-[auto] w-9 cursor-pointer items-center justify-center rounded-[50%] p-0 text-lg font-medium leading-6',
        'disabled:cursor-not-allowed',
        'bg-[#f6f6f6] text-[#afafaf]'
      )}
      disabled={true}
    >
      <SvgHorizontalArrow rotate />
    </button>
    <div className='w-1'></div>
    <button
      onClick={onNextClick}
      aria-label='Next'
      className={clsx(
        'box-border flex h-9 min-h-[auto] w-9 cursor-pointer items-center justify-center rounded-[50%] p-0 text-lg font-medium leading-6',
        'bg-[#eee]'
      )}
    >
      <SvgHorizontalArrow />
    </button>
  </div>
);

const CityCategoryItem = ({ name, coverImg, slug }: CategoryItemProps) => {
  const router = useRouter();
  return (
    <div className='ml-0 mb-6 box-border block w-[50%] flex-none px-3 md:w-[16.6667%]'>
      <a
        className='relative block h-20 overflow-hidden bg-[rgb(246,240,234)] '
        href={`/client/category/${router.query.label}/${slug}`}
      >
        <img
          alt={name}
          src={coverImg ? coverImg : ''}
          aria-hidden='true'
          className='absolute right-0 top-0 h-full'
        />
        <div className='border-box relative w-[60%] min-w-[120px] p-4 text-lg font-medium leading-6 text-black'>
          <div className='overflow-hidden webkit-line-clamp-2 webkit-orient-vertical webkit'>
            {name}
          </div>
        </div>
      </a>
    </div>
  );
};
