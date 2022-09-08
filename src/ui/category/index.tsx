import clsx from 'clsx';
import { useRouter } from 'next/router';

import { useWindowSizeJs } from '@/hooks/useWindowSizeJs';

//TODO: Fix this type
// eslint-disable-next-line unused-imports/no-unused-vars
type CategoriesProps = CategoryItemSquareProps[] | null | undefined;

export const CategoryList = ({ data }: { data: any }) => {
  const { isMobile } = useWindowSizeJs();
  return (
    <div
      data-testid='ui-category-list'
      className='mr-6 block w-full flex-shrink-0 flex-grow-0 basis-full md:scroll-align-start'
    >
      <div className='-mx-3 -mb-6 box-border flex flex-wrap'>
        {data
          ?.slice(0, isMobile ? 4 : 12)
          .map((item: CategoryItemSquareProps) => (
            <CategorySquareItem key={item.id} {...item} />
          ))}
      </div>
    </div>
  );
};

/* eslint-disable @next/next/no-img-element */
export const CategorySquareItem = ({
  name,
  coverImg,
  slug,
}: CategoryItemSquareProps) => {
  const router = useRouter();
  return (
    <div className='ml-0 mb-6 box-border block w-[50%] p-[0px_6px] md:relative md:w-[16.666666666666668%] md:flex-none md:px-3'>
      <a
        className='relative block h-[65px] bg-[#f6f0ea] md:h-20 md:overflow-hidden '
        href={`/client/category/${router.query.label}/${slug}`}
      >
        <img
          className='absolute right-0 top-0 h-full'
          alt={name}
          src={coverImg ? coverImg : ''}
          aria-hidden='true'
        />
        <div
          className={clsx(
            'relative box-border min-w-[120px] p-4 text-base font-medium leading-6 text-black md:w-[60%] md:text-lg md:leading-6'
          )}
        >
          <div className='overflow-hidden webkit-line-clamp-2 webkit-orient-vertical webkit'>
            {name}
          </div>
        </div>
      </a>
    </div>
  );
};

export type CategoryItemSquareProps = {
  __typename?: 'Category' | undefined;
  id: number;
  name: string;
  coverImg?: string | null | undefined;
  slug: string;
  countRestaurants: number;
};
