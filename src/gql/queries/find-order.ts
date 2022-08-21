import { gql } from '@apollo/client';

import { FULL_ORDER_FRAGMENT } from '@/gql/fragments/order';

export const GET_ORDER = gql`
  query findOrder($input: FindOrderInput!) {
    findOrder(input: $input) {
      ok
      error
      order {
        ...FullOrderParts
      }
    }
  }
  ${FULL_ORDER_FRAGMENT}
`;
