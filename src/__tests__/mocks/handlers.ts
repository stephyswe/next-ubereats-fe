// src/mocks/handlers.js
import { graphql } from 'msw';

import { findManyCategoriesMockData } from '@/__tests__/mocks/queries/mockData';

const dogData = { dog: { id: 1, name: 'Buck', breed: 'poodle' } };

export const handlers = [
  // Handles a "Login" mutation
  //graphql.mutation('find', null),
  // Handles a "GetUserInfo" query
  graphql.query('GetDog', (req, res, ctx) => {
    return res(ctx.data(dogData));
  }),

  graphql.query('FindManyRestaurants', (req, res, ctx) => {
    return res(ctx.data(findManyCategoriesMockData));
  }),
];
