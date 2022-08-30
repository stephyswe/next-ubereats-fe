import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { DeliveryProvider } from '@/contexts/delivery';
import DogPage, { GET_DOG_QUERY } from '@/pages/client/dog';

const Dog = () => (
  <DeliveryProvider>
    <DogPage name='Buck' />
  </DeliveryProvider>
);

it('should render dog', async () => {
  const dogMock = {
    request: {
      query: GET_DOG_QUERY,
      variables: { name: 'Buck' },
    },
    result: {
      data: { dog: { id: 1, name: 'Buck', breed: 'poodle' } },
    },
  };
  render(
    <MockedProvider mocks={[dogMock]} addTypename={false}>
      <Dog />
    </MockedProvider>
  );
  expect(await screen.findByText('Loading...')).toBeInTheDocument();
  expect(await screen.findByText('Buck is a poodle')).toBeInTheDocument();
});
