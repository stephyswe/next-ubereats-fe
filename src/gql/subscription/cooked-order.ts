import { gql } from '@apollo/client';

import { FULL_ORDER_FRAGMENT } from '@/gql/fragments/order';

export const COOKED_ORDERS_SUBSCRIPTION = gql`
  subscription cookedOrders {
    cookedOrders {
      ...FullOrderParts
    }
  }
  ${FULL_ORDER_FRAGMENT}
`;
