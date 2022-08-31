import { ApolloProvider } from '@apollo/client';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import client from '@/lib/apollo';

import { DeliveryProvider } from '@/contexts/delivery';
import DogPage from '@/pages/client/dog';

const Dog = () => (
  <DeliveryProvider>
    <DogPage name='Buck' />
  </DeliveryProvider>
);

it('should render dog', async () => {
  render(
    <ApolloProvider client={client}>
      <Dog />
    </ApolloProvider>
  );
  expect(await screen.findByText('Loading...')).toBeInTheDocument();
  expect(await screen.findByText('Buck is a poodle')).toBeInTheDocument();
});
