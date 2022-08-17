import { gql } from '@apollo/client';

import { CATEGORY_FRAGMENT } from '@/gql/fragments/category';
import { RESTAURANT_FRAGMENT } from '@/gql/fragments/restaurant';

export const CLIENT_RESTAURANTS_QUERY = gql`
  query FindManyRestaurants($input: RestaurantsInput!) {
    findManyCategories {
      ok
      error
      categories {
        ...CategoryParts
      }
    }
    findManyRestaurants(input: $input) {
      ok
      error
      totalPages
      totalResults
      results {
        ...RestaurantParts
      }
    }
  }
  ${RESTAURANT_FRAGMENT},
  ${CATEGORY_FRAGMENT}
`;
