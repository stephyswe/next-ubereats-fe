import { gql } from '@apollo/client';

export const UPDATE_DRIVER_ORDER_MUTATION = gql`
  mutation UpdateOrderDriver($input: TakeOrderInput!) {
    updateOrderDriver(input: $input) {
      ok
      error
    }
  }
`;
