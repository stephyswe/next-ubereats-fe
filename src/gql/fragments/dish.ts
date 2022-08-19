import { gql } from '@apollo/client';

export const DISH_FRAGMENT = gql`
  fragment DishParts on Dish {
    id
    name
    price
    photo
    description
    type
    options {
      name
      extra
      choices {
        name
        extra
      }
    }
  }
`;
