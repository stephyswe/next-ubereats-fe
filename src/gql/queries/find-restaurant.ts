import { gql } from '@apollo/client';

import { DISH_FRAGMENT } from '@/gql/fragments/dish';
import { RESTAURANT_FRAGMENT } from '@/gql/fragments/restaurant';

export const CLIENT_RESTAURANT_QUERY = gql`
  query findRestaurant($input: RestaurantInput!) {
    findRestaurant(input: $input) {
      ok
      error
      results {
        ...RestaurantParts
        menu {
        ...DishParts
        }
      }
    }
  }
  ${RESTAURANT_FRAGMENT},
  ${DISH_FRAGMENT}
`;
