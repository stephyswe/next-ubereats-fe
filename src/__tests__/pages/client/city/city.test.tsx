import { render, screen, takeSnapshot } from 'test-utils';

import CityPage from '@/pages/client/city/[label]';

import { mockDataCity } from './data';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

const router = { query: { label: 'göteborg-västra-götaland' } };
useRouter.mockReturnValue(router);

const City = () => <CityPage {...mockDataCity} />;

// ** Snapshot ** //

takeSnapshot(<City />);

// ** Available elements ** //

describe('has elements', () => {
  test('dynamic hero', async () => {
    render(<City />);
    expect(await screen.findByTestId('ui-hero-dynamic')).toBeInTheDocument();
  });
  test('breadcrumb', async () => {
    render(<City />);
    expect(await screen.findByTestId('ui-breadcrumb')).toBeInTheDocument();
  });
  test('headline-food', async () => {
    render(<City />);
    expect(await screen.findByTestId('ui-headline-food')).toBeInTheDocument();
  });
  test('ui-category-list - length 2', async () => {
    render(<City />);
    const catList = await screen.findAllByTestId('ui-category-list');
    expect(catList).toHaveLength(2);
  });
  test('separator', async () => {
    render(<City />);
    const separatorList = await screen.findAllByTestId('ui-separator');
    expect(separatorList).toHaveLength(6);
  });
});

// ** Hero component ** //

test('page has correct heading', async () => {
  render(<City />);
  expect(
    await screen.findByRole('heading', {
      level: 1,
      name: 'Food Delivery in Göteborg',
    })
  ).toBeInTheDocument();
});

// ** Hero component ** //

test('page has correct title', async () => {
  render(<City />);
  expect(
    await screen.findByRole('heading', {
      level: 2,
      name: 'Food Delivery in Göteborg',
    })
  ).toBeInTheDocument();
});

// ** Breadcrumb component ** //

test('page has correct breadcrumb title', async () => {
  render(<City />);

  const bcEle = screen.getAllByRole('link', { name: 'ui-bc-link' });

  // length of link should be three
  expect(bcEle.length).toBe(3);
  expect(bcEle[0].textContent).toBe('Sweden');
  expect(bcEle[1].textContent).toBe('Västra Götaland');
  expect(bcEle[2].textContent).toBe('Göteborg');
});

test('page has correct breadcrumb link', async () => {
  render(<City />);

  const bcEle = screen.getAllByRole('link', { name: 'ui-bc-link' });

  // length of link should be three
  expect(bcEle.length).toBe(3);
  expect(bcEle[0].getAttribute('href')).toBe('/');
  expect(bcEle[1].getAttribute('href')).toBe(
    '/client/region/v%C3%A4stra-g%C3%B6taland'
  );
  expect(bcEle[2].getAttribute('href')).toBe(
    '/client/city/g%C3%B6teborg-v%C3%A4stra-g%C3%B6taland'
  );
});
