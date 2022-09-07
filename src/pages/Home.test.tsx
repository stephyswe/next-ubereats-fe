import { render, screen, takeSnapshot } from 'test-utils';

import Home from '@/pages/index.page';

// ** Snapshot ** //

takeSnapshot(<Home />);

// ** Available elements ** //

describe('has elements', () => {
  test('hero', async () => {
    render(<Home />);
    expect(screen.getByTestId('ui-hero')).toBeInTheDocument();
  });
  test('spacer', async () => {
    render(<Home />);
    expect(screen.getAllByTestId('ui-spacer')).toHaveLength(7);
  });
  test('employment-list', async () => {
    render(<Home />);
    expect(screen.getByTestId('ui-employment-list')).toBeInTheDocument();
  });
  test('country-with-map', async () => {
    render(<Home />);
    expect(
      await screen.findByTestId('ui-country-with-map')
    ).toBeInTheDocument();
  });
  test('country-list', async () => {
    render(<Home />);
    expect(await screen.findByTestId('ui-country-list')).toBeInTheDocument();
  });
  test('ui-container', async () => {
    render(<Home />);
    expect(await screen.findByTestId('ui-container')).toBeInTheDocument();
  });
});

test('page has correct heading', () => {
  render(<Home />);
  const heading = screen.getByRole('heading', {
    name: 'Order food to your door',
  });
  expect(heading).toBeInTheDocument();
});

// ** Image ** //

test('page has correct image', () => {
  render(<Home />);
  const image = screen.getByTestId('hero-background');
  expect(image).toBeInTheDocument();
});
