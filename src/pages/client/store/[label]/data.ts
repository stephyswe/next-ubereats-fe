export const dishNewData = [
  {
    __typename: 'Dish',
    id: 1,
    name: 'Pizza Speciale',
    price: 115,
    photo: '',
    description: 'Juicy!',
    type: 'Pizza',
    options: [],
  },
  {
    __typename: 'Dish',
    id: 2,
    name: 'Räksallad',
    price: 115,
    photo: '',
    description:
      'Räkor, vitost, ägg, citron, grekiska kalamataoliver. Isbergssallad, färska tomater, gurka, lök, vitost och bröd ingår.',
    type: 'Sallader',
    options: [],
  },
  {
    __typename: 'Dish',
    id: 3,
    name: 'KycklingSallad',
    price: 115,
    photo:
      'https://tb-static.uber.com/prod/image-proc/processed_images/fbf500543dbcc1a91bcb8de08a66396f/ffd640b0f9bc72838f2ebbee501a5d4b.jpeg',
    description:
      'Kyckling, vitost, färsk paprika, ananas. Isbergssallad, färska tomater, gurka, lök, vitost och bröd ingår.',
    type: 'Sallader',
    options: [
      {
        __typename: 'DishOption',
        name: 'Spice Level',
        extra: null,
        choices: [
          {
            __typename: 'DishChoice',
            name: 'Little Bit',
            extra: null,
          },
          {
            __typename: 'DishChoice',
            name: 'Strong',
            extra: null,
          },
        ],
      },
      {
        __typename: 'DishOption',
        name: 'Pickle',
        extra: 1,
        choices: null,
      },
      {
        __typename: 'DishOption',
        name: 'Size',
        extra: null,
        choices: [
          {
            __typename: 'DishChoice',
            name: 'L',
            extra: 2,
          },
          {
            __typename: 'DishChoice',
            name: 'XL',
            extra: 5,
          },
        ],
      },
    ],
  },
];

export const dishData = {
  Pizza: [
    {
      __typename: 'Dish',
      id: 1,
      name: 'Pizza Speciale',
      price: 115,
      photo: '',
      description: 'Juicy!',
      type: 'Pizza',
      options: [],
    },
  ],
  Sallader: [
    {
      __typename: 'Dish',
      id: 2,
      name: 'Räksallad',
      price: 115,
      photo: '',
      description:
        'Räkor, vitost, ägg, citron, grekiska kalamataoliver. Isbergssallad, färska tomater, gurka, lök, vitost och bröd ingår.',
      type: 'Sallader',
      options: [],
    },
    {
      __typename: 'Dish',
      id: 3,
      name: 'KycklingSallad',
      price: 115,
      photo:
        'https://tb-static.uber.com/prod/image-proc/processed_images/fbf500543dbcc1a91bcb8de08a66396f/ffd640b0f9bc72838f2ebbee501a5d4b.jpeg',
      description:
        'Kyckling, vitost, färsk paprika, ananas. Isbergssallad, färska tomater, gurka, lök, vitost och bröd ingår.',
      type: 'Sallader',
      options: [
        {
          __typename: 'DishOption',
          name: 'Spice Level',
          extra: null,
          choices: [
            {
              __typename: 'DishChoice',
              name: 'Little Bit',
              extra: null,
            },
            {
              __typename: 'DishChoice',
              name: 'Strong',
              extra: null,
            },
          ],
        },
        {
          __typename: 'DishOption',
          name: 'Pickle',
          extra: 1,
          choices: null,
        },
        {
          __typename: 'DishOption',
          name: 'Size',
          extra: null,
          choices: [
            {
              __typename: 'DishChoice',
              name: 'L',
              extra: 2,
            },
            {
              __typename: 'DishChoice',
              name: 'XL',
              extra: 5,
            },
          ],
        },
      ],
    },
  ],
};
