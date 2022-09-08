function createCategoryItem(title: string) {
  return {
    __typename: 'Restaurant',
    id: 1,
    name: 'BBQ House',
    coverImg:
      'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9iNzUwYTg3OC0wNzg2LTRhYWYtYmQ4NS0wMDM2NTRhNThjM2Y=',
    category: {
      __typename: 'Category',
      name: title ?? 'Fast Food',
    },
    address: '123 Altavista',
    isPromoted: false,
    ranking: '3.4',
  };
}

export const categoryData = [
  createCategoryItem('Fast Food'),
  createCategoryItem('Burgers'),
  createCategoryItem('Burgers'),
  createCategoryItem('Burgers'),
];

export const categoriesData = [
  {
    __typename: 'Category',
    id: 1,
    name: 'Fast Food',
    coverImg:
      'https://tb-static.uber.com/prod/web-eats-v2/categories/icons/FastFood_CuisineCarousel@2x.png',
    slug: 'fast-food',
    countRestaurants: 1,
  },
  {
    __typename: 'Category',
    id: 2,
    name: 'Breakfast And Brunch',
    coverImg:
      'https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Breakfast_CuisineCarousel@2x.png',
    slug: 'breakfast-and-brunch',
    countRestaurants: 0,
  },
  {
    __typename: 'Category',
    id: 3,
    name: 'American Food',
    coverImg:
      'https://tb-static.uber.com/prod/web-eats-v2/categories/icons/American_CuisineCarousel@2x.png',
    slug: 'american',
    countRestaurants: 0,
  },
  {
    __typename: 'Category',
    id: 4,
    name: 'Mexican Food',
    coverImg:
      'https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Mexican_CuisineCarousel@2x.png',
    slug: 'mexican',
    countRestaurants: 0,
  },
  {
    __typename: 'Category',
    id: 5,
    name: 'Chinese Food',
    coverImg:
      'https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Chinese_CuisineCarousel@2x.png',
    slug: 'chinese',
    countRestaurants: 0,
  },
  {
    __typename: 'Category',
    id: 6,
    name: 'Japanese Food',
    coverImg:
      'https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Japanese_CuisineCarousel@2x.png',
    slug: 'japanese',
    countRestaurants: 0,
  },
  {
    __typename: 'Category',
    id: 7,
    name: 'Italian Food',
    coverImg:
      'https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Italian_CuisineCarousel@2x.png',
    slug: 'italian',
    countRestaurants: 0,
  },
  {
    __typename: 'Category',
    id: 8,
    name: 'Healthy Food',
    coverImg:
      'https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Healthy_CuisineCarousel@2x.png',
    slug: 'healthy',
    countRestaurants: 0,
  },
  {
    __typename: 'Category',
    id: 9,
    name: 'Asian Food',
    coverImg:
      'https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Asian_CuisineCarousel@2x.png',
    slug: 'asian',
    countRestaurants: 0,
  },
  {
    __typename: 'Category',
    id: 10,
    name: 'Indian Food',
    coverImg:
      'https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Indian_CuisineCarousel@2x.png',
    slug: 'indian',
    countRestaurants: 0,
  },
  {
    __typename: 'Category',
    id: 11,
    name: 'Thai Food',
    coverImg:
      'https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Thai_CuisineCarousel@2x.png',
    slug: 'thai',
    countRestaurants: 0,
  },
  {
    __typename: 'Category',
    id: 12,
    name: 'Taiwanese Food',
    coverImg:
      'https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Taiwanese_CuisineCarousel@2x.png',
    slug: 'taiwanese',
    countRestaurants: 0,
  },
];

export const tempCatDataForCatPage = [
  ...categoriesData,
  ...[
    {
      name: 'Taiwanese Food',
      coverImg:
        'https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Taiwanese_CuisineCarousel@2x.png',
    },
    {
      name: 'Taiwanese Food',
      coverImg:
        'https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Taiwanese_CuisineCarousel@2x.png',
    },
    {
      name: 'Taiwanese Food',
      coverImg:
        'https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Taiwanese_CuisineCarousel@2x.png',
    },
    {
      name: 'Taiwanese Food',
      coverImg:
        'https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Taiwanese_CuisineCarousel@2x.png',
    },
    {
      name: 'Taiwanese Food',
      coverImg:
        'https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Taiwanese_CuisineCarousel@2x.png',
    },
    {
      name: 'Taiwanese Food',
      coverImg:
        'https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Taiwanese_CuisineCarousel@2x.png',
    },
    {
      name: 'Taiwanese Food',
      coverImg:
        'https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Taiwanese_CuisineCarousel@2x.png',
    },
    {
      name: 'Taiwanese Food',
      coverImg:
        'https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Taiwanese_CuisineCarousel@2x.png',
    },
    {
      name: 'Taiwanese Food',
      coverImg:
        'https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Taiwanese_CuisineCarousel@2x.png',
    },
    {
      name: 'Taiwanese Food',
      coverImg:
        'https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Taiwanese_CuisineCarousel@2x.png',
    },
    {
      name: 'Taiwanese Food',
      coverImg:
        'https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Taiwanese_CuisineCarousel@2x.png',
    },
    {
      name: 'Taiwanese Food',
      coverImg:
        'https://tb-static.uber.com/prod/web-eats-v2/categories/icons/Taiwanese_CuisineCarousel@2x.png',
    },
  ],
];
