const storeItemData = {
  slug: 'burger-king-jarntorget',
  title: 'Burger King Järntorget',
  src: 'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9lMTIxZDlhMS01YzRiLTQ5OGEtYWM0MC1lMjZhMTlhZThhYjUuanBlZw==',
  category: ['Burgers', 'Fast Food'],
  address: 'Järntorget 6, Västra Götalands län 413 04',
  ranking: null,
  banner: 'SEK 0 Delivery Fee (Spend SEK 250)',
  time: '5-15 min',
  distance: '0.5 km',
};

export const pickupItemData = {
  srcSet:
    'https://d1ralsognjng37.cloudfront.net/a8cb2dd9-7e77-4f75-9129-8be23b568051.jpeg 240w,https://d1ralsognjng37.cloudfront.net/829c7bba-e610-4576-ae4e-de0d22352a12.jpeg 550w,https://d1ralsognjng37.cloudfront.net/e1e32bdd-6d97-4a4b-81e4-a4b8437e2db4.jpeg 640w,https://d1ralsognjng37.cloudfront.net/dba7135f-2fad-4223-85e2-cc20edc81a13.jpeg 750w,https://d1ralsognjng37.cloudfront.net/87e609d6-37c7-4f65-9b75-1e76e9ca2518.jpeg 1080w,https://d1ralsognjng37.cloudfront.net/3fb076b0-f5d9-4063-8795-c66a0e53214d.jpeg 2880w',
  src: 'https://d1ralsognjng37.cloudfront.net/a8cb2dd9-7e77-4f75-9129-8be23b568051.jpeg',
  time: '5-15 min',
  distance: '0.5 km',
};

export const storeData = [storeItemData];
export const deliveryData = [
  storeItemData,
  storeItemData,
  storeItemData,
  storeItemData,
];
export const storeCategoryPageData = [
  storeItemData,
  storeItemData,
  storeItemData,
];

export const storeTitleData = [
  {
    title: 'Today’s offers',
    items: [storeItemData, storeItemData],
  },
  {
    title: 'Popular near you',
    items: [storeItemData, storeItemData, storeItemData],
  },
  {
    title: 'Healthy eating',
    items: [storeItemData, storeItemData],
  },
];
