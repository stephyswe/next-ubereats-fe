/* eslint-disable @next/next/no-img-element */

import { useRef } from 'react';

import styles from './styles.module.css';

import { Link, Typography } from '@/components';
import { secondTempCategoriesData } from '@/components/pages/client/city/categories.data';

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
  onNextClick: () => void;
  inputRef: any;
  exploreTitle: string;
};

export function Categories({
  data,
  exploreTitle,
}: {
  data: CategoriesProps;
  exploreTitle: string;
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
      <Explore
        onNextClick={onNextClick}
        inputRef={inputRef}
        exploreTitle={exploreTitle}
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
  return (
    <div
      style={{ scrollSnapAlign: 'start' }}
      className='mr-6 block w-full flex-shrink-0 flex-grow-0 basis-full'
    >
      <div className='-mx-3 -mb-6 box-border flex flex-wrap'>
        {data?.map((item: CategoryItemProps) => (
          <CategoryItem key={item.id} {...item} />
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
      {data.map((item: CategoryItemProps) => (
        <CategoryItem key={item.id} {...item} />
      ))}
    </div>
  </div>
);

const Explore = ({ onNextClick, inputRef, exploreTitle }: ExploreProps) => (
  <div className='mb-6 flex items-center justify-between'>
    <Typography as='h2' variant='h2b'>
      {exploreTitle}
    </Typography>
    <div className='flex items-center '>
      <Link
        ref={inputRef}
        className='cursor-pointer text-base font-medium leading-5 text-black underline'
        href='/category/atlanta-ga'
      >
        View all
      </Link>
      <div className='w-10'></div>
      <div className='flex'>
        <button
          aria-label='Previous'
          className={styles.btn_menu + ' ' + styles.btn_menu_prev}
          disabled={true}
        >
          <SvgHorizontalArrow />
        </button>
        <div className='w-1'></div>
        <button
          onClick={onNextClick}
          aria-label='Next'
          className={styles.btn_menu + ' ' + styles.btn_menu_next}
        >
          <SvgHorizontalArrow />
        </button>
      </div>
    </div>
  </div>
);

const CategoryItem = ({ name, coverImg }: CategoryItemProps) => (
  <div className='ml-0 mb-6 box-border block w-[16.6667%] flex-none px-3'>
    <a
      className='relative block h-20 overflow-hidden bg-[rgb(246,240,234)] '
      href='./category/'
    >
      <img
        alt={name}
        src={coverImg ? coverImg : ''}
        aria-hidden='true'
        className='absolute right-0 top-0 h-full'
      />
      <div className='border-box relative w-[60%] min-w-[120px] p-4 text-lg font-medium leading-6 text-black'>
        <div className={styles.category_item_title}>{name}</div>
      </div>
    </a>
  </div>
);
