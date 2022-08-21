import { gql } from '@apollo/client';

export const EDIT_ORDER_MUTATION = gql`
  mutation updateOrder($input: UpdateOrderInput!) {
    updateOrder(input: $input) {
      ok
      error
    }
  }
`;
