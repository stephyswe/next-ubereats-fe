import { Link, Typography } from '@/components';
import { ItemImage } from '@/components/pages/client/items';

const tempRestData = [
  {
    __typename: 'Restaurant',
    id: 1,
    name: 'BBQ House',
    coverImg:
      'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8wY2M1NDBiOS1lMjFiLTQ1YzAtOWQ2NS1mMzMzODNiYTE5MWIuanBlZw==',
    category: {
      __typename: 'Category',
      name: 'Fast Food',
    },
    address: '123 Altavista',
    isPromoted: false,
    ranking: '3.4',
  },
  {
    __typename: 'Restaurant',
    id: 1,
    name: 'BBQ House',
    coverImg:
      'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8wY2M1NDBiOS1lMjFiLTQ1YzAtOWQ2NS1mMzMzODNiYTE5MWIuanBlZw==',
    category: {
      __typename: 'Category',
      name: 'Fast Food',
    },
    address: '123 Altavista',
    isPromoted: false,
    ranking: '3.4',
  },
  {
    __typename: 'Restaurant',
    id: 1,
    name: 'BBQ House',
    coverImg:
      'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8wY2M1NDBiOS1lMjFiLTQ1YzAtOWQ2NS1mMzMzODNiYTE5MWIuanBlZw==',
    category: {
      __typename: 'Category',
      name: 'Fast Food',
    },
    address: '123 Altavista',
    isPromoted: false,
    ranking: '3.4',
  },
  {
    __typename: 'Restaurant',
    id: 1,
    name: 'BBQ House',
    coverImg:
      'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC8wY2M1NDBiOS1lMjFiLTQ1YzAtOWQ2NS1mMzMzODNiYTE5MWIuanBlZw==',
    category: {
      __typename: 'Category',
      name: 'Fast Food',
    },
    address: '123 Altavista',
    isPromoted: false,
    ranking: '3.4',
  },
];

type FoodItemProps = {
  id: string;
  name: string;
  category: any;
  coverImg: string;
  price: number;
  description: string;
  tags: any;
  address: string;
  ranking: string;
};

export const FoodList = () => (
  <div className='grid grid-cols-1 gap-[40px_24px] md:grid-cols-2'>
    {tempRestData.map((foodItem: any, index: number) => (
      <div className='min-w-0' key={index}>
        <div className='relative overflow-hidden'>
          <div className='pointer-events-none relative flex overflow-hidden'>
            <FoodItem {...foodItem} />
          </div>
        </div>
      </div>
    ))}
  </div>
);

const FoodItem = ({
  id,
  coverImg,
  name,
  category,
  address,
  ranking,
}: FoodItemProps) => (
  <Link href={`/restaurants/${id}`} className='w-full'>
    <div className='relative flex w-full sm:flex-col'>
      <div className='relative h-[128px] overflow-hidden bg-[#f6f6f6] sm:w-full md:w-[200px]'>
        <div className='h-full'>
          <ItemImage coverImg={coverImg} />
        </div>
        <Promote />
      </div>
      <div className='flex w-[calc(100%-216px)] flex-col items-start sm:pt-2 md:ml-4'>
        <ItemTitle name={name} ranking={ranking} />
        <ItemTags category={category} />
        <div className='h-2'></div>
        <span className='overflow-hidden text-ellipsis text-sm text-[#6b6b6b]'>
          {address}
        </span>
      </div>
    </div>
  </Link>
);

const ItemTitle = ({ name, ranking }: any) => (
  <div className='flex w-full items-center justify-between'>
    <Typography
      as='div'
      variant='large'
      className='w-full overflow-hidden text-ellipsis whitespace-nowrap'
    >
      {name}
    </Typography>
    <ItemRanking ranking={ranking} />
  </div>
);

export const ItemRanking = ({ ranking }: { ranking: string }) => (
  <div
    aria-hidden='true'
    className='hidden h-7 flex-[0_0_28px] items-center justify-center rounded-[50%] bg-[#eee] text-xs font-medium leading-4 md:flex'
  >
    {ranking}
  </div>
);

const Promote = () => (
  <div className='absolute top-0 box-border flex w-full justify-between py-3 '>
    <div className='inline-block overflow-hidden text-ellipsis whitespace-nowrap rounded-[0_24px_24px_0] bg-[rgb(5,163,87)] py-1 px-3 text-sm font-medium leading-4 text-[#fff] '>
      Spend $15, Save $3
    </div>
  </div>
);

// eslint-disable-next-line unused-imports/no-unused-vars
const ItemTags = ({ category }: any) => (
  <div className='flex w-full flex-nowrap items-center justify-start'>
    <ItemTagText>Burgers</ItemTagText>
    <ItemTagDot />
    <ItemTagText>Fast Food</ItemTagText>
    <ItemTagDot />
    <ItemTagText>American</ItemTagText>
  </div>
);

const ItemTagText = ({ children }: any) => (
  <div className='flex-shrink-0 overflow-hidden whitespace-nowrap'>
    <span className='overflow-hidden text-ellipsis whitespace-nowrap text-sm font-normal leading-5 text-[#545454]'>
      <div className='text-sm font-normal leading-5 text-[#6b6b6b]'>
        {children}
      </div>
    </span>
  </div>
);

const ItemTagDot = () => (
  <Typography as='span' variant='textDot'>
    &nbsp;•&nbsp;
  </Typography>
);
