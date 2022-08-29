const cityInfo = [
  {
    title: 'Göteborg food delivery and takeout',
    subtitle:
      'With 80 restaurants in Göteborg on Uber Eats, including 12Till12Gott, Stigbergs Pizzeria, and DINÉ Burgers - Femman , you’ll have your pick of places from which to order food online. Get food, from Fast Food to Breakfast And Brunch, from some of the best restaurants in Göteborg delivered to your door. If you’d prefer to get your takeout yourself, simply browse Göteborg restaurants offering pickup.',
  },
  {
    title: 'Göteborg restaurants that deliver',
    subtitle:
      'Uber Eats helps you find food delivery and pickup options from a wide selection of places to eat in Göteborg. Enter an address to browse Göteborg restaurants and cafes offering food delivery. See Göteborg restaurants on Uber Eats that you’ve never tried? View their menus and star ratings to help decide if you’d like to try their food.',
  },
  {
    title: 'Best food in Göteborg',
    subtitle:
      'On a quest to taste the best food in Göteborg? Search for famous restaurants in Göteborg or for your personal favorite places to eat in Göteborg to see if they offer food delivery with Uber Eats. Sometimes the best food is just what you’re craving so if you know what you’d like to eat, browse Göteborg restaurants that deliver by cuisine or dish.',
  },
];

const breadcrumb = [
  {
    title: 'Sweden',
    link: '/',
  },
  {
    title: 'Västra-götaland',
    link: '/client/region/västra-götaland',
  },
  {
    title: 'Göteborg',
    link: '/client/city/göteborg-västra-götaland',
  },
];

export const props = {
  title: 'Food Delivery in Göteborg',
  breadcrumb,
  cityInfo,
};

export const findManyCategoriesMockData = {
  findManyCategories: {
    __typename: 'FindManyCategoriesOutput',
    ok: true,
    error: null,
    categories: [
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
    ],
  },
  findManyRestaurants: {
    __typename: 'RestaurantsOutput',
    ok: true,
    error: null,
    totalPages: 1,
    totalResults: 1,
    results: [
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
      },
    ],
  },
};
