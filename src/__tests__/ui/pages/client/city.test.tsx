import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';

import {
  findManyCategoriesMockData,
  props,
} from '@/__tests__/mocks/queries/mockData';
import { DeliveryProvider } from '@/contexts/delivery';
import { CLIENT_RESTAURANTS_QUERY } from '@/gql/queries/findmany-restaurants';
import CityPage from '@/pages/client/city/[label]';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

const router = { query: { label: 'göteborg-västra-götaland' } };
useRouter.mockReturnValue(router);

const City = () => (
  <MockedProvider mocks={mocks} addTypename={false}>
    <DeliveryProvider>
      <CityPage {...props} />
    </DeliveryProvider>
  </MockedProvider>
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

const mocks = [
  {
    request: {
      query: CLIENT_RESTAURANTS_QUERY,
      variables: { input: { page: 1 } },
    },
    result: {
      data: findManyCategoriesMockData,
    },
  },
];
