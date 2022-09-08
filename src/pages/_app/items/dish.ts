import { groupBy } from '@/lib/helper';

export const dishItemOptionsData = [
  {
    name: 'Spice Level',
    extra: null,
    choices: [
      {
        name: 'Little Bit',
        extra: null,
      },
      {
        name: 'Strong',
        extra: null,
      },
    ],
  },
  {
    name: 'Pickle',
    extra: 1,
    choices: null,
  },
  {
    name: 'Size',
    extra: null,
    choices: [
      {
        name: 'L',
        extra: 2,
      },
      {
        name: 'XL',
        extra: 5,
      },
    ],
  },
];

const dishItemDataCreate = (type?: string, addPhoto?: boolean) => {
  const photoUrl =
    'https://tb-static.uber.com/prod/image-proc/processed_images/fbf500543dbcc1a91bcb8de08a66396f/ffd640b0f9bc72838f2ebbee501a5d4b.jpeg';

  return {
    id: 1,
    name: 'Pizza Speciale',
    price: 115,
    photo: addPhoto ? photoUrl : null,
    description: 'Juicy!',
    type: type ?? 'Pizza',
    options: [],
  };
};

export const dishItemData = {
  id: 1,
  name: 'Pizza Speciale',
  price: 115,
  photo: '',
  description: 'Juicy!',
  type: 'Pizza',
  options: [],
};

export const dishNewData = [
  dishItemDataCreate('Pizza', true),
  dishItemDataCreate('Sallad', true),
  dishItemData,
  {
    ...dishItemDataCreate(),
    options: dishItemOptionsData,
  },
];

export const dishGroupData = groupBy(dishNewData, 'type');
