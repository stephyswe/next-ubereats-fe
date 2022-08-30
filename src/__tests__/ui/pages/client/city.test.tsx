import { ApolloProvider } from '@apollo/client';
import { render, screen } from '@testing-library/react';

import client from '@/lib/apollo';

import { props } from '@/__tests__/mocks/queries/mockData';
import { DeliveryProvider } from '@/contexts/delivery';
import CityPage from '@/pages/client/city/[label]';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

const router = { query: { label: 'göteborg-västra-götaland' } };
useRouter.mockReturnValue(router);

const City = () => (
  <ApolloProvider client={client}>
    <DeliveryProvider>
      <CityPage {...props} />
    </DeliveryProvider>
  </ApolloProvider>
);

/** Hero Test */
test('page has correct heading', async () => {
  render(<City />);
  expect(await screen.findByText('Loading...')).toBeInTheDocument();
  expect(
    await screen.findByRole('heading', {
      level: 1,
      name: 'Food Delivery in Göteborg',
    })
  ).toBeInTheDocument();
});

/** Breadcrumb Test */
test('page has correct title', async () => {
  render(<City />);
  expect(
    await screen.findByRole('heading', {
      level: 2,
      name: 'Food Delivery in Göteborg',
    })
  ).toBeInTheDocument();
});

test('page has correct breadcrumb', async () => {
  render(<City />);
  expect(
    await screen.findByRole('link', {
      name: 'Göteborg',
    })
  ).toBeInTheDocument();
});
