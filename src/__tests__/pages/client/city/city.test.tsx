import { render, screen } from 'test-utils';

import CityPage from '@/pages/client/city/[label]/index.page';

import { mockDataCity } from './data';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

const router = { query: { label: 'göteborg-västra-götaland' } };
useRouter.mockReturnValue(router);

const City = () => <CityPage {...mockDataCity} />;

// ** Snapshot ** //

/* takeSnapshot(<City />); */

// ** Available elements ** //

test('loading initial', async () => {
  render(<City />);
  expect(screen.getByText('Loading...')).toBeInTheDocument();
});

describe('has elements', () => {
  test('dynamic hero', async () => {
    render(<City />);
    expect(await screen.findByTestId('ui-hero-dynamic')).toBeInTheDocument();
  });
  test('breadcrumb', async () => {
    render(<City />);
    expect(await screen.findByTestId('ui-breadcrumb')).toBeInTheDocument();
  });
  test('headline - 5 items', async () => {
    render(<City />);
    expect(await screen.findAllByTestId('ui-headline')).toHaveLength(5);
  });
  test('ui-category-list - 2 items', async () => {
    render(<City />);
    expect(await screen.findAllByTestId('ui-category-list')).toHaveLength(2);
  });
  test('separator - 6 items', async () => {
    render(<City />);
    expect(await screen.findAllByTestId('ui-separator')).toHaveLength(6);
  });
  test('headline-list', async () => {
    render(<City />);
    expect(await screen.findByTestId('ui-headline-list')).toBeInTheDocument();
  });
});
/* 
// ** Hero component ** //

test('hero title - h2', async () => {
  render(<City />);
  expect(await screen.findByTestId('hero-dynamic-title')).toBeInTheDocument();
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
}); */

// ** Headline component ** //

/* test('page has correct title', async () => {
  render(<City />);
  expect(
    await screen.findByRole('heading', {
      level: 2,
      name: 'Food Delivery in Göteborg',
    })
  ).toBeInTheDocument();
}); */
