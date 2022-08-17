import { Link } from '@/components';

type FoodListProps = {
  data:
    | {
        __typename?: 'Restaurant' | undefined;
        id: number;
        name: string;
        coverImg?: string | null | undefined;
        address: string;
        isPromoted: boolean;
        category?:
          | {
              __typename?: 'Category' | undefined;
              name: string;
            }
          | null
          | undefined;
      }[]
    | null
    | undefined;
};

export const FoodList = ({ data }: FoodListProps) => {
  if (!data) return <div>no data found</div>;
  return (
    <>
      {data.map((foodItem: any, index: number) => (
        <li
          className={`${index % 2 === 0 ? 'mr-6' : ''} w-[calc(50%+-12px)]`}
          key={index}
        >
          <FoodItem {...foodItem} />
        </li>
      ))}
    </>
  );
};

const ItemImage = ({ coverImg }: any) => (
  <div className='h-full'>
    <picture>
      <source srcSet={coverImg} />
      <img
        alt=''
        src={coverImg}
        srcSet={coverImg}
        sizes='25vw'
        className='block h-full w-full border-none object-cover'
      />
    </picture>
  </div>
);

type FoodItemProps = {
  id: string;
  name: string;
  category: any;
  coverImg: string;
  price: number;
  description: string;
  tags: any;
  address: string;
};

const FoodItem = ({ id, coverImg, name, category, address }: FoodItemProps) => (
  <Link href={`/restaurants/${id}`}>
    <div className='relative'>
      <div className='flex'>
        <div className='h-[128px] w-[200px]'>
          <ItemImage coverImg={coverImg} />
          <Promote />
        </div>
        <div className='ml-4 w-[calc(100%-216px)]'>
          <ItemTitle name={name} />
          <ItemTags category={category} />
          <div className='h-2'></div>
          <span className='text-sm'>{address}</span>
        </div>
      </div>
    </div>
  </Link>
);

const Promote = () => (
  <div className='absolute top-0 box-border flex w-full justify-between py-3 '>
    <div className='inline-block overflow-hidden text-ellipsis whitespace-nowrap rounded-[0_24px_24px_0] bg-[rgb(5,163,87)] py-1 px-3 text-sm font-medium leading-4 text-[#fff] '>
      Spend $15, Save $3
    </div>
  </div>
);

const ItemTitle = ({ name }: any) => (
  <div className='flex items-center'>
    <div className='w-full overflow-hidden text-ellipsis whitespace-nowrap text-lg font-medium leading-6'>
      {name}
    </div>
    <div
      aria-hidden='true'
      className='flex h-7 flex-[0_0_28px] items-center justify-center rounded-[50%] bg-[#eee] text-xs font-medium'
    >
      3.4
    </div>
  </div>
);

const ItemTags = ({ category }: any) => (
  <div>
    <span className='text-sm'>{category.name}</span>
    <span className='text-sm'>&nbsp;•&nbsp;</span>
  </div>
);
