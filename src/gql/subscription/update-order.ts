import { gql } from '@apollo/client';

import { FULL_ORDER_FRAGMENT } from '@/gql/fragments/order';

export const ORDER_SUBSCRIPTION = gql`
  subscription orderUpdates($input: OrderUpdatesInput!) {
    orderUpdates(input: $input) {
      ...FullOrderParts
    }
  }
  ${FULL_ORDER_FRAGMENT}
`;
